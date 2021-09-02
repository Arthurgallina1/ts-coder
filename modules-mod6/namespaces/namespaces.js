"use strict";
var Areas;
(function (Areas) {
    Areas.PI = 3.14;
    //this functions are all scoped
    function areaCinc(raio) {
        return Areas.PI * Math.pow(raio, 2);
    }
    Areas.areaCinc = areaCinc;
    let NestSpaceSquare;
    (function (NestSpaceSquare) {
        function areaRetancle(base, height) {
            return base * height;
        }
        NestSpaceSquare.areaRetancle = areaRetancle;
    })(NestSpaceSquare = Areas.NestSpaceSquare || (Areas.NestSpaceSquare = {}));
})(Areas || (Areas = {}));
const PI = 2.99;
console.log(Areas.areaCinc(20));
console.log(Areas.NestSpaceSquare.areaRetancle(10, 20));
console.log(Areas.PI);
