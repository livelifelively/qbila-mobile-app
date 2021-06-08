import React, { useState } from 'react';
import Alert from '../components/design/Alert';
import Prompt from '../components/design/Prompt';
import Toast from '../components/design/Toast';

import Logger from '../services/logger';

export const GlobalAlertsContext = React.createContext<{
  alert: ({ title, body, ctas }: GlobalAlertsAlertCTA) => void;
  prompt: ({ title, ctaType, ctas }: GlobalAlertsPromptCTA) => void;
  toast: ({ title, logId }: GlobalAlertsToast) => void;
}>({
  alert: () => {},
  prompt: () => {},
  toast: () => {},
});

export const GlobalAlertsProvider: React.FC = ({ children }) => {
  const initialState = {};
  const [alertState, setAlertState] = useState(() => initialState);
  const [type, setType] = useState(() => 'ALERT');
  const [visibility, setVisibility] = useState(() => false);

  const onRejectPress = () => {
    setVisibility(false);
    alertState?.ctas?.reject.action();
  };

  const onConfirmPress = () => {
    setVisibility(false);
    if (type === 'PROMPT') alertState?.ctas?.confirm.action();
    else if (type === 'ALERT') alertState?.ctas?.acknowledge.action();

    Logger.debug(alertState.logId, `${type} interaction`);
  };

  return (
    <GlobalAlertsContext.Provider
      value={{
        alert: ({ title, body, ctas, logId }) => {
          setType('ALERT');
          setVisibility(true);
          setAlertState({
            title,
            ctas,
            body,
            logId,
          });
        },
        prompt: ({ title, ctaType, ctas, body, logId }) => {
          setType('PROMPT');
          setVisibility(true);
          setAlertState({
            title,
            ctaType,
            ctas,
            body,
            logId,
          });
        },
        toast: ({ title, logId }) => {
          setType('TOAST');
          setVisibility(true);
          setAlertState({
            title,
            logId,
          });
          setTimeout(() => {
            setVisibility(false);
          }, 1000);
        },
      }}
    >
      {children}
      {visibility && type === 'PROMPT' && (
        <Prompt alertState={alertState} onRejectPress={onRejectPress} onConfirmPress={onConfirmPress} />
      )}
      {visibility && type === 'ALERT' && <Alert alertState={alertState} onAcknowledgePress={onConfirmPress} />}
      {visibility && type === 'TOAST' && <Toast alertState={alertState} />}
    </GlobalAlertsContext.Provider>
  );
};
