import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	details: DS.attr('string'),
	image: DS.attr('string')
});
