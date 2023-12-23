"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
var uuid_1 = require("uuid");
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.randomDate = function (fromdate, todate) {
        var from = fromdate ? fromdate : randomIntFromInterval(1800, new Date().getFullYear());
        var to = todate ? todate : randomIntFromInterval(1800, new Date().getFullYear());
        return generateRandomDate(new Date(from, 0, 1), new Date(to, 0, 1));
    };
    Random.randomColor = function (data) {
        switch (data) {
            case "hash":
                return rgbToHex(red(), green(), blue());
            default:
                return "rgb(" + red() + "," + green() + "," + blue() + ")";
        }
    };
    Random.randomId = function () {
        return (0, uuid_1.v4)();
    };
    return Random;
}());
exports.Random = Random;
function red() {
    return randomIntFromInterval(0, 255);
}
function green() {
    return randomIntFromInterval(0, 255);
}
function blue() {
    return randomIntFromInterval(0, 255);
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
function generateRandomDate(from, to) {
    return new Date(from.getTime() +
        Math.random() * (to.getTime() - from.getTime()));
}
