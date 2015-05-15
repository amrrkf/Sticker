
$(function() {

	$("#enterIndex").hide();
	var href="#";
	var userId=getActiveUser();
	alert(userId);
	if(userId!=='null')
			href="home.html";		
	else 
			href="login.html";
	
	$("#enterIndex").attr("href",href);			
	$("#enterIndex").click();	
});