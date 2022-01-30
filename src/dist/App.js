"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// 组件
var PageNotFound_1 = require("pages/PageNotFound");
var PageFirst_1 = require("pages/PageFirst");
var App = function (props) {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(react_router_dom_1.Navigate, { to: '/first' }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/first", element: react_1["default"].createElement(PageFirst_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(PageNotFound_1["default"], null) }))));
};
exports["default"] = App;
