import Route from '@ember/routing/route';

export default Route.extend({

queryParams:{
  searchkey: {
    refreshModel: true
  }
},
  model(params){
    if (params.searchkey === "" ||  params.searchkey === undefined) {
        return ""
    } else {
      return  this.store.query('tax-form-due-date', params);
    }
  }
});
