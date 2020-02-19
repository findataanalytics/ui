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
var traffic_bar_1 = require("../data/traffic-bar");
var TrafficBarService = /** @class */ (function (_super) {
    __extends(TrafficBarService, _super);
    function TrafficBarService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod()
        };
        return _this;
    }
    TrafficBarService.prototype.getDataForWeekPeriod = function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB'
        };
    };
    TrafficBarService.prototype.getDataForMonthPeriod = function () {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB'
        };
    };
    TrafficBarService.prototype.getDataForYearPeriod = function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB'
        };
    };
    TrafficBarService.prototype.getTrafficBarData = function (period) {
        return rxjs_1.of(this.data[period]);
    };
    TrafficBarService = __decorate([
        core_1.Injectable()
    ], TrafficBarService);
    return TrafficBarService;
}(traffic_bar_1.TrafficBarData));
exports.TrafficBarService = TrafficBarService;
