import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  checkRoute: service(),
  checkRouteName: true,

  checkRouteName: Ember.computed('checkRoute.currentRoute', function(){
    let checkRoute = this.get('checkRoute').isCurrentRoute();
    return checkRoute
  }),



});
