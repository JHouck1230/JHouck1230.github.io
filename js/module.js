'use strict';

var app = angular.module('webApp', ['ui.router', 'ui.materialize', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('about', {
		url: '/',
		templateUrl: 'html/about.html',
		controller: 'aboutCtrl'
	})
	.state('projects', {
		url: '/projects',
		templateUrl: 'html/projects.html',
		controller: 'projCtrl'
	})
	$urlRouterProvider.otherwise('/');
});