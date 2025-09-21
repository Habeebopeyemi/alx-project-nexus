export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignupCredentials = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  phone_number: string;
};

export type TokenRefreshRequest = {
  refresh: string;
};

