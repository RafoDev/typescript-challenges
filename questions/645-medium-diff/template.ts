export type Diff<O, O1> = {
  [k in keyof O1 as k extends keyof O ? never : k]: O1[k]
}
