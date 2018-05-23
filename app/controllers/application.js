import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  searchdata: null,
  isDisabled: empty('searchdata'),
  searchvalue: alias('searchdata')
});
