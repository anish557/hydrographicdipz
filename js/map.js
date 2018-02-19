var map;
function initMap() {
    var uluru = {lat: 43.697793, lng: -79.656292};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        disableDefaultUI: true,
        draggable: false,
        scrollwheel: false,
        panControl: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$('#map').click(function( event ) {
    window.open("https://goo.gl/maps/vDh8CTtszQ42");
});

$(window).on("resize", function(event){
    initMap();
});