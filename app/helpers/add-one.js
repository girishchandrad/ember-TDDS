import { helper } from '@ember/component/helper';

export function addOne(params/*, hash*/) {
  let results = parseInt(params) + 1
  return results
}

export default helper(addOne);
