import { AuthAPIConfigurations } from './configurations';

export const signupPost = async (requestData: SignUpRequest, apiRequestHandler) => {
  const returnValue = await apiRequestHandler(requestData, AuthAPIConfigurations['SIGNUP']);
  return returnValue;
};

export const signinOTPPost = async (requestData: SignInOTPRequest, apiRequestHandler) => {
  const returnValue = await apiRequestHandler(requestData, AuthAPIConfigurations['SIGNIN_OTP']);
  return returnValue;
};

export const signinPost = (requestData: SignInRequest, apiRequestHandler) => {
  return apiRequestHandler(requestData, AuthAPIConfigurations['SIGNIN']);
};

export const verifyEmailPost = (requestData: VerifyEmailRequest, apiRequestHandler) => {
  return apiRequestHandler(requestData, AuthAPIConfigurations['EMAIL_VERIFICATION']);
};

export const twoFactorAuthenticationVefificationPost = (
  requestData: TwoFactorAuthenticationRequest,
  apiRequestHandler
) => {
  return apiRequestHandler(requestData, AuthAPIConfigurations['2FA_VERIFICATION']);
};

export const resendOTPEmailGet = (requestData: ResendEmailOTPRequest, apiRequestHandler) => {
  return apiRequestHandler(requestData, AuthAPIConfigurations['RESEND_EMAIL_OTP']);
};
