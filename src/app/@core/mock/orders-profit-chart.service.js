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
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var orders_profit_chart_1 = require("../data/orders-profit-chart");
var OrdersProfitChartService = /** @class */ (function (_super) {
    __extends(OrdersProfitChartService, _super);
    function OrdersProfitChartService(ordersChartService, profitChartService) {
        var _this = _super.call(this) || this;
        _this.ordersChartService = ordersChartService;
        _this.profitChartService = profitChartService;
        _this.summary = [
            {
                title: 'Marketplace',
                value: 3654
            },
            {
                title: 'Last Month',
                value: 946
            },
            {
                title: 'Last Week',
                value: 654
            },
            {
                title: 'Today',
                value: 230
            },
        ];
        return _this;
    }
    OrdersProfitChartService.prototype.getOrderProfitChartSummary = function () {
        return rxjs_1.of(this.summary);
    };
    OrdersProfitChartService.prototype.getOrdersChartData = function (period) {
        return rxjs_1.of(this.ordersChartService.getOrdersChartData(period));
    };
    OrdersProfitChartService.prototype.getProfitChartData = function (period) {
        return rxjs_1.of(this.profitChartService.getProfitChartData(period));
    };
    OrdersProfitChartService = __decorate([
        core_1.Injectable()
    ], OrdersProfitChartService);
    return OrdersProfitChartService;
}(orders_profit_chart_1.OrdersProfitChartData));
exports.OrdersProfitChartService = OrdersProfitChartService;
