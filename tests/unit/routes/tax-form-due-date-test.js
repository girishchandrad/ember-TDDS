import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | taxFormDueDate', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tax-form-due-date');
    assert.ok(route);
  });
});
