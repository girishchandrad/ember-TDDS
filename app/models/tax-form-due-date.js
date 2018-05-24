import DS from 'ember-data';
import EmberObject, { computed, observer } from '@ember/object';

export default DS.Model.extend({
  jurisdiction: DS.attr('string'),
  entityType: DS.attr('string'),
  desc: DS.attr('string'),
  name: DS.attr('string'),
  link: DS.attr('string'),
  instructionsLink: DS.attr('string'),
  efileAllowed: DS.attr('boolean'),
  efileRequired: DS.attr('boolean'),
  efileRequiredDesc: DS.attr('string'),
  efileAllowedDesc: DS.attr('string'),
  dd: DS.attr('date'),
  fiscalDdDesc: DS.attr('string'),
  extDd: DS.attr('date'),
  fiscalExtDdDesc: DS.attr('string'),


  ddDate:computed('dd', function(){
    return moment(this.get('dd')).format("MMMM Do YYYY");
  }),
  extDdDate:computed('dd', function(){
    return moment(this.get('extDd')).format("MMMM Do YYYY");
  }),

});
