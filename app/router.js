import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tax-searches',function(){
    this.route('index',{ path: '' } )
  });
  this.route('form', { path: '/tax-searches/:taxSearch_id' });

});

export default Router;
