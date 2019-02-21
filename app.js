$("button").on("click", function() {
  event.preventDefault();

  var today = new Date();
  // current date
  var currentDate =
    today.getFullYear() + "0" + (today.getMonth() + 1) + today.getDate();
  var searchTerms = $("#term-input").val();
  var startDate = $("#year-start").val();
  var endDate = $("#year-end").val();

  if (startDate.length < 5 && startDate.length > 0) {
    startDate = startDate + "0101";
    console.log(startDate);
    endDate = endDate + "1231";
  } else if (startDate.length === 0) {
    startDate = currentDate;
    endDate = currentDate;
    console.log("Current Date = " + currentDate);
  }

  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerms +
    "&api-key=3NHzwAZ0W4vY1w2LtontARaL9mG1GHDf&begin_date=" +
    startDate +
    "&end_date=" +
    endDate;

  $.ajax({
    method: "GET",
    url: queryURL
  }).then(function(response) {
    $("#search-results").empty();
    console.log(response);
    var results = response.response.docs;

    for (var i = 0; i < results.length; i++) {
      var resultsDiv = $("<div  class='col-lg-3'>");
      var resultsImg = $("<img class='card-img-top img-fluid img'>").attr(
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
