$(function() {
var userId;
var href="#";
/////////////////////////////////////////////////////////// getUserSticks ////////////////////////////////////////////////////////
function deleteStick(userId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getUserSticks',
			parameters : [userId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : getUserSticksSuccess,
			onFailure : getUserSticksFailure
		});
	}


function getUserSticksSuccess(result){
		var resultLength=result.invocationResult.resultSet.length;	
		if(resultLength==0)
		{
		alert("No sticks found, create a new stick");
		//WL.Toast.show("No sticks found, create a new stick");
		}
		else 
			displaySticks(result.invocationResult.resultSet);		
	}

function getUserSticksFailure(result){
		alert("Error loading sticks");
		//WL.Toast.show("Error loading sticks");	
	}	

/////////////////////////////////////////////////////////// getUserSticks ////////////////////////////////////////////////////////
function getUserSticks(userId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getUserSticks',
			parameters : [userId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : getUserSticksSuccess,
			onFailure : getUserSticksFailure
		});
	}


function getUserSticksSuccess(result){
		var resultLength=result.invocationResult.resultSet.length;	
		if(resultLength==0)
		{
		alert("No sticks found, create a new stick");
		//WL.Toast.show("No sticks found, create a new stick");
		}
		else 
			displaySticks(result.invocationResult.resultSet);		
	}

function getUserSticksFailure(result){
		alert("Error loading sticks");
		//WL.Toast.show("Error loading sticks");	
	}	

//////////////////////////////////////////////////////// displaySticks /////////////////////////////////////////////////////////////
function displaySticks(sticks) {

	var sticksDiv=$("#stickList");
	var stickImage;	
	for (var i = 0; i < sticks.length; i++) {
		
		var Id=String(sticks[i].stickId);
		
		var html1=$("<div class='right-checkbox'>").append("<input type='checkbox' name='checkbox-h-2a' class='stickCheckBox' id=checkbox-"+Id+">");
		var html2=$("<div class=stickTitle>"+sticks[i].stickTitle+"</div>");
		var html3=$("<div class=ui-grid-a>")
		.append("<div class='ui-black-a stickTime' title='stickTime'>Time: "+sticks[i].stickTime,"<div class='ui-block-b stickLoc' title='stickLoc'>Location: "+sticks[i].stickLocation);
		if(sticks[i].stickImage==""||sticks[i].stickImage==null)
			stickImage="";
		else stickImage="/Sticker/"+sticks[i].stickImage;
		var html4=$("<div align='center'>").append("<img class='stickImg' src="+stickImage+">");
		var html5=$("<p align='center' class='stickDsc'>"+sticks[i].stickInfo+"</p>");
		
		var html611=$("<li class='ui-block-a'>").append("<a class='ui-btn ui-content  ui-icon-action ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html612=$("<li class='ui-block-b'>").append("<a href='editStick.html?stickId="+Id+"' class='ui-btn ui-content  ui-icon-edit ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html613=$("<li class='ui-block-c'>").append("<a id=delete-"+Id+" class='stickDelete ui-btn ui-content  ui-icon-delete ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html61=$("<ul class='ui-grid-b'>").append(html611,html612,html613);
		var html6=$("<div data-role='navbar' class='ui-content nav ui-navbar' role='navigation'>").append(html61);

		var html=$("<div id=stick-"+Id+" class='stick ui-body ui-corner-all'>").append(html1,html2,html3,html4,html5,html6);
		sticksDiv.append(html);
	}
	$(".stickCheckBox").hide();
	$('.stickDelete').click(function() {
		stickId=parseInt($(this).attr("id").split('-')[1]);
		//delete selected sticks or albums
		intialize();
	});



}

/////////////////////////////////////////////////////////// getUserAlbums ////////////////////////////////////////////////////////
function getUserAlbums(userId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getUserAlbums',
			parameters : [userId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : getUserAlbumsSuccess,
			onFailure : getUserAlbumsFailure
		});
	}


function getUserAlbumsSuccess(result){
		var resultLength=result.invocationResult.resultSet.length;	
		if(resultLength==0)
		{
		alert("No albums found, create a new album");
		//WL.Toast.show("No albums found, create a new album");
		}
		else 
			displayAlbums(result.invocationResult.resultSet);		
	}

function getUserAlbumsFailure(result){
		alert("Error loading albums");
		//WL.Toast.show("Error loading albums");	
	}	

//////////////////////////////////////////////////////// displayAlbums /////////////////////////////////////////////////////////////
function displayAlbums(albums) {

	var albumsDiv=$("#albumList");
	
	for (var i = 0; i < albums.length; i++) {
		var Id=String(albums[i].albumId);
		
		var html1=$("<div class='right-checkbox'>").append("<input type='checkbox' name='checkbox-h-2a' class='albumCheckBox' id=checkbox-"+Id+">");
		var html2=$("<div class=stickTitle>"+albums[i].albumTitle+"</div>");
		var html3=$("<p align='left' class='stickDsc'>"+albums[i].albumInfo+"</p>");
		var html411=$("<li class='ui-block-a'>").append("<a class='ui-btn ui-content  ui-icon-action ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html412=$("<li class='ui-block-b'>").append("<a href='editAlbum.html?albumId="+Id+"' class='ui-btn ui-content  ui-icon-edit ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html413=$("<li class='ui-block-c'>").append("<a id=delete-"+Id+" class='albumDelete ui-btn ui-content  ui-icon-delete ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html41=$("<ul class='ui-grid-b'>").append(html411,html412,html413);
		var html4=$("<div data-role='navbar' class='ui-content nav ui-navbar' role='navigation'>").append(html41);

		var html=$("<div id=album-"+Id+" class='album ui-body ui-corner-all'>").append(html1,html2,html3,html4);
		albumsDiv.append(html);
	}
	$(".albumCheckBox").hide();


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

	function intialize() {
		userId= parseInt(getActiveUser());
		
		// function to hide or show albums and sticks
		var optionSelected = $('#stickAlbumSelect').find('option:selected');
		var optValueSelected = optionSelected.val();
		if (optValueSelected == "alb") {
			$("#stickList").hide();
			//load albums from DB
			getUserAlbums(userId);
			$("#albumList").show();
		} else {
			$("#albumList").hide();
			//load sticks from DB
			getUserSticks(userId);
			$("#stickList").show();
		}
		$("#deleteSelect").hide();
	}

	intialize();

	$('#stickAlbumSelect').change(function() {
		intialize();
	});
	
	$('#homeListitem').click(function() {
		$("#deleteSelect").show();
		$("#homePanel").panel("close");
		$(".stickCheckBox").show();
		$(".albumCheckBox").show();
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
		//delete selected sticks or albums
		intialize();
	});



});