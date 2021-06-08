type User =
  | null
  | { onboarded: boolean }
  | { email: string; token: string; passcode: string; userAuthenticated: boolean; refreshToken: string };

type RequestResponse = {
  status: 'SUCCESS' | 'FAILED';
  data: any;
  request?: any;
  error: any;
};

type SignUpRequest = {
  email: string;
  password: string;
  referralCode: string;
};

type SignInOTPRequest = {
  login: string;
  password: string;
};

type SignInRequest = {
  login: string;
  password: string;
  verificationCode: string;
};

type VerifyEmailRequest = {
  otp: string;
  email: string;
};

type TwoFactorAuthenticationRequest = {
  verificationCode: string;
  email: string;
};

type ResendEmailOTPRequest = {
  email: string;
  type: 'login';
};

type RefreshTokenRequest = {
  refreshToken: string;
  token: string;
};

type ErrorBoundaryErrorScope = 'COMPONENT' | 'ROOT' | 'SCREEN';

type GlobalAlertsPromptCTA = {
  logId: string;
  type?: 'PROMPT';
  title: string;
  ctaType: 'CONFIRM_REJECT';
  body?: string;
  ctas: {
    confirm: {
      label: string;
      action: () => void;
    };
    reject: {
      label: string;
      action: () => void;
    };
  };
};

type GlobalAlertsAlertCTA = {
  logId: string;
  type?: 'ALERT';
  title: string;
  body?: string;
  ctas: {
    acknowledge: {
      label: string;
      action: () => void;
    };
  };
};

type GlobalAlertsToast = {
  logId: string;
  type?: 'TOAST';
  title: string;
};

type AuthState =
  | 'LOGGED_IN'
  | 'LOGGED_OUT'
  | 'ONBOARDED_NEW_USER'
  | 'NEW_USER';
