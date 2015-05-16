$(function() {
var userId;
var href="#";
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
		var html613=$("<li class='ui-block-c'>").append("<a class=' ui-btn ui-content  ui-icon-delete ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html61=$("<ul class='ui-grid-b'>").append(html611,html612,html613);
		var html6=$("<div data-role='navbar' class='ui-content nav ui-navbar' role='navigation'>").append(html61);

		var html=$("<div id=stick-"+Id+" class='stick ui-body ui-corner-all'>").append(html1,html2,html3,html4,html5,html6);
		sticksDiv.append(html);
	}
	$(".stickCheckBox").hide();

}

/////////////////////////////////////////////////////////// getUserSticks ////////////////////////////////////////////////////////
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
		alert("No sticks found, create a new stick");
		//WL.Toast.show("No sticks found, create a new stick");
		}
		else 
			displaySticks(result.invocationResult.resultSet);		
	}

function getUserAlbumsFailure(result){
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
		var html613=$("<li class='ui-block-c'>").append("<a class=' ui-btn ui-content  ui-icon-delete ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html61=$("<ul class='ui-grid-b'>").append(html611,html612,html613);
		var html6=$("<div data-role='navbar' class='ui-content nav ui-navbar' role='navigation'>").append(html61);

		var html=$("<div id=stick-"+Id+" class='stick ui-body ui-corner-all'>").append(html1,html2,html3,html4,html5,html6);
		sticksDiv.append(html);
	}
	$(".stickCheckBox").hide();

}

	function loadAlbums() {
		//load all albums for the logged in user
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

	function intialize() {
		userId= parseInt(getActiveUser());
		
		// function to hide or show albums and sticks
		var optionSelected = $('#stickAlbumSelect').find('option:selected');
		var optValueSelected = optionSelected.val();
		if (optValueSelected == "alb") {
			$("#stickList").hide();
			//load albums from DB
			$("#albumList").show();
		} else {
			$("#albumList").hide();
			//load sticks from DB
			getUserSticks(userId);
			$("#stickList").show();
		}
		$("#deleteSelect").hide();
		$(".albumCheckBox").hide();
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