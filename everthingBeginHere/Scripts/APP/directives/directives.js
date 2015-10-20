'use strict'
var directives = angular.module("invoice.directives", []);

directives.directive("postSelect", ["$http", function ($http) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            sourceherf: "@sourceherf",
            attrname: "@attrname"
        },
        template: "<select class='postSelect'></select>",
        link: function (scope, element, attrs) {

            $http.post(attrs.sourceherf).success(function (data) {
                var i;
                for (i = 0; i < data.length; i++) {
                    element.append(angular.element("<option>" + data[i][attrs.attrname] + "</option>"))
                }


            });
        }
    };
}]);

directives.directive("test", function myfunction() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<table><tbody><div ng-transclude></div><tbody></table>",
    }
});
directives.directive("postTable", ["$http",  function ($http) {
    return {
        restrict: "E",
        replace: true,
        scope:{  },
        template: "<table><tbody><div ng-transclude></div><tbody></table>",
        transclude: true
        //link: function (scope, element, attrs) {
        //    var head = angular.element("<tr></tr>");
        //    //$http.post(attrs.sourceherf).success(function (data) {
        //    //    head.append(angular.element('<th>编号</th>'));
        //    //    head.append(angular.element('<th>名称</th>'));
        //    //    head.append(angular.element('<th>状态</th>'));
        //    //    head.append(angular.element('<th>类型</th>'));
        //    //    element.append(head);

        //    //    var select = '<post-select sourceherf="/Home/GetList" attrname="ComType"></post-select>'
        //    //    //var select = postSelectDirective;


        //    //    var i;
        //    //    for (i = 0; i < data.length; i++)
        //    //    {
        //    //        var body = angular.element("<tr></tr>");
        //    //        body.append(angular.element('<td>' + data[i]["ID"] + '</td>'));
        //    //        body.append(angular.element('<td>' + data[i]["Name"] + '</td>'));
        //    //        body.append(angular.element('<td>' + data[i]["IsUsing"] + '</td>'));
        //    //        body.append(angular.element('<td>' + select + '</td>'));
        //    //        element.append(body);
        //    //    }

        //    //});

        //}
    }
}]);