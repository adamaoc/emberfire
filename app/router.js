import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});

  this.resource('products', function() {
  	this.route('new');
  });

  this.resource('product', {
  	path: '/product/:product_id'
  });

  this.route('login');
  this.route('admin');
});

export default Router;
