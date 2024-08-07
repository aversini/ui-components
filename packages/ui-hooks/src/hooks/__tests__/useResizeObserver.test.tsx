import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";

import { useResizeObserver } from "../useResizeObserver";

// const observeSpy = vi.fn();
// 	const unobserveSpy = vi.fn();
// 	const disconnectSpy = vi.fn();

// 	let ResizeObserverSpy: Mock<ResizeObserver>;
// 	const initialRO = global.ResizeObserver;

global.ResizeObserver = vi.fn().mockImplementation((cb) => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
	callback: cb,
}));

// global.ResizeObserver = vi.fn(function (cb) {
// 	this.observe = vi.fn();
// 	this.disconnect = vi.fn();
// 	this.callback = cb;
// });

// const MockObserverInstance: ResizeObserver = {
// 	observe: vi.fn(),
// 	unobserve: vi.fn(),
// 	disconnect: vi.fn(),
// };
// global.ResizeObserver = vi.fn().mockImplementation(() => MockObserverInstance);

// const ResizeObserverMock = vi.fn(() => ({
// 	disconnect: vi.fn(),
// 	observe: vi.fn(),
// 	unobserve: vi.fn(),
// }));

// vi.stubGlobal("ResizeObserver", ResizeObserverMock);

// let listener: ((rect: any) => void) | undefined = undefined;
// (global as any).ResizeObserver = class ResizeObserver {
// 	constructor(ls: any) {
// 		listener = ls;
// 	}
// 	observe() {}
// 	unobserve() {}
// 	disconnect() {}
// };

// interface Event {
// 	borderBoxSize?: { blockSize: number; inlineSize: number };
// 	contentBoxSize?: { blockSize: number; inlineSize: number };
// 	contentRect?: { width: number; height?: number };
// }

// let callback: (e: Event[]) => void;
// const observe = vi.fn();
// const disconnect = vi.fn();
// const mockResizeObserver = vi.fn((cb) => ({
// 	observe: () => {
// 		callback = cb;
// 		observe();
// 	},
// 	disconnect,
// }));
// const triggerObserverCb = (e: Event) => callback([e]);

describe("useResizeObserver", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
			cb(0);
			return 0;
		});
	});

	// beforeAll(() => {
	// @ts-ignore
	// global.ResizeObserver = mockResizeObserver;
	// global.ResizeObserverEntry = vi.fn();
	// });

	afterEach(() => {
		vi.clearAllMocks();
		vi.restoreAllMocks();
		vi.clearAllTimers();
	});

	it("should return default state initially", () => {
		const { result } = renderHook(() => useResizeObserver());

		const [ref, rect] = result.current;

		expect(ref.current).toBe(null);
		expect(rect).toEqual({
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		});
	});

	it("should handle null ref gracefully when hook is used", () => {
		const { result, unmount } = renderHook(() => useResizeObserver());
		const [ref] = result.current;
		expect(ref.current).toBeNull();
		unmount();
		// Ensure no errors are thrown during unmount
		expect(() => unmount()).not.toThrow();
	});

	it("should initialize with null ref object when hook is used", () => {
		const { result } = renderHook(() => useResizeObserver());
		const [ref] = result.current;
		expect(ref.current).toBeNull();
	});

	it("should return a tuple with ref object and rectangle state", () => {
		const { result } = renderHook(() => useResizeObserver());
		const [ref, rect] = result.current;

		expect(Array.isArray(result.current)).toBe(true);
		expect(result.current.length).toBe(2);
		expect(ref).toHaveProperty("current");
		expect(rect).toHaveProperty("x");
		expect(rect).toHaveProperty("y");
		expect(rect).toHaveProperty("width");
		expect(rect).toHaveProperty("height");
		expect(rect).toHaveProperty("top");
		expect(rect).toHaveProperty("left");
		expect(rect).toHaveProperty("bottom");
		expect(rect).toHaveProperty("right");

		expect(ResizeObserver).toHaveBeenCalledTimes(1);
	});

	it.skip("should update state when ResizeObserver entry is triggered", () => {
		vi.useFakeTimers();
		const div = document.createElement("div");
		const { result, rerender } = renderHook(() => useResizeObserver());
		const [ref, rect] = result.current;

		const contentBoxSize = { blockSize: 100, inlineSize: 100 };
		act(() => triggerObserverCb({ contentBoxSize }));
		// expect(result.current.width).toBe(contentBoxSize.blockSize);

		// const entry = {
		// 	target: div,
		// 	contentRect: {
		// 		x: 0,
		// 		y: 0,
		// 		width: 100,
		// 		height: 200,
		// 		top: 0,
		// 		left: 0,
		// 		bottom: 200,
		// 		right: 100,
		// 	},
		// 	borderBoxSize: {
		// 		blockSize: 100,
		// 		inlineSize: 200,
		// 	},
		// 	contentBoxSize: {
		// 		blockSize: 100,
		// 		inlineSize: 200,
		// 	},
		// } as unknown as ResizeObserverEntry;

		// ref.current = div;
		// rerender({ ref });

		// act(() => {
		// 	// @ts-expect-error
		// 	ResizeObserverMock?.mock?.calls[0][0]([entry]);
		// });

		// vi.advanceTimersByTime(1000);

		// expect(rect).toEqual({
		// 	x: 0,
		// 	y: 0,
		// 	width: 0,
		// 	height: 0,
		// 	top: 0,
		// 	left: 0,
		// 	bottom: 0,
		// 	right: 0,
		// });
	});

	it.skip("should observe the element and update rect on resize", () => {
		const { result, rerender } = renderHook(() => useResizeObserver());
		const [ref, rect] = result.current;

		// Mock DOM element
		const mockElement = document.createElement("div");
		ref.current = mockElement;

		// Trigger useEffect
		act(() => {
			rerender();
		});

		const observerInstance = (global.ResizeObserver as unknown as vi.Mock).mock
			.instances[0];

		// Simulate ResizeObserver callback
		const mockEntry = {
			contentRect: {
				x: 10,
				y: 20,
				width: 100,
				height: 200,
				top: 10,
				left: 20,
				bottom: 210,
				right: 120,
			},
		};

		act(() => {
			observerInstance.callback([mockEntry]);
		});

		expect(result.current[1]).toEqual({
			x: 10,
			y: 20,
			width: 100,
			height: 200,
			top: 10,
			left: 20,
			bottom: 210,
			right: 120,
		});
	});

	it.skip("should disconnect observer on unmount", () => {
		const { result, unmount } = renderHook(() => useResizeObserver());
		const observerInstance = (global.ResizeObserver as unknown as vi.Mock).mock
			.instances[0];

		// Trigger useEffect
		act(() => {
			result.rerender();
		});

		unmount();

		expect(observerInstance.disconnect).toHaveBeenCalled();
	});

	it.skip("should cancel animation frame on unmount", () => {
		const { result, unmount } = renderHook(() => useResizeObserver());
		const frameID = result.current[2];

		// Mock cancelAnimationFrame
		global.cancelAnimationFrame = vi.fn();

		// Trigger useEffect
		act(() => {
			result.rerender();
		});

		unmount();

		expect(global.cancelAnimationFrame).toHaveBeenCalledWith(frameID.current);
	});
});
