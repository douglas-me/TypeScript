var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil(name, color) {
        console.log('Hello ' + name);
        this.color = color;
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var basil = new SweetSweetBasil('Douglas', 'Green');
basil.getColor();
console.log(basil.color);
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, color) {
        return _super.call(this, name, color) || this;
    }
    Basil.prototype.setNewColor = function (color) {
        this.color = color;
    };
    return Basil;
}(SweetSweetBasil));
var Basil_2 = new Basil('Ortega', 'Azul');
Basil_2.getColor();
Basil_2.setNewColor('red');
Basil_2.getColor();
