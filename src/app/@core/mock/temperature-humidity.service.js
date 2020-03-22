"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var temperature_humidity_1 = require("../data/temperature-humidity");
var TemperatureHumidityService = /** @class */ (function (_super) {
    __extends(TemperatureHumidityService, _super);
    function TemperatureHumidityService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30
        };
        _this.humidityDate = {
            value: 87,
            min: 0,
            max: 100
        };
        return _this;
    }
    TemperatureHumidityService.prototype.getTemperatureData = function () {
        return rxjs_1.of(this.temperatureDate);
    };
    TemperatureHumidityService.prototype.getHumidityData = function () {
        return rxjs_1.of(this.humidityDate);
    };
    TemperatureHumidityService = __decorate([
        core_1.Injectable()
    ], TemperatureHumidityService);
    return TemperatureHumidityService;
}(temperature_humidity_1.TemperatureHumidityData));
exports.TemperatureHumidityService = TemperatureHumidityService;
