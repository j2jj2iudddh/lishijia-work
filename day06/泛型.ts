// /**
//  * 1.泛型的概念：指在定义
//  */

// const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// getArray([1],2).forEach(item=>{
//     console.log(item.length);
// })
// let result1=getArray(1,2)
// result1.forEach(item=>{
//     console.log(item.length);
    
// })
// getArray(2,3)



// /**继承 */

// /**
//  * 原型和继承
//  * 面向对象的特点：继承 多态 封装
//  */
// function Anmation(name){
//     this.name=name
//     this.Sayhi=function(){
//         console.log('我是一个继承函数');
        
//     }
// }
// Anmation.prototype.age='12'
// Anmation.prototype.Task=function(){
//     console.log('我');
// }

// let cat=new Anmation('Cat')
// cat.prototype

// console.log(cat.name);
// console.log(cat.Sayhi);
// console.log(cat.age);
// console.log(cat.Task);


// /**
//  * ES6的类的声明
//  */

// class Persion{
//     /**
//      * 定义属性
//      */


//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     /**
//      * 定义方法
//      */
//     SayHi(){
//         return this.name
//     }
// }
// let p=new Persion('小红',12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SayHi());

// class People{
//     name:string
//     age:number
//     constructor(name,age){
//         this.age=age
//         this.name=name
//     }
//     sayHi():string{
//         return this.name
//     }
// }

// let P1=new People('张三',12)
// console.log(P1);

// class Anmial{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     run(){
//         console.log('我在运动');
        
//     }
// }
// class Dog extends Anmation{
//     constructor(props){
//         super(props)
//     }
// }
// let d=new Dog('哈士奇')
// console.log(d.name);
// d.run()

// class People{
//     name:string;
//     age:number;
//     sex:number;
//     constructor(name:string,age:number){
//         this.age=age
//         this.name=name
//     }
//     sayHi():number{
//         return this.age
//     }
// }

// class Rabbit extends People{
//     props: number | string
// }



// interface IAnimal{
//     name:string,
//     eat():string
// }

// class implements IAnimal{
//     name: string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }

// let p1=new Animal('效果',12)
// console.log(p1);


/**
 * 1.泛型的概念：指在定义
 */

//  const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// getArray([1],2).forEach(item=>{
//     console.log(item.length);
// })
// let result1=getArray(1,2)
// result1.forEach(item=>{
//     console.log(item.length);
    
// })
// getArray(2,3)



// /**继承 */

// /**
//  * 原型和继承
//  * 面向对象的特点：继承 多态 封装
//  */
// function Anmation(name){
//     this.name=name
//     this.Sayhi=function(){
//         console.log('我是一个继承函数');
        
//     }
// }
// Anmation.prototype.age='12'
// Anmation.prototype.Task=function(){
//     console.log('我');
// }

// let cat=new Anmation('Cat')
// cat.prototype

// console.log(cat.name);
// console.log(cat.Sayhi);
// console.log(cat.age);
// console.log(cat.Task);


// /**
//  * ES6的类的声明
//  */

// class Persion{
//     /**
//      * 定义属性
//      */


//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     /**
//      * 定义方法
//      */
//     SayHi(){
//         return this.name
//     }
// }
// let p=new Persion('小红',12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SayHi());

// class People{
//     name:string
//     age:number
//     constructor(name,age){
//         this.age=age
//         this.name=name
//     }
//     sayHi():string{
//         return this.name
//     }
// }

// let P1=new People('张三',12)
// console.log(P1);

// class Anmial{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     run(){
//         console.log('我在运动');
        
//     }
// }
// class Dog extends Anmation{
//     constructor(props){
//         super(props)
//     }
// }
// let d=new Dog('哈士奇')
// console.log(d.name);
// d.run()

// class People{
//     name:string;
//     age:number;
//     sex:number;
//     constructor(name:string,age:number){
//         this.age=age
//         this.name=name
//     }
//     sayHi():number{
//         return this.age
//     }
// }

// class Rabbit extends People{
//     props: number | string
// }



// interface IAnimal{
//     name:string,
//     eat():string
// }

// class implements IAnimal{
//     name: string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }

// let p1=new Animal('效果',12)
// console.log(p1);
/**
 * 1.泛型的概念：指在定义
 */

 const getArray=(value:any,times:number=5):any[]=>{
    return new Array(times).fill(value)
}

getArray([1],2).forEach(item=>{
    console.log(item.length);
})
let result1=getArray(1,2)
result1.forEach(item=>{
    console.log(item.length);
    
})
getArray(2,3)



/**继承 */

/**
 * 原型和继承
 * 面向对象的特点：继承 多态 封装
 */
function Anmation(name){
    this.name=name
    this.Sayhi=function(){
        console.log('我是一个继承函数');
        
    }
}
Anmation.prototype.age='12'
Anmation.prototype.Task=function(){
    console.log('我');
}

let cat=new Anmation('Cat')
cat.prototype

console.log(cat.name);
console.log(cat.Sayhi);
console.log(cat.age);
console.log(cat.Task);


/**
 * ES6的类的声明
 */

class Persion{
    /**
     * 定义属性
     */


    constructor(name,age){
        this.name=name,
        this.age=age
    }
    /**
     * 定义方法
     */
    SayHi(){
        return this.name
    }
}
let p=new Persion('小红',12)
console.log(p.age);
console.log(p.name);
console.log(p.SayHi());

class People{
    name:string
    age:number
    constructor(name,age){
        this.age=age
        this.name=name
    }
    sayHi():string{
        return this.name
    }
}

let P1=new People('张三',12)
console.log(P1);

class Anmial{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    run(){
        console.log('我在运动');
        
    }
}
class Dog extends Anmation{
    constructor(props){
        super(props)
    }
}
let d=new Dog('哈士奇')
console.log(d.name);
d.run()

class People{
    name:string;
    age:number;
    sex:number;
    constructor(name:string,age:number){
        this.age=age
        this.name=name
    }
    sayHi():number{
        return this.age
    }
}

class Rabbit extends People{
    props: number | string
}



interface IAnimal{
    name:string,
    eat():string
}

class implements IAnimal{
    name: string;
    age:number;
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}

let p1=new Animal('效果',12)
console.log(p1);
