export interface LoginMutation {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  email: string;
  displayName: string;
  token: string;
}

export interface UserMutation {
  email: string;
  password: string;
  displayName: string;
}

export interface ValidationError {
  errors: {
    [key: string]: {
      message: string;
      name: string;
    };
  };
  message: string;
  name: string;
  _name: string;
}

export interface GlobalError {
  error: string;
}

export interface Note {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface NoteMutation {
  title: string;
  description: string;
}

export interface ErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
}
