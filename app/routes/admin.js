import Ember from 'ember';
/* global Firebase */
var ref = new Firebase('https://product-store.firebaseio.com/');

export default Ember.Route.extend({

  setupController() {
    console.log('in admin route', ref);
  }
});
