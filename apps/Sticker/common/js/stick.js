var userId;
var href="#";
function getTime() {
		//get the current time
		var dt = new Date($.now());
		var add= dt.toString();
		var endTime=add.substr(0,24);
	    $('#stickTime').text('Time: '+ endTime);
	}
	
//intialize Stick
	function intialize() {
		userId= user;
		navigator.geolocation.getCurrentPosition(getLatLong, onError);
		$("#imgStickDelete").hide();
		getTime();    
	}

$(function(){



		WL.App.resetBackButton();



	
//////////////////////////////////////////////////////////////////////////////////////////
	JSONfind();

	
	//add stick functions for adapter 
	function addStick(userId, stickTitle, stickImage, stickTime, stickLocation, stickInfo){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'addStick',
			parameters : [userId, stickTitle, stickImage, stickTime, stickLocation, stickInfo]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : addStickSuccess,
			onFailure : addStickFailure
		});
	}

	function addStickSuccess(){
	    href="home.html";
		$("#stickDone").click();
		var tempSrc=$(".common-stick-image").attr("src");
		
		if(tempSrc!==''){
			savePic(tempSrc);
		}
		alert("success add stick");
		//WL.Toast.show("success add stick");
	}

	function addStickFailure(response){
		href="stick.html";
		$("#stickDone").click();
		alert("error add stick");
		//WL.Toast.show("error add stick");
	}	

	

//////////////////////////////////////////////////////////////////////////////////////////

	$("#stickDone").click(function(){
		if(href!=="#")
			$("#stickDone").attr("href",href);	
		else
		{
		href="#";
		$("#stickForm").submit();
		}

	});
	
	$("#stickForm").submit(function() {
		// get form values
		var sName=$('#stickName').val();  //stick name
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
		var sStatus=$('#stickStatus').val(); //status
		var sLoc=$('#stickLocation').html(); 
		var sLocation=sLoc.substr(9);
		var sT=$('#stickTime').html();
		var sTime=sT.substr(5);

		if(sName==''|| sStatus=='')	// check for empty values
			{
				alert('please fill the form');
				//WL.Toast.show("please fill the form");
				return false;
			}
		else{
				addStick(userId, sName, imageName, sTime, sLocation, sStatus);		// perform addStick
		}
			

	
	});


	$("#takeStickPic").click(function(){
		$("#stickPopup2").popup("close");
		$("#imgStickDelete").show();
		capturePhoto();

	});
	$("#takePicGallery").click(function(){
		$("#stickPopup2").popup("close");
		getPhoto(pictureSource.SAVEDPHOTOALBUM);
		$("#imgStickDelete").show();
	});

	//remove the loaded photo from the form
	$("#imgStickDelete").click(function(){
		//$(".common-stick-image").attr("src","");
		$(".common-stick-image").removeAttr("src");
		$("#imgStickDelete").hide();
	});
	
	});
