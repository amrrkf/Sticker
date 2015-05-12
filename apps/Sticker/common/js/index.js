
$(function() {
	var userId;
	function intialize() {
		userId=getActiveUser();
		alert(userId);
	}

	intialize();
	
	$("#homeLogin").click(function() {
		$("#homeForm").submit();
	});

	$("#homeForm").submit(function() {
		alert("Login Successful");
	});
});