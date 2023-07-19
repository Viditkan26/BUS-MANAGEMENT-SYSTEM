var map = L.map('map')
map.setView([51.505, -0.09], 13);

googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleHybrid.addTo(map)

// googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });
// googleStreets.addTo(map)


// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// setInterval(()=>{
    navigator.geolocation.getCurrentPosition(success,error);
// },2000)

let marker,circle,zoom
function success(pos){
    const lat=pos.coords.latitude;
    const lon=pos.coords.longitude;
    const accuracy=pos.coords.accuracy;
    console.log(`Latitude: ${lat}, longitude: ${lon}`);

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


// console.stdlog = console.log.bind(console);
// console.logs = [];
// console.log = function(){
//     console.logs.push(Array.from(arguments));
//     console.stdlog.apply(console, arguments);
// }

// localStorage.setItem('Logs', console.logs);
