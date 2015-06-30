(function () {

    angular.module('model')

        .service('movieModel', movieModel);

    function movieModel($http, $q, commentModel) {
        var URI = 'http://localhost:3000/movies';

        var cache = {};

        this.findAll = function () {
            return $http.get(URI).then(function (response) {
                return _.map(response.data, asMovie);
            });
        };

        this.findOne = function (movieId) {
            if (cache[movieId])
                return $q.when(cache[movieId]);
            else
                return $http.get(URI + '/' + movieId).then(extractMovie);
        };

        function extractMovie(response) {
            return asMovie(response.data);
        }

        function asMovie(data) {
            var movie = angular.extend(data, Movie);
            cache[movie.id] = movie;
            return movie;
        }

        var Movie = {
            populateComments: function () {
                var movie = this;
                return commentModel.findByMovie(movie.id).then(function (comments) {
                    movie.comments = comments;
                    return movie;
                });
            },
            addComment: function (comment, author) {
                var movie = this;
                comment.movie = movie.id;
                comment.author = author.id;
                return commentModel.create(comment).then(function (savedComment) {
                    movie.comments.push(savedComment);
                });
            },
            removeComment: function (comment) {
                var movie = this;
                return commentModel.delete(comment.id).then(function () {
                    _.remove(movie.comments, comment);
                });
            }
        };

    }

})();