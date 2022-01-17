type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

// 遍历array  T[number]
// as const  子面量类型
// js -> ts 
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type demo = typeof tuple