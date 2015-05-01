$(document).ready(function() {
	
	// Create leaflet map object
	var map = L.map('map-container').setView([46.852, -121.760], 13);

	// Create three layers for map object
	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	// Create map layers object 
	var mapLayers = {
		"Satellite": satLayer,
		"Map View": drawLayer,
		"Open Street Maps": osm
	};

	// Add control panel to map to allow use of all three layers
	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);

	// Add three markers for various points of interest around Mt. Rainier
	var circle = L.circle([46.852, -121.760], 300, {
    	color: 'blue',
    	fillColor: 'lightblue',
    	fillOpacity: 0.5
	}).addTo(map);
	circle.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.").openPopup();
	
	var marker2 = L.marker([46.846717, -121.767467]).addTo(map);
	marker2.bindPopup("<b>Point Success</b><br>Feeling adventurous?");

	var marker3 = L.marker([46.846335, -121.745409]).addTo(map);
	marker3.bindPopup("<b>Gibraltar Rock</b><br>Save yourself the trip to Spain.");

});