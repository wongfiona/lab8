function initMap() {
	// add your code here
  L.mapquest.key = 'GgsFfvxnGGlfd0y0xUAsSdgBrx6Nrygh';

  //'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.8788, -117.2359],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  //add a marker to the map
  L.marker([32.8788, -117.2359]).addTo(map);
}
