export type Flatten<T> = T extends [infer SubArr, ...infer Rest]
  ? SubArr extends any[]
    ? Flatten<[...SubArr, ...Rest]>
    : [SubArr, ...Flatten<Rest>]
  : T
