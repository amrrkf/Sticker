function intialize() {
	// userId= getActiveUser();
}


function loadAlbum() {
		function getUserAlbumSticksStatement(userId,albumId){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getUserAlbumSticksStatement',
			parameters : [userId,albumId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess :getUserAlbumSuccess,
			onFailure : getUserAlbumFailure
		});
	}
	function getUserAlbumSuccess(result){
		alert("getUserAlbum: Success!")	
		displaySticks(result.invocationResult.resultSet)
	//	writeCache(userId);
		
	}

	function getUserAlbumFailure(result){
		alert("getUserAlbum: Failure!")
		
	
	}	
	//load the album information
}


function loadSticks() {
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
		alert("loadSticks: Success!")	
		displaySticks(result.invocationResult.resultSet)
	//	writeCache(userId);
		
	}

	function getUserSticksFailure(result){
		alert("loadSticks: Failure!")
		
	
	}	
	//load all the sticks for the user
}



function displaySticks(sticks) {
	var sticksDiv=$("#existingStickList");
	for (var i = 0; i < sticks.length; i++) {
		sticksDiv.append("<div class='stick ui-body ui-corner-all'>
				<div class='right-checkbox'>
					<input type='checkbox' name='checkbox-h-2a' id='checkbox-h-2a'>
				</div>
				<div class='stickTitle'>"+sticks[i].stickTitle+"</div>
				<div class='ui-grid-a'>
					<div class='ui-black-a stickTime' title='stickTime'>"+sticks[i].stickTime+"</div>
					<div class='ui-block-b stickLoc' title='stickLoc'>"+sticks[i].stickLocation+"</div>
				</div>
			</div>");
	}
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
