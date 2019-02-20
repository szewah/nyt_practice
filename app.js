// $("#search-button").on("click", function() {
// });
$("button").on('click', function() {

    event.preventDefault()
    var search = $("#term-input").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
    search + "&api-key=3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#search-results").empty();
        console.log(response);

        var results = response.response.docs;

        for (var i = 0; i < results.length; i++) {
            var resultsDiv = $("<div>");
            var resultsHeadline = $("<p>");
            resultsHeadline.text(results[i].headline.main);
            var resultsImg = $("<img>");
            resultsImg.attr('src', results[i].multimedia[2].web_url);
            resultsDiv.append(resultsHeadline).append(resultsImg);
            $("#search-results").append(resultsDiv);
        }
    })    
});

