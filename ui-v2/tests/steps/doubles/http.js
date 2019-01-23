export default function(scenario, respondWith) {
  // respondWith should set the url to return a certain response shape
  scenario
    .given(['the url "$url" responds with a $status status'], function(url, status) {
      respondWith(url, {
        status: parseInt(status),
      });
    })
    .given(['the url "$url" responds with from yaml\n$yaml'], function(url, data) {
      respondWith(url, data);
    });
}
