declare module 'split-text-js' {
  export default class SplitTextJS {
    constructor(element: HTMLElement | string, options?: any);

    split(options?: any): void;
    revert(): void;
    isSplit: boolean;
  }
}
