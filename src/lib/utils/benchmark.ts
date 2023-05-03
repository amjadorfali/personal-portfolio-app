/* eslint-disable @typescript-eslint/no-explicit-any */
export const benchmark = (fn: (...args: any) => any, count: number, ...args: any) => {
	const start = performance.now();

	for (let i = 0; i < count; i++) {
		// eslint-disable-next-line prefer-spread
		fn.apply(null, args);
	}

	return performance.now() - start;
};
