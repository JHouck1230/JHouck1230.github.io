'use strict';

var app = angular.module('webApp');

app.controller('mainCtrl', function() {
	(function($){
	  $(function(){
	    $('.button-collapse').sideNav();
	  });
	})(jQuery);
});

app.directive()