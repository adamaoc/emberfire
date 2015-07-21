import Ember from 'ember';

export default Ember.Route.extend({
	// pull in the model here in the route
	model: function() {
		return this.store.find('product', {
			limitToLast: 4
		});
	}
});
