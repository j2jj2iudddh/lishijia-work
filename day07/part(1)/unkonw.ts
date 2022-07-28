//任何类型的值都可以赋值给unknown类型
// let value1:unknown;
// value1='a'
// value1=123

// //如果没有类型断言或基于控制流的类型细化时unknown不可以赋值给其他类型，此时它只能赋值给unknown和any类型
// let value2:unknown;
// let value3:string=value2
// value1=value2

// //如果没有类型断言或基于控制流的类型细化，则不能再塔上面进行任何操作
// let value4:unknown
// value4+=1 

// //unknown与任何其他类型组成的交叉类型，最后都等于其他类型
// type type1=unknown & string 
// type type2=number & unknown
// type type3=unknown & unknown
// type type4=unknown & string[]

// //unknown与任何其他类型组成的联合类型，都等于unknown类型，但只有any例外，unknown与any组成的联合类型等于any
// type type5=string | unknown 
// type type6 = any | unknown
// type type7 = number[] | unknown

// // never 类型是 unknown的子类型
// // keyof unknown 等于类型never
// type type9 =keyof unknown

// 只能对unknown 进行等或不等操作 ， 不能进行其他操作
// value1 === value2;
// value1 !== value2;
// value1 += value2; // error


// unknown 类型的值不能访问其属性、作为函数调用和作为类创建实例
// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error

// 使用映射类型时如果遍历的是 unknown 类型，则不会映射任何属性：
type Types<T> = { [P in keyof T]: number };
type type10 = Types<any>; // type10 => { [x: string]: number }
type type11 = Types<unknown>; // type10 => {}
