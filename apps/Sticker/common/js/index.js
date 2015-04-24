function intialize() {

}

$(function() {
	intialize();

	$("#homeLogin").click(function() {
		$("#homeForm").submit();
	});

	$("#homeForm").submit(function() {
		alert("Login Successful");
	});
});