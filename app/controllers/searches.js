import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';


export default Controller.extend({

jurisdiction: '',
type: '',
searchKey: '',
resultLength: computed.alias('model.length'),
isSearchKeyBlank: computed.notEmpty('searchKey'),
queryParams: ['searchdata', 'type', 'jurisdiction'],
ifParamsExist: computed('searchKey', function(){
  return this.get('searchKey');
}),

  actions: {
    setSearchParams(){
      let ifParamsExist = this.get('ifParamsExist');
      let isSearchKeyBlank = this.get('isSearchKeyBlank');
      if (isSearchKeyBlank) {
          this.set('searchdata', ifParamsExist);
      }
    },
    clearSearchParams(){
      this.set('searchdata', "");
      this.set('searchKey', "");
    }
  }
});
