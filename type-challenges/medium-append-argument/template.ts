type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer P
) => infer T
  ? (...args: [...P, A]) => T
  : never
