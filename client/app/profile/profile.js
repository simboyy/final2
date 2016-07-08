'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        title: 'Aardath Profile',
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl',
        authenticate: true
      });
  });
