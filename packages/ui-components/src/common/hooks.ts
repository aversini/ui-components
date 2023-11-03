import { LOCAL_STORAGE_BASIC_AUTH, LOCAL_STORAGE_PREFIX } from "./constants";
import { obfuscate, unObfuscate } from "./utilities";

type LocalStorageKey = typeof LOCAL_STORAGE_BASIC_AUTH;

export const useLocalStorage = () => {
	return {
		get: (key: LocalStorageKey): string | boolean | null => {
			const data = unObfuscate(
				localStorage.getItem(LOCAL_STORAGE_PREFIX + key) || "",
			);
			if (data === "true" || data === "false") {
				return data === "true";
			}
			return data;
		},
		set: (key: LocalStorageKey, value: string | boolean) => {
			const data = typeof value === "boolean" ? value.toString() : value;
			const obfuscatedValue = obfuscate(data.trim()) || "";
			localStorage.setItem(LOCAL_STORAGE_PREFIX + key, obfuscatedValue);
		},
		remove: (key: LocalStorageKey) => {
			localStorage.removeItem(LOCAL_STORAGE_PREFIX + key);
		},
	};
};
