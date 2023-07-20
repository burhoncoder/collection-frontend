import { Types } from "core/User";

export const SIGN_IN = "@SIGN_IN";
export const SIGN_OUT = "@SIGN_OUT";

export const signIn = (payload: Types.Entity.IUser) => ({ type: SIGN_IN, payload });
export const signOut = () => ({ type: SIGN_OUT });
