'use strict';

var app = angular.module('webApp', ['ui.router', 'ui.materialize', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider
	.state('flashcards', {
		url: '/flashcards',
		templateUrl: 'html/flashcards.html'
	})
	.state('drawSomething', {
		url: '/drawSomething',
		templateUrl: 'html/drawSomething.html'
	})
	.state('countGame', {
		url: '/countGame',
		templateUrl: 'html/countGame.html'
	})
	.state('foodle', {
		url: '/foodle',
		templateUrl: 'html/foodle.html'
	})
	.state('car2Hot', {
		url: '/car2Hot',
		templateUrl: 'html/car2Hot.html'
	})
	$urlRouterProvider.otherwise('/flashcards');
});