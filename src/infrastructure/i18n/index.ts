import { initReactI18next } from "react-i18next";
import i18n, { InitOptions } from "i18next";
import Backend, { HttpBackendOptions } from "i18next-http-backend";

import { storage } from "infrastructure/storage";

import { config } from "../../config.ts";

const fallbackLng = "ru";

const backEndOptions: HttpBackendOptions = {
	addPath: `${config.baseUrl}/translation/create`,
	loadPath: `${config.baseUrl}/translation/all?_l={{lng}}`,
	parse(data: any) {
		const response = JSON.parse(data);
		return response.data;
	},
	parsePayload(_, key, __) {
		return { message: key };
	},
	allowMultiLoading: false,
	reloadInterval: false,
	customHeaders: {
		Authorization: `Bearer ${storage.get("token")}`,
	},
};

const options: InitOptions = {
	fallbackLng,
	keySeparator: false,
	interpolation: {
		escapeValue: false,
		formatSeparator: ",",
	},

	saveMissing: false,
	react: {
		useSuspense: false,
	},

	backend: backEndOptions,
};

export const initI18n = () => {
	i18n.use(Backend).use(initReactI18next).init(options);
};
