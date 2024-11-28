export type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends ''
  ? T['length']
  : S extends `${infer letter}${infer rest}`
  ? LengthOfString<rest, [...T, letter]>
  : never

// type cases = [
//   Expect<Equal<LengthOfString<''>, 0>>,
//   Expect<Equal<LengthOfString<'kumiko'>, 6>>,
//   Expect<Equal<LengthOfString<'reina'>, 5>>,
//   Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
// ]
