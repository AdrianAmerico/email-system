export type user = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  address: string;
};

export type addressInfo = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export type authenticationData = {
  id: string;
};

export type payload = {
  id: { id: string };
  iat: number;
  exp: number;
};
