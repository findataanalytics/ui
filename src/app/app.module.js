"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var core_module_1 = require("./@core/core.module");
var theme_module_1 = require("./@theme/theme.module");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var theme_1 = require("@nebular/theme");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                theme_module_1.ThemeModule.forRoot(),
                theme_1.NbSidebarModule.forRoot(),
                theme_1.NbMenuModule.forRoot(),
                theme_1.NbDatepickerModule.forRoot(),
                theme_1.NbDialogModule.forRoot(),
                theme_1.NbWindowModule.forRoot(),
                theme_1.NbToastrModule.forRoot(),
                theme_1.NbChatModule.forRoot({
                    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
                }),
                core_module_1.CoreModule.forRoot(),
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
