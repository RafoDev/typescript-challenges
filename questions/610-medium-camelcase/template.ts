export type CamelCase<
  S extends string
> = S extends `${infer Head}-${infer Tail}`
  ? Tail extends Capitalize<Tail>
    ? `${Head}-${CamelCase<Tail>}`
    : `${Head}${CamelCase<Capitalize<Tail>>}`
  : S
