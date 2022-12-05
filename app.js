const app = angular.module('HW1', ['ngAnimate', 'ngMaterial', 'ngMessages']);

class MainController {
    constructor($window) {
        this.window_ = $window;
    }

}

app.controller('MainController', MainController);