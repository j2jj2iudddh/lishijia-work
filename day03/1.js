/**
 * enum的详解
 */
/**
 * ---数字类型的定义
 *
 * /**
 * 数字类型
 * 1.语法使用的是es6的语法，Uploading
 * 2.自动添加指定索引符合
 * 3.我们可以想访问对象一样使用，','和'[]'两种方式访问里面的值
 *  */
var Status;
(function (Status) {
    Status[Status["Uploading"] = 0] = "Uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Falied"] = 2] = "Falied";
})(Status || (Status = {}));
console.log(Status.Falied);
console.log(Status['Falied']);
console.log(Status.Success);
/**
 * 指定索引值
 */
var Anmimal;
(function (Anmimal) {
    /**
     * 猪
     */
    Anmimal[Anmimal["pig"] = 200] = "pig";
    /**
     * 狗
     */
    Anmimal[Anmimal["Dog"] = 201] = "Dog";
    /**
     * 猫
     */
    Anmimal[Anmimal["Cat"] = 300] = "Cat";
    /**
     * 熊猫
     */
    Anmimal[Anmimal["Band"] = 301] = "Band";
})(Anmimal || (Anmimal = {}));
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Band);
var getValue = function () {
    return 1;
};
//计算和常量
var Constant;
(function (Constant) {
    Constant[Constant["a"] = getValue()] = "a";
    Constant[Constant["b"] = void 0] = "b";
    Constant[Constant["c"] = void 0] = "c";
})(Constant || (Constant = {}));
/**
 * 4.反向映射
 */
var Statuss;
(function (Statuss) {
    Statuss[Statuss["Success"] = 200] = "Success";
    Statuss[Statuss["NotFound"] = 404] = "NotFound";
    Statuss[Statuss["Error"] = 500] = "Error";
})(Statuss || (Statuss = {}));
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);
var names = '小米';
var Meessage;
(function (Meessage) {
    Meessage["Error"] = "erroe";
})(Meessage || (Meessage = {}));
var Anima;
(function (Anima) {
    Anima[Anima["Dog"] = 1] = "Dog";
    Anima[Anima["Cat"] = 2] = "Cat";
})(Anima || (Anima = {}));
