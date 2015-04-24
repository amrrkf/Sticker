function intialize() {

}

$(function() {
	intialize();

	$("#confirmSignup").click(function() {
		$("#signupForm").submit();
	});

	$("#signupForm").submit(function() {
		alert("Sign up Successful");
	});
});