function initMap(){
    var location ={
        lat: 45.246520,
        lng: 19.851710
    }

    var map=new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center:location
    }
    );
    var marker = new google.maps.Marker({
        position:location,
        map: map
    })
}

