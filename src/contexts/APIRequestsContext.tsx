import React, { useContext } from 'react';
import Axios from 'axios';
import { cloneDeep } from 'lodash';

import Logger from '../services/logger';
import { AuthContext } from '../modules/auth/AuthProvider';
import { AuthAPIConfigurations } from '../api/auth/configurations';
import { authToken } from '../services/auth';

export const APIRequestsContext = React.createContext<{
  apiRequestHandler: (requestData: any, requestConfig: any) => any;
}>({
  apiRequestHandler: (requestData: any, requestConfig: any) => {},
});

export const APIRequestsProvider: React.FC = ({ children }) => {
  const { logout, refreshAuthToken } = useContext(AuthContext);

  const http = Axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  http.interceptors.request.use(
    async (config) => {
      const newConfig = cloneDeep(config);

      const user = await authToken();

      if (user.token) {
        newConfig.headers['Authorization'] = `Bearer ${user.token}`;
      }

      Logger.debug('HTTP_REQUEST_INTERCEPTOR--CONFIGS', newConfig);
      return newConfig;
    },
    (error) => {
      // TODO structure the error
      return Promise.reject(error);
    }
  );

  /**
   * Response Interceptor - applicable on all responses via this service
   * Processes response just after its received.
   */
  http.interceptors.response.use(
    (response) => {
      Logger.debug('HTTP_RESPONSE_INTERCEPTOR--TRY', '');
      return response;
    },
    async (error) => {
      Logger.debug('HTTP_RESPONSE_INTERCEPTOR--CATCH', '');
      // TODO: call central error display service here
      if (error.response.status === 401) {
        // refresh id_token, else logout.
        try {
          const user = await authToken();
          // if there was a token before, fetch refresh token
          if (user && user.token) {
            const refreshTokenData = await refreshTokenPost({
              refreshToken: user.refreshToken,
              token: user.token,
            });

            if (refreshTokenData.data?.id_token) {
              await refreshAuthToken(refreshTokenData.data);
            } else {
              await logout();
            }
          }
        } catch (e) {
          await logout();
        }
      } else {
        throw error;
      }
    }
  );

  async function postRequestHandler(requestData: any, requestConfigurations: any, headerData = {}) {
    const { apiCallId, url, errorHandlers } = requestConfigurations;
    const headers = { ...headerData };

    try {
      const res = await http.post(url(), requestData, { headers });
      // TODO can pass in adapters as well if needed.
      return structureAPIResponse(res, apiCallId);
    } catch (err) {
      errorResponseAsPerStatusCode(err, errorHandlers);
      const structuredError = structureAPIError({ err, requestData, requestConfigurations });
      throw structuredError;
    }
  }

  async function getRequestHandler(requestData: any, requestConfigurations: any) {
    const { apiCallId, url, errorHandlers } = requestConfigurations;
    const requestURL = url(requestData);
    console.log(requestURL);
    try {
      const res = await http.get(requestURL);
      // TODO can pass in adapters as well if needed.
      return structureAPIResponse(res, apiCallId);
    } catch (err) {
      errorResponseAsPerStatusCode(err, errorHandlers);
      const structuredError = structureAPIError({ err, requestData, requestConfigurations });
      throw structuredError;
    }
  }

  return (
    <APIRequestsContext.Provider
      value={{
        apiRequestHandler: (requestData: any, requestConfig: any) => {
          if (requestConfig.method === 'GET') {
            return getRequestHandler(requestData, requestConfig);
          } else if (requestConfig.method === 'POST') {
            return postRequestHandler(requestData, requestConfig);
          }
        },
      }}
    >
      {children}
    </APIRequestsContext.Provider>
  );
};

function structureAPIResponse(res: any, apiCallId = ''): RequestResponse {
  let returnData: RequestResponse;
  if (res.status === 200) {
    Logger.debug(`SUCCESS_API_REQUEST: ${apiCallId}`, res.data);
    returnData = {
      status: 'SUCCESS',
      data: res.data,
      error: {
        message: '',
      },
    };
    return returnData;
  }

  returnData = {
    status: 'FAILED',
    data: res.data,
    error: {
      message: 'Request Failed',
    },
  };
  Logger.error(`FAILED_API_REQUEST: ${apiCallId}_THEN`, returnData);
  // Silent failure. #TODO can throw error.
  return returnData;
}

function structureAPIError({
  err,
  requestConfigurations,
  requestData,
}: {
  err: any;
  requestData: any;
  requestConfigurations: any;
}) {
  const error = err.response?.data
    ? {
        ...err.response?.data,
        requestData,
        requestConfigurations,
      }
    : {
        details: 'API Error',
        status: 500,
        message: 'error.http.500',
        title: 'Internal Server Error',
        requestData,
        requestConfigurations,
      };

  Logger.error(`${error.message}`, error);
  return error;
}

function errorResponseAsPerStatusCode(err: any, errorHandlers: any): void {
  if (err.response?.status) {
    if (errorHandlers[err.response.status]) errorHandlers[err.response.status](err.response);
    else errorHandlers['default'](err.response);
  }
}

/**
 * Get new token from refresh token and id token, if fails, logout user
 * @param requestData refreshToken, idToken
 * @returns refreshToken
 */
const refreshTokenPost = async (requestData: RefreshTokenRequest) => {
  const { url } = AuthAPIConfigurations['REFRESH_TOKEN'];
  try {
    const data = await Axios.post(url(), AuthAPIConfigurations['REFRESH_TOKEN'], {
      headers: {
        'Refresh-Token': requestData.refreshToken,
        'Id-Token': requestData.token,
      },
    });
    return data;
  } catch (e) {
    Logger.error('AUTH__REFRESH_TOKEN', e);
    throw e;
  }
};
