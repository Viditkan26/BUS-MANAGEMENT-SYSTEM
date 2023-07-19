var map = L.map('map')
map.setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success,error);

let marker,circle,zoom

function success(pos){
    const lat=pos.coords.latitude;
    const lon=pos.coords.longitude;
    const accuracy=pos.coords.accuracy;

    if(marker){
        map.removeLayer(marker);
        map.removeLayer(circle)
    }

    marker=L.marker([lat,lon]).addTo(map);
    circle=L.circle([lat,lon],{radius:accuracy}).addTo(map);
    
    if(!zoom){
        zoom=map.fitBounds(circle.getBounds())
    }


}

function error(err){
    if(err.code===1){
        alert ("please allow geolocation access")
    }else{
        alert("something went wrong")
    }
}

