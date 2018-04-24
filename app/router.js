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
  // route forms is not connected to backend yet
  this.route('forms');
  this.route('fullsearchview');
});

export default Router;
