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
var security_cameras_1 = require("../data/security-cameras");
var SecurityCamerasService = /** @class */ (function (_super) {
    __extends(SecurityCamerasService, _super);
    function SecurityCamerasService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg'
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg'
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg'
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg'
            },
        ];
        return _this;
    }
    SecurityCamerasService.prototype.getCamerasData = function () {
        return rxjs_1.of(this.cameras);
    };
    SecurityCamerasService = __decorate([
        core_1.Injectable()
    ], SecurityCamerasService);
    return SecurityCamerasService;
}(security_cameras_1.SecurityCamerasData));
exports.SecurityCamerasService = SecurityCamerasService;
