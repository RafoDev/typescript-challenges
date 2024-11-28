export type AnyOf<T extends readonly any[]> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends number
    ? First extends 1
      ? true
      : AnyOf<Rest>
    : First extends string
    ? First extends ''
      ? AnyOf<Rest>
      : true
    : First extends any[]
    ? First extends []
      ? AnyOf<Rest>
      : true
    : First extends Record<any, any>
    ? keyof First extends never
      ? AnyOf<Rest>
      : true
    : First extends true
    ? true
    : AnyOf<Rest>
  : false
