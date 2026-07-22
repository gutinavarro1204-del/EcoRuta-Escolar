document.getElementById("buscarRuta").addEventListener("click",function(){

alert("🌳 EcoRuta encontró una ruta saludable para ti.");

});

// MAPA ECORUTA

var map = L.map('map').setView([-6.7714, -79.8409], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);