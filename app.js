$("button").on("click", function() {
  event.preventDefault();
  var searchTerms = $("#term-input").val();
  var startDate = $("#year-start").val();
  var endDate = $("#year-end").val();

  var queryURL1 =
    // "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    // searchTerms +
    // "&api-key=3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf&begin_date=" +
    // startDate +
    // "&end_date=" +
    // endDate;

    "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerms +
    "&begin_date=" +
    startDate +
    "&end_date=" +
    endDate +
    "&facet_filter=true&api-key=3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf";

  var queryURL2 =
    "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerms +
    "&begin_date=20190219&end_date=20190220" +
    "&facet_filter=true&api-key=3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf";

  var params = {
    type: "GET"
  };
  if (startDate === "" && endDate === "") {
    params.url = queryURL2;
  } else {
    params.url = queryURL1;
  }
  //   $.ajax(params);
  //   $.ajax({
  //     // method: "GET",
  //     // url:  queryURL1;
  //   })
  $.ajax(params).then(function(response) {
    $("#search-results").empty();
    console.log(response);
    var results = response.response.docs;

    for (var i = 0; i < results.length; i++) {
      var resultsDiv = $("<div class='card col-md-4'>");
      var resultsImg = $("<img class='card-img-top'>").attr(
        "src",
        "https://static01.nyt.com/" + results[i].multimedia[0].url
      );
      resultsImg.attr("alt", results[i].headline.main);
      var resultsBody = $("<div class='card-body'>");
      var resultsHeadline = $("<h6 class='title'>").text(
        results[i].headline.main
      );
      var resultsSnippet = $("<p class='card-text'>").text(results[i].snippet);
      var readMore = $("<a class='card-link btn btn-warning'>").text(
        "Read more"
      );
      readMore.attr("href", results[i].web_url);
      resultsBody.append(resultsHeadline);
      resultsBody.append(resultsSnippet);
      resultsBody.append(readMore);
      resultsDiv.append(resultsImg).append(resultsBody);
      $("#search-results").append(resultsDiv);
    }
  });
});
