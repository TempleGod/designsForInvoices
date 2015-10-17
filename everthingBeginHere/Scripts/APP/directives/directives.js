'use strict'
var directives = angular.module("invoice.directives", []);

directives.directive("ezSelect", ["$http", function ($http) {
    return {
        restrict: "E",
        replace: true,
        template: "<div herf>hello</div>",
        link: function (scope, element, attrs) {
            
        }
    };
}]);