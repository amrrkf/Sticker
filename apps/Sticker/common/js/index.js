function intialize(){
	var href="#";
	userId=user;
	if(userId!==null)
		href="home.html";		
			else 
		href="login.html";
	$("#enterIndex").attr("href",href);			
	$("#enterIndex").click();	

}

$(function() {

$("#enterIndex").hide();
JSONinit('find',null,null);
});