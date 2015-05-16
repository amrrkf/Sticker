
$(function() {
	var userId;
	var href="#";

	function sendMail(email,password) {
    $.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		  data: {
		    'key': 'Dejvu88KNPm5QI0kfShByQ',
		    'message': {
		      'from_email': 'admin@sticker.com',
		      'to': [
		          {
		            'email': email,
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': 'Sticker password reset',
		      'html': 'Hey, dear Sticker App user<br><br>Please keep this email for your records, your sticker password is:<br>'+password+'<br><br><br>Thank you for using Sticker.'
		    }
		  }
		 }).done(function(response) {
		   //alert(JSON.stringify(response)); // if you're into that sorta thing
		   alert("your password will be sent within 5 minutes to "+email);
		   //WL.Toast.show(""your password will be sent within 5 minutes to "+email);
		 });
    
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
			//WL.Toast.show('invalid email');
		}
		else{
			email=result.invocationResult.resultSet[0].email;
			password=result.invocationResult.resultSet[0].password;
			//send email
			sendMail(email,password);
		}
	}

	function forgotPasswordFailure(result){
		alert('invalid email');
		//WL.Toast.show('invalid email');
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
			//WL.Toast.show('invalid email or password');
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
		//WL.Toast.show('invalid email or password');
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
				//WL.Toast.show('please fill the form');
				return false;

			}
		else if(!validateEmail(email))						// check validation format for mail
			{
				alert('invalid mail');
				//WL.Toast.show('invalid mail');
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
				//WL.Toast.show('please enter your mail');
				return false;
			}
		else if(!validateEmail(email))						// check validation format for mail
			{
				alert('invalid mail');
				//WL.Toast.show('invalid mail');
				return false;
			}
		else {
			forgotPassword(email.toLowerCase());
		}
		
	});

});