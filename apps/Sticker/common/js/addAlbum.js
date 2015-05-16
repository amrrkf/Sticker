 
$(function(){




$(".albumSubmit").click(function(){
		if(href!=="#")
			$(".albumSubmit").attr("href",href);	
		else
		{
			$("#albumForm").submit();
		}
	});


function intialize() {
	userId= parseInt(getActiveUser());
 	getUserSticks(userId);
}


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
