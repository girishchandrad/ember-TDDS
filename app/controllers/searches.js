import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({


filterTypes: computed('model', function() {
  console.log(this.get('model.meta'))
  let list =  Array.from(Object.values(this.get('model.meta')));
  console.log(list)
  return list;
}),


 queryParams: ["search", "pageNumber", "sortAscending"],
 sortAscending: true,
 pageNumber: 0,
 pageSize: 2,
 search:null,
 taxSearches:null,
 keywordSearches: null,
 metaFilters: null,
 searchTypes: null,
 isDisabled: empty("keywordSearches"),

pages: Ember.computed("model", function(){
  var content = []
  var pages = []
  this.get('model').toArray().forEach(function(item) {
    content.push(item);
  });
  while (content.length > 0){
    pages.push(content.splice(0, this.get('pageSize')));
  }
  return pages;
}),
paginatedContent: Ember.computed('pages', 'pageNumber', function(){
  return this.get('pages')[this.get('pageNumber')]
}),

  actions: {
    setSearchParams(keywordSearches){
        this.set("search", keywordSearches);
        console.log(this.get("pages"));
    },
    clearSearchParams(){
      this.set("search", "");
      this.set("keywordSearches", "");
    },
    goToLink(id) {
      this.transitionToRoute("form", id);
    },
    goToLinkPagination(index){
      this.transitionToRoute("searches");
      console.log(index);
      this.set('pageNumber', index);
    },
    previousPage: function(){
      if (this.get('pageNumber') > 0) {
        this.set('pageNumber', this.get('pageNumber') - 1);
      }
    },
    nextPage: function(){
      if (this.get('pageNumber') + 1 < this.get('pages.length')) {
        this.set('pageNumber', this.get('pageNumber') - 1);
      }
    },

  }

});
