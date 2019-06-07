'use strict';

angular.
  module('core.post').
  factory('Post', ['$resource',
    function($resource) {
      return $resource('posts/:postId.json', {}, {
        query: {
          method: 'GET',
          params: {postId: 'posts'},
          isArray: true
        }
      });
    }
  ]);

/*
  // Define a CreditCard class
var CreditCard = $resource('/users/:userId/cards/:cardId',
{userId: 123, cardId: '@id'}, {
  charge: {method: 'POST', params: {charge: true}}
});

// We can retrieve a collection from the server
var cards = CreditCard.query();
  // GET: /users/123/cards
  // server returns: [{id: 456, number: '1234', name: 'Smith'}]

// Wait for the request to complete
cards.$promise.then(function() {
var card = cards[0];

// Each item is an instance of CreditCard
expect(card instanceof CreditCard).toEqual(true);

// Non-GET methods are mapped onto the instances
card.name = 'J. Smith';
card.$save();
    // POST: /users/123/cards/456 {id: 456, number: '1234', name: 'J. Smith'}
    // server returns: {id: 456, number: '1234', name: 'J. Smith'}

// Our custom method is mapped as well (since it uses POST)
card.$charge({amount: 9.99});
    // POST: /users/123/cards/456?amount=9.99&charge=true {id: 456, number: '1234', name: 'J. Smith'}
});

// We can create an instance as well
var newCard = new CreditCard({number: '0123'});
newCard.name = 'Mike Smith';

var savePromise = newCard.$save();
  // POST: /users/123/cards {number: '0123', name: 'Mike Smith'}
  // server returns: {id: 789, number: '0123', name: 'Mike Smith'}

savePromise.then(function() {
    // Once the promise is resolved, the created instance
    // is populated with the data returned by the server
expect(newCard.id).toEqual(789);
});
    // The object returned from a call to $resource is a resource "class" which has one "static" method for each action in the definition.

    // Calling these methods invokes $http on the url template with the given HTTP method, params and headers.

    // Accessing the response
    // When the data is returned from the server then the object is an instance of the resource type and all of the non-GET methods are available with $ prefix. This allows you to easily support CRUD operations (create, read, update, delete) on server-side data.

var User = $resource('/users/:userId', {userId: '@id'});
User.get({userId: 123}).$promise.then(function(user) {
user.abc = true;
user.$save();
});
    // It's worth noting that the success callback for get, query and other methods gets called with the resource instance (populated with the data that came from the server) as well as an $http header getter function, the HTTP status code and the response status text. So one could rewrite the above example and get access to HTTP headers as follows:

var User = $resource('/users/:userId', {userId: '@id'});
User.get({userId: 123}, function(user, getResponseHeaders) {
user.abc = true;
user.$save(function(user, putResponseHeaders) {
  // `user` => saved `User` object
  // `putResponseHeaders` => `$http` header getter
});
*/