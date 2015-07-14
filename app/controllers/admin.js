import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	applicationController: Ember.computed.alias('controllers.application'),


	actions: {

	}
});
