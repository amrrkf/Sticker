var userId;
var href="#";
var stickId;
var optValueSelected;
var busyInd = new WL.BusyIndicator(_,{text: "Please wait...",bounceAnimation: true});

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
		//alert("No sticks found, create a new stick");
		WL.Toast.show("No sticks found, create a new stick");
		}
		else 
			displaySticks(result.invocationResult.resultSet);	
			busyInd.hide();
			
	}

function getUserSticksFailure(result){
		//alert("Error loading sticks");
		busyInd.hide();
		WL.Toast.show("Error loading sticks");	
	}	

//////////////////////////////////////////////////////// displaySticks /////////////////////////////////////////////////////////////
function displaySticks(sticks) {

	var sticksDiv=$("#stickList");
	var stickImage;	
	for (var i = sticks.length-1; i >=0 ; i--) {

		var Id=String(sticks[i].stickId);
		
		var html1=$("<div class='right-checkbox'>").append("<input type='checkbox' name='checkbox-h-2a' class='stickCheckBox' id=checkbox-"+Id+">");
		var html2=$("<div class=stickTitle>"+sticks[i].stickTitle+"</div>");
		var html3=$("<div class=ui-grid-a>").append("<h4>Time: "+sticks[i].stickTime,"<h4>Location: "+sticks[i].stickLocation);
		if(sticks[i].stickImage==""||sticks[i].stickImage==null)
			stickImage="";
		else stickImage=nativeURL+sticks[i].stickImage;
		var html4=$("<div align='center'>").append("<img class='stickImg' src="+stickImage+">");
		var html5=$("<p align='center' class='stickDsc'>"+sticks[i].stickInfo+"</p>");
		
		
		var html611=$("<li class='ui-block-a'>").append("<a href='editStick.html?stickId="+Id+"' class='ui-btn ui-content  ui-icon-edit ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html612=$("<li class='ui-block-b'>").append("<a id=delete-"+Id+" class='stickDelete ui-btn ui-content  ui-icon-delete ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html61=$("<ul class='ui-grid-b'>").append(html611,html612);
		var html6=$("<div data-role='navbar' class='ui-content nav ui-navbar' role='navigation'>").append(html61);

		var html=$("<div id=stick-"+Id+" class='stick ui-body ui-corner-all'>").append(html1,html2,html3,html4,html5,html6);
		sticksDiv.append(html);
	}
	$(".stickCheckBox").hide();
	$('.stickDelete').click(function() {
		stickId=parseInt($(this).attr("id").split('-')[1]);
		//delete selected sticks or albums
		WL.SimpleDialog.show(
            "Delete Stick", 
            "Are you sure?", 
            [
             {text: "No", handler: function() {}},
             {text: "Yes", handler: function() {getusaStick(stickId);}}
             ]);
		
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
		//alert("No albums found, create a new album");
		WL.Toast.show("No albums found, create a new album");
		}
		else 
			displayAlbums(result.invocationResult.resultSet);	
			busyInd.hide();
	}

function getUserAlbumsFailure(result){
		//alert("Error loading albums");
		busyInd.hide();
		WL.Toast.show("Error loading albums");	
	}	

//////////////////////////////////////////////////////// displayAlbums /////////////////////////////////////////////////////////////
function displayAlbums(albums) {

	var albumsDiv=$("#albumList");
	
	for (var i = albums.length-1; i >=0 ; i--) {
		var Id=String(albums[i].albumId);
		
		var html1=$("<div class='right-checkbox'>").append("<input type='checkbox' name='checkbox-h-2a' class='albumCheckBox' id=checkbox-"+Id+">");
		var html2=$("<div class=stickTitle>"+albums[i].albumTitle+"</div>");
		var html3=$("<p align='left' class='stickDsc'>"+albums[i].albumInfo+"</p>");
		var html411=$("<li class='ui-block-a'>").append("<a href='dialog.html' data-rel='dialog' id=preview-"+Id+" class='albumOpen ui-btn ui-content  ui-icon-eye ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html412=$("<li class='ui-block-b'>").append("<a href='editAlbum.html?albumId="+Id+"' class='ui-btn ui-content  ui-icon-edit ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html413=$("<li class='ui-block-c'>").append("<a id=delete-"+Id+" class='albumDelete ui-btn ui-content  ui-icon-delete ui-shadow ui-btn-icon-notext ui-btn-corner-all'></a>");
		var html41=$("<ul class='ui-grid-b'>").append(html411,html412,html413);
		var html4=$("<div data-role='navbar' class='ui-content nav ui-navbar' role='navigation'>").append(html41);

		var html=$("<div id=album-"+Id+" class='album ui-body ui-corner-all'>").append(html1,html2,html3,html4);
		albumsDiv.append(html);
	}
	$(".albumCheckBox").hide();
	$('.albumDelete').click(function() {
		var albumId=parseInt($(this).attr("id").split('-')[1]);
		//delete selected sticks or albums
		WL.SimpleDialog.show(
            "Delete Album", 
            "Are you sure?", 
            [
             {text: "No", handler: function() {}},
             {text: "Yes", handler: function() {deleteAlbum(albumId);}}
             ]);
		
	});

	$('.albumOpen').click(function() {
		var albumId=parseInt($(this).attr("id").split('-')[1]);
		getUserAlbumSticks(userId,albumId);

		
	});	
		
		

	


}


	/////////////////////////////////////////////////////////// deleteStick ////////////////////////////////////////////////////////
function deleteStick(stickId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'deleteStick',
			parameters : [stickId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : deleteStickSuccess,
			onFailure : deleteStickFailure
		});
	}


function deleteStickSuccess(){
		//alert("Stick successfully deleted");
		WL.Toast.show("Stick successfully deleted");
		JSONfind();
		}

function deleteStickFailure(response){
		//alert("Error deleting stick");
		//WL.Toast.show("Error deleting stick");	
	}	

	/////////////////////////////////////////////////////////// deleteAlbum ////////////////////////////////////////////////////////
function deleteAlbum(albumId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'deleteAlbum',
			parameters : [albumId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : deleteAlbumSuccess,
			onFailure : deleteAlbumFailure
		});
	}


function deleteAlbumSuccess(){
		//alert("Album successfully deleted");
		WL.Toast.show("Album successfully deleted");
		JSONfind();
		}

function deleteAlbumFailure(response){
		//alert("Error deleting album");
		//WL.Toast.show("Error deleting album");	
	}	

/////////////////////////////////////////////////////////// getusaStick ////////////////////////////////////////////////////////
function getusaStick(stickId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getusaStick',
			parameters : [stickId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : getusaStickSuccess,
			onFailure : getusaStickFailure
		});
	}


function getusaStickSuccess(result){
		var resultLength=result.invocationResult.resultSet.length;
		if(resultLength==0){
				deleteStick(stickId);
		}
		else
		{
		//alert("Stick can't be deleted, It exists in one or more albums");
		WL.Toast.show("Stick can't be deleted, It exists in one or more albums");		
		}
		}

function getusaStickFailure(response){
		//alert("Error getting stickId");
		//WL.Toast.show("Error getting stickId");	
	}	
/////////////////////////////////////////////////////////////// multiple delete ////////////////////////////////////////////////////////
	function deleteSticks(){
		var checkboxes=$(".stickCheckBox");
		var x=0;
		for(var i = 0; i < checkboxes.length; i++){
		
			if(checkboxes[i].checked){
				x+=1;
	 			stickId=parseInt(checkboxes[i].id.split('-')[1]);
				getusaStick(stickId)
			}
		}
		if(x==0)
		{
			//alert("No selected sticks");
			WL.Toast.show("No selected sticks");
		}

	}

	function deleteAlbums(){
			var checkboxes=$(".albumCheckBox");
			var x=0;
		for(var i = 0; i < checkboxes.length; i++){
		
			if(checkboxes[i].checked){
				x+=1;
	 			var albumId=parseInt(checkboxes[i].id.split('-')[1]);
				deleteAlbum(albumId);
			}
		}
				if(x==0){
					//alert("No selected albums");
					WL.Toast.show("No selected albums");
				}


	}

/////////////////////////////////////////////////////////////////getUserAlbumSticks/////////////////////////////////////////////////

function getUserAlbumSticks(userId,albumId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getUserAlbumSticks',
			parameters : [userId,albumId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess :getUserAlbumSticksSuccess,
			onFailure : getUserAlbumSticksFailure
		});
	}
	function getUserAlbumSticksSuccess(result){
		//alert("getUserAlbumSticks: Success!")
		displayDialog(result.invocationResult.resultSet);	

		
	}

	function getUserAlbumSticksFailure(result){
		//alert("getUserAlbumSticks: Failure!")		
	}	

function displayDialog(sticks){
	
	var sticksDiv=$("#albumDialog");
	var stickImage;	
	for (var i = sticks.length-1; i >=0 ; i--) {

		var Id=String(sticks[i].stickId);
		
		var html2=$("<div class=stickTitle>"+sticks[i].stickTitle+"</div>");
		var html3=$("<div class=ui-grid-a>").append("<h4>Time: "+sticks[i].stickTime,"<h4>Location: "+sticks[i].stickLocation);
		if(sticks[i].stickImage==""||sticks[i].stickImage==null)
			stickImage="";
		else stickImage=nativeURL+sticks[i].stickImage;
		var html4=$("<div align='center'>").append("<img class='stickImg' src="+stickImage+">");
		var html5=$("<p align='center' class='stickDsc'>"+sticks[i].stickInfo+"</p>");
		
		var html=$("<div class='stick ui-body ui-corner-all'>").append(html2,html3,html4,html5);
		sticksDiv.append(html);
	}
	


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function intialize() {
		busyInd.show();
		getPic();
		setTimeout(function(){
		userId= user;
		$('#stickList').html("");
		$('#albumList').html("");
		// function to hide or show albums and sticks
		var optionSelected = $('#stickAlbumSelect').find('option:selected');
		optValueSelected = optionSelected.val();
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
		}, 2000);
	
	}

$(function() {

	WL.App.overrideBackButton(backFunc);
	function backFunc(){
		 WL.SimpleDialog.show(
            "Quit application", 
            "Are you sure?", 
            [
             {text: "No", handler: function() {}},
             {text: "Yes", handler: function() {WL.App.close();}}
             ]
    );
	}

	JSONfind();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$('#stickAlbumSelect').change(function() {
		JSONfind();
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
		if (optValueSelected == "alb") {

			WL.SimpleDialog.show(
            "Delete Albums", 
            "Are you sure?", 
            [
             {text: "No", handler: function() {}},
             {text: "Yes", handler: function() {deleteAlbums();}}
             ]);

			
		} else {


			WL.SimpleDialog.show(
            "Delete Sticks", 
            "Are you sure?", 
            [
             {text: "No", handler: function() {}},
             {text: "Yes", handler: function() {deleteSticks();}}
             ]);


		}
	});


	

});