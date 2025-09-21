export type CreateUserRequest = {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  phone_number: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
};
export type AuthenticatedUser = { //keep it to what the UI needs to prevent over posting and improve performance
  user_id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  orders: any[];
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export interface GetUsers {
  count: number;
  next: string | null;
  previous: string | null;
  results: AuthenticatedUser[];
}
