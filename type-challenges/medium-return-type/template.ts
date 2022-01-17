type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...arg: any[]
) => infer U
  ? U
  : never
