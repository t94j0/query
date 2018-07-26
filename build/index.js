"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parse = exports.parse = function parse(search) {
  return search.slice(1).split("&").map(function (param) {
    var pair = param.split("=");
    return _defineProperty({}, pair[0], pair[1]);
  }).reduce(function (param, pair) {
    return Object.assign({}, param, pair);
  });
};

var build = exports.build = function build(object) {
  return "?" + Object.keys(object).filter(function (k) {
    return k !== '' && k !== null;
  }).map(function (k) {
    return k + "=" + object[k];
  }).join("&");
};