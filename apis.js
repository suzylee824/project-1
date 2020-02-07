  let country = "US";
  let keyword = "rap";
  let genre = "ALL";

  let queryURL = "https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi?country="
   + country + "&keyword=" + keyword + "&genre=" + genre;

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
let results = response;
$.ajax(settings).done(function (response) {
	console.log(response);
  let result = response.results;
});

function getRadioName() {
   return result[0].n;
}
function getURL() {
  return result[0].u;
}
