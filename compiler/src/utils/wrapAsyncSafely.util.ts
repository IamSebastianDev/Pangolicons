/** @format */

export const wrapAsyncSafely = async <T extends (...args: any) => any>(
    callback: T
): Promise<{ result: Awaited<ReturnType<T>> | null; error: Error | null }> => {
    let result: Awaited<ReturnType<T>> | null = null,
        error: Error | null = null;

    try {
        result = await callback();
    } catch (e) {
        error = e as Error;
    }

    return { result, error };
};
