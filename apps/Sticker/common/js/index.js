
$(function() {

	$("#enterIndex").hide();
	var href="#";
<<<<<<< HEAD
	var userId=getActiveUser();
	if(userId!==null)
=======
	//var userId=getActiveUser();
	var userId='2';
	alert(userId);
	if(userId!=='null')
>>>>>>> f23b988f0a9b4240fb22fa008734a783a1ba4b8a
			href="home.html";		
	else 
			href="login.html";
	
	$("#enterIndex").attr("href",href);			
	$("#enterIndex").click();	
});