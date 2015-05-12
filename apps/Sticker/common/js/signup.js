
$(function() {
var href="#";

//////////////////////////////////////////////////////////// getUserId function ////////////////////////////////////////////////////////////
	function getUserId(email){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'getUserId',
			parameters : [email]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : getUserIdSuccess,
			onFailure : getUserIdFailure
		});
	}

	function getUserIdSuccess(result){
		var userId=result.invocationResult.resultSet[0].userId;
		openCache();
		writeCache(userId);
		closeCache();
		href="home.html";
		$("#confirmSignup").click();
		
	}

	function getUserIdFailure(result){
		href="signup.html";
		$("#confirmSignup").click();
	}	
//////////////////////////////////////////////////////////// signup function ////////////////////////////////////////////////////////////
	function signup(email,password){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'signup',
			parameters : [email,password]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : signupSuccess,
			onFailure : signupFailure
		});
	}

	function signupSuccess(result){
		getUserId(email);		
	}

	function signupFailure(result){
		alert('existing mail');
		href="signup.html";
		$("#confirmSignup").click();
	}
	
//////////////////////////////////////////////////////////// form submission functions ////////////////////////////////////////////////////////////
	$("#confirmSignup").click(function() {
		if(href!=="#")
			$("#confirmSignup").attr("href",href);	
		else
		{
		href="#";
		$("#signupForm").submit();
		}
	});

	$("#signupForm").submit(function() {
		// get form values
		var email=$('#emailSignup').val();
		var password=$('#passwordSignup').val();
		var confirmPassword=$('#confirmPasswordSignup').val();
		
		if(email==''|| password=='' || confirmPassword=='')	// check for empty values
			alert('please fill the form');
		else if(!validateEmail(email))						// check validation format for mail
			alert('invalid mail');
		else if (password.length<7)							// check minimum length of password
			alert('password minimum length length is 7');
		else if (password!==confirmPassword)				// check password=confirm password
			alert('password & confirmPassword don\'t match');
		else
			signup(email,password);							// perform signup

		
		
	});
});