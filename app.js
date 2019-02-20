var search = $(this).attr("data-headlines");
var apikey = '3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf';
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + apikey 