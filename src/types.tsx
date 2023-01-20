export interface User {
  login: {
    uuid: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: any;
  };
  cell: string;
  email: string;
  nat: string;
};

export interface CardComponentProps {
  key: string;
  className: string;
  user: User;
  updateUserField: (id: number, field: string, value: string) => void;
};

export interface MainComponentProps {
  className: string;
  users: User[];
  input: string;
  updateUserField: (id: number, field: string, value: string) => void;
};

export interface TextComponentProps {
  id: number;
  name?: string;
  type?: string;
  value: string;
  editClassName: string;
  field: string;
  isEditActive?: boolean;
  key: string;
  backup?: string;
  updateUserField: (id: number, field: string, value: string) => void;
};

export interface EditableTextState {
  id: number;
  name?: string;
  type?: string;
  value: string;
  editClassName: string;
  field: string;
  isEditActive?: boolean;
  key: string;
  backup: string;
  updateUserField: (id: number, field: string, value: string) => void;
};

export type ReadonlyTextComponentProps = Readonly<TextComponentProps>;