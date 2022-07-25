// // ts中的类
// class People{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age=age
//         this.name=name
//     }
//     sayHi():string{
//         return this.name
//     }
// }
// let p1=new People('张三',12)
// console.log(p1);

// class Rabbit extends People{
//    constructor(name:string,age:number){
//      super(name,age)
//    }
// }
// let d1=new Rabbit('兔子',13)
// console.log(d1.name);
// console.log(d1.age);
// console.log(d1.sayHi());


// interface IAnimal{
//     name:string,
//     eat():string
// }
// class Animal implements IAnimal{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     eat():string{
//         return ''
//     }
// }
// let p1 = new Animal('小狗',12)
// console.log(p1);

class People{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    sport():string{
        return `${this.name}会运动`
    }
}

let p5=new People('小明',18)
console.log(p5.sport());
console.log(p5.age);


class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a1 = new Animal('动物')
// 父类外获取name属性
console.log(a1.name);

// 声明 狗类 继承 动物类
class Dog extends Animal {
    constructor(name:string){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d2 = new Dog('哈士奇')
// 子类 类外
console.log(d2.name);
console.log(d2.getName());

class Animal1{
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

console.log(Animal1.prop); 

class Animal2 {
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    static sayHello():string{
        return 'hello'
    }
}
// Animal.prop = 'haha'

console.log(Animal2.prop); // 1

console.log(Animal2.sayHello()); // hello

let a3 = new Animal2('小狗')



class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃鱼`);
        
    }
}

abstract class Animal3 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

abstract class Animal4 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
// 狗类继承 动物类
class Dog1 extends Animal {
    constructor(name:string){
        super(name)
    }
}

abstract class Animal5 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

abstract class Animal6 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

// let a = new Animal('小明')


class Dog23 extends Animal {
    constructor(name:string){
        super(name)
    }
    // 派生类中具体实现抽象方法
    eat(): string {
        return this.name
    }
}

interface IAnimal {
    name: string
    eat():string
}

class Animal7 implements IAnimal {
    name: string;
    constructor(name:string){
        this.name = name
    }
    eat(): string {
        return ''
    }
}

interface Ianimal {
    name: string
}
interface IPeople extends Ianimal {
    work():void
}

class Coder implements IPeople {
    name: string
    constructor(name:string){
        this.name = name
    }
    work(): void {
        
    }
}

// // ts中的类
// class People{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age=age
//         this.name=name
//     }
//     sayHi():string{
//         return this.name
//     }
// }
// let p1=new People('张三',12)
// console.log(p1);

// class Rabbit extends People{
//    constructor(name:string,age:number){
//      super(name,age)
//    }
// }
// let d1=new Rabbit('兔子',13)
// console.log(d1.name);
// console.log(d1.age);
// console.log(d1.sayHi());


// interface IAnimal{
//     name:string,
//     eat():string
// }
// class Animal implements IAnimal{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     eat():string{
//         return ''
//     }
// }
// let p1 = new Animal('小狗',12)
// console.log(p1);

class People13{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    sport():string{
        return `${this.name}会运动`
    }
}

let p3=new People('小明',18)
console.log(p3.sport());
console.log(p3.age);


class Animal19 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a10 = new Animal('动物')
// 父类外获取name属性
console.log(a1.name);

// 声明 狗类 继承 动物类
class Dog8 extends Animal {
    constructor(name:string){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d6 = new Dog('哈士奇')
// 子类 类外
console.log(d6.name);
console.log(d6.getName());

class Animal16{
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

console.log(Animal1.prop); 

class Animal26 {
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    static sayHello():string{
        return 'hello'
    }
}
// Animal.prop = 'haha'

console.log(Animal2.prop); // 1

console.log(Animal2.sayHello()); // hello

let a36 = new Animal2('小狗')



class Cat6 extends Animal{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃鱼`);
        
    }
}

abstract class Animal36 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

abstract class Animal46 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
// 狗类继承 动物类
class Dog15 extends Animal {
    constructor(name:string){
        super(name)
    }
}

abstract class Animal55 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

abstract class Animal63 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

// let a = new Animal('小明')


class Dog2311 extends Animal {
    constructor(name:string){
        super(name)
    }
    // 派生类中具体实现抽象方法
    eat(): string {
        return this.name
    }
}

interface IAnimal {
    name: string
    eat():string
}

class Animal71 implements IAnimal {
    name: string;
    constructor(name:string){
        this.name = name
    }
    eat(): string {
        return ''
    }
}

interface Ianimal {
    name: string
}
interface IPeople extends Ianimal {
    work():void
}

class Coder1 implements IPeople {
    name: string
    constructor(name:string){
        this.name = name
    }
    work(): void {
        
    }
}







// // ts中的类
// class People{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age=age
//         this.name=name
//     }
//     sayHi():string{
//         return this.name
//     }
// }
// let p1=new People('张三',12)
// console.log(p1);

// class Rabbit extends People{
//    constructor(name:string,age:number){
//      super(name,age)
//    }
// }
// let d1=new Rabbit('兔子',13)
// console.log(d1.name);
// console.log(d1.age);
// console.log(d1.sayHi());


// interface IAnimal{
//     name:string,
//     eat():string
// }
// class Animal implements IAnimal{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     eat():string{
//         return ''
//     }
// }
// let p1 = new Animal('小狗',12)
// console.log(p1);

class People1{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    sport():string{
        return `${this.name}会运动`
    }
}

let p=new People('小明',18)
console.log(p.sport());
console.log(p.age);


class Animal212 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        // 父类内部获取name属性
        return this.name
    }
}
// 实例化父类
let a12 = new Animal('动物')
// 父类外获取name属性
console.log(a1.name);

// 声明 狗类 继承 动物类
class Dog2 extends Animal {
    constructor(name:string){
        super(name)
    }
    run():string{
        // 子类内部获取name属性
        return this.name + '会运动'
    }
}

// 实例化子类
let d = new Dog('哈士奇')
// 子类 类外
console.log(d.name);
console.log(d.getName());

class Animal21{
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

console.log(Animal1.prop); 

class Animal22 {
    name:string
    static prop: string = '1'
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    static sayHello():string{
        return 'hello'
    }
}
// Animal.prop = 'haha'

console.log(Animal2.prop); // 1

console.log(Animal2.sayHello()); // hello

let a32 = new Animal2('小狗')



class Cat2 extends Animal{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}吃鱼`);
        
    }
}

abstract class Animal32 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

abstract class Animal42 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
// 狗类继承 动物类
class Dog21 extends Animal {
    constructor(name:string){
        super(name)
    }
}

abstract class Animal51 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

abstract class Animal61 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

// let a = new Animal('小明')


class Dog231 extends Animal {
    constructor(name:string){
        super(name)
    }
    // 派生类中具体实现抽象方法
    eat(): string {
        return this.name
    }
}

interface IAnimal {
    name: string
    eat():string
}

class Animal711 implements IAnimal {
    name: string;
    constructor(name:string){
        this.name = name
    }
    eat(): string {
        return ''
    }
}

interface Ianimal {
    name: string
}
interface IPeople extends Ianimal {
    work():void
}

class Coder11 implements IPeople {
    name: string
    constructor(name:string){
        this.name = name
    }
    work(): void {
        
    }
}