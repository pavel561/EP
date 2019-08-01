(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <div class=\"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"home\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"recordBoard\">RecordBoard</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"game\">Game</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"mx-auto order-0\">\r\n      <a class=\"navbar-brand mx-auto\" href=\"#\">WordsMaker Game</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-collapse2\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <span>\r\n            <app-login></app-login>\r\n          </span>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <span class=\"navbar-text\">\r\n            Войдите\r\n          </span>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\">Login</button>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\">\r\n            <li>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <p>Login via</p>\r\n                  <div class=\"social-buttons\">\r\n                    <a href=\"#\" class=\"btn btn-fb\"><i class=\"fa fa-facebook\"></i> Facebook</a>\r\n                    <a href=\"#\" class=\"btn btn-google\"><i class=\"fa fa-google\"></i> Google</a>\r\n                  </div>\r\n                  or\r\n                  <form class=\"form\" role=\"form\" method=\"post\" action=\"login\" accept-charset=\"UTF-8\" id=\"login-nav\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\r\n                      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Email address\"\r\n                        required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\r\n                      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\"\r\n                        required>\r\n                      <div class=\"help-block text-right\"><a href=\"\">Forget the password ?</a></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\r\n                    </div>\r\n                    <div class=\"checkbox\">\r\n                      <label>\r\n                        <input type=\"checkbox\"> keep me logged-in\r\n                      </label>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"help-block text-left\">\r\n                    New here ? <a href=\"#\">Join Us</a>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <main role=\"main\" class=\"inner cover  mt-5\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n  <div class=\"container\" id=\"footer\">\r\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n      <div>\r\n        <p>SharpCodeTeam 2019</p>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/dashboard/dashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/dashboard/dashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <p>Game menu</p>\n    <p>Score - 100</p>\n    <p>Words count - 10 <button type=\"submit\" class=\"btn btn-primary\">View list</button></p>\n    <p>Time left 9:58</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/game-field/game-field.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/game-field/game-field.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-2\">\n          <app-dashboard></app-dashboard>\n        </div>\n        <div class=\"col\">\n          <app-playing-field></app-playing-field>\n        </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/get-player/get-player.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/get-player/get-player.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"playerGroup\" (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Player Id</label>\r\n      <input\r\n        type=\"text\"\r\n        name=\"\"\r\n        id=\"\"\r\n        [ngClass]=\"input_class\"\r\n        placeholder=\"\"\r\n        aria-describedby=\"helpId\"\r\n        formControlName=\"id\"\r\n      />\r\n      <small id=\"helpId\" class=\"text-muted\">Help text</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"login\">\r\n\r\n</div>\r\n<div *ngIf=\"!login\">\r\n  <div>Добро пожаловать в игру \"Наборщик\"</div>\r\n  <div>Для начала игры необходимо Войти или Зарегистрироваться</div>\r\n  <div>Правила игры</div>\r\n  <div>Суть игры состоит в том, чтобы составить как можно больше слов из букв предоставляемого ключевого слова</div>\r\n  <div>Игра заканчивается по истечении выделенного времени</div>\r\n</div>\r\n\r\n\r\n<!-- <form [formGroup]=\"playerGroup\" (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Name</label>\r\n    <input\r\n      type=\"text\"\r\n      name=\"\"\r\n      id=\"\"\r\n      [ngClass]=\"input_class\"\r\n      placeholder=\"\"\r\n      aria-describedby=\"helpId\"\r\n      formControlName=\"name\"\r\n    />\r\n    <small id=\"helpId\" class=\"text-muted\">Help text</small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form> -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"navbar-text navbar-item\" *ngIf=\"userName\">{{userName}}</div>\n  <div class=\"navbar-text navbar-item\" *ngIf=\"!userName\">Войдите</div>\n\n  <button  class=\"navbar-text\" *ngIf=\"!loginStatus\" (click)=\"loginBtnClick()\" type=\"button\" class=\"btn btn-light\" >Login</button>\n  <button  class=\"navbar-text\" *ngIf=\"loginStatus\" (click)=\"logoutBtnClick()\" type=\"button\" class=\"btn btn-light\" >Logout</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/player-info/player-info.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/player-info/player-info.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Id: {{player.id}} Name: {{player.name}} Score: {{player.score}}</div>\r\n<div class=\"card border-primary\">\r\n    <div class=\"card-body\">\r\n      <a\r\n        class=\"card-title\"\r\n        [routerLink]=\"['/player', player.id]\"\r\n        routerLinkActive=\"router-link-active\"\r\n        >{{ player.name }}</a\r\n      >\r\n      <p class=\"card-text\">Score: {{ player.score }}</p>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/playing-field/playing-field.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/playing-field/playing-field.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"square\" (click)=\"CellClick(i)\" *ngFor=\"let letter of keyWordLetters let i = index\">\r\n          <div class=\"letter\">\r\n            {{letter}}\r\n          </div>\r\n        </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"user_word\">\r\n          <label>\r\n            Введенное слово >> {{resultWord.join('')}}\r\n          </label>\r\n        </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div>\r\n      <button (click)=\"ClearBtnClick()\" [disabled]=\"CheckResultWord()\">Clear</button>\r\n      <button (click)=\"SubmitBtnClick()\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/components/record-board/record-board.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/components/record-board/record-board.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table class=\"table table-striped table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Username</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Best Score</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let player of players let i = index\">\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <td>{{player.name}}</td>\r\n        <td>{{player.id}}</td>\r\n        <td>{{player.best_score}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_components_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/components/game-field/game-field.component */ "./src/app/game/components/game-field/game-field.component.ts");
/* harmony import */ var _game_components_record_board_record_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/components/record-board/record-board.component */ "./src/app/game/components/record-board/record-board.component.ts");
/* harmony import */ var _game_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/components/home/home.component */ "./src/app/game/components/home/home.component.ts");






var routes = [
    { path: 'recordBoard', component: _game_components_record_board_record_board_component__WEBPACK_IMPORTED_MODULE_4__["RecordBoardComponent"] },
    { path: 'home', component: _game_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'game', component: _game_components_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__["GameFieldComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  min-height: 50px;\n}\n\n.navbar-text {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.dropdown-menu {\n  min-width: 300px;\n  padding: 10px 10px 10px 10px;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n/* #login-dp{\n  min-width: 100px;\n  padding: 30px 30px 30px 30px;\n  overflow:hidden;\n  background-color:rgba(255,255,255,.8);\n} */\n\n/* #login-dp .help-block{\n  font-size:12px;\n  color: blue;\n} */\n\n/* #login-dp .bottom{\n  background-color:rgba(255,255,255,.8);\n  border-top:1px solid #ddd;\n  clear:both;\n  padding:14px;\n  text-align: center;\n} */\n\n.social-buttons {\n  margin: 5px 5px 5px 5px;\n}\n\n.social-buttons a {\n  width: 40%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.form-group {\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-fb {\n  color: #fff;\n  background-color: #3b5998;\n}\n\n.btn-fb:hover {\n  color: #fff;\n  background-color: #496ebc;\n}\n\n.btn-google {\n  color: #fff;\n  background-color: #DD4B39;\n}\n\n.btn-google:hover {\n  color: #fff;\n  background-color: #DD4B39;\n}\n\n#footer {\n  height: 50px;\n  background: #2e2e2b;\n  position: absolute;\n  bottom: 0;\n}\n\n/* @media(max-width:768px){\n  #login-dp{\n      background-color: inherit;\n      color: #fff;\n  }\n  #login-dp .bottom{\n      background-color: inherit;\n      border-top:3 none;\n  }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFlhbmRleERpc2tcXFBST0pFQ1RTXFxDT05TT0xFXFxlbnRlcnRhaW5tZW50LXBvcnRhbFxcRW50ZXJ0YWlubWVudFBvcnRhbFxcRVAuV29yZHNNYWtlclxcRVAuV29yZHNNYWtlci5Gcm9udEVuZFxcd29yZHNtYWtlci1mcm9udC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0FDRUY7O0FEQUE7Ozs7O0dBQUE7O0FBTUE7OztHQUFBOztBQUlBOzs7Ozs7R0FBQTs7QUFPQztFQUNDLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEM7RUFDQyxXQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1NGOztBRE5BOzs7Ozs7Ozs7R0FBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2YmFyIHtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5uYXZiYXItdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbn1cclxuLyogI2xvZ2luLWRwe1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxufSAqL1xyXG4vKiAjbG9naW4tZHAgLmhlbHAtYmxvY2t7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn0gKi9cclxuLyogI2xvZ2luLWRwIC5ib3R0b217XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO1xyXG4gIGNsZWFyOmJvdGg7XHJcbiAgcGFkZGluZzoxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4gLnNvY2lhbC1idXR0b25ze1xyXG4gIG1hcmdpbjogNXB4IDVweCA1cHggNXB4XHJcbn1cclxuLnNvY2lhbC1idXR0b25zIGF7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiAuYnRuLWZie1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5ODtcclxufVxyXG4uYnRuLWZiOmhvdmVye1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzQ5NmViY1xyXG59XHJcbi5idG4tZ29vZ2xle1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0RENEIzOTtcclxufVxyXG4uYnRuLWdvb2dsZTpob3ZlcntcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNERDRCMzk7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDQ2LCA0Myk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICAvL3dpZHRoOiAxMDAlO1xyXG59XHJcbi8qIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICNsb2dpbi1kcHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICNsb2dpbi1kcCAuYm90dG9te1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItdG9wOjMgbm9uZTtcclxuICB9XHJcbn0gKi9cclxuIiwiLm5hdmJhciB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbi5uYXZiYXItdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLyogI2xvZ2luLWRwe1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuOCk7XG59ICovXG4vKiAjbG9naW4tZHAgLmhlbHAtYmxvY2t7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBjb2xvcjogYmx1ZTtcbn0gKi9cbi8qICNsb2dpbi1kcCAuYm90dG9te1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjgpO1xuICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO1xuICBjbGVhcjpib3RoO1xuICBwYWRkaW5nOjE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gKi9cbi5zb2NpYWwtYnV0dG9ucyB7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggNXB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbnMgYSB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ0bi1mYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4uYnRuLWZiOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTZlYmM7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzk7XG59XG5cbi5idG4tZ29vZ2xlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzk7XG59XG5cbiNmb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4vKiBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcbiAgI2xvZ2luLWRwe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICNsb2dpbi1kcCAuYm90dG9te1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgIGJvcmRlci10b3A6MyBub25lO1xuICB9XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




/* export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://localhost:5000',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'swagger',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile wordsmaker_api',
}; */
var AppComponent = /** @class */ (function () {
    function AppComponent(router, oauthService) {
        this.router = router;
        this.oauthService = oauthService;
        this.title = 'wordsmaker-front';
        /* this.oauthService.events
          .pipe(filter(e => e.type === 'token_received'))
          .subscribe(_ => {
            log("token_received in app component");
          }); */
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _game_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/services/auth.service */ "./src/app/game/services/auth.service.ts");
/* harmony import */ var _game_modules_game_game_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/modules/game/game.module */ "./src/app/game/modules/game/game.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _game_components_playing_field_playing_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/components/playing-field/playing-field.component */ "./src/app/game/components/playing-field/playing-field.component.ts");
/* harmony import */ var _game_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/components/dashboard/dashboard.component */ "./src/app/game/components/dashboard/dashboard.component.ts");
/* harmony import */ var _game_components_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/components/game-field/game-field.component */ "./src/app/game/components/game-field/game-field.component.ts");
/* harmony import */ var _game_components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/components/login/login.component */ "./src/app/game/components/login/login.component.ts");









// import { GetPlayerComponent } from './game/components/get-player/get-player.component';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _game_components_playing_field_playing_field_component__WEBPACK_IMPORTED_MODULE_9__["PlayingFieldComponent"],
                _game_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _game_components_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_11__["GameFieldComponent"],
                _game_components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _game_modules_game_game_module__WEBPACK_IMPORTED_MODULE_2__["GameModule"],
                _game_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__["OAuthModule"].forRoot(),
                //ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_game_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/components/dashboard/dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/game/components/dashboard/dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2Rhc2hib2FyZC9FOlxcWWFuZGV4RGlza1xcUFJPSkVDVFNcXENPTlNPTEVcXGVudGVydGFpbm1lbnQtcG9ydGFsXFxFbnRlcnRhaW5tZW50UG9ydGFsXFxFUC5Xb3Jkc01ha2VyXFxFUC5Xb3Jkc01ha2VyLkZyb250RW5kXFx3b3Jkc21ha2VyLWZyb250L3NyY1xcYXBwXFxnYW1lXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmRcclxue1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiIsIi5kYXNoYm9hcmQge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game/components/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/game/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/game/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/game/components/game-field/game-field.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/game/components/game-field/game-field.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9nYW1lLWZpZWxkL2dhbWUtZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/game/components/game-field/game-field.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/game/components/game-field/game-field.component.ts ***!
  \********************************************************************/
/*! exports provided: GameFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFieldComponent", function() { return GameFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameFieldComponent = /** @class */ (function () {
    function GameFieldComponent() {
    }
    GameFieldComponent.prototype.ngOnInit = function () {
    };
    GameFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-field',
            template: __webpack_require__(/*! raw-loader!./game-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/game-field/game-field.component.html"),
            styles: [__webpack_require__(/*! ./game-field.component.scss */ "./src/app/game/components/game-field/game-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameFieldComponent);
    return GameFieldComponent;
}());



/***/ }),

/***/ "./src/app/game/components/get-player/get-player.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/game/components/get-player/get-player.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9nZXQtcGxheWVyL2dldC1wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/game/components/get-player/get-player.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/game/components/get-player/get-player.component.ts ***!
  \********************************************************************/
/*! exports provided: GetPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlayerComponent", function() { return GetPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/game/services/player.service.ts");




var GetPlayerComponent = /** @class */ (function () {
    function GetPlayerComponent(playerService, fb) {
        this.playerService = playerService;
        this.fb = fb;
        this.playerGroup = this.fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    GetPlayerComponent.prototype.ngOnInit = function () {
    };
    GetPlayerComponent.prototype.onSubmit = function (form) {
        this.playerService.getPlayer(form.value).subscribe(function (s) { return console.log(s); });
    };
    GetPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-get-player',
            template: __webpack_require__(/*! raw-loader!./get-player.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/get-player/get-player.component.html"),
            styles: [__webpack_require__(/*! ./get-player.component.scss */ "./src/app/game/components/get-player/get-player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], GetPlayerComponent);
    return GetPlayerComponent;
}());



/***/ }),

/***/ "./src/app/game/components/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/game/components/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/game/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/game/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/game/services/player.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/game/services/auth.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(playerService, authService) {
        this.playerService = playerService;
        this.authService = authService;
        //input_class: 'something';
        this.login = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.authService.tokenValidState.subscribe(function (e) {
            Object(util__WEBPACK_IMPORTED_MODULE_1__["log"])("Token event reseived in LOGIN Component");
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/game/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/game/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/game/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-text {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2xvZ2luL0U6XFxZYW5kZXhEaXNrXFxQUk9KRUNUU1xcQ09OU09MRVxcZW50ZXJ0YWlubWVudC1wb3J0YWxcXEVudGVydGFpbm1lbnRQb3J0YWxcXEVQLldvcmRzTWFrZXJcXEVQLldvcmRzTWFrZXIuRnJvbnRFbmRcXHdvcmRzbWFrZXItZnJvbnQvc3JjXFxhcHBcXGdhbWVcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLm5hdmJhci10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/game/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/game/services/auth.service.ts");





// ...
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginBtnClick = function () {
        Object(util__WEBPACK_IMPORTED_MODULE_1__["log"])('Pressed btn to login user');
        this.authService.loginUser();
    };
    LoginComponent.prototype.logoutBtnClick = function () {
        Object(util__WEBPACK_IMPORTED_MODULE_1__["log"])('Pressed btn to logout user');
        this.authService.logoutUser();
        this.userName = null;
        this.userEmail = null;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/game/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/game/components/player-info/player-info.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/game/components/player-info/player-info.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9wbGF5ZXItaW5mby9wbGF5ZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/game/components/player-info/player-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/game/components/player-info/player-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlayerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfoComponent", function() { return PlayerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/player */ "./src/app/game/models/player.ts");



var PlayerInfoComponent = /** @class */ (function () {
    function PlayerInfoComponent() {
    }
    PlayerInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_player__WEBPACK_IMPORTED_MODULE_2__["Player"])
    ], PlayerInfoComponent.prototype, "player", void 0);
    PlayerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-info',
            template: __webpack_require__(/*! raw-loader!./player-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/player-info/player-info.component.html"),
            styles: [__webpack_require__(/*! ./player-info.component.scss */ "./src/app/game/components/player-info/player-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerInfoComponent);
    return PlayerInfoComponent;
}());



/***/ }),

/***/ "./src/app/game/components/playing-field/playing-field.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/game/components/playing-field/playing-field.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".square {\n  width: 40px;\n  height: 40px;\n  border: 3px solid black;\n  float: left;\n  margin: 0 3px 3px 0;\n  display: table;\n}\n\n.square div {\n  display: table-cell;\n}\n\n.letter {\n  vertical-align: middle;\n  text-align: center;\n  font: 20pt sans-serif;\n}\n\n.user_word {\n  margin: 50px 50px 50px 50px;\n  display: table-row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL3BsYXlpbmctZmllbGQvRTpcXFlhbmRleERpc2tcXFBST0pFQ1RTXFxDT05TT0xFXFxlbnRlcnRhaW5tZW50LXBvcnRhbFxcRW50ZXJ0YWlubWVudFBvcnRhbFxcRVAuV29yZHNNYWtlclxcRVAuV29yZHNNYWtlci5Gcm9udEVuZFxcd29yZHNtYWtlci1mcm9udC9zcmNcXGFwcFxcZ2FtZVxcY29tcG9uZW50c1xccGxheWluZy1maWVsZFxccGxheWluZy1maWVsZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL3BsYXlpbmctZmllbGQvcGxheWluZy1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFLRSwyQkFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2NvbXBvbmVudHMvcGxheWluZy1maWVsZC9wbGF5aW5nLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNxdWFyZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAzcHggM3B4IDA7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcblxyXG59XHJcbi5zcXVhcmUgZGl2IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cclxufVxyXG5cclxuLmxldHRlcntcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiAyMHB0IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi51c2VyX3dvcmR7XHJcbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy92ZXJ0aWNhbC1hbGlnbjogNTAlO1xyXG4gIC8vZm9udDogMTZwdCBzYW5zLXNlcmlmO1xyXG4gIC8vaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuIiwiLnNxdWFyZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDNweCAzcHggMDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5zcXVhcmUgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmxldHRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogMjBwdCBzYW5zLXNlcmlmO1xufVxuXG4udXNlcl93b3JkIHtcbiAgbWFyZ2luOiA1MHB4IDUwcHggNTBweCA1MHB4O1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59Il19 */"

/***/ }),

/***/ "./src/app/game/components/playing-field/playing-field.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/game/components/playing-field/playing-field.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayingFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingFieldComponent", function() { return PlayingFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);



var PlayingFieldComponent = /** @class */ (function () {
    function PlayingFieldComponent() {
        this.keyWord = 'СОКОВЫЖИМАЛКА';
        this.keyWordLetters = this.keyWord.split('');
        this.CuttedLetters = {};
        this.resultWord = [];
    }
    PlayingFieldComponent.prototype.CellClick = function (index) {
        Object(util__WEBPACK_IMPORTED_MODULE_2__["log"])(index.toString());
        if (this.keyWordLetters[index] === '_') {
            //this.keyWordLetters[index] = this.CuttedLetters[index];
            //this.CuttedLetters[index] = null;
            //this.resultWord.pop();
        }
        else {
            this.CuttedLetters[index] = this.keyWordLetters[index];
            this.resultWord.push(this.keyWordLetters[index]);
            this.keyWordLetters[index] = '_';
        }
    };
    PlayingFieldComponent.prototype.ClearBtnClick = function () {
        this.keyWordLetters = this.keyWord.split('');
        this.resultWord.length = 0;
        this.CuttedLetters = {};
    };
    PlayingFieldComponent.prototype.SubmitBtnClick = function () {
    };
    PlayingFieldComponent.prototype.CheckResultWord = function () {
        return this.resultWord.length > 0 ? false : true;
    };
    PlayingFieldComponent.prototype.ngOnInit = function () {
    };
    PlayingFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playing-field',
            template: __webpack_require__(/*! raw-loader!./playing-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/playing-field/playing-field.component.html"),
            styles: [__webpack_require__(/*! ./playing-field.component.scss */ "./src/app/game/components/playing-field/playing-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayingFieldComponent);
    return PlayingFieldComponent;
}());



/***/ }),

/***/ "./src/app/game/components/record-board/record-board.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/game/components/record-board/record-board.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9yZWNvcmQtYm9hcmQvcmVjb3JkLWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/game/components/record-board/record-board.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/game/components/record-board/record-board.component.ts ***!
  \************************************************************************/
/*! exports provided: RecordBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBoardComponent", function() { return RecordBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/game/services/player.service.ts");



var RecordBoardComponent = /** @class */ (function () {
    function RecordBoardComponent(playerService) {
        this.playerService = playerService;
        this.players = [];
    }
    RecordBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers().subscribe(function (p) {
            _this.players = p;
            console.log(_this.players);
            console.log(p);
        });
    };
    RecordBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-board',
            template: __webpack_require__(/*! raw-loader!./record-board.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/components/record-board/record-board.component.html"),
            styles: [__webpack_require__(/*! ./record-board.component.scss */ "./src/app/game/components/record-board/record-board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], RecordBoardComponent);
    return RecordBoardComponent;
}());



/***/ }),

/***/ "./src/app/game/models/player.ts":
/*!***************************************!*\
  !*** ./src/app/game/models/player.ts ***!
  \***************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/game/modules/game/game.module.ts":
/*!**************************************************!*\
  !*** ./src/app/game/modules/game/game.module.ts ***!
  \**************************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_get_player_get_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/get-player/get-player.component */ "./src/app/game/components/get-player/get-player.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/home.component */ "./src/app/game/components/home/home.component.ts");
/* harmony import */ var _components_record_board_record_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/record-board/record-board.component */ "./src/app/game/components/record-board/record-board.component.ts");
/* harmony import */ var _components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/player-info/player-info.component */ "./src/app/game/components/player-info/player-info.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [_components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_4__["PlayerInfoComponent"], _components_record_board_record_board_component__WEBPACK_IMPORTED_MODULE_3__["RecordBoardComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_get_player_get_player_component__WEBPACK_IMPORTED_MODULE_1__["GetPlayerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
            exports: [_components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_4__["PlayerInfoComponent"], _components_record_board_record_board_component__WEBPACK_IMPORTED_MODULE_3__["RecordBoardComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_get_player_get_player_component__WEBPACK_IMPORTED_MODULE_1__["GetPlayerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/game/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/game/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: authConfig, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var authConfig = {
    // Url of the Identity Provider
    issuer: 'http://localhost:5000',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/home',
    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'angular',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile wordsmaker_api',
    // URL that user is routed after logout
    logoutUrl: '/',
};
var AuthService = /** @class */ (function () {
    function AuthService(oauthService, router) {
        var _this = this;
        this.oauthService = oauthService;
        this.router = router;
        this.tokenValidState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.configureImplicitFlow();
        this.oauthService.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (e) { return e.type === 'token_received'; }))
            .subscribe(function (_) { _this.updateToken(); });
    }
    AuthService.prototype.isTokenValid = function () {
        var jwt = sessionStorage.getItem('id_token');
        if (jwt == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getValueFromIdToken = function (claim) {
        var jwt = sessionStorage.getItem('id_token');
        if (jwt == null) {
            return null;
        }
        var jwtData = jwt.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var value;
        JSON.parse(decodedJwtJsonData, function findKey(k, v) {
            if (k === claim) {
                value = v;
            }
        });
        return value;
    };
    AuthService.prototype.configureImplicitFlow = function () {
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["JwksValidationHandler"]();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    };
    AuthService.prototype.loginUser = function () {
        this.oauthService.initImplicitFlow();
    };
    AuthService.prototype.logoutUser = function () {
        // true - redirect user after logout
        this.oauthService.logOut(false);
        sessionStorage.clear();
        this.router.navigateByUrl('/');
    };
    AuthService.prototype.updateToken = function () {
        Object(util__WEBPACK_IMPORTED_MODULE_4__["log"])("token_received in auth service");
        this.tokenValidState.emit(true);
        //this.loginStatus = true;
        //this.userName = this.getValueFromIdToken('name');
        //this.userEmail = this.getValueFromIdToken('email');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthService.prototype, "tokenValidState", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());

;


/***/ }),

/***/ "./src/app/game/services/player.service.ts":
/*!*************************************************!*\
  !*** ./src/app/game/services/player.service.ts ***!
  \*************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.getPlayers = function () {
        console.log("GetPlayersExecute");
        return this.http.get('https://localhost:44350/api/player');
    };
    PlayerService.prototype.getPlayer = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('number', id.toString());
        console.log("GetPlayerExecute");
        return this.http.get('https://localhost:44350/api/player', { params: params });
    };
    PlayerService.prototype.addPlayer = function (player) {
        console.log("AddPlayersExecute");
        return this.http.post('https://localhost:44350/api/player', player);
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    base_url: 'http://localhost:44350'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\YandexDisk\PROJECTS\CONSOLE\entertainment-portal\EntertainmentPortal\EP.WordsMaker\EP.WordsMaker.FrontEnd\wordsmaker-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map