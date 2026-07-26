window.onload = function(){

    var map;

    function initial(){

        const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: local,
        });

        const marker = new google.maps.Marker({
        position: local,
        map: map,
        });

        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,conten){
        var latLgn = {'lat':lat, 'long':long};

        var marker = new google.maps.Marker({
            position:latLgn,
            map:map,
            icon:icon,
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20),
        });

        infoWindow.open(map,marker);

    }

    initial();
    addMarker();
