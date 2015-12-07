'use strict';

class LoginController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state, $window) {
    this.Auth = Auth;
    this.$state = $state;
    this.$window = $window;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('board');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }

  loginOauth(provider) {
    this.$window.location.href = '/auth/' + provider;
  };


}

angular.module('appApp')
  .controller('LoginController', LoginController);
//  .controller('LoginController', ['Auth', '$state', '$window', LoginController]);
