import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import { empty } from '@ember/object/computed';
import { alias } from '@ember/object/computed';


export default Controller.extend({
 queryParams: ['searchkey'],
 searchkey:null,
 keywordSearches: null,
 resultLength: alias('model.length'),
 searchKeyChange: alias('searchkey'),
 keywordSearches: oneWay('searchKeyChange'),
 isDisabled: empty('keywordSearches'),

  actions: {
    setSearchParams(){
        let keywordSearches = this.get('keywordSearches');
        this.set('searchkey', keywordSearches);
    },
    clearSearchParams(){
      this.set('searchkey', "");
      this.set('keywordSearches', "");
    }
  }

});
