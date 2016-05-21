'use strict';

var app = angular.module('webApp', ['ui.router', 'ui.materialize', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('about', {
		url: '/',
		templateUrl: 'html/about.html'
	})
	.state('projects', {
		url: '/projects',
		templateUrl: 'html/projects.html'
	})
	$urlRouterProvider.otherwise('/');
});