function intialize() {
	navigator.geolocation.getCurrentPosition(getLatLong, onError);
	$("#imgStickDelete").hide();
	getTime();    
}


function addStick(stick) {
	//add a stick to the user sticks
}

function getTime() {
	//get the current time
	var dt = new Date($.now());
	var add= dt.toString();
	var value=add.split(" ");
    count=value.length;
    var endTime= value[count-7]+','+value[count-6]+'/'+value[count-5]+'/'+value[count-4]+'   '+value[count-3];
    $('#stickTime').text('Time: '+ endTime);
}

$(function(){
	
	intialize();
	
	$("#stickDone").click(function(){
		$("#stickForm").submit();
	});
	
	$("#stickForm").submit(function(){
		alert("Stick!!");
	});

	$("#takeStickPic").click(function(){
		$("#stickPopup2").popup("close");
		capturePhoto();
		$("#imgStickDelete").show();

	});
	$("#takePicGallery").click(function(){
		$("#stickPopup2").popup("close");
		getPhoto(pictureSource.SAVEDPHOTOALBUM);
		$("#imgStickDelete").show();
	});

	//remove the loaded photo from the form
	$("#imgStickDelete").click(function(){
		$(".common-stick-image").attr("src","/");
		$("#imgStickDelete").hide();
	});
	
	});
