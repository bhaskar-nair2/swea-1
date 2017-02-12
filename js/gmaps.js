google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(12.8229069, 80.0440211)
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(12.8229069, 80.0440211),
		map: map,
		title: 'SRM UNIVERSITY!'
	});
}
