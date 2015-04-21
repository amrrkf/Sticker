function intialize() {
	// function to hide or show albums and sticks
	$("#deleteSelect").hide();
	$("#checkBoxStick").hide();
	$("#checkBoxAlbum").hide();
	var optionSelected = $('#stickAlbumSelect').find('option:selected');
	var optValueSelected = optionSelected.val();
	if (optValueSelected == "alb") {
		$("#stickList").hide();
		$("#albumList").show();
	} else {
		$("#albumList").hide();
		$("#stickList").show();
	}
}


function loadSticks() {
	//load all sticks for the logged in user
}


function loadAlbums() {
	//load all albums for the logged in user
}


function displaySticks(sticks) {
	//display sticks in their positions
}


function displayAlbums(albums) {
	//display albums in their positions
}


function deleteItem() {
	//delete selected sticks or albums
}


function deleteStick(stickId) {
	//delete stick specified by stickId
}


function deleteAlbum(albumId) {
	//delete album specified by albumId
}


function share(stickId) {
	//share stick specified by stickId
}


$(function() {
	intialize();

	$('#stickAlbumSelect').change(function() {
		intialize();
	});
	$('#homeListitem').click(function() {
		$("#deleteSelect").show();
		$("#homePanel").panel("close");
		$("#checkBoxStick").show();
		$("#checkBoxAlbum").show();
	});
	$('#deleteSelect').click(function() {
		$("#homePopup2").popup("open");
	});
	$('#delNo').click(function() {
		$("#homePopup2").popup("close");
	});
	$('#delYes').click(function() {
		$("#homePopup2").popup("close");
		alert("Deleted");
		intialize();
	});

});