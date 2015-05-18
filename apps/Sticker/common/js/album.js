 
var href="#";
var userId;
var albumId;
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
		$(".albumSubmit").click();	
		}
		else 
			displaySticks(result.invocationResult.resultSet);		
	}

function getUserSticksFailure(result){
		alert("Error loading sticks");
		//WL.Toast.show("Error loading sticks");
		href="home.html";
		$(".albumSubmit").click();
	
	}	

//////////////////////////////////////////////////////// displaySticks /////////////////////////////////////////////////////////////
function displaySticks(sticks) {
	var sticksDiv=$(".stickList");
	for (var i = 0; i < sticks.length; i++) {
		var Id=String(sticks[i].stickId);
		
		var html1=$("<div class='right-checkbox'>").append("<input type='checkbox' name='checkbox-h-2a' class='albumCheck' id=checkbox-"+Id+">");
		var html2=$("<div class=stickTitle>"+sticks[i].stickTitle+"</div>");
		var html3=$("<div class=ui-grid-a>").append("<h4>Time: "+sticks[i].stickTime,"<h4>Location: "+sticks[i].stickLocation);

		
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
		getLastAlbumId(userId)
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
			updateUSA(userId,albumId, stickId);
		}
	}
	href="home.html";
	$(".albumSubmit").click();		
}
function updateUSA(userId,albumId, stickId){
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
		alert("getUserAlbumSticks: Success!")
		checking(result.invocationResult.resultSet);	
		//	writeCache(userId);
		
	}

	function getUserAlbumSticksFailure(result){
		alert("getUserAlbumSticks: Failure!")		
	}	
function checking(checkedSticks){
	for(var j=0;j<checkedSticks.length;j++){
		$(".albumCheck#checkbox-"+String(checkedSticks[j].stickId)).prop('checked', true);

	}
		
}
//////////////////////////////////////////////////////////////updateAlbum/////////////////////////////////////////////////////
function updateAlbum(albumTitle, albumInfo) {
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'updateAlbum',
			parameters : [albumId, albumTitle, albumInfo]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess :updateAlbumSuccess,
			onFailure : updateAlbumFailure
		});
	}
	function updateAlbumSuccess(result){
		alert("updateAlbum: Success!")
		deleteSticksFromAlbum(userId,albumId);
		addSticksToAlbum(albumId);
		
	}

	function updateAlbumFailure(result){
		alert("updateAlbum: Failure!")	
		href="editAlbum.html?albumId="+String(albumId);
		$(".albumSubmit").click();
			
	}	
///////////////////////////////////////////////////////////deleteSticksFromAlbum///////////////////////////////////
function deleteSticksFromAlbum(userId,albumId){
	var invocationData = {
			adapter : 'StickerStore',
			procedure : 'deleteUSA',
			parameters : [userId, albumId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess :deleteUSASuccess,
			onFailure : deleteUSAFailure
		});

}

	function deleteUSASuccess(result){
		alert("deleteUSA: Success!")
			}

	function deleteUSAFailure(result){
		alert("deleteUSA: Failure!")	
				
	}	

///////////////////////////////////////////////////////////getAlbums/////////////////////////////////////////////////////////
function getAlbums(userId, albumId){
var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getAlbums',
			parameters : [userId, albumId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess :getAlbumSuccess,
			onFailure : getAlbumFailure
		});
	}
	function getAlbumSuccess(result){
		alert("getUserAlbum: Success!")
		$("#editAlbumName").val(result.invocationResult.resultSet[0].albumTitle);
		$("#editAlbumNotes").val(result.invocationResult.resultSet[0].albumInfo);
		getUserAlbumSticks(userId,albumId);
	}

	function getAlbumFailure(result){
		alert("getUserAlbum: Failure!")	
		href="editAlbum.html?albumId="+String(albumId);
		$(".albumSubmit").click();
			
	}	

/////////////////////////////////////////////////////////////getLastAlbumId//////////////////////////////////////////////////
function getLastAlbumId(userId){
var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getLastAlbumId',
			parameters : [userId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess :getLastAlbumIdSuccess,
			onFailure :getLastAlbumIdFailure
		});
	}
	function getLastAlbumIdSuccess(result){
		albumId=result.invocationResult.resultSet[0].albumId;
		alert("getLastAlbumId: Success!");
		addSticksToAlbum(albumId);
	}

	function getLastAlbumIdFailure(result){
		alert("getLastAlbumId: Failure!")	
				
	}	


