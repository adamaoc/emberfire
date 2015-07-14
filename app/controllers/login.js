import Ember from 'ember';
/* global Firebase */
var ref = new Firebase('https://product-store.firebaseio.com/');
// username: adamaoc@gmail.com
// password: adamHome13!

export default Ember.Controller.extend({
	needs: ['application'],
	applicationController: Ember.computed.alias('controllers.application'),
	username: null,
	password: null,

	actions: {
		login() {
			ref.authWithPassword({
				email: this.get('username'),
				password: this.get('password')
			}, (error, authData) => {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					console.log("Authentication successfully with payload:", authData);
					this.set('applicationController.isLoggedin', true);
					this.set('applicationController.authData', authData);
					this.transitionToRoute('admin');
				}
			});
		},
	}
});
