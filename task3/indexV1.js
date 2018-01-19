var https = require('https');
var link = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
https.get(link, function (res) {
  res.on('data', function (data) {
    var result = data.toString();
    result = JSON.parse(result);
    console.log(result);
  });
});
