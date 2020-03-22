"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var SeoService = /** @class */ (function () {
    function SeoService(router, document, platformId) {
        this.router = router;
        this.destroy$ = new rxjs_1.Subject();
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    SeoService.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    SeoService.prototype.createCanonicalTag = function () {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    };
    SeoService.prototype.trackCanonicalChanges = function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.takeUntil(this.destroy$))
            .subscribe(function () {
            _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
        });
    };
    SeoService.prototype.getCanonicalUrl = function () {
        return this.dom.location.origin + this.dom.location.pathname;
    };
    SeoService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(theme_1.NB_DOCUMENT)),
        __param(2, core_1.Inject(core_1.PLATFORM_ID))
    ], SeoService);
    return SeoService;
}());
exports.SeoService = SeoService;
