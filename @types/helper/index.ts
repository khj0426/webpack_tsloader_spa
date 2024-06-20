export type Equal<A, B> = A extends B ? (B extends A ? 1 : 0) : 0;

const PASS = 1;

export declare function check<A, B>(
  params: Equal<Equal<A, B>, typeof PASS>
): void;

export const isProduction = () => {
  return process.env.NODE_ENV == 'production'
}