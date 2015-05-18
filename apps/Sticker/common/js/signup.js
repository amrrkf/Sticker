
$(function() {
	var href="#";
	

	WL.App.resetBackButton();


$("#confirmSignup").click(function() {
		if(href!=="#"){

			$("#confirmSignup").attr("href",href);	
		}
		else
		{
		href="#";
		$("#signupForm").submit();
		}
	});

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
		JSONinit('add',userId);
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
		var email=$('#emailSignup').val();
		getUserId(email.toLowerCase());		
	}

	function signupFailure(result){
		alert('existing mail');
		//WL.Toast.show('existing mail');
		href="signup.html";
		$("#confirmSignup").click();
	}
	
//////////////////////////////////////////////////////////// form submission functions ////////////////////////////////////////////////////////////
	

	$("#signupForm").submit(function() {
		// get form values
		var email=$('#emailSignup').val();
		var password=$('#passwordSignup').val();
		var confirmPassword=$('#confirmPasswordSignup').val();
		
		if(email==''|| password=='' || confirmPassword=='')	// check for empty values
			{
				alert('please fill the form');
				//WL.Toast.show('please fill the form');
				return false;
			}
		else if(!validateEmail(email))						// check validation format for mail
			{
				alert('invalid mail');
				//WL.Toast.show('invalid mail');
				return false;
			}
		else if (password.length<7)							// check minimum length of password
			{
				alert('password minimum length length is 7');
				//WL.Toast.show('password minimum length length is 7');
				return false;
			}
		else if (password!==confirmPassword)				// check password=confirm password
			{
				alert('password & confirmPassword don\'t match');
				//WL.Toast.show('password & confirmPassword don\'t match');
				return false;
			}
		else
			signup(email.toLowerCase(),password);							// perform signup

		
		
	});
});