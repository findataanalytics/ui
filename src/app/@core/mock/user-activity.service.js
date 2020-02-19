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
var user_activity_1 = require("../data/user-activity");
var UserActivityService = /** @class */ (function (_super) {
    __extends(UserActivityService, _super);
    function UserActivityService(periods) {
        var _this = _super.call(this) || this;
        _this.periods = periods;
        _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear()
        };
        return _this;
    }
    UserActivityService.prototype.generateUserActivityRandomData = function (date) {
        return {
            date: date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100)
        };
    };
    UserActivityService.prototype.getDataWeek = function () {
        var _this = this;
        return this.periods.getWeeks().map(function (week) {
            return _this.generateUserActivityRandomData(week);
        });
    };
    UserActivityService.prototype.getDataMonth = function () {
        var _this = this;
        var currentDate = new Date();
        var days = currentDate.getDate();
        var month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map(function (_, index) {
            var date = index + 1 + " " + month;
            return _this.generateUserActivityRandomData(date);
        });
    };
    UserActivityService.prototype.getDataYear = function () {
        var _this = this;
        return this.periods.getYears().map(function (year) {
            return _this.generateUserActivityRandomData(year);
        });
    };
    UserActivityService.prototype.getUserActivityData = function (period) {
        return rxjs_1.of(this.data[period]);
    };
    UserActivityService = __decorate([
        core_1.Injectable()
    ], UserActivityService);
    return UserActivityService;
}(user_activity_1.UserActivityData));
exports.UserActivityService = UserActivityService;
