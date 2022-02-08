type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : []

// 联合类型extends时会分发
