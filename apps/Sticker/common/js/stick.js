
//intialize Stick
	function intialize() {
		//userId= getActiveUser();
		navigator.geolocation.getCurrentPosition(getLatLong, onError);
		$("#imgStickDelete").hide();
		getTime();    
	}

	function getTime() {
		//get the current time
		var dt = new Date($.now());
		var add= dt.toString();
		var endTime=add.substr(0,24);
	    $('#stickTime').text('Time: '+ endTime);
	}

$(function(){
	
	//var userId;
//////////////////////////////////////////////////////////////////////////////////////////
	intialize();

	
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
		/*var userId=result.invocationResult.resultSet[0].userId;
		openCache();
		writeCache(String(userId));
		closeCache();
		href="home.html";
		$("#confirmSignup").click();*/
		alert("success add stick");
	}

	function addStickFailure(){
		/*href="index.html";
		$("#confirmSignup").click();*/
		alert("error add stick");
	}	

	

//////////////////////////////////////////////////////////////////////////////////////////

	$("#stickDone").click(function(){
		$("#stickForm").submit();
	});
	
	$("#stickForm").submit(function() {
		// get form values
		//alert("sdbakjsajknasjk");
		var sName=$('#stickName').val();  //stick name
		var imageSrc=$(".common-stick-image").attr("src");
		var imageName;
		//alert(imageSrc);
		if(imageSrc!=''){
		var value=imageSrc.split("/");
    	count=value.length;
    	imageName= value[count-1]; //image name
		//alert(imageName);
		}
		else{
			imageName='';
		}
		var sStatus=$('#stickStatus').val(); //status
		//alert(sStatus);
		var sLoc=$('#stickLocation').html(); 
		var sLocation=sLoc.substr(9);
		//alert(sLocation.substr(9));
		var sT=$('#stickTime').html();
		var sTime=sT.substr(5);
		//alert(sTime.substr(5));

		if(sName==''|| sStatus=='')	// check for empty values
			{
				alert('please fill the form');
				$("#stickDone").attr("href","stick.html");	
			}
		else{
				//$("#stickDone").attr("href","stick.html");	
				addStick(1, sName, imageName, sTime, sLocation, sStatus);		// perform addStick
		}
			

	
	});


	$("#takeStickPic").click(function(){
		$("#stickPopup2").popup("close");
		capturePhoto();
		$("#imgStickDelete").show();

	});
	$("#takePicGallery").click(function(){
		$("#stickPopup2").popup("close");
		getPhoto(pictureSource.SAVEDPHOTOALBUM);
		$("#imgStickDelete").show();
	});

	//remove the loaded photo from the form
	$("#imgStickDelete").click(function(){
		$(".common-stick-image").attr("src","/");
		$("#imgStickDelete").hide();
	});
	


	});
