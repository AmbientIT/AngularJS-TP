(function () {

    angular.module('movies', [
        'ngMaterial'
    ])

        .config(function ($stateProvider) {
            $stateProvider.state('movies', {
                url: '/movies',
                templateUrl: 'src/movies/movies.tpl.html',
                controller: 'MoviesController as ctrl',
                resolve: {
                    movieList: function (movieModel) {
                        return movieModel.findAll().then(function (movies) {
                            _.map(movies, function (movie) {
                                movie.populateComments();
                            });
                            return movies;
                        });
                    }
                },
                onEnter: function (userModel, $state) {
                    if (!userModel.loggedUser) {
                        $state.go('users');
                    }
                },
            });
        });

})();