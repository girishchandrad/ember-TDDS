import DS from 'ember-data';

export default DS.Model.extend({
  jurisdiction: DS.attr('string,'),
  entityType: DS.attr('string'),
  formNameDescription: DS.attr('string'),
  formName: DS.attr('string'),
  formLink: DS.attr('string'),
  supplemental: DS.attr('string'),
  instructionsLink: DS.attr('string'),
  efileAllowed: DS.attr('string'),
  efilRequired: DS.attr('string'),
  efileExplanation: DS.attr('string'),
  efileAuthorizationName: DS.attr('string'),
  efileAuthorizationNameDescripton: DS.attr('string'),
  dueDate: DS.attr('date'),
  dueDateIfNotCalender: DS.attr('string'),
  extensionDueDate: DS.attr('date'),
  extensionDueDateIfNotCalender: DS.attr('string'),
  extensionRequiredOrAautomatic: DS.attr('string')
});
