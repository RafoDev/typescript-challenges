export type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [k in K]: T[k]
} &
  {
    [p in Exclude<keyof T, K>]: T[p]
  }
