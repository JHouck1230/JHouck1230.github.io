'use strict';

var app = angular.module('webApp', ['ui.router', 'ui.materialize', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider
	.state('foodle', {
		url: '/',
		templateUrl: 'html/foodle.html'
	})
	.state('flashcards', {
		url: '/',
		templateUrl: 'html/flashcards.html'
	})
	.state('drawSomething', {
		url: '/',
		templateUrl: 'html/drawSomething.html'
	})
	.state('countGame', {
		url: '/',
		templateUrl: 'html/countGame.html'
	})
	.state('car2Hot', {
		url: '/',
		templateUrl: 'html/car2Hot.html'
	})
	$urlRouterProvider.otherwise('/');
});