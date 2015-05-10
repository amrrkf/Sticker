function intialize() {
	$("#imgEditStickDelete").hide();
}


function loadStick() {
	//add a stick to the user sticks
}

function saveStick() {
	//save the edits in the stick
}


$(function(){
	
	intialize();
	
	
	$("#saveStick").click(function(){

		$("#editStickForm").submit();
	});
	
	$("#editStickForm").submit(function(){
		alert("edit Stick!!");
	});
	$("#takeEditStickPic").click(function(){
		$("#editStickPopup2").popup("close");
		capturePhoto();
		$("#imgEditStickDelete").show();

	});
	$("#editPicGallery").click(function(){
		$("#editStickPopup2").popup("close");
		getPhoto(pictureSource.SAVEDPHOTOALBUM);
		$("#imgEditStickDelete").show();
	});

	//remove the loaded photo from the form
	$("#imgEditStickDelete").click(function(){
		$(".common-stick-image").attr("src","/");
		$("#imgEditStickDelete").hide();
	});

	});
