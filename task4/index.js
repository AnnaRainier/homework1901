window.addEventListener ('load', function () {
  fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3')
    .then(function(response) {
      return response.json();
      //console.log('result');
    }).then(function(json) {
        console.log(json);
    });
  });
