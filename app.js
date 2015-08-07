(function(){

    'use strict';

    angular.module('flickerApp', ['ngMaterial'])
        .controller('CTR', ['$scope', '$http', function($scope, $http) {

            $scope.isSearching = false;
            $scope.search = function() {
                $scope.isSearching = true;
                $scope.results = [];

                $http({
                    url : 'https://api.flickr.com/services/rest',
                    method : 'GET',
                    params : {
                        method : 'flickr.photos.search' ,
                        api_key : '0f2c131d3e490bc8400610ae44972553',
                        text : $scope.searchTerm,
                        format : 'json',
                        nojsoncallback: 1
                    }
                }).success(function(data){
                    $scope.results = data;
                    console.log(data);
                    $scope.isSearching = false;

                }).error(function(error) {
                    console.error(error);
                    $scope.isSearching = false;

                });

            };

        }]);

})();