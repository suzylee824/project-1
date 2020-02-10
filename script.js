$(document).ready(function() {
    $(".finalWorkOut").hide().fadeIn(1000);
        $("#firstColumn").hide().fadeIn(1700);
    
        $(".mapSection").hide().fadeIn(2300);
    });
    
    $(document).ready(function() {
      $("#ferry").hide().fadeIn(1000);
          $("#suzy").hide().fadeIn(1500);
          $("#armen").hide().fadeIn(2000);
          $("#isaac").hide().fadeIn(2500);
      });

let country = "US";
let keyword = "hits";
let genre = "ALL";
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi?country="+ country + "&keyword=" + keyword + "&genre=" + genre,
  "method": "GET",
  "headers": {
      "x-rapidapi-host": "30-000-radio-stations-and-music-charts.p.rapidapi.com",
      "x-rapidapi-key": "c2549711afmshbda3cfdb733d78cp176760jsnf03cbbc8b495"
  }
}

let result;
function getRadio() {
$.ajax(settings).done(function (response) {
  console.log(response);
   result = response.results;
   console.log(result);
   for (var i = 0; i < 5; i++) {
     let row = $('<li class="listItem"></li>');
     let link = $('<a href=""></a>');
     link.text(result[i].n)
     link.attr('href',result[0].u);
     row.append(link);
     $('#musicList').append(row);
   }
   });
}
function getRadioName() {
 return result[0].n;
}
function getURL() {
return result[0].u;
}
$('.musicKey').on('click',function () {
let input = $('.input').val().trim();
if (input == " "){
  return
}
keyword = input;
console.log(keyword);
getRadio();
})