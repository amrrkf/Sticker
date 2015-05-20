
function intialize() {
	userId= user;
	setTimeout(function(){
 	albumId=getParameterByName('albumId');
	getUserSticks(userId);
 	getAlbums(userId,albumId);
 		},1000);
 	
}
 
$(function(){
WL.App.resetBackButton();


$(".albumSubmit").click(function(){
		if(href!=="#"){
			$(".albumSubmit").attr("href",href);	
		
		}
		else
		{
			$("#editAlbumForm").submit();
		}
	});



	JSONfind();
	
	
	$("#editAlbumForm").submit(function(){
		albumTitle=$("#editAlbumName").val();
		albumInfo=$("#editAlbumNotes").val();
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
			WL.Toast.show("please select at least one stick");
			return false;

		}
		else updateAlbum(albumTitle,albumInfo);
	});

	});
