
$(function() {

	$("#enterIndex").hide();
	var href="#";
	var userId=getActiveUser();
	//var userId=null;
	if(userId!==null)
			href="home.html";		
	else 
			href="login.html";
	
	$("#enterIndex").attr("href",href);			
	$("#enterIndex").click();	
});