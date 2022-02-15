type Absolute<T extends number | string | bigint> = `${T}` extends `${infer First}${infer Rest}`
  ? `${First}` extends '-'
    ? `${Rest}`
    : `${T}`
  : never