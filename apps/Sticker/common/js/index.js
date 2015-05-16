
$(function() {

	$("#enterIndex").hide();
	var href="#";
	var userId=getActiveUser();
	//var userId='1';
	if(userId!==null)
			href="home.html";		
	else 
			href="login.html";
	
	$("#enterIndex").attr("href",href);			
	$("#enterIndex").click();	
});