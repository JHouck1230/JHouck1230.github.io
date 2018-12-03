(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Josh Houck</h1>\n      <p class=\"lead\">Full Stack JavaScript Developer</p>\n      <p class=\"text-right\">\n        <a\n          class=\"btn-link\"\n          href=\"https://github.com/JHouck1230\"\n          target=\"_blank\"\n          >\n          <i class=\"fab fa-github fa-2x mx-1\"></i>\n        </a>\n        <a\n          class=\"btn-link\"\n          href=\"https://www.linkedin.com/in/josh-houck/\"\n          target=\"_blank\"\n          >\n          <i class=\"fab fa-linkedin fa-2x mx-1\"></i>\n        </a>\n        <a class=\"clickable\" (click)=\"lgModal.show()\">\n          <i class=\"far fa-file-pdf fa-2x mx-1\"></i>\n        </a>\n      </p>\n    </div>\n  </div>\n\n  <div>\n    <div class=\"media\">\n      <img\n        id=\"selfie\"\n        src=\"/assets/images/Selfie.jpg\"\n        class=\"mr-3 d-none d-md-block\"\n        >\n      <div class=\"media-body\">\n        <accordion>\n          <accordion-group (isOpenChange)=\"toggleCollapse($event, 'js')\">\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <h4 class=\"text-left\">JavaScript</h4>\n              <progressbar\n                [max]=\"100\"\n                type=\"primary\"\n                [value]=\"model.js\"\n                ></progressbar>\n            </button>\n            <div class=\"px-3\">\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Angular</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.angular\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">TypeScript</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.typescript\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Express.js</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.express\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Node.js</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.node\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">D3.js</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.d3\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">MongoDB</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.mongo\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">MySQL</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.mysql\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">jQuery</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.jquery\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">React.js</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.react\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Firebase</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.firebase\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">StormPath</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.stormpath\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Cordova</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.cordova\"\n                  ></progressbar>\n              </div>\n            </div>\n          </accordion-group>\n          <accordion-group (isOpenChange)=\"toggleCollapse($event, 'css')\">\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <h4 class=\"text-left\">CSS</h4>\n              <progressbar\n                [max]=\"100\"\n                type=\"primary\"\n                [value]=\"model.css\"\n                ></progressbar>\n            </button>\n            <div class=\"px-3\">\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Bootstrap</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.bootstrap\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Materialize</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.materialize\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">SCSS</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.scss\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">HTML5</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.html\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Jade/Pug</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.pug\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Ionic</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.ionic\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">PureCSS</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.pure\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">SASS</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.sass\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Less</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.less\"\n                  ></progressbar>\n              </div>\n            </div>\n          </accordion-group>\n          <accordion-group (isOpenChange)=\"toggleCollapse($event, 'workflow')\">\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <h4 class=\"text-left\">Workflow</h4>\n              <progressbar\n                [max]=\"100\"\n                type=\"primary\"\n                [value]=\"model.workflow\"\n                ></progressbar>\n            </button>\n            <div class=\"px-3\">\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">NPM</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.npm\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Angular CLI</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.ngcli\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Git</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.git\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Bower</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.bower\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Gulp</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.gulp\"\n                  ></progressbar>\n              </div>\n            </div>\n          </accordion-group>\n          <accordion-group (isOpenChange)=\"toggleCollapse($event, 'testing')\">\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <h4 class=\"text-left\">Testing</h4>\n              <progressbar\n                [max]=\"100\"\n                type=\"primary\"\n                [value]=\"model.testing\"\n                ></progressbar>\n            </button>\n            <div class=\"px-3\">\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Mocha</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.mocha\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Chai</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.chai\"\n                  ></progressbar>\n              </div>\n              <div class=\"row\">\n                <span class=\"col-12 col-lg-4 col-xl-3 text-left\">Karma</span>\n                <progressbar\n                  class=\"col-12 col-lg-8 col-xl-9 prog-col\"\n                  [max]=\"100\"\n                  type=\"primary\"\n                  [value]=\"model.karma\"\n                  ></progressbar>\n              </div>\n            </div>\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid mt-5\">\n    <tabset [justified]=\"true\">\n      <tab heading=\"foodle.\">\n        <div class=\"px-5 pb-3\">\n          <img\n            alt=\"Unable to load image.\"\n            class=\"img-fluid m-3\"\n            src=\"/assets/images/foodle.png\"\n            >\n          <h3><u>foodle.</u></h3>\n          <p>Users are able to \"like\" or \"dislike\" images of food presented from Yelp's API. A list is compiled of all \"liked\" food images. User selects a \"like\" from the list. User then receives information on selected \"like.\"</p>\n          <div class=\"d-flex justify-content-around\">\n            <a href=\"https://play.google.com/store/apps/details?id=com.awesome.foodle\" target=\"_blank\">DEMO</a>\n            <a href=\"https://github.com/liirene1/SeeFood\" target=\"_blank\">CODE</a>\n          </div>\n        </div>\n        <div class=\"row d-flex justify-content-around align-items-center text-center px-5 pb-5 pt-2\">\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/ionic.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/cordova.jpg\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/firebase.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/node.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/express.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/materialize.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/gulp.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/lodash.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/yelp.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/google.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/angular.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/bower.png\">\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Flashcards\">\n        <div class=\"px-5 pb-3\">\n          <img\n            alt=\"Unable to load image.\"\n            class=\"img-fluid m-3\"\n            src=\"/assets/images/flashcards.png\"\n            >\n          <h3><u>Flashcards</u></h3>\n          <p>Users can create flashcards under categories of their choosing. Users can then test their knowledge by clicking \"Play.\"</p>\n          <div class=\"d-flex justify-content-around\">\n            <a href=\"https://flashcards-app.herokuapp.com/#/edit\" target=\"_blank\">DEMO</a>\n            <a href=\"https://github.com/JHouck1230/Flashcard-App\" target=\"_blank\">CODE</a>\n          </div>\n        </div>\n        <div class=\"row d-flex justify-content-around align-items-center text-center px-5 pb-5 pt-2\">\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/uirouter.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/express.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/node.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/mysql.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/bower.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/materialize.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/pure.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/angular.png\">\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Draw Something\">\n        <div class=\"px-5 pb-3\">\n          <img\n            alt=\"Unable to load image.\"\n            class=\"img-fluid m-3\"\n            src=\"/assets/images/drawSomething.png\"\n            >\n          <h3><u>Draw Something</u></h3>\n          <p>Users can click \"Draw Something\" and create a canvas painting. Once titled, signed, and saved, the painting is displayed in a \"gallery\" setting. Individual paintings can be viewed by selecting them. Only title and author may be edited.</p>\n          <div class=\"d-flex justify-content-around\">\n            <a href=\"https://joshsdrawingapp.herokuapp.com/\" target=\"_blank\">DEMO</a>\n            <a href=\"https://github.com/JHouck1230/Custom-Angular-CRUD\" target=\"_blank\">CODE</a>\n          </div>\n        </div>\n        <div class=\"row d-flex justify-content-around align-items-center text-center px-5 pb-5 pt-2\">\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/bootstrap.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/express.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/bower.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/angular.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/node.png\">\n          </div>\n          <div class=\"col-12 col-lg-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/json.png\">\n          </div>\n          <div class=\"col-12 col-lg-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/sweetalert.png\">\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Counting Game\">\n        <div class=\"px-5 pb-3\">\n          <img\n            alt=\"Unable to load image.\"\n            class=\"img-fluid m-3\"\n            src=\"/assets/images/countingGame.png\"\n            >\n          <h3><u>Counting Game</u></h3>\n          <p>Users  select any combination numbers to add up to the total number of stars displayed. Goal is to use every number only once. Only 3 rerolls per game. Not every game is winnable!</p>\n          <div class=\"d-flex justify-content-around\">\n            <a href=\"https://jhouck1230.github.io/Addition-Game/\" target=\"_blank\">DEMO</a>\n            <a href=\"https://github.com/JHouck1230/Addition-Game\" target=\"_blank\">CODE</a>\n          </div>\n        </div>\n        <div class=\"row d-flex justify-content-around align-items-center text-center px-5 pb-5 pt-2\">\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/animate.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/jquery.jpg\">\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Car2Hot\">\n        <div class=\"px-5 pb-3\">\n          <img\n            alt=\"Unable to load image.\"\n            class=\"img-fluid m-3\"\n            src=\"/assets/images/IoT_Tech.png\"\n            >\n          <h3><u>Car2Hot</u></h3>\n          <p>Device is built into a vehicle. Device sensors detect presence of occupant when temperature approaches dangerous levels. Three attempts are made to contact owner via SMS. If owner does not reply, emergency services are contacted with location of the vehicle. There is no interface for this application. Submitted in The IoT for Cities Hackathon at the Internet of Things World Event 2016.</p>\n          <div class=\"d-flex justify-content-around\">\n            <a href=\"https://github.com/JHouck1230/iot-hackathon\" target=\"_blank\">DEVICE</a>\n            <a href=\"https://github.com/cadenichols/iot-server\" target=\"_blank\">SERVER</a>\n          </div>\n        </div>\n        <div class=\"row d-flex justify-content-around align-items-center text-center px-5 pb-5 pt-2\">\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/express.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/node.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/intel.png\">\n          </div>\n          <div class=\"col-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/grove.png\">\n          </div>\n          <div class=\"col-12 col-lg-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/pitneybowes.png\">\n          </div>\n          <div class=\"col-12 col-lg-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/socketio.png\">\n          </div>\n          <div class=\"col-12 col-lg-3 m-3\">\n            <img class=\"logo-img\" src=\"/assets/images/tropo.png\">\n          </div>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n\n  <div\n    bsModal\n    #lgModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"resume-modal\"\n    >\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 id=\"resume-modal\" class=\"modal-title pull-left\">Josh Houck's Resume</h4>\n          <button\n            type=\"button\"\n            class=\"close pull-right\"\n            (click)=\"lgModal.hide()\"\n            aria-label=\"Close\"\n            >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" style=\"overflow:auto; -webkit-overflow-scrolling:touch\">\n          <iframe style=\"width: 100%; height: 700px;\" src=\"/assets/JoshHouckResume.pdf#zoom=100\"></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#selfie {\n  width: 15em;\n  border-radius: 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 1rem; }\n\n.logo-img {\n  max-height: 8vh; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.model = {
            angular: 0,
            bootstrap: 0,
            bower: 0,
            chai: 0,
            cordova: 0,
            css: 0,
            d3: 0,
            express: 0,
            firebase: 0,
            git: 0,
            gulp: 0,
            html: 0,
            ionic: 0,
            jquery: 0,
            js: 0,
            karma: 0,
            less: 0,
            materialize: 0,
            mocha: 0,
            mongo: 0,
            mysql: 0,
            ngcli: 0,
            node: 0,
            npm: 0,
            pug: 0,
            pure: 0,
            react: 0,
            sass: 0,
            scss: 0,
            stormpath: 0,
            testing: 0,
            typescript: 0,
            workflow: 0,
        };
        this.timer = {
            angular: null,
            bootstrap: null,
            bower: null,
            chai: null,
            cordova: null,
            css: null,
            d3: null,
            express: null,
            firebase: null,
            git: null,
            gulp: null,
            html: null,
            ionic: null,
            jquery: null,
            js: null,
            karma: null,
            less: null,
            materialize: null,
            mocha: null,
            mongo: null,
            mysql: null,
            ngcli: null,
            node: null,
            npm: null,
            pug: null,
            pure: null,
            react: null,
            sass: null,
            scss: null,
            stormpath: null,
            testing: null,
            typescript: null,
            workflow: null,
        };
    }
    AppComponent.prototype.startProgress = function (item, level, time) {
        var _this = this;
        this.model[item] = 0;
        this.timer[item] = setTimeout(function () {
            for (var i = 0; i < level; ++i) {
                _this.model[item]++;
            }
        }, time);
    };
    AppComponent.prototype.toggleCollapse = function (event, item) {
        switch (item) {
            case 'js':
                if (event) {
                    this.startProgress('angular', 100, 500);
                    this.startProgress('typescript', 90, 750);
                    this.startProgress('express', 90, 1000);
                    this.startProgress('node', 95, 1250);
                    this.startProgress('d3', 75, 1500);
                    this.startProgress('mongo', 75, 1750);
                    this.startProgress('mysql', 75, 2000);
                    this.startProgress('jquery', 95, 2250);
                    this.startProgress('react', 50, 2500);
                    this.startProgress('firebase', 55, 2750);
                    this.startProgress('stormpath', 50, 3000);
                    this.startProgress('cordova', 40, 3250);
                }
                else {
                    this.model.angular = 0;
                    clearTimeout(this.timer.angular);
                    this.model.typescript = 0;
                    clearTimeout(this.timer.typescript);
                    this.model.express = 0;
                    clearTimeout(this.timer.express);
                    this.model.node = 0;
                    clearTimeout(this.timer.node);
                    this.model.d3 = 0;
                    clearTimeout(this.timer.d3);
                    this.model.mongo = 0;
                    clearTimeout(this.timer.mongo);
                    this.model.mysql = 0;
                    clearTimeout(this.timer.mysql);
                    this.model.jquery = 0;
                    clearTimeout(this.timer.jquery);
                    this.model.react = 0;
                    clearTimeout(this.timer.react);
                    this.model.firebase = 0;
                    clearTimeout(this.timer.firebase);
                    this.model.stormpath = 0;
                    clearTimeout(this.timer.stormpath);
                    this.model.cordova = 0;
                    clearTimeout(this.timer.cordova);
                }
                break;
            case 'css':
                if (event) {
                    this.startProgress('bootstrap', 100, 500);
                    this.startProgress('materialize', 100, 750);
                    this.startProgress('scss', 100, 1000);
                    this.startProgress('html', 100, 1250);
                    this.startProgress('pug', 90, 1500);
                    this.startProgress('ionic', 90, 1750);
                    this.startProgress('pure', 90, 2000);
                    this.startProgress('sass', 100, 2250);
                    this.startProgress('less', 100, 2500);
                }
                else {
                    this.model.bootstrap = 0;
                    clearTimeout(this.timer.bootstrap);
                    this.model.materialize = 0;
                    clearTimeout(this.timer.materialize);
                    this.model.scss = 0;
                    clearTimeout(this.timer.scss);
                    this.model.html = 0;
                    clearTimeout(this.timer.html);
                    this.model.pug = 0;
                    clearTimeout(this.timer.pug);
                    this.model.ionic = 0;
                    clearTimeout(this.timer.ionic);
                    this.model.pure = 0;
                    clearTimeout(this.timer.pure);
                    this.model.sass = 0;
                    clearTimeout(this.timer.sass);
                    this.model.less = 0;
                    clearTimeout(this.timer.less);
                }
                break;
            case 'workflow':
                if (event) {
                    this.startProgress('npm', 100, 500);
                    this.startProgress('ngcli', 100, 750);
                    this.startProgress('git', 95, 1000);
                    this.startProgress('bower', 100, 1250);
                    this.startProgress('gulp', 90, 1500);
                }
                else {
                    this.model.npm = 0;
                    clearTimeout(this.timer.npm);
                    this.model.ngcli = 0;
                    clearTimeout(this.timer.ngcli);
                    this.model.git = 0;
                    clearTimeout(this.timer.git);
                    this.model.bower = 0;
                    clearTimeout(this.timer.bower);
                    this.model.gulp = 0;
                    clearTimeout(this.timer.gulp);
                }
                break;
            case 'testing':
                if (event) {
                    this.startProgress('mocha', 80, 500);
                    this.startProgress('chai', 80, 750);
                    this.startProgress('karma', 65, 1000);
                }
                else {
                    this.model.mocha = 0;
                    clearTimeout(this.timer.mocha);
                    this.model.chai = 0;
                    clearTimeout(this.timer.chai);
                    this.model.karma = 0;
                    clearTimeout(this.timer.karma);
                }
                break;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.startProgress('js', 100, 500);
        this.startProgress('css', 100, 1000);
        this.startProgress('workflow', 100, 1500);
        this.startProgress('testing', 80, 2000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Josh/git/personal-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map