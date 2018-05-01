import Controller from '@ember/controller';

export default Controller.extend({
  routing: Ember.inject.service('-routing'),
  currentRouteName: Ember.computed.reads('routing.currentRouteName'),
  checkRoute: Ember.computed.match('currentRouteName', /index/),

});
