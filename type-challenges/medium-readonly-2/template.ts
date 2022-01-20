type MyReadonly2<T, K> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 这个是抄的
type _MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [Key in K]: T[Key]
}