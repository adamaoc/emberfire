import Ember from 'ember';
// import config from '../config/environment';

/* global Firebase */

// ref for firebase
var ref = new Firebase('https://product-store.firebaseio.com/');

export default Ember.Controller.extend({

	isLoggedin: false,

	actions: {
		login: function() {
			// debugger;
			var _this = this;
			if(this.get('isLoggedin') === true) {
				console.log('logout');
				ref.unauth();
				this.toggleProperty('isLoggedin');
			}else{
				ref.authWithPassword({
					email: 'adamaoc@gmail.com',
					password: 'adamHome13!'
				}, function(error, authData) {
					if (error) {
						console.log('Login Failed!', error);
					} else {
						console.log('Authentication successfully with payload:', authData);
						_this.toggleProperty('isLoggedin');
					}
				});
			}
		},
		postProduct: function() {
			var newprod = this.store.createRecord('product', {
				title: 'Product Title',
				details: 'Product Details',
				image: 'http://lorempixel.com/150/150/'
			});
			newprod.save();
		}
	}
});
