// type CamelCase<S extends string> = S extends `${infer F}-${infer S}${infer R}`
//   ? S extends '-' | Uppercase<S>
//     ? `${F}-${CamelCase<`${S}${R}`>}`
//     : `${F}${Uppercase<S>}${CamelCase<R>}`
//   : S

// 还没理解！抄了一下

// your answers
// type CamelCase<S> = S extends `${infer Z}`
//   ? Z extends `${infer X}-${infer Y}`
//     ? Y extends Capitalize<Y>
//       ? `${X}-${CamelCase<Y>}`
//       : `${X}${CamelCase<Capitalize<Y>>}`
//     : Z
//   : ''


type CamelCase<S> = S extends `${infer Z}`
  ? Z extends `${infer F}-${infer R}`
    ? R extends Capitalize<R>
      ? `${F}-${CamelCase<R>}`
      : `${F}${CamelCase<Capitalize<R>>}`
    : Z
  : ''




















