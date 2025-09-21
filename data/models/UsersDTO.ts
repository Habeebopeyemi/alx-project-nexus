export type AuthenticatedUserResponseDTO = {
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

export interface GetUsersResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: AuthenticatedUserResponseDTO[];
}
