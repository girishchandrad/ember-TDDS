import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | taxFormDueDate/search', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tax-form-due-date/search');
    assert.ok(route);
  });
});
