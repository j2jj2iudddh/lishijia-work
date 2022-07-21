/**
 * interface
 * 
 */

interface Peersion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    color:string
    
}

/**
 * @param param0 
 * @returns 
 */
function getFullName({firstName,lastName,age,sex}:Persion):string{
    return `My name ${lastName} ${firstName} , My age is ${age} ,list smoke, ${sex}`
}

/**
 * 第一种：什么参数都不传 -----应有1个参数，但获得0个
 * 第二种：我们传递错误参数，----对象文字可以只指定已知属性，并且“age”不在类型"{firstName:string;lastName:string}"中
 * 第三种：我们传递的参数个数不一样--类型“{firstName:string; lastName:string;}的参数不能赋给类型“Persion”的参数
 * 类型“{firstName:string;lastName:string;}”缺少类型“Persion”中的一下属性：age,sex
 */

//let result=getFullName({firstName:'world',lastName:'hello'})
//console.log(result)

/**
 * 可选属性
 */
interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    colors?:string,
    [prop:string]:any
}

let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})
 /**
  * 绕开多余属性的检查,类型断言  !!!!!
  * 1. 类型断言 as <>
  * 2. [props: string]: any
  */

// interface Vegetables{
//    color?: string,
//    type: string
// }

// const getVegetables = ({color, type}: Vegetables) : string => {
//    return  `A ${color? color + "" : " "}${type}`
// }

// getVegetables({
//    type: "tomato",
//    size: 12,
//    price: 1.2
//  } as Vegetables);


interface Vegetables{
    color?:string,
    type:string,
}
const getVegetables{
    color?:string,
    type:string
}


/**
 * interface
 * 
 */

 interface Peersion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    color:string
    
}

/**
 * @param param0 
 * @returns 
 */
function getFullName({firstName,lastName,age,sex}:Persion):string{
    return `My name ${lastName} ${firstName} , My age is ${age} ,list smoke, ${sex}`
}

/**
 * 第一种：什么参数都不传 -----应有1个参数，但获得0个
 * 第二种：我们传递错误参数，----对象文字可以只指定已知属性，并且“age”不在类型"{firstName:string;lastName:string}"中
 * 第三种：我们传递的参数个数不一样--类型“{firstName:string; lastName:string;}的参数不能赋给类型“Persion”的参数
 * 类型“{firstName:string;lastName:string;}”缺少类型“Persion”中的一下属性：age,sex
 */

//let result=getFullName({firstName:'world',lastName:'hello'})
//console.log(result)

/**
 * 可选属性
 */
interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    colors?:string,
    [prop:string]:any
}

let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})
 /**
  * 绕开多余属性的检查,类型断言  !!!!!
  * 1. 类型断言 as <>
  * 2. [props: string]: any
  */

// interface Vegetables{
//    color?: string,
//    type: string
// }

// const getVegetables = ({color, type}: Vegetables) : string => {
//    return  `A ${color? color + "" : " "}${type}`
// }

// getVegetables({
//    type: "tomato",
//    size: 12,
//    price: 1.2
//  } as Vegetables);


interface Vegetables{
    color?:string,
    type:string,
}
const getVegetables{
    color?:string,
    type:string
}


/**
 * interface
 * 
 */

 interface Peersion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    color:string
    
}

/**
 * @param param0 
 * @returns 
 */
function getFullName({firstName,lastName,age,sex}:Persion):string{
    return `My name ${lastName} ${firstName} , My age is ${age} ,list smoke, ${sex}`
}

/**
 * 第一种：什么参数都不传 -----应有1个参数，但获得0个
 * 第二种：我们传递错误参数，----对象文字可以只指定已知属性，并且“age”不在类型"{firstName:string;lastName:string}"中
 * 第三种：我们传递的参数个数不一样--类型“{firstName:string; lastName:string;}的参数不能赋给类型“Persion”的参数
 * 类型“{firstName:string;lastName:string;}”缺少类型“Persion”中的一下属性：age,sex
 */

//let result=getFullName({firstName:'world',lastName:'hello'})
//console.log(result)

/**
 * 可选属性
 */
interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    colors?:string,
    [prop:string]:any
}

let result = getFullName({firstName:'三',lastName:'张',age:20,sex:false,height:123})
 /**
  * 绕开多余属性的检查,类型断言  !!!!!
  * 1. 类型断言 as <>
  * 2. [props: string]: any
  */

// interface Vegetables{
//    color?: string,
//    type: string
// }

// const getVegetables = ({color, type}: Vegetables) : string => {
//    return  `A ${color? color + "" : " "}${type}`
// }

// getVegetables({
//    type: "tomato",
//    size: 12,
//    price: 1.2
//  } as Vegetables);


interface Vegetables{
    color?:string,
    type:string,
}
const getVegetables{
    color?:string,
    type:string
}