
function intialize() {
	userId= user;
 	getUserSticks(userId);
}

 
$(function(){

WL.App.resetBackButton();



$(".albumSubmit").click(function(){
		if(href!=="#")
			$(".albumSubmit").attr("href",href);	
		else
		{
			$("#albumForm").submit();
		}
	});



	JSONfind();
	
	
	$("#albumForm").submit(function(){
		albumTitle=$("#albumName").val();
		albumInfo=$("#albumNotes").val();
		if(albumTitle==""){
			//alert("Ablum name can't be empty, you should fill it");
			WL.Toast.show("Ablum name can't be empty, please fill it");
			return false;
		}
		else if(albumInfo==""){
			//alert("Ablum notes can't be empty, you should fill it");
			WL.Toast.show("Ablum notes can't be empty, please fill it");
			return false;
		}
		else if($(".albumCheck:checked").length==0)
		{
			//alert("please check at least one stick");
			WL.Toast.show("please check at least one stick");
			return false;

		}
		else addAlbum(userId,albumTitle,albumInfo);
	});

	});
