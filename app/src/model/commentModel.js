(function () {

    angular.module('model')

        .service('commentModel', function ($http, userModel) {

            var URI = 'http://localhost:3000/comments';
            var commentModel = this;

            commentModel.create = function (comment) {
                return $http.post(URI, comment).then(extractComment);
            };

            commentModel.findByMovie = function (movieId) {
                return $http.get(URI + '?movie=' + movieId).then(function (response) {
                    return _.map(response.data, asComment);
                });
            };

            commentModel.delete = function (id) {
                return $http.delete(URI + '/' + id);
            };

            function extractComment(response) {
                return asComment(response.data);
            }

            function asComment(data) {
                return angular.extend(data, Comment);
            }

            var Comment = {
                populateAuthorInfo: function () {
                    var comment = this;
                    return userModel.findById(comment.author).then(function (authorInfo) {
                        comment.authorInfo = authorInfo;
                        return comment;
                    });
                }
            };

        });

})();