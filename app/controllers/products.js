import Ember from 'ember';

export default Ember.ArrayController.extend({

	actions: {
		publishPost: function() {
			var newpost = this.store.createRecord('product', {
				title: this.get('product.title'),
				details: this.get('product.details'),
				image: this.get('product.image')
			});

			newpost.save();
		}
	}
});
