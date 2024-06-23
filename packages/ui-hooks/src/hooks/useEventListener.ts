import { RefObject, useEffect, useRef } from "react";

function useEventListener<K extends keyof MediaQueryListEventMap>(
	eventName: K,
	handler: (event: MediaQueryListEventMap[K]) => void,
	element: RefObject<MediaQueryList>,
	options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<K extends keyof WindowEventMap>(
	eventName: K,
	handler: (event: WindowEventMap[K]) => void,
	element?: undefined,
	options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<
	K extends keyof HTMLElementEventMap,
	T extends HTMLElement = HTMLDivElement,
>(
	eventName: K,
	handler: (event: HTMLElementEventMap[K]) => void,
	element: RefObject<T>,
	options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<K extends keyof DocumentEventMap>(
	eventName: K,
	handler: (event: DocumentEventMap[K]) => void,
	element: RefObject<Document>,
	options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	KM extends keyof MediaQueryListEventMap,
	T extends HTMLElement | MediaQueryList | void = void,
>(
	eventName: KW | KH | KM,
	handler: (
		event:
			| WindowEventMap[KW]
			| HTMLElementEventMap[KH]
			| MediaQueryListEventMap[KM]
			| Event,
	) => void,
	element?: RefObject<T>,
	options?: boolean | AddEventListenerOptions,
) {
	const cachedHandler = useRef(handler);

	useEffect(() => {
		cachedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const targetElement: T | Window = element?.current ?? window;

		/* v8 ignore next 3 */
		if (!(targetElement && targetElement.addEventListener)) {
			return;
		}

		// Create event listener that calls handler function stored in ref
		const listener: typeof handler = (event) => cachedHandler.current(event);

		targetElement.addEventListener(eventName, listener, options);

		// Remove event listener on cleanup
		return () => {
			targetElement.removeEventListener(eventName, listener, options);
		};
	}, [eventName, element, options]);
}

export { useEventListener };
