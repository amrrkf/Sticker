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

function locationName(latitude, longitude)
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
                     var value=add.split(",");
                     count=value.length;
                     country=value[count-1];
                     state=value[count-2];
                     city=value[count-3];
                     $('#stickLocation').text('Location: '+ city +','+state +','+country );
                 }
                 else 
                 {
                     $('#stickLocation').text('Location: Unknown');
                 }
         }
          else
            {
         //document.getElementById("location").innerHTML="Geocoder failed due to: " + status;
            //alert("Geocoder failed due to: " + status);
            $('#stickLocation').text('Location: Unknown');
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
        locationName(position.coords.latitude, position.coords.longitude);
    }


// onError Callback receives a PositionError object
//
function onError(error) {
    $('#stickLocation').text('Location: Unknown');
    //alert('code: '    + error.code    + '\n' +
            //'message: ' + error.message + '\n');
}

