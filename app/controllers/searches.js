import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';


export default Controller.extend({
 queryParams: ['searchkey'],
 keywordSearches: "",
 resultLength: computed.alias('model.length'),
 isSearchKeyBlank: computed.notEmpty('searchkey'),
 ifParamsExist: computed('searchkey', function(){
  return this.get('searchkey');
}),

  actions: {
    setSearchParams(){
      let ifParamsExist = this.get('ifParamsExist');
      let isSearchKeyBlank = this.get('isSearchKeyBlank');

    },
    clearSearchParams(){
      this.set('searchkey', "");
    }
  }

});
