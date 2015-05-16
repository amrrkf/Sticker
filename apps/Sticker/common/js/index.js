
$(function() {

	$("#enterIndex").hide();
	var href="#";
	//var userId=getActiveUser();
	var userId='2';
	alert(userId);
	if(userId!=='null')
			href="home.html";		
	else 
			href="login.html";
	
	$("#enterIndex").attr("href",href);			
	$("#enterIndex").click();	
});