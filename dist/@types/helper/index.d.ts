export type Equal<A, B> = A extends B ? (B extends A ? 1 : 0) : 0;
declare const PASS = 1;
export declare function check<A, B>(params: Equal<Equal<A, B>, typeof PASS>): void;
export declare const isProduction: () => boolean;
export {};
