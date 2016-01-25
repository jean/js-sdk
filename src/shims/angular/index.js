/* global angular:false */
import Kinvey from '../../kinvey';
import NetworkRack from '../../core/rack/networkRack';
import Http from '../../core/rack/http';
import AngularHttp from './http';
const ngKinvey = angular.module('kinvey', []);

ngKinvey.provider('$kinvey', function () {
  this.init = function (options = {}) {
    // Initialize the library
    return Kinvey.init(options);
  };

  this.initialize = function (options = {}) {
    return this.init(options);
  };

  this.$get = ['$q', '$http', function ($q, $http) {
    // Swap out the Http middleware with the AngularHttp middleware
    const networkRack = NetworkRack.sharedInstance();
    networkRack.swap(Http, new AngularHttp($http));

    // Replace Defer with $q
    Kinvey.Promise = $q;

    // Return the library
    return Kinvey;
  }];
});

export default ngKinvey;
