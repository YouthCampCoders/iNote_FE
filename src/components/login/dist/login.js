"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.less");
var wechat_png_1 = require("../../assets/images/PageFirst/wechat.png");
var sdkRequest_1 = require("../../services/sdkRequest");
var login = function (props) {
    // let [phoneNumber, setPhoneNumer] = useState('') 
    // 显示主页内容
    var out = function () {
        var start = document.querySelector('.phoneLogin');
        start.style.display = "none";
        document.documentElement.style.overflow = 'visible';
    };
    // 具体什么方式登录
    var choose = function (way) {
        var login = document.querySelector('.login');
        var otherLogin = document.querySelector('.otherLogin');
        var wechat = document.querySelector('.wechatLogin');
        switch (way) {
            case "phone":
                login.style.display = 'block';
                otherLogin.style.display = "none";
                break;
            case "other":
                login.style.display = 'none';
                otherLogin.style.display = "block";
                break;
            case "wechat":
                wechat.style.display = 'block';
                otherLogin.style.display = "none";
                break;
            case "wxOther":
                wechat.style.display = 'none';
                otherLogin.style.display = "block";
                break;
        }
    };
    // 获取验证码
    var getVerifyCode = function () {
        sdkRequest_1.loginRequest({
            url: "user/sendMessage",
            method: 'get',
            params: {}
        }).then(function (res) {
            console.log(res);
        });
    };
    return react_1["default"].createElement("div", { className: "phoneLogin" },
        react_1["default"].createElement("div", { className: "mask", onClick: out }),
        react_1["default"].createElement("div", { className: "bounce" },
            react_1["default"].createElement("span", { className: "title" }, "iNote Login"),
            react_1["default"].createElement("div", { className: "login" },
                react_1["default"].createElement("form", { action: "" },
                    react_1["default"].createElement("div", { className: "phone" },
                        react_1["default"].createElement("span", { className: "label" }, "\u624B\u673A\u53F7"),
                        react_1["default"].createElement("input", { type: "tel", name: "", id: "phone" })),
                    react_1["default"].createElement("div", { className: "verify" },
                        react_1["default"].createElement("span", { className: "label code" }, "\u9A8C\u8BC1\u7801"),
                        react_1["default"].createElement("input", { type: "text", className: "verifycode" }),
                        react_1["default"].createElement("div", { className: "get", onClick: getVerifyCode }, "\u83B7\u53D6\u9A8C\u8BC1\u7801"))),
                react_1["default"].createElement("span", { className: "prompt" }, "\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55\u65F6\uFF0C\u5982\u672A\u6CE8\u518C\u5219\u81EA\u52A8\u6CE8\u518C\u8D26\u53F7"),
                react_1["default"].createElement("button", { className: "submit" }, "\u767B\u5F55"),
                react_1["default"].createElement("span", { className: "other", onClick: function () { return choose("other"); } }, "\u5176\u4ED6\u65B9\u5F0F\u767B\u9646\uFF1F")),
            react_1["default"].createElement("div", { className: "otherLogin" },
                react_1["default"].createElement("form", { action: "" },
                    react_1["default"].createElement("div", { className: "pawLogin" },
                        react_1["default"].createElement("span", { className: "label" }, "\u8D26\u53F7"),
                        react_1["default"].createElement("input", { type: "tel", name: "", id: "" })),
                    react_1["default"].createElement("div", { className: "verify" },
                        react_1["default"].createElement("span", { className: "label code" }, "\u5BC6\u7801"),
                        react_1["default"].createElement("input", { type: "password", className: "password" }))),
                react_1["default"].createElement("div", { className: "choose" },
                    react_1["default"].createElement("span", { className: "label otherWe" }, "\u5176\u4ED6"),
                    react_1["default"].createElement("img", { src: wechat_png_1["default"], alt: "", onClick: function () { return choose("wechat"); } })),
                react_1["default"].createElement("button", { className: "submit" }, "\u767B\u5F55"),
                react_1["default"].createElement("span", { className: "other", onClick: function () { return choose("phone"); } }, "\u624B\u673A\u53F7\u767B\u5F55\uFF1F")),
            react_1["default"].createElement("div", { className: "wechatLogin" },
                react_1["default"].createElement("img", { src: "", alt: "" }),
                react_1["default"].createElement("div", { className: "prompt" },
                    "\u6253\u5F00\u5FAE\u4FE1-",
                    '>',
                    "\u626B\u4E00\u626B"),
                react_1["default"].createElement("span", { className: "other", onClick: function () { return choose("wxOther"); } }, "\u5176\u4ED6\u65B9\u5F0F\u767B\u9646\uFF1F"))));
};
exports["default"] = login;
