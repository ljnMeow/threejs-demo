import { DebounceFunction } from "./type";

export const getAssetsFile = (path: string): string => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};

export const debounce: DebounceFunction<(...args: any[]) => any> = (fn, delay) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return ((...args: Parameters<typeof fn>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }) as ReturnType<typeof debounce> & { cancel: () => void };
};
