type UserRole = "admin" | "user";

export namespace Api {
	export const LIST = "@@USER/LIST";
}

export namespace Entity {
	export interface IUser {
		id: number;
		email: string;
		username: UserRole;
		role: string;
	}
}

export namespace Form {
	export interface IRegister {
		email: string;
		login: string;
		password: string;
	}

	export interface ILogin {
		login: string;
		password: string;
	}
}
