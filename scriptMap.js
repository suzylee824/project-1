$( document ).ready(function(){
    let getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                console.log(lat, long)
                initMap(lat, long)
            })
        } else {
            console.log("Your geo doesn't work!")
        }
    }
    
    function initMap(x, y) {
        console.log(x, y)
    
        // pick center coordinates for your map
        var myMapCenter = { lat: x, lng: y };
     
        // create map and say which HTML element it should appear in
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myMapCenter,
            zoom: 14
        });
        var marker = new google.maps.Marker({
            map: map,
            position: myMapCenter,
            title: 'Hello World!'
    
        });
        console.log('lat', x)
        console.log('lon', y)
        marker.addListener('click', function () {
            alert('Marker was clicked!');
        })
        let queryURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=gym&fields=photos,formatted_address,name,opening_hours,rating&radius=1000&location=${x},${y}&key=AIzaSyAfjKSMldEsLSZY9wAnOvIe7ZJFE3BdKZw`
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response.results)
               response.results.forEach(item=>{
                   console.log(item)

                $('#results').append(`<div style='width:100%'><h5> - ${item.name} : ${item.vicinity}</h5></div>`)

               })
            })
    }
    
    
    getLocation();

})
