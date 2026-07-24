document.addEventListener("DOMContentLoaded", function () {

    // BOTÓN BUSCAR
    const botonBuscar = document.getElementById("buscarRuta");

    if (botonBuscar) {
        botonBuscar.addEventListener("click", function () {
            alert("🌳 EcoRuta encontró una ruta saludable para ti.");
        });
    }

    // MAPA ECORUTA
    const contenedorMapa = document.getElementById("map");

    if (!contenedorMapa) {
        return;
    }

    if (typeof L === "undefined") {
        console.error("Leaflet no se cargó correctamente.");
        contenedorMapa.innerHTML =
            "<p style='padding:30px;'>No se pudo cargar el mapa.</p>";
        return;
    }

    const map = L.map("map");

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    const casa = L.marker([-6.7700, -79.8425])
        .addTo(map)
        .bindPopup("<b>🏠 Casa</b><br>Punto de inicio");

    const colegio = L.marker([-6.7748, -79.8365])
        .addTo(map)
        .bindPopup("<b>🏫 Colegio</b><br>Punto de llegada");

    const puntosRuta = [
        [-6.7700, -79.8425],
        [-6.7710, -79.8415],
        [-6.7720, -79.8405],
        [-6.7730, -79.8395],
        [-6.7735, -79.8385],
        [-6.7748, -79.8365]
    ];

    const ruta = L.polyline(puntosRuta, {
        color: "green",
        weight: 6,
        opacity: 0.85
    }).addTo(map);

    map.fitBounds(ruta.getBounds(), {
        padding: [40, 40]
    });

    setTimeout(function () {
        map.invalidateSize();
    }, 300);
});