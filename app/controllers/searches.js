import Controller from '@ember/controller';

export default Controller.extend({

  searchKey: '',
  isSearchKeyBlank: Ember.computed.notEmpty('searchKey'),
  queryParams: ['searchdata'],
  paramsExist: Ember.computed('searchKey', function(){
    return this.get('searchKey');
  }),
  resultLength: Ember.computed.alias('model.length'),


  actions: {
    setSearchParams(){
      let paramsExist = this.get('paramsExist');
      let isSearchKeyBlank = this.get('isSearchKeyBlank');
      if (isSearchKeyBlank) {
          this.set('searchdata', paramsExist);
      }
    },
    clearSearchParams(){
      this.set('searchdata', "");
      this.set('searchKey', "");
    }
  }
});
