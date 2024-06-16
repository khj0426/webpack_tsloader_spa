type Test<T extends number> = T extends 2 ? 3 : 4;

type CC = Test<2>;

//가장 맨 처음 원소 값을 뱉는 유틸
//배열이고 인자가 있다면 첫번째 원소를 뱉고 없다면 undefined
//배열의 첫 요소를 A로 추론하고, 나머지는 무시
export type Head<T extends any[]> = T extends [infer A, ...any[]]
  ? A
  : undefined;

type tail<T extends any[]> = T extends [...any[], infer B] ? B : undefined;
//type CC1 = Head<[1, 2, 3, 4, 5]>;
//type SS1 = Head<['a', 'b', 'c']>;
//type NN1 = Head<[]>;

type TT1 = tail<[1, 2, 3, 4, 5]>;
type SS1 = tail<['a', 'b', 'c', 'd', 'e']>;
type NN1 = tail<[]>;

//Head타입을 체킹하는 타입체킹코드

export type Equal<A, B> = A extends B ? (B extends A ? 1 : 0) : 0;

type Cc = Equal<1, 1 | 2>;

const Pass = 1;
const Fail = 0;

export declare function check<A, B>(
  params: Equal<Equal<A, B>, typeof Pass>
): void;

check<1, 1>(Pass);

check<1, 2>(Fail);

check<Head<[1, 2, 3, 4]>, 1>(Pass);
check<Head<[1]>, 1>(Pass);
check<Head<[]>, undefined>(Pass);

//이건 에러
//check<Head<[]>, 2>(Pass);

export type Length<T extends any[]> = T['length'];

check<Length<[1, 2, 3]>, 3>(Pass);

//length가 0이면 false를 있다면 true를
export type HasTail<T extends any[]> = Length<T> extends 0 ? false : true;

check<HasTail<[1, 2, 3]>, true>(Pass);
check<HasTail<[3]>, true>(Pass);
check<HasTail<[]>, false>(Pass);

//Tail은 첫번째 인자를 제외한 나머지 인자를 받는다

export type Tail<T extends any[]> = T extends [any, ...infer A] ? A : [];

check<Tail<[1, 2, 3, 4, 5]>, [2, 3, 4, 5]>(Pass);
check<Tail<[4, 5]>, [5]>(Pass);
check<Tail<[4]>, []>(Pass);
check<Tail<[]>, []>(Pass);

//마지막 원소를 반환하는 함수
type Last<T extends any[]> = T extends [...any[], infer A] ? A : undefined;

check<Last<[1, 2, 3, 4]>, 4>(Pass);
check<Last<[1]>, 1>(Pass);
check<Last<[]>, undefined>(Pass);
check<Last<[2]>, 2>(Pass);

//Pretend함수. -> 배열에 맨 앞에 원소를 추가해주는 함수

export type Pretend<T extends any[], E> = [E, ...T];

check<Pretend<[1, 2, 3, 4, 5], 6>, [6, 1, 2, 3, 4, 5]>(Pass);
check<Pretend<[3, 4, 5], 2>, [2, 3, 4, 5]>(Pass);

check<Pretend<[], 1>, [1]>(Pass);

//Drop -> 앞에 있는 숫자가 배열에서 몇 개를 뺄 건지를 정함
//앞에서 몇 개를 뺼건지? 뺀 결과 값 리턴

//T에서 N개만큼 빼고 뺀거를 P에다가 하나씩 넣어줄거임.

/*
const a = {
  '0': 1 as const,
}['0'];
*/
