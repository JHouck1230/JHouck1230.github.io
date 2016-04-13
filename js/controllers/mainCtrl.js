'use strict';

var app = angular.module('webApp');

app.controller('mainCtrl', function() {
	console.log('mainCtrl');
	(function($){
	  $(function(){
	    $('.button-collapse').sideNav();
	  });
	})(jQuery);
});

app.directive()