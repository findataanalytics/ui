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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var auth_1 = require("@nebular/auth");
var security_1 = require("@nebular/security");
var rxjs_1 = require("rxjs");
var module_import_guard_1 = require("./module-import-guard");
var utils_1 = require("./utils");
var users_1 = require("./data/users");
var electricity_1 = require("./data/electricity");
var smart_table_1 = require("./data/smart-table");
var user_activity_1 = require("./data/user-activity");
var orders_chart_1 = require("./data/orders-chart");
var profit_chart_1 = require("./data/profit-chart");
var traffic_list_1 = require("./data/traffic-list");
var earning_1 = require("./data/earning");
var orders_profit_chart_1 = require("./data/orders-profit-chart");
var traffic_bar_1 = require("./data/traffic-bar");
var profit_bar_animation_chart_1 = require("./data/profit-bar-animation-chart");
var temperature_humidity_1 = require("./data/temperature-humidity");
var solar_1 = require("./data/solar");
var traffic_chart_1 = require("./data/traffic-chart");
var stats_bar_1 = require("./data/stats-bar");
var country_order_1 = require("./data/country-order");
var stats_progress_bar_1 = require("./data/stats-progress-bar");
var visitors_analytics_1 = require("./data/visitors-analytics");
var security_cameras_1 = require("./data/security-cameras");
var users_service_1 = require("./mock/users.service");
var electricity_service_1 = require("./mock/electricity.service");
var smart_table_service_1 = require("./mock/smart-table.service");
var user_activity_service_1 = require("./mock/user-activity.service");
var orders_chart_service_1 = require("./mock/orders-chart.service");
var profit_chart_service_1 = require("./mock/profit-chart.service");
var traffic_list_service_1 = require("./mock/traffic-list.service");
var earning_service_1 = require("./mock/earning.service");
var orders_profit_chart_service_1 = require("./mock/orders-profit-chart.service");
var traffic_bar_service_1 = require("./mock/traffic-bar.service");
var profit_bar_animation_chart_service_1 = require("./mock/profit-bar-animation-chart.service");
var temperature_humidity_service_1 = require("./mock/temperature-humidity.service");
var solar_service_1 = require("./mock/solar.service");
var traffic_chart_service_1 = require("./mock/traffic-chart.service");
var stats_bar_service_1 = require("./mock/stats-bar.service");
var country_order_service_1 = require("./mock/country-order.service");
var stats_progress_bar_service_1 = require("./mock/stats-progress-bar.service");
var visitors_analytics_service_1 = require("./mock/visitors-analytics.service");
var security_cameras_service_1 = require("./mock/security-cameras.service");
var mock_data_module_1 = require("./mock/mock-data.module");
var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github'
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook'
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter'
    },
];
var DATA_SERVICES = [
    { provide: users_1.UserData, useClass: users_service_1.UserService },
    { provide: electricity_1.ElectricityData, useClass: electricity_service_1.ElectricityService },
    { provide: smart_table_1.SmartTableData, useClass: smart_table_service_1.SmartTableService },
    { provide: user_activity_1.UserActivityData, useClass: user_activity_service_1.UserActivityService },
    { provide: orders_chart_1.OrdersChartData, useClass: orders_chart_service_1.OrdersChartService },
    { provide: profit_chart_1.ProfitChartData, useClass: profit_chart_service_1.ProfitChartService },
    { provide: traffic_list_1.TrafficListData, useClass: traffic_list_service_1.TrafficListService },
    { provide: earning_1.EarningData, useClass: earning_service_1.EarningService },
    { provide: orders_profit_chart_1.OrdersProfitChartData, useClass: orders_profit_chart_service_1.OrdersProfitChartService },
    { provide: traffic_bar_1.TrafficBarData, useClass: traffic_bar_service_1.TrafficBarService },
    { provide: profit_bar_animation_chart_1.ProfitBarAnimationChartData, useClass: profit_bar_animation_chart_service_1.ProfitBarAnimationChartService },
    { provide: temperature_humidity_1.TemperatureHumidityData, useClass: temperature_humidity_service_1.TemperatureHumidityService },
    { provide: solar_1.SolarData, useClass: solar_service_1.SolarService },
    { provide: traffic_chart_1.TrafficChartData, useClass: traffic_chart_service_1.TrafficChartService },
    { provide: stats_bar_1.StatsBarData, useClass: stats_bar_service_1.StatsBarService },
    { provide: country_order_1.CountryOrderData, useClass: country_order_service_1.CountryOrderService },
    { provide: stats_progress_bar_1.StatsProgressBarData, useClass: stats_progress_bar_service_1.StatsProgressBarService },
    { provide: visitors_analytics_1.VisitorsAnalyticsData, useClass: visitors_analytics_service_1.VisitorsAnalyticsService },
    { provide: security_cameras_1.SecurityCamerasData, useClass: security_cameras_service_1.SecurityCamerasService },
];
var NbSimpleRoleProvider = /** @class */ (function (_super) {
    __extends(NbSimpleRoleProvider, _super);
    function NbSimpleRoleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbSimpleRoleProvider.prototype.getRole = function () {
        // here you could provide any role based on any auth flow
        return rxjs_1.of('guest');
    };
    return NbSimpleRoleProvider;
}(security_1.NbRoleProvider));
exports.NbSimpleRoleProvider = NbSimpleRoleProvider;
exports.NB_CORE_PROVIDERS = __spreadArrays(mock_data_module_1.MockDataModule.forRoot().providers, DATA_SERVICES, auth_1.NbAuthModule.forRoot({
    strategies: [
        auth_1.NbDummyAuthStrategy.setup({
            name: 'email',
            delay: 3000
        }),
    ],
    forms: {
        login: {
            socialLinks: socialLinks
        },
        register: {
            socialLinks: socialLinks
        }
    }
}).providers, [
    security_1.NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*'
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*'
            }
        }
    }).providers,
    {
        provide: security_1.NbRoleProvider, useClass: NbSimpleRoleProvider
    },
    utils_1.AnalyticsService,
    utils_1.LayoutService,
    utils_1.PlayerService,
    utils_1.SeoService,
    utils_1.StateService,
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: __spreadArrays(exports.NB_CORE_PROVIDERS)
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                auth_1.NbAuthModule,
            ],
            declarations: []
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf())
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
