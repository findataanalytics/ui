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
var users_1 = require("../data/users");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = new Date;
        _this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' }
        };
        _this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work'
        };
        _this.contacts = [
            { user: _this.users.nick, type: _this.types.mobile },
            { user: _this.users.eva, type: _this.types.home },
            { user: _this.users.jack, type: _this.types.mobile },
            { user: _this.users.lee, type: _this.types.mobile },
            { user: _this.users.alan, type: _this.types.home },
            { user: _this.users.kate, type: _this.types.work },
        ];
        _this.recentUsers = [
            { user: _this.users.alan, type: _this.types.home, time: _this.time.setHours(21, 12) },
            { user: _this.users.eva, type: _this.types.home, time: _this.time.setHours(17, 45) },
            { user: _this.users.nick, type: _this.types.mobile, time: _this.time.setHours(5, 29) },
            { user: _this.users.lee, type: _this.types.mobile, time: _this.time.setHours(11, 24) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(10, 45) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 42) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 31) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(8, 0) },
        ];
        return _this;
    }
    UserService.prototype.getUsers = function () {
        return rxjs_1.of(this.users);
    };
    UserService.prototype.getContacts = function () {
        return rxjs_1.of(this.contacts);
    };
    UserService.prototype.getRecentUsers = function () {
        return rxjs_1.of(this.recentUsers);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}(users_1.UserData));
exports.UserService = UserService;
