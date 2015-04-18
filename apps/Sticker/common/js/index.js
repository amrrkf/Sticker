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
		alert("Deleted");
	});

});