import Route from '@ember/routing/route';

export default Route.extend({

queryParams:{
  searchdata: {
    refreshModel: true
  }
},
  model(params){
    if (params.searchdata === "" ||  params.searchdata === undefined) {
        return ""
    } else {
      return  this.store.query('tax-form-due-date', params);
    }
  }
});
