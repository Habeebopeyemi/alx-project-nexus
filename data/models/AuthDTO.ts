/**
 * Data Transfer Object for Authentication
 * This interface defines the structure of data being received from the athentication API.
 * It ensures that the application can correctly interpret and utilize the data.
 */

export type SignupResponseDTO = {
  user_id: string;
  last_login: string | null;
  is_superuser: boolean;
  username: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  groups: string[];
  user_permissions: string[];
};

export type LoginResponseDTO = {
  refresh: string;
  access: string;
};

export type TokenRefreshResponseDTO = {
  access: string;
  refresh: string;
};

export type LogoutResponseDTO = {
  detail: string;
};
