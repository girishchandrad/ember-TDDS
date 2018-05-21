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


 queryParams: ["search"],
 search:null,
 keywordSearches: null,
 metaFilters: null,
 searchTypes: null,
 isDisabled: empty("keywordSearches"),

  actions: {
    setSearchParams(keywordSearches){
        this.set("search", keywordSearches);
    },
    clearSearchParams(){
      this.set("search", "");
      this.set("keywordSearches", "");
    },
    goToLink(id) {
      this.transitionToRoute("form", id);
    }
  }

});
