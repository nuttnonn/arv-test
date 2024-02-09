export interface UserDataAddress {
  city: string;
  country: string;
  state: string;
  street_address: string;
  street_name: string;
  zip_code: string;
}

export interface UserData {
  username: string;
  first_name: string;
  last_name: string;
  id: number;
  address: UserDataAddress;
  email: string;
  date_of_birth: string;
}