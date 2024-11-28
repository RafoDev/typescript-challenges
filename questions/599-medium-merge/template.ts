export type Merge<F, S> = {
  [k in keyof F]: k extends keyof S ? S[k] : F[k]
}