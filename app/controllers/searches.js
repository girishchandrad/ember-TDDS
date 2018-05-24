import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({


 queryParams: ['search', 'page'],
 page: 0,
 search:null,
 keywordSearches: null,
 isDisabled: empty('keywordSearches'),
 metaData: computed('model', function(){
   return this.get('model.meta');
 }),

 pageBegin: computed('page', function(){
   if (this.get('page') === 0) {
     return this.get('page') + 1;
   }
   return this.get('page') * 5 ;
 }),
 pageEnd: computed('metaData', 'page', function(){
   if (this.get('page') + 1 === this.get('metaData.info.total')) {
     return this.get('metaData.info.results')
   } else if (this.get('page') === 0) {
     return this.get('page') + 5;
   }
   return this.get('pageBegin') + 5;
 }),
 totalResults: computed('metaData', function(){
   return this.get('metaData.info.results')
 }),
 prevPageDisabled: computed('page', function() {
   if (this.get('page') - 1  < 0) {
     return true;
   }
   return false;
 }),
 nextPageDisabled: computed('metaData', 'page', function() {
   if ((this.get('page') + 1)  > (this.get('metaData.info.total') - 1)) {
     return true;
   }
   return false;
 }),

actions: {
  setSearchParams(keywordSearches){
    console.log(this.get('metaData'))
      this.set('search', keywordSearches);
      this.set('page', 0);
  },
  clearSearchParams(){
    this.set('search', "");
    this.set('keywordSearches', "");
  },
  goToLink(id) {
    this.transitionToRoute('form', id);
  },
  previousPage: function(){
    if (this.get('page') > 0) {
      this.set('page', this.get('page') - 1);
    }
  },
  nextPage: function(){
    if (this.get('page') < this.get('metaData.info.total') - 1) {
      this.set('page', this.get('page') + 1);
    }
  },
  beginPage: function(){
    this.set('page', 0)
  },
  endPage: function(){
    this.set('page', this.get('metaData.info.total') - 1)
  }
}

});
