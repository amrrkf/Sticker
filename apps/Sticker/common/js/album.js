 
$(function(){

var userId;
var href="#";

$("#albumSubmit").click(function(){
		if(href!=="#")
			$("#albumSubmit").attr("href",href);	
		else
		{
			$("#albumForm").submit();
		}
	});


function intialize() {
	userId= parseInt(getActiveUser());
 	getUserSticks(userId);
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
		alert("No sticks found, album can't be created");
		//WL.Toast.show("No sticks found, album can't be created");
		href="home.html";
		$("#albumSubmit").click();	
		}
		else 
			displaySticks(result.invocationResult.resultSet);		
	}

function getUserSticksFailure(result){
		alert("Error loading sticks");
		//WL.Toast.show("Error loading sticks");
		href="home.html";
		$("#albumSubmit").click();
	
	}	

//////////////////////////////////////////////////////// displaySticks /////////////////////////////////////////////////////////////
function displaySticks(sticks) {

	var sticksDiv=$("#existingStickList");
	for (var i = 0; i < sticks.length; i++) {
		var Id=String(sticks[i].stickId);
		
		var html1=$("<div class='right-checkbox'>").append("<input type='checkbox' name='checkbox-h-2a' class='albumCheck' id=checkbox-"+Id+">");
		var html2=$("<div class=stickTitle>"+sticks[i].stickTitle+"</div>");
		var html3=$("<div class=ui-grid-a>")
		.append("<div class='ui-black-a stickTime' title='stickTime'>"+sticks[i].stickTime,"<div class='ui-block-b stickLoc' title='stickLoc'>"+sticks[i].stickLocation);
		
		var html=$("<div id=stick"+Id+" class='stick ui-body ui-corner-all'>").append(html1,html2,html3);
		sticksDiv.append(html);
	}

}
//////////////////////////////////////////////////// addAlbum /////////////////////////////////////////////////////////////////////////
function addAlbum(userId,albumTitle, albumInfo) {
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'addAlbum',
			parameters : [userId,albumTitle, albumInfo]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : addAlbumSuccess,
			onFailure : addAlbumFailure
		});
	}
function addAlbumSuccess(result){
		//var albumId=result.invocationResult.resultSet.albumId;
		var albumId=1;
		addSticksToAlbum(albumId)
	}

function addAlbumFailure(result){
		alert("Failed to add album");
		//WL.Toast.show("Failed to add album");
	}	
	
////////////////////////////////////////////////////////////// addStickstoAlbum ///////////////////////////////////////////////////////
function addSticksToAlbum(albumId){
	var checkboxes=$(".albumCheck");
	for(var i = 0; i < checkboxes.length; i++){
	
		if(checkboxes[i].checked){
 			var stickId=parseInt(checkboxes[i].id.split('-')[1]);
			updateUSAStatement(userId,albumId, stickId);
		}
	}
	href="home.html";
	$("#albumSubmit").click();		
}
function updateUSAStatement(userId,albumId, stickId){
				var invocationData = {
					adapter : 'StickerStore',
					procedure : 'updateUSA',
					parameters : [userId, albumId, stickId]
				};

				WL.Client.invokeProcedure(invocationData,{
					onSuccess : updateUSASuccess,
					onFailure : updateUSAFailure
				});
			}
function updateUSASuccess(result){	
	}

function updateUSAFailure(result){

	}		

///////////////////////////////////////////////////////////////// page functions //////////////////////////////////////////////////////	
	intialize();
	
	
	$("#albumForm").submit(function(){
		albumTitle=$("#albumName").val();
		albumInfo=$("#albumNotes").val();
		if(albumTitle==""){
			alert("Ablum's name cant be empty u should fill it");
			//WL.Toast.show("Ablum's name cant be empty u should fill it");
			return false;
		}
		else if(albumInfo==""){
			alert("Ablum's notes cant be empty u should fill it");
			//WL.Toast.show("Ablum's notes cant be empty u should fill it");
			return false;
		}
		else if($(".albumCheck:checked").length==0)
		{
			alert("please check at least one stick");
			//WL.Toast.show("please check at least one stick");
			return false;

		}
		else addAlbum(userId,albumTitle,albumInfo);
	});

	});
