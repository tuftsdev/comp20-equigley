var lat = -99999;
var lng = -99999;

var me = new google.maps.LatLng(lat, lng);
var myOptions = {
                    zoom: 8,
                    center: me,
};

var map;
var selfMarker;
var infowindow = new google.maps.InfoWindow();

function init() {
    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    getMyLocation();
    }

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log("1" + lat + " " + lng);
        });
    console.log("2" + lat + " " + lng);
    }
    else {
        alert("Sorry, geolocation is not supported by your web browser.  -MGMT");
    }
    renderMap();
}

function renderMap() {
    me = new google.maps.LatLng(lat, lng);

    map.panTo(me);

    selfMarker = new google.maps.Marker({
            position: me,
            title: "Here I Am!"
        });
    selfMarker.setMap(map);

    google.maps.event.addListener(selfMarker, 'click', function() {
            infowindow.setContent(selfMarker.title);
            infowindow.open(map, selfMarker);
        });
}