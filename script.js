$(document).ready(function(){
  $.get("https://www.reddit.com/r/aww/.json", function(goodness){
    var redditArray = goodness.data.children;
    for(var i=0; i<redditArray.length; i++){
      var thumbnail = redditArray[i].data.thumbnail;
      var title = redditArray[i].data.title;
      var author = redditArray[i].data.author;
      var score = redditArray[i].data.score;
      var permalink = 'https://www.reddit.com/' + redditArray[i].data.permalink;
      $('section').append(
       '<div class="row each"><h3 class="title">Title: ' + title +
       '</h3><a class="photo" href="'+ permalink +'">' + '<img src="'
       + thumbnail+'" class="img-rounded" width=150 height=150/>' + '</a><h4 class="author">Author: ' + author +
        '</h4><h4 class="score">Score: ' + score +
         '</h4></div>');
    }
  });
});
