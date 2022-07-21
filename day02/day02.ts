// js的数据类型
// 基本数据类型:Number,String,Null,undefined,Symbol,BigInt
// 复杂数据类型:Object[function,array,date...]

// ts的数据类型
// ts中为了使编写的代码更规范，更有利于维护，增加了类型校验，在ts中主要提供了一下数据类型

// 1.数字类型(number)
// js中数据类型：Number
// ts中数据类型：number

// 在js中定义一个变量的数据类型是通过赋值的方向来定义的，也是可以重复赋值的
// 首先我们要进行一个运算，计算相加
let num1 = 1
let num2 = 2
let sum = num1 + num2//3

// 非正常情况
let num3 = 3
let num4 = 4
// 不能将类型“string”分配给类型“number”。
num3 = "3"
let sum = num3 + num4

// 使用number定义数值类型
/**
 * number
 */
//十进制
let decLiteral: number = 6
//十六进制
let hexLiteral: number = 0xf00d
// ES6中的二进制
let binaryLiteral: number = 0b1010
// Es6中的八进制表示法
let octalLiteral: number = 0o744
// 特殊表示法
let notANumber: number = NaN
/**
 * 无穷大
 */
let infinityNumber: number = Infinity
/**
 * 无穷小
 */
// -infinity
// 当顶一万数字类型的数据的时候，在定义为str
let num: number = 1
num = "2222"//Error:不能将类型“string”分配给类型“number”。


// 2.布尔值类型(boolean)
// 布尔值是最基础的数据类型，在TypeScript中，使用boolean定义布尔值类型
let isDone: boolean = false
//编译通过 tsc xxx
//后面约定，未强调编译错误的代码，默认为编译通过


// 3.字符串类型(string)
// 使用string定义字符串类型：
/**
 * 字符串 string
 */
let myName: string = '小红'
let myAge: number = 12
//造句
let sentence = `my name is ${myName}My age is ${myAge}`
document.body.innerHTML=sentence


// 4.数组(Array<number>||number[])

// js中的数组定义
// 第一种：[]
let array=[]
// 第二种：new Array
let array=new Array()
array.push(1)

// TypeScript像JavaScript一样可以操作数组元素。
// 有两种方法可以定义数组
// 第一种，可以在元素类型后面接上[],表示由此类型元素组成的一个数组
/**
 * number[],string[]
 */
let list:number[]=[1,2,3,4]
let listString:string[]=['1','2','3']
// 任何数据错误都会进行提示
let list:number[]=[1,2,3,'4']
//报错：不能将类型“string”分配给类型“number”
// 第二种是使用数组泛型，Array<元素类型>
/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */
let list:number[]=[1,2,3]
list.push(6)
let listString:string[]=['1','2','3']
list.uunshif('9')
let arrayList:Array<number>=[1,2,3]
let stringList:Array<string>=['1','2','3']
//报错：不能将类型“string”分配给类型“number”
let arrayList:Array<number>=[1,2,'3']
// 所有数组方法依旧能用


//5. undefined和null类型
// null和undefined有一些共同特点，所以我们放在一起讲，说他们有共同特点，
// 是因为在JavaScript中，undefined和null是两个基本数据类型，在TypeScript中，这两者都有各自的类型既undefined和null
// 也就是说他们即使实际的值，也是类型，
let u:undefined=undefined
let n:null=null


// 6.对象(object)
// js中定义对象的方法
// 第一种{}
let object={}
// 第二种 new Object{}
let object =new object()
// 第三种 使用字面量方法创建对象
let person={name:'zhang',age:20}
// 第四种 工厂模式创建对象
var xm = new Object();
xm.name = "小明";
xm.age = 18;
xm.sayHi = function(){
    console.log("您好呀，吃了没，我叫：" + this.name + ",我今年" + this.age + "岁了");
}
// 第五中 构造函数创建对象
function Star (uname,uage){
    this.uname=uname
    this.uage=uage
    this.sing=function(){
        console.log("唱起来！！！");
        
    }
}
var ldh=new Star("王刚",99)
console.log(ldh);
Star.dance=function(){
    console.log(1111);
    
}
Star.dance()
// object表示非原始类型，也就是number，`string`，`boolean`，`symbol`，`null`或undefined之外的类型
// 在ts中对象的使用
// 使用object类型，就可以更好地表示想object，create这样的Api
declare function create(o:object | null) : void
create({props: 0})
create(null)
create(3222) // 类型“number”的参数不能赋给类型“object”的参数。
create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
create(undefined) // Error类型“undefined”的参数不能赋给类型“object | null”的参数
// 简单
let obj: {name: string}
obj = {name: '小红', age: 13}


// 7.元组(Tuple)
// 数组：合并相同类型的对象，长度不限
// 元组(Tuple):合并了不同类型的对象，已知长度
// 定义一个具有`string`,`number`的数组
let tom:[string,number]=['Tom',]
// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
let tom:[string,number]
tom[0]='Tom'
tom[1]=25
tom[0].slice(1)
tom[1].toFixed(2)


8.枚举(enumm)
// enumm类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一个数组赋值有好的名字
/**
 * 枚举
 * enum
 * 当定义的变量越多,我们单独封装,会越好维护以后得项目,方便项目的查看
 */
enum Color{
    /**
     * 红色
     */
    Red=1,
     /**蓝色 */
     Blue = 2,
     /**绿色 */
     Green = 3
}
let c:Color=Color.Green
console.log(c);


// 9.Any(any)
// ​	JavaScript 的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能清楚地知道一个值到底是什么类型，这时就需要用到 any 类型，即任意类型。我们来看例子：
let value: any;
value = 123;
value = "abc";
value = false;
// ​	你可以看到，我们定义变量 value，指定它的类型为 any，接下来赋予任何类型的值都是可以的。
// ​	我们还可以在定义数组类型时使用 any 来指定数组中的元素类型为任意类型：
const array: any[] = [1, "a", true];
//但是请注意，不要滥用 any，如果任何值都指定为 any 类型，那么 TypeScript 将失去它的意义。
// 所以如果类型是未知的，更安全的做法是使用unknown类型，我们本小节后面会讲到。

// 10.void类型
// void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到：
/**
 * void类型
 */
 function alertName(): void  {
    console.log('My name is void');  
}
/**
 * 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 */
 function alertNames(): string{
    console.log('My name is void');  
    return 'My Name is string'
}
// **void 类型的变量只能赋值为 `undefined``**，**其他类型不能赋值给 void 类型的变量**。


// 11.never类型
// 1. `never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。
// 2. `never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。
// 简单来说就是用来抛错
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}







// js的数据类型
// 基本数据类型:Number,String,Null,undefined,Symbol,BigInt
// 复杂数据类型:Object[function,array,date...]

// ts的数据类型
// ts中为了使编写的代码更规范，更有利于维护，增加了类型校验，在ts中主要提供了一下数据类型

// 1.数字类型(number)
// js中数据类型：Number
// ts中数据类型：number

// 在js中定义一个变量的数据类型是通过赋值的方向来定义的，也是可以重复赋值的
// 首先我们要进行一个运算，计算相加
let num1 = 1
let num2 = 2
let sum = num1 + num2//3

// 非正常情况
let num3 = 3
let num4 = 4
// 不能将类型“string”分配给类型“number”。
num3 = "3"
let sum = num3 + num4

// 使用number定义数值类型
/**
 * number
 */
//十进制
let decLiteral: number = 6
//十六进制
let hexLiteral: number = 0xf00d
// ES6中的二进制
let binaryLiteral: number = 0b1010
// Es6中的八进制表示法
let octalLiteral: number = 0o744
// 特殊表示法
let notANumber: number = NaN
/**
 * 无穷大
 */
let infinityNumber: number = Infinity
/**
 * 无穷小
 */
// -infinity
// 当顶一万数字类型的数据的时候，在定义为str
let num: number = 1
num = "2222"//Error:不能将类型“string”分配给类型“number”。


// 2.布尔值类型(boolean)
// 布尔值是最基础的数据类型，在TypeScript中，使用boolean定义布尔值类型
let isDone: boolean = false
//编译通过 tsc xxx
//后面约定，未强调编译错误的代码，默认为编译通过


// 3.字符串类型(string)
// 使用string定义字符串类型：
/**
 * 字符串 string
 */
let myName: string = '小红'
let myAge: number = 12
//造句
let sentence = `my name is ${myName}My age is ${myAge}`
document.body.innerHTML=sentence


// 4.数组(Array<number>||number[])

// js中的数组定义
// 第一种：[]
let array=[]
// 第二种：new Array
let array=new Array()
array.push(1)

// TypeScript像JavaScript一样可以操作数组元素。
// 有两种方法可以定义数组
// 第一种，可以在元素类型后面接上[],表示由此类型元素组成的一个数组
/**
 * number[],string[]
 */
let list:number[]=[1,2,3,4]
let listString:string[]=['1','2','3']
// 任何数据错误都会进行提示
let list:number[]=[1,2,3,'4']
//报错：不能将类型“string”分配给类型“number”
// 第二种是使用数组泛型，Array<元素类型>
/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */
let list:number[]=[1,2,3]
list.push(6)
let listString:string[]=['1','2','3']
list.uunshif('9')
let arrayList:Array<number>=[1,2,3]
let stringList:Array<string>=['1','2','3']
//报错：不能将类型“string”分配给类型“number”
let arrayList:Array<number>=[1,2,'3']
// 所有数组方法依旧能用


//5. undefined和null类型
// null和undefined有一些共同特点，所以我们放在一起讲，说他们有共同特点，
// 是因为在JavaScript中，undefined和null是两个基本数据类型，在TypeScript中，这两者都有各自的类型既undefined和null
// 也就是说他们即使实际的值，也是类型，
let u:undefined=undefined
let n:null=null


// 6.对象(object)
// js中定义对象的方法
// 第一种{}
let object={}
// 第二种 new Object{}
let object =new object()
// 第三种 使用字面量方法创建对象
let person={name:'zhang',age:20}
// 第四种 工厂模式创建对象
var xm = new Object();
xm.name = "小明";
xm.age = 18;
xm.sayHi = function(){
    console.log("您好呀，吃了没，我叫：" + this.name + ",我今年" + this.age + "岁了");
}
// 第五中 构造函数创建对象
function Star (uname,uage){
    this.uname=uname
    this.uage=uage
    this.sing=function(){
        console.log("唱起来！！！");
        
    }
}
var ldh=new Star("王刚",99)
console.log(ldh);
Star.dance=function(){
    console.log(1111);
    
}
Star.dance()
// object表示非原始类型，也就是number，`string`，`boolean`，`symbol`，`null`或undefined之外的类型
// 在ts中对象的使用
// 使用object类型，就可以更好地表示想object，create这样的Api
declare function create(o:object | null) : void
create({props: 0})
create(null)
create(3222) // 类型“number”的参数不能赋给类型“object”的参数。
create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
create(undefined) // Error类型“undefined”的参数不能赋给类型“object | null”的参数
// 简单
let obj: {name: string}
obj = {name: '小红', age: 13}


// 7.元组(Tuple)
// 数组：合并相同类型的对象，长度不限
// 元组(Tuple):合并了不同类型的对象，已知长度
// 定义一个具有`string`,`number`的数组
let tom:[string,number]=['Tom',]
// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
let tom:[string,number]
tom[0]='Tom'
tom[1]=25
tom[0].slice(1)
tom[1].toFixed(2)


8.枚举(enumm)
// enumm类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一个数组赋值有好的名字
/**
 * 枚举
 * enum
 * 当定义的变量越多,我们单独封装,会越好维护以后得项目,方便项目的查看
 */
enum Color{
    /**
     * 红色
     */
    Red=1,
     /**蓝色 */
     Blue = 2,
     /**绿色 */
     Green = 3
}
let c:Color=Color.Green
console.log(c);


// 9.Any(any)
// ​	JavaScript 的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能清楚地知道一个值到底是什么类型，这时就需要用到 any 类型，即任意类型。我们来看例子：
let value: any;
value = 123;
value = "abc";
value = false;
// ​	你可以看到，我们定义变量 value，指定它的类型为 any，接下来赋予任何类型的值都是可以的。
// ​	我们还可以在定义数组类型时使用 any 来指定数组中的元素类型为任意类型：
const array: any[] = [1, "a", true];
//但是请注意，不要滥用 any，如果任何值都指定为 any 类型，那么 TypeScript 将失去它的意义。
// 所以如果类型是未知的，更安全的做法是使用unknown类型，我们本小节后面会讲到。

// 10.void类型
// void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到：
/**
 * void类型
 */
 function alertName(): void  {
    console.log('My name is void');  
}
/**
 * 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 */
 function alertNames(): string{
    console.log('My name is void');  
    return 'My Name is string'
}
// **void 类型的变量只能赋值为 `undefined``**，**其他类型不能赋值给 void 类型的变量**。


// 11.never类型
// 1. `never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。
// 2. `never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。
// 简单来说就是用来抛错
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}






// js的数据类型
// 基本数据类型:Number,String,Null,undefined,Symbol,BigInt
// 复杂数据类型:Object[function,array,date...]

// ts的数据类型
// ts中为了使编写的代码更规范，更有利于维护，增加了类型校验，在ts中主要提供了一下数据类型

// 1.数字类型(number)
// js中数据类型：Number
// ts中数据类型：number

// 在js中定义一个变量的数据类型是通过赋值的方向来定义的，也是可以重复赋值的
// 首先我们要进行一个运算，计算相加
let num1 = 1
let num2 = 2
let sum = num1 + num2//3

// 非正常情况
let num3 = 3
let num4 = 4
// 不能将类型“string”分配给类型“number”。
num3 = "3"
let sum = num3 + num4

// 使用number定义数值类型
/**
 * number
 */
//十进制
let decLiteral: number = 6
//十六进制
let hexLiteral: number = 0xf00d
// ES6中的二进制
let binaryLiteral: number = 0b1010
// Es6中的八进制表示法
let octalLiteral: number = 0o744
// 特殊表示法
let notANumber: number = NaN
/**
 * 无穷大
 */
let infinityNumber: number = Infinity
/**
 * 无穷小
 */
// -infinity
// 当顶一万数字类型的数据的时候，在定义为str
let num: number = 1
num = "2222"//Error:不能将类型“string”分配给类型“number”。


// 2.布尔值类型(boolean)
// 布尔值是最基础的数据类型，在TypeScript中，使用boolean定义布尔值类型
let isDone: boolean = false
//编译通过 tsc xxx
//后面约定，未强调编译错误的代码，默认为编译通过


// 3.字符串类型(string)
// 使用string定义字符串类型：
/**
 * 字符串 string
 */
let myName: string = '小红'
let myAge: number = 12
//造句
let sentence = `my name is ${myName}My age is ${myAge}`
document.body.innerHTML=sentence


// 4.数组(Array<number>||number[])

// js中的数组定义
// 第一种：[]
let array=[]
// 第二种：new Array
let array=new Array()
array.push(1)

// TypeScript像JavaScript一样可以操作数组元素。
// 有两种方法可以定义数组
// 第一种，可以在元素类型后面接上[],表示由此类型元素组成的一个数组
/**
 * number[],string[]
 */
let list:number[]=[1,2,3,4]
let listString:string[]=['1','2','3']
// 任何数据错误都会进行提示
let list:number[]=[1,2,3,'4']
//报错：不能将类型“string”分配给类型“number”
// 第二种是使用数组泛型，Array<元素类型>
/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */
let list:number[]=[1,2,3]
list.push(6)
let listString:string[]=['1','2','3']
list.uunshif('9')
let arrayList:Array<number>=[1,2,3]
let stringList:Array<string>=['1','2','3']
//报错：不能将类型“string”分配给类型“number”
let arrayList:Array<number>=[1,2,'3']
// 所有数组方法依旧能用


//5. undefined和null类型
// null和undefined有一些共同特点，所以我们放在一起讲，说他们有共同特点，
// 是因为在JavaScript中，undefined和null是两个基本数据类型，在TypeScript中，这两者都有各自的类型既undefined和null
// 也就是说他们即使实际的值，也是类型，
let u:undefined=undefined
let n:null=null


// 6.对象(object)
// js中定义对象的方法
// 第一种{}
let object={}
// 第二种 new Object{}
let object =new object()
// 第三种 使用字面量方法创建对象
let person={name:'zhang',age:20}
// 第四种 工厂模式创建对象
var xm = new Object();
xm.name = "小明";
xm.age = 18;
xm.sayHi = function(){
    console.log("您好呀，吃了没，我叫：" + this.name + ",我今年" + this.age + "岁了");
}
// 第五中 构造函数创建对象
function Star (uname,uage){
    this.uname=uname
    this.uage=uage
    this.sing=function(){
        console.log("唱起来！！！");
        
    }
}
var ldh=new Star("王刚",99)
console.log(ldh);
Star.dance=function(){
    console.log(1111);
    
}
Star.dance()
// object表示非原始类型，也就是number，`string`，`boolean`，`symbol`，`null`或undefined之外的类型
// 在ts中对象的使用
// 使用object类型，就可以更好地表示想object，create这样的Api
declare function create(o:object | null) : void
create({props: 0})
create(null)
create(3222) // 类型“number”的参数不能赋给类型“object”的参数。
create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
create(undefined) // Error类型“undefined”的参数不能赋给类型“object | null”的参数
// 简单
let obj: {name: string}
obj = {name: '小红', age: 13}


// 7.元组(Tuple)
// 数组：合并相同类型的对象，长度不限
// 元组(Tuple):合并了不同类型的对象，已知长度
// 定义一个具有`string`,`number`的数组
let tom:[string,number]=['Tom',]
// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
let tom:[string,number]
tom[0]='Tom'
tom[1]=25
tom[0].slice(1)
tom[1].toFixed(2)


8.枚举(enumm)
// enumm类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一个数组赋值有好的名字
/**
 * 枚举
 * enum
 * 当定义的变量越多,我们单独封装,会越好维护以后得项目,方便项目的查看
 */
enum Color{
    /**
     * 红色
     */
    Red=1,
     /**蓝色 */
     Blue = 2,
     /**绿色 */
     Green = 3
}
let c:Color=Color.Green
console.log(c);


// 9.Any(any)
// ​	JavaScript 的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能清楚地知道一个值到底是什么类型，这时就需要用到 any 类型，即任意类型。我们来看例子：
let value: any;
value = 123;
value = "abc";
value = false;
// ​	你可以看到，我们定义变量 value，指定它的类型为 any，接下来赋予任何类型的值都是可以的。
// ​	我们还可以在定义数组类型时使用 any 来指定数组中的元素类型为任意类型：
const array: any[] = [1, "a", true];
//但是请注意，不要滥用 any，如果任何值都指定为 any 类型，那么 TypeScript 将失去它的意义。
// 所以如果类型是未知的，更安全的做法是使用unknown类型，我们本小节后面会讲到。

// 10.void类型
// void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到：
/**
 * void类型
 */
 function alertName(): void  {
    console.log('My name is void');  
}
/**
 * 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 */
 function alertNames(): string{
    console.log('My name is void');  
    return 'My Name is string'
}
// **void 类型的变量只能赋值为 `undefined``**，**其他类型不能赋值给 void 类型的变量**。


// 11.never类型
// 1. `never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。
// 2. `never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。
// 简单来说就是用来抛错
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}







