type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer First}${From}${infer Rest}`
  ? `${First}${To}${Rest}`
  : S