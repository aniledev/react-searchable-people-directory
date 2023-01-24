export type User = {
	login: {
		uuid: number;
	};
	location: {
		[key: string]: string;
		city: string;
		state: string;
		country: string;
	};
	name: {
		first: string;
		last: string;
	};
	picture: {
		large: string;
	};
	cell: string;
	email: string;
	nat: string;
};

export type CardComponentProperties = {
	key: string;
	className: string;
	user: User;
	updateUserField: (id: number, field: string, value: string) => void;
};

export type MainComponentProperties = {
	className: string;
	users: User[];
	input: string;
	updateUserField: (id: number, field: string, value: string) => void;
};

export type TextComponentProperties = {
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

export type EditableTextState = {
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

export type ReadonlyTextComponentProperties = Readonly<TextComponentProperties>;
