type StringToUnion<T extends string, U = never> = T extends `${infer F}${infer R}`
  ? StringToUnion<R, F | U>
  : U

type _StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? (F | _StringToUnion<R>)
  : never