type Tuple = [string, number, Date]
type Age = Tuple[1] // number

const b:Age = 123 // 正确
// const a:Age = 'abc' // 报错

type TupleEl = Tuple[number] // 联合类型 string|number|Date
