import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key, attributes) {
    json.attributes = json.attributes || {};
    this._super(snapshot, json.attributes, key, attributes);
  }
});
