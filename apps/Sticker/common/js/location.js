function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}

function locationname(latitude, longitude)
{

    var geocoder ;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({'latLng': latlng}, function(results, status)
     {

         if (status == google.maps.GeocoderStatus.OK)
          {
                 if (results[0])
                 {
                     var add= results[0].formatted_address ;
                     $('#stickLocation').text('Location:'+ add);


                 }
                 else 
                 {
           alert("address not found");
                 }
         }
          else
            {
         //document.getElementById("location").innerHTML="Geocoder failed due to: " + status;
            alert("Geocoder failed due to: " + status);
                }
            });

    }


// Wait for Cordova to load
//
   

// Cordova is ready
//
// getLatLong Geolocation
//
    function getLatLong(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';

        locationname(position.coords.latitude, position.coords.longitude);
    }


// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
}

