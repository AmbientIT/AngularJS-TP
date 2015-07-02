(function () {

    angular.module('model')

        .service('commentModel', function ($http) {

            var URI = 'http://localhost:3000/comments';
            var commentModel = this;

            commentModel.create = function (comment) {
                return $http.post(URI, comment).then(function (response) {
                    return response.data;
                });
            };

        });

})();