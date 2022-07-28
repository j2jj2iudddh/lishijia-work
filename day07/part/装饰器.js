//定义：装饰器是一种新的声明，它能够作用于类声明、方法、访问符、属性和参数 
//符号：@(自定义的函数名称)
//装饰器要紧挨着要修饰的内容的前面
// function stopProp(){
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function setName() {
    console.log('get setName');
    return function (target) {
        console.log('setName');
    };
}
function setAge() {
    console.log('get setAge');
    return function (target) {
        console.log('setAge');
    };
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test = __decorate([
        setName(),
        setAge()
    ], Test);
    return Test;
}());
