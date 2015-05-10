function intialize() {
	        navigator.geolocation.getCurrentPosition(getLatLong, onError);

}


function addStick(stick) {
	//add a stick to the user sticks
}

function getTime() {
	//get the current time
}

function getLocation() {
	//get the current location of the user
}

function removePhoto() {
	//remove the loaded photo from the form
}
$(function(){
	
	intialize();
	
	$("#stickDone").click(function(){
		$("#stickForm").submit();
	});
	
	$("#stickForm").submit(function(){
		alert("Stick!!");
	});

	$("#takePic").click(function(){
		$("#stickPopup2").popup("close");
		capturePhoto();
	});

	$("#imgStickDelete").click(function(){
		$(".common-stick-image").attr("src","");
	});
	
	});
