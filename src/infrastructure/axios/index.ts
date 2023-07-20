import axios from "axios";

import { config } from "../../config.ts";
import { storage } from "../storage";

export const httpClient = axios.create({
	baseURL: config.baseUrl,
});

httpClient.interceptors.request.use(
	(config) => {
		config.headers.Authorization = `Bearer ${storage.get("token")}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
