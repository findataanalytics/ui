"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var theme_1 = require("@nebular/theme");
var eva_icons_1 = require("@nebular/eva-icons");
var security_1 = require("@nebular/security");
var components_1 = require("./components");
var pipes_1 = require("./pipes");
var layouts_1 = require("./layouts");
var theme_default_1 = require("./styles/theme.default");
var theme_cosmic_1 = require("./styles/theme.cosmic");
var theme_corporate_1 = require("./styles/theme.corporate");
var theme_dark_1 = require("./styles/theme.dark");
var NB_MODULES = [
    theme_1.NbLayoutModule,
    theme_1.NbMenuModule,
    theme_1.NbUserModule,
    theme_1.NbActionsModule,
    theme_1.NbSearchModule,
    theme_1.NbSidebarModule,
    theme_1.NbContextMenuModule,
    security_1.NbSecurityModule,
    theme_1.NbButtonModule,
    theme_1.NbSelectModule,
    theme_1.NbIconModule,
    eva_icons_1.NbEvaIconsModule,
];
var COMPONENTS = [
    components_1.HeaderComponent,
    components_1.FooterComponent,
    components_1.SearchInputComponent,
    components_1.TinyMCEComponent,
    layouts_1.OneColumnLayoutComponent,
    layouts_1.ThreeColumnsLayoutComponent,
    layouts_1.TwoColumnsLayoutComponent,
];
var PIPES = [
    pipes_1.CapitalizePipe,
    pipes_1.PluralPipe,
    pipes_1.RoundPipe,
    pipes_1.TimingPipe,
    pipes_1.NumberWithCommasPipe,
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: __spreadArrays(theme_1.NbThemeModule.forRoot({
                name: 'default'
            }, [theme_default_1.DEFAULT_THEME, theme_cosmic_1.COSMIC_THEME, theme_corporate_1.CORPORATE_THEME, theme_dark_1.DARK_THEME]).providers)
        };
    };
    var ThemeModule_1;
    ThemeModule = ThemeModule_1 = __decorate([
        core_1.NgModule({
            imports: __spreadArrays([common_1.CommonModule], NB_MODULES),
            exports: __spreadArrays([common_1.CommonModule], PIPES, COMPONENTS),
            declarations: __spreadArrays(COMPONENTS, PIPES)
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;
