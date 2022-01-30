"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.less");
var illustration_png_1 = require("../../assets/images/PageFirst/illustration.png");
var icon_png_1 = require("../../assets/images/PageFirst/icon.png");
var login_1 = require("../../components/login");
var PageFirst = function (props) {
    var bounce = function () {
        var start = document.querySelector('.phoneLogin');
        start.style.display = "block";
        // 将滚动条滚至顶端
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = 'hidden';
    };
    return react_1["default"].createElement("div", { id: "first" },
        react_1["default"].createElement("div", { className: "first" },
            react_1["default"].createElement("div", { className: "text" },
                react_1["default"].createElement("span", { className: "inote" }, "iNote"),
                react_1["default"].createElement("span", { className: "slogan" }, "You Note, We Code!"),
                react_1["default"].createElement("button", { className: 'button', onClick: bounce }, "Get Start")),
            react_1["default"].createElement("img", { className: "illustration", src: illustration_png_1["default"], alt: "" })),
        react_1["default"].createElement(login_1["default"], null),
        react_1["default"].createElement("div", { className: "second" },
            react_1["default"].createElement("span", { className: "slogan" }, "You Note, We Code!"),
            react_1["default"].createElement("span", { className: "show" }, "You Note, We Code!You Note, We Code!You Note, We Code!You Note, We Code!"),
            react_1["default"].createElement("div", { className: "card" },
                react_1["default"].createElement("div", { className: "left" },
                    react_1["default"].createElement("img", { src: icon_png_1["default"], alt: "", className: "icon" }),
                    react_1["default"].createElement("span", { className: "abin" }, "\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF"),
                    react_1["default"].createElement("div", { className: "content" }, "\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408")),
                react_1["default"].createElement("div", { className: "right" },
                    react_1["default"].createElement("img", { src: icon_png_1["default"], alt: "", className: "icon" }),
                    react_1["default"].createElement("span", { className: "abin" }, "\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF"),
                    react_1["default"].createElement("div", { className: "content" }, "\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408\u827E\u5BBE\u6D69\u65AF\u9057\u5FD8\u66F2\u7EBF\u8FDB\u884C\u63A8\u9001\u914D\u5408"))),
            react_1["default"].createElement("span", { className: "logo" }, "\u00A9YouthCampCoders 2021 All Rights Reserved")));
};
exports["default"] = PageFirst;
