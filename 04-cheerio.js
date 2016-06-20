var rp = require('request-promise');
var cheerio = require('cheerio');


rp("http://itp.nyu.edu/camp2016/calendar")
    .then(function(html) {
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        var $ = cheerio.load(html);
        var sessions = [];

        $('.sessionListItem').each(function(i, elem) {
            var title = $(elem).find('h3 a').text();
            sessions.push(title);
        });

        console.log(sessions);
    })
    .catch(function(err) {
        console.log('FAIL');
    });
