(function () {

    angular.module('movies')

        .controller('MovieDetailController', MovieDetailController);

    function MovieDetailController(movie, userModel, addCommentDialog) {
        var ctrl = this;

        ctrl.movie = movie;
        ctrl.userModel = userModel;

        ctrl.addCommentDialog = addCommentDialog;
    }

})();