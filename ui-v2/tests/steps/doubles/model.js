export default function(scenario, create) {
  scenario
    .given(['$number $model model[s]?', '$number $model models'], function(number, model) {
      return create(number, model);
    })
    .given(['$number $model model[s]? with the value "$value"'], function(number, model, value) {
      return create(number, model, value);
    })
    .given(
      ['$number $model model[s]? from yaml\n$yaml', '$number $model model[s]? from json\n$json'],
      function(number, model, data) {
        return create(number, model, data);
      }
    );
}
