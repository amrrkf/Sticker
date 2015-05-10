var pictureSource; // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
	
	// Show the captured photo
	//alert("source"+imageData);
	$(".common-stick-image").attr("src",imageData);
}


// A button will call this function
//
function capturePhoto() {
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
		quality : 100,
		allowEdit : true,
		destinationType : destinationType.FILE_URI
	});
}


// A button will call this function
//
function getPhoto(source) {
	// Retrieve image file location from specified source
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
		quality : 100,
		destinationType : destinationType.FILE_URI,
		sourceType : source
	});
}

// Called if something bad happens.
// 
function onFail(message) {
	alert('Failed because: ' + message);
}

function savePic(file) {
	window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError);
}

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry) {
	var d = new Date();
	var n = d.getTime();
	//new file name
	var newFileName = n + ".jpg";
	var myFolderApp = "Sticker";

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
		//The folder is created if doesn't exist
		fileSys.root.getDirectory(myFolderApp, {
			create : true,
			exclusive : false
		}, function(directory) {
			entry.moveTo(directory, newFileName, successMove, resOnError);
		}, resOnError);
	}, resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
	//I do my insert with "entry.fullPath" as for the path
}

function resOnError(error) {
	alert(error.code);
}
