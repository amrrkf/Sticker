function intialize() {
	
}


function addStick(stick) {
	//add a stick to the user sticks
}

function capturePhoto() {
	//capture a photo from the camera
}

function getPhoto(source) {
	//load photo from phone gallery
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
	});
