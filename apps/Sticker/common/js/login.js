
$(function() {
	var userId;
	var href="#";

	function sendMail() {
    var link = "mailto:abdallahmagdy1993@gmail.com"
             + "?subject=" + escape("This is my subject")
             + "&body=" + escape("dekmdekdmek");
    window.location.href = link;
    alert("sent");
	}

	$("#homeLogin").click(function() {
		if(href!=="#")
		{
			$("#homeLogin").attr("href",href);	

		}
		else
		{
		href="#";	
		$("#homeForm").submit();
		}
	});

//////////////////////////////////////////////////////////// forgotpassword function ////////////////////////////////////////////////////////////
	function forgotPassword(email){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'forgotPassword',
			parameters : [email]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : forgotPasswordSuccess,
			onFailure : forgotPasswordFailure
		});
	}

	function forgotPasswordSuccess(result){
		var resultLength=result.invocationResult.resultSet.length;
		if(resultLength===0){
			alert('invalid email');
		}
		else{
			email=result.invocationResult.resultSet[0].email;
			password=result.invocationResult.resultSet[0].password;
			//send email
			sendMail();
		}
	}

	function forgotPasswordFailure(result){
		alert('invalid email');
	
	}

//////////////////////////////////////////////////////////// login function ////////////////////////////////////////////////////////////
	function login(email,password){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'login',
			parameters : [email,password]
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : loginSuccess,
			onFailure : loginFailure
		});
	}

	function loginSuccess(result){
		var resultLength=result.invocationResult.resultSet.length;
		if(resultLength===0){
			alert('invalid email or password');
			href="login.html";
			$("#homeLogin").click();
		}
		else{
			userId=result.invocationResult.resultSet[0].userId;
			closeCache();
			openCache();
			writeCache(String(userId));
			closeCache();
			href="home.html";
			$("#homeLogin").click();
		}
	}

	function loginFailure(result){
		alert('invalid email or password');
		href="login.html";
		$("#homeLogin").click();
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$("#homeForm").submit(function() {
		var email=$('#emailLogin').val();
		var password=$('#passwordLogin').val();
		if(email==''|| password=='')	// check for empty values
			{
				alert('please fill the form');
				return false;

			}
		else if(!validateEmail(email))						// check validation format for mail
			{
				alert('invalid mail');
				return false;
			}
		else 
			login(email.toLowerCase(),password);
	});


	$("#forgotSubmit").click(function() {
		var email=$('#retriveEmailLogin').val();
		if(email=='')	// check for empty values
			{
				alert('please enter your mail');
				return false;
			}
		else if(!validateEmail(email))						// check validation format for mail
			{
				alert('invalid mail');
				return false;
			}
		else {
			forgotPassword(email.toLowerCase());
		}
		
	});

});