export default function(scenario, assert, currentPage, pluralize) {
  scenario
    .then(['I see $num $model', 'I see $num $model model', 'I see $num $model models'], function(
      num,
      model
    ) {
      const len = currentPage()[pluralize(model)].filter(function(item) {
        return item.isVisible;
      }).length;

      assert.equal(len, num, `Expected ${num} ${pluralize(model)}, saw ${len}`);
    })
    // TODO: I${ dont } see
    .then([`I see $num $model model[s]? with the $property "$value"`], function(
      // negate,
      num,
      model,
      property,
      value
    ) {
      const len = currentPage()[pluralize(model)].filter(function(item) {
        return item.isVisible && item[property] == value;
      }).length;
      assert.equal(
        len,
        num,
        `Expected ${num} ${pluralize(model)} with ${property} set to "${value}", saw ${len}`
      );
    });
}
