var pictureSource; // picture source
var destinationType; // sets the format of returned value 
var endImage;
var getImage;

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
	alert("source"+imageData);
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
	//WL.Toast.show('Failed because: ' + message);
}

function savePic(file) {
	endImage=file;
	window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError);
}

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry) {
	//var imgSrc=$(".common-stick-image").attr("src");
	alert("save pic:"+endImage);
	var value=endImage.split("/");
    count=value.length;
    var newFileName= value[count-1]; //image name
	var myFolderApp = "Sticker";

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
		//The folder is created if doesn't exist
		fileSys.root.getDirectory(myFolderApp, {
			create : true,
			exclusive : false
		}, function(directory) {
			entry.moveTo(directory, newFileName, successMove, resOnError);
			alert("dir:"+JSON.stringify(directory));
		}, resOnError);
	}, resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
	//I do my insert with "entry.fullPath" as for the path
	alert("picture saved successfully");
}

function resOnError(error) {
	alert(error.code);
	//WL.Toast.show(error.code);

}
///////////////////////////////////////////////////get Pic////////////////////////////////////////////
function getPic(file) {
	getImage=file;
	window.resolveLocalFileSystemURI(file, getPicSuccess, getPicError);
}

//Callback function when the file system uri has been resolved
function getPicSuccess(entry) {
	
	//var imgSrc=$(".common-stick-image").attr("src");
	alert("get pic:"+getImage);
	var value=getImage.split("/");
    count=value.length;
    var newFileName= value[count-1]; //image name
	var myFolderApp = "Sticker";

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
		//The folder is created if doesn't exist
		fileSys.root.getDirectory(myFolderApp, {
			create : true,
			exclusive : false
		}, function(directory) {
			entry.moveTo(directory, newFileName, successGet, getPicError);
		}, getPicError);
	}, getPicError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successGet(entry) {
	//I do my insert with "entry.fullPath" as for the path
	alert("picture retrieved successfully");
}

function getPicError(error) {
	alert(error.code);
	//WL.Toast.show(error.code);

}
