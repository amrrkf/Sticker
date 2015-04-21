function intialize() {
	
}


function loadAlbum() {
	//load the album information
}

function loadSticks() {
	//load all the sticks for the user
}

function displaySticks(sticks) {
	//display sticks in their positions
}

function addAlbum() {
	//add an album for the user
}

$(function(){
	
	intialize();
	
	$("#editAlbumSubmit").click(function(){

		$("#editAlbumForm").submit();
	});
	
	$("#editAlbumForm").submit(function(){
		alert("edit Album!!");

	});

	});
