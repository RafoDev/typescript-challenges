export type Permutation<T extends number | string, S extends any[] = []> = [T] extends [never]
  ? []
  : {
      [k in T]: Exclude<T, k> extends never
        ? [k, ...S]
        : Permutation<Exclude<T, k>, [k, ...S]>
    }[T]

// Per1<(A,B,C),[]> | T = A B C | k = A | Per2<(B, C), [A]>
// Per2<(B, C), [A]> | T = B C | k = B | Per3<(C), [B,A]>
// Per3<(C), [B,A]> | T = C | k = C | {C : [C, B, A]}

// Per2<(B, C), [A]> | T = B C | k = C | Per3<(B), [C,A]>
// Per3<(B), [C, A]> | T = B | k = B | {B : [B, C, A]}

// Per1<(A,B,C),[]> | T = A B C | k = B | Per2<(A, C), [B]>
// Per2<(A, C), [B]> | T = A C | k = A | Per3<(C), [A, B]>
// Per3<(C), [A, B]> | T = C | k = C | {C : [C, A, B]}>

// Per2<(A, C), [B]> | T = A C | k = C | Per3<(A), [C, B]>
// Per3<(A), [C, B]> | T = A | k = A | {A : [A, C, B]}>
