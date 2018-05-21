import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    transitionToSearch(searchvalue){
      this.transitionTo("searches", {queryParams: {search:searchvalue}});
    }
  }
});
