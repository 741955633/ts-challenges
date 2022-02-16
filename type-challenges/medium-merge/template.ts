// type Merge<F, S> = {
//   [P in keyof (F & S)]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
// }
type Merge<F, S> = {
  [P in keyof F | keyof S ] : P extends keyof S ? S[P] : P extends keyof F ? F[P]: never
}

// 不是很理解为什么(F & S)也可以
