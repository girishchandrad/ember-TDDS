import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { empty } from '@ember/object/computed';



export default Controller.extend({
 queryParams: ['search'],
 search:null,
 keywordSearches: null,
 isDisabled: empty('keywordSearches'),

  actions: {
    setSearchParams(keywordSearches){
        this.set('search', keywordSearches);
    },
    clearSearchParams(){
      this.set('search', "");
      this.set('keywordSearches', "");
    }
  }

});
