//定义：装饰器是一种新的声明，它能够作用于类声明、方法、访问符、属性和参数 
//符号：@(自定义的函数名称)
//装饰器要紧挨着要修饰的内容的前面
// function stopProp(){

// }
// @stopProp

//装饰器组合
//装饰器可以组合，也就是对于同一个目标，引用多个装饰器
//可以写在一行
// @setName @setAge 
/**可以换行*/
// @setName
//@setAge
//装饰器的执行顺序
//装饰器工厂从上到下依次执行 ， 但是只是用于返回函数但不调用函数
//装饰器函数从下到上依次执行， 就是执行工厂函数返回的函数

//装饰器工厂
// function setName(){
//     console.log('get setName');
//     return function(target:any){
//         console.log('setName');
//     }
// }
// function setAge(){
//     console.log('get setAge');
//     return function(target:any){
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
// class Test{}

//类装饰器在类声明之前声明，要记着装饰器要紧挨着要修饰的内容，类装饰器应有于类的声明 
//类装饰器表达式会在运行时当做函数被调用，它由唯一一个参数，就是装饰的这个类
// let sign = null
// function setName(name:string){
//     return function(target:Function){
//         sign = target
//         console.log(target.name);
//     }
// }
// @setName('lison')//Info
// class Info{
//     constructor(){}
// }
// console.log(sign===Info);//true
// console.log(sign===Info.prototype.constructor);true

//通过装饰器，我们就可以修改类的元凶对象和构造函数
// function addName(constructor:{new():any}){
//     constructor.prototype.name='lison'
// }
// @addName
// class A{}
// const a=new A()
// console.log(a.name);

// function addName(constructor:{new():any}){
//     constructor.prototype.name='lison'
// }
// @addName
// class A {}
// interface A{
//     name:string
// }
// const a=new A()
// console.log(a.name)//lison

// function classDecrator<T extends {new(...args:any[]):{}}>(target:T){
//     return class extends target{
//         newProperty="new property"
//         hello='override'
//     }
// }
// @classDecrator
// class Greeter{
//     property='property'
//     hello:string;
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter('world'));

// Greeter {
//     property: 'property',
//     hello: 'override',
//     newProperty: 'new property'
//   }
  
// function classDecrator(target:any):any{
//     return class{
//         newProperty='new property'
//         hello='override'
//     }
// }
// @classDecrator
// class Greeter{
//     property='property'
//     hello:string
//     constructor(m:string){
//         this.hello=m
//     }
// }
// console.log(new Greeter('world'));
// { newProperty: 'new property', hello: 'override' }


//方法装饰器
// 方法装饰器用来处理类中方法，他可以处理方法的属性描述符，可以处理方法定义。方法装饰器在运行时也是被当做函数调用，含3个参数
// var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// // error Cannot redefine property: name


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"


