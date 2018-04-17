import Ember from 'ember';
import DS from 'ember-data';

import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  coalesceFindRequests: true,
  headers: {
   'X-CSRF-Token': Ember.$('meta[name="csrf-token"]').attr('content')
  },
  host: ENV.apiURL,
  async: true,
  ajax: function(url, method, hash) {
   hash = hash || {};
   hash.crossDomain = true;
   hash.xhrFields = {withCredentials: true};
   return this._super(url, method, hash);
  }
});
