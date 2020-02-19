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
var stats_progress_bar_1 = require("../data/stats-progress-bar");
var StatsProgressBarService = /** @class */ (function (_super) {
    __extends(StatsProgressBarService, _super);
    function StatsProgressBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)'
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)'
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)'
            },
        ];
        return _this;
    }
    StatsProgressBarService.prototype.getProgressInfoData = function () {
        return rxjs_1.of(this.progressInfoData);
    };
    StatsProgressBarService = __decorate([
        core_1.Injectable()
    ], StatsProgressBarService);
    return StatsProgressBarService;
}(stats_progress_bar_1.StatsProgressBarData));
exports.StatsProgressBarService = StatsProgressBarService;
