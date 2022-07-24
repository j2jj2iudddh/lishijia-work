var State;
(function (State) {
    State[State["Success"] = 200] = "Success";
    State[State["Ready"] = 4] = "Ready";
})(State || (State = {}));
function getAJax(params) {
    var ajax = new XMLHttpRequest();
    ajax.open(params.methods, params.url);
    ajax.send(params.data);
    ajax.onreadystatechange = function () {
        if (ajax.status === State.Success && ajax.readyState === State.Ready) {
            console.log('成功了');
        }
    };
}
// interface use4:string    ------  不能直接声明基础类型
// 声明类型不为 "void" 或 "any" 的函数必须返回值
function Inp(arr) {
    return arr.slice(0, 2);
}
var use1Inp = Inp('zifuchuan');
console.log(use1Inp);
var usejic = {
    sex: true,
    height: 180,
    age: 21
};
var usejic2 = {
    name: 'libo',
    sex: true
};
// type jic5 extends  ----  type不能继承
/**
 * 接口定义函数类型，完整的写法
 */
var add1;
add1 = function (arg1, arg2) { return arg1 + arg2; };
var add2 = function (arg1, arg2) { return arg1 + arg2; };
var add3 = function (arg1, arg2) { return arg1 + arg2; };
var add4 = function (arg1, arg2) { return arg1 + arg2; };
