/**
 * 1.在编辑器执行过程提示错误信息
 * 2.ts是js的超集，所有js结尾的文件，全部可以改成ts结尾，并且执行报错
 * 3.ts具有隐推导，可以添加类型
 * 4.ts不能直接在浏览器中运行，需要编译器进行编写
 */
/**
 * 数据类型 number
 */
var num = 123;
var num1 = 234;
//不能将类型“string”分配给类型“number”
//num='ddd'
var sum = num + num1;
console.log(sum);
/**
 * 字符串：string
 */
var name1 = "我是55";
var age = 22;
var persionInfo = "My name is ".concat(name1, ",age is ").concat(age);
document.body.innerHTML = persionInfo;
console.log(persionInfo);
/**
 * boolean 类型
 * Boolean
 * false true
 */
var boolean = false;
/**
 * js 创建数组的方式
 * 1.字面量创建[]
 * 2.new Array
 * -------------
 * []
 * Array<[]>
 */
/**
 * 第一种 字面量创建方式
 */
var arry = [];
/**第二种 */
var Arry = [];
//---------------------
//不能将类型“string”分配给类型“number;”
//let numArry:number[]=['1']
/**
 *只能放数字类型，且不长度
 */
var numArry = [1, 2, 3, 4, 5, 6];
//不能将类型“number"分配给类型‘string’
//let stringArray:Array:Array<string>=[12,2232]
var stringArray = ['1', '2', '3'];
/**
 * 对象 object
 * 字面量创建方法
 */
var obj;
var obj2;
var obj3;
obj = { name: 'wsl', age: 12 };
obj3 = { name: 'wsq', age: 56 };
/**
 * 元组: Tuple
 * 定义一个人的信息,比如: name, age, sex, height
 */
var persion = ['师福气', 24, true, 181];
// let persionInfos = 
// console.log(persion[0]);
// persion.push(40)
// console.log(persion);
/**
 * enum 枚举
 */
var Color;
(function (Color) {
    /**
     * 红色
     */
    Color[Color["Ok"] = 1] = "Ok";
    Color[Color["Error"] = 400] = "Error";
    /**
     * 蓝色
     */
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
/**
 * Any
 */
var value;
value = 12;
value = "你好";
value = true;
/**
 * Void:  用于函数,和any是相反的
 */
function noReturn() {
    console.log('我是一个没返回值的函数');
}
// 其声明类型不为 "void" 或 "any" 的函数必须返回值。
function haveReturn() {
    // 不能将类型“number”分配给类型“string”。
    return 'hello world';
}
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
var others = { name: '包胜利', age: 18, sex: false };
// 展示到页面中 造句
/**
 * 联合类型(|)
 * 联合类型就是取多个类型的或集，使用 | 符号定义，被|符链接的多个类型构成类型，满足其中一个即可
 */
var unite;
unite = 1;
unite = 'hello world';
// 不能将类型“boolean”分配给类型“string | number”。
//unite = false
/**
 * 类型断言
 */
/***
* 类型断言
* 尖括号写类型断言
*/
var someValue;
someValue = 123;
someValue = "dddd";
var someValueLength = someValue.length;
var someName;
someName = 123;
someName = '123';
var someNameValueLength = someName.length;
