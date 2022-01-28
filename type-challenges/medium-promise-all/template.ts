// declare function PromiseAll(values: any): any {
  
// }
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer K> ? K : T[K]
}>
