var search = $("#term-input").val();
// var apikey = '3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf';
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf"
console.log(queryURL);

function displayArticles() {
    $.ajax( {
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })    
};

displayArticles() 

$("#search-button").on('click', function() {
    event.preventDefault();
    var searchResult = $("#term-input").val().trim();
    console.log(search);
});