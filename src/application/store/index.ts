import { createStore, Dispatch, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";

let store: Store & {
	dispatch: Dispatch;
};
if (process.env.NODE_ENV === "development") store = createStore(rootReducer, composeWithDevTools());
else store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
