function intialize() {
	
}


function loadStick() {
	//add a stick to the user sticks
}

function capturePhoto() {
	//capture a photo from the camera
}

function getPhoto(source) {
	//load photo from phone gallery
}

function saveStick() {
	//save the edits in the stick
}

function removePhoto() {
	//remove the loaded photo from the form
}

$(function(){
	
	intialize();
	
	
	$("#saveStick").click(function(){

		$("#editStickForm").submit();
	});
	
	$("#editStickForm").submit(function(){
		alert("edit Stick!!");
	});

	});
