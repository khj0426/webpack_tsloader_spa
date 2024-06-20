export type Head<T extends any[]> = T extends [infer A, ...any[]] ? A : undefined;
export type Tail<T extends any[]> = T extends [...any[], infer B] ? B : undefined;
export type Rest<T extends any[]> = T extends [...any[], infer A] ? A : undefined;
export type Length<T extends any[]> = T['length'];
export type Pretend<T extends any[], E> = [E, ...T];
