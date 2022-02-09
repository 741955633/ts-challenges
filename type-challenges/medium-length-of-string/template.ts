type GetLength<S extends unknown[]> = S['length']
type LengthOfString<S extends string, U extends unknown[] = []> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...U, F]>
  : GetLength<U>
