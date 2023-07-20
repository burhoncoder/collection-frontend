import { toast } from "react-toastify";

import { INotifier } from "shared";

export const notifier: INotifier = {
	error(message) {
		toast.error(message);
	},
	success(message) {
		toast.success(message);
	},
	warning(message) {
		toast.warning(message);
	},
};
