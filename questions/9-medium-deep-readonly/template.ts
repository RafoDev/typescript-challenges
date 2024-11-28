export type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends (args: any[]) => any
    ? T[k]
    : T[k] extends object
    ? DeepReadonly<T[k]>
    : T[k]
}
