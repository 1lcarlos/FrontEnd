//constructor de mapa
mapboxgl.accessToken = 'pk.eyJ1IjoiMWxjYXJsb3MiLCJhIjoiY2tzeTFza2ttMmY0czJubGVrcThxcWxseiJ9.6oJv9K1rrz1IgUTMpLu6Uw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.096, 4.545], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
//Agrego geolocalizador, este es un plugin que necesita una libreria. mirar el index.html
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));
// Set marker options.
//Marcador movible con el raton
const marker = new mapboxgl.Marker({
    color: "#000",
    draggable: true
}).setLngLat([-74.096, 4.545])
    .addTo(map);
// Agrego controles de Navegacion zoom in zoom out
    const nav1 = new mapboxgl.NavigationControl();
    map.addControl(nav1, 'top-left');
//Agrego escala
const scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'imperial'
    });
    map.addControl(scale);    
    scale.setUnit('metric');

//Con estas lineas se agrega al mini mapa, el constructor recibe dos parametros
//el primero es un objeto que tiene todas las propiedades del minimapa y el segundo 
//parametro es la posicion donde lo quieres ubicar   
      map.on("style.load", function () {
          
        // Possible position values are 'bottom-left', 'bottom-right', 'top-left', 'top-right'
        map.addControl(new mapboxgl.Minimap({
            center: [-74.096, 4.545],
            zoom: 4,
            zoomLevels: [],
            dragPan: true,
            scrollZoom: true,
            boxZoom: false,
            dragRotate: false,
            keyboard: false,
            doubleClickZoom: false,
            touchZoomRotate: false,
            lineColor: "red",
            lineWidth: 1,
            lineOpacity: 1,

            fillColor: "green",
            fillOpacity: 0.25
          }), 'bottom-right');
      });