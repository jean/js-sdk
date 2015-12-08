var Queue = function() {};

if (typeof root.Queue !== 'undefined') {
  Queue = root.Queue;

  // Configure the Queue with a Kinvey.Defer
  Queue.configure(function(handler) {
    var deferred = Kinvey.Defer.deferred();
    try {
      handler(deferred.resolve, deferred.reject, deferred.progress);
    } catch (err) {
      deferred.reject(err);
    }
    return deferred.promise;
  });
}