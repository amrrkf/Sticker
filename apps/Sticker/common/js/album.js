function intialize() {
	
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
	
	$("#albumSubmit").click(function(){

		$("#albumForm").submit();
	});
	
	$("#albumForm").submit(function(){
		alert("Album!!");

	});

	});
