import Ember from 'ember';

let {computed} = Ember;

export default Ember.Component.extend({
  isCard: false,
  classNameBindings: ['isCard:product__box', 'row', 'product-list'],
  tagName: 'li',
  // classNameBindings: computed('isCard', function() {
  //   if(this.get('isCard')) {
  //     return ['product__box'];
  //   }else{
  //     return ['row', 'product-list'];
  //   }
  // }),

});
