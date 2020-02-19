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
var country_order_1 = require("../data/country-order");
var CountryOrderService = /** @class */ (function (_super) {
    __extends(CountryOrderService, _super);
    function CountryOrderService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        _this.countriesCategoriesLength = _this.countriesCategories.length;
        return _this;
    }
    CountryOrderService.prototype.generateRandomData = function (nPoints) {
        return Array.from(Array(nPoints)).map(function () {
            return Math.round(Math.random() * 20);
        });
    };
    CountryOrderService.prototype.getCountriesCategories = function () {
        return rxjs_1.of(this.countriesCategories);
    };
    CountryOrderService.prototype.getCountriesCategoriesData = function (country) {
        return rxjs_1.of(this.generateRandomData(this.countriesCategoriesLength));
    };
    CountryOrderService = __decorate([
        core_1.Injectable()
    ], CountryOrderService);
    return CountryOrderService;
}(country_order_1.CountryOrderData));
exports.CountryOrderService = CountryOrderService;
