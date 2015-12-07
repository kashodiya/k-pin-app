'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('board', {
        url: '/board',
        templateUrl: 'app/board/board.html',
        controller: 'BoardCtrl',
        controllerAs: 'board'
      });
  });
