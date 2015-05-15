
$(function() {
	var userId;
	var href="#";
	
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

//////////////////////////////////////////////////////////// getUserId function ////////////////////////////////////////////////////////////
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
				$("#homeLogin").attr("href","login.html");	

			}
		else if(!validateEmail(email))						// check validation format for mail
			{
				alert('invalid mail');
				$("#homeLogin").attr("href","login.html");	
			}
		else 
			login(email,password);
	});
});