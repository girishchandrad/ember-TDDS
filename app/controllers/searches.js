import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({


 queryParams: ["search", "pageNumber", "sortAscending"],
 sortAscending: true,
 pageNumber: 0,
 pageBegin: computed("pageNumber", function(){
   return this.get('pageNumber') + 1;
 }),
 pageEnd: computed("pageNumber","pageSize", function(){
   return this.get('pageNumber') + 1 * this.get("pageSize");
 }),

 pageSize: 2,
 search:null,
 taxSearches:null,
 keywordSearches: null,
 metaFilters: null,
 searchTypes: null,
 isDisabled: empty("keywordSearches"),

pages: computed("model", function(){
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
paginatedContent: computed('pages', 'pageNumber', function(){
  console.log(this.get('pages'))
  return this.get('pages')[this.get('pageNumber')]
}),

  actions: {
    setSearchParams(keywordSearches){
        this.set("search", keywordSearches);
        this.set('pageNumber', 0);
    },
    clearSearchParams(){
      this.set("search", "");
      this.set("keywordSearches", "");
    },
    goToLink(id) {
      this.transitionToRoute("form", id);
    },
    previousPage: function(){
      if (this.get('pageNumber') > 0) {
        this.set('pageNumber', this.get('pageNumber') - 1);
      }
    },
    nextPage: function(){
      if (this.get('pageNumber') + 1 < this.get('pages.length')) {
        this.set('pageNumber', this.get('pageNumber') + 1);
      }
    },
    beginPage: function(){
      this.set('pageNumber', 0)
    },
    endPage: function(){
      this.set('pageNumber', this.get('pages.length') - 1)
    }

  }

});
