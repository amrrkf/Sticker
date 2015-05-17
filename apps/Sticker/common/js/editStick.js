
var stickId=null;
var userId;
var href="#";

/////////////////////////////////////////////////Get Stick from DB////////////////////////////////////////
function getStick(userId, stickId){
			
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getStick',
			parameters : [userId, stickId]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : getStickSuccess,
			onFailure : getStickFailure
		});
	}

	function getStickSuccess(result){
		var stickTitle=result.invocationResult.resultSet[0].stickTitle;
		var stickImage=result.invocationResult.resultSet[0].stickImage;
		var stickTime=result.invocationResult.resultSet[0].stickTime;
		var stickLocation=result.invocationResult.resultSet[0].stickLocation;
		var stickInfo=result.invocationResult.resultSet[0].stickInfo;
		$("#editStickName").val(stickTitle);
		if(stickImage!="" && stickImage!=null)
		{
			$("#editStickImage").attr("src","/Sticker/"+stickImage);
		}
		$("#editStickStatus").val(stickInfo);
		$('#editStickLocation').text('Location: '+ stickLocation);
	    $('#editStickTime').text('Time: '+ stickTime);
		alert("success get stick");
		//WL.Toast.show("success get stick");
	}

	function getStickFailure(){
		alert("error get stick");
		//WL.Toast.show("error get stick");
	}	


function intialize() {
		$("#imgEditStickDelete").hide();
		userId= user;	
	
		setTimeout(function(){
			stickId=getParameterByName('stickId');
			alert(stickId);
			getStick(userId,stickId);
		}, 1000);

	}

$(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////Update Stick///////////////////////////////////////////////////
	//add stick functions for adapter 
	function updateStick(stickId, stickTitle, stickImage, stickInfo){
			
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'updateStick',
			parameters : [stickId, stickTitle, stickImage, stickInfo]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : updateStickSuccess,
			onFailure : updateStickFailure
		});
	}

	function updateStickSuccess(){
	    href="home.html";
		$("#saveStick").click();
		var tempSrc=$(".common-stick-image").attr("src");
		
		if(tempSrc!==''){
			savePic(tempSrc);
		}
		alert("success Update stick");
		//WL.Toast.show("success add stick");
	}

	function updateStickFailure(response){
		href="editStick.html";
		$("#saveStick").click();
		alert("error Update stick");
		//WL.Toast.show("error add stick");
	}	

	

//////////////////////////////////////////////////////////////////////////////////////////


	JSONfind();

	$("#saveStick").click(function(){
		if(href!=="#")
			$("#saveStick").attr("href",href);	
		else
		{
		href="#";
		$("#editStickForm").submit();
		}
	});
	
	$("#editStickForm").submit(function(){
		
		// get form values
		var sName=$('#editStickName').val();  //stick name
		var imageSrc=$(".common-stick-image").attr("src");
		var imageName;
		if(imageSrc!==''){
		var value=imageSrc.split("/");
    	count=value.length;
    	imageName= value[count-1]; //image name
		}
		else{
			imageName='';
		}
		var sStatus=$('#editStickStatus').val(); //status

		if(sName==''|| sStatus=='')	// check for empty values
			{
				alert('please fill the form');
				//WL.Toast.show("please fill the form");
				return false;
			}
		else{
				updateStick(stickId, sName, imageName, sStatus); //update Stick
		}
	});
	$("#takeEditStickPic").click(function(){
		$("#editStickPopup2").popup("close");
		capturePhoto();
		$("#imgEditStickDelete").show();

	});
	$("#editPicGallery").click(function(){
		$("#editStickPopup2").popup("close");
		getPhoto(pictureSource.SAVEDPHOTOALBUM);
		$("#imgEditStickDelete").show();
	});

	//remove the loaded photo from the form
	$("#imgEditStickDelete").click(function(){
		$(".common-stick-image").attr("src","");
		$("#imgEditStickDelete").hide();
	});

});
