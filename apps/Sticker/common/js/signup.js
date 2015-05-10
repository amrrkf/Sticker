function intialize() {

}

$(function() {
	intialize();

	function loadSQLRecords(){
		var invocationData = {
			adapter : 'StickerStore',
			procedure : 'signup',
			parameters : []
		};

		WL.Client.invokeProcedure(invocationData,{
			onSuccess : loadSQLQueerySuccess,
			onFailure : loadSQLQueeryFailure
		});
	}

	function loadSQLQueerySuccess(result){
		WL.Logger.debug("Retrieve success" +  JSON.stringify(result));
		displayFeeds(result.invocationResult.resultSet);
	}

	function loadSQLQueeryFailure(result){
		WL.Logger.error("Retrieve failure");
	}
	
	
	$("#confirmSignup").click(function() {
		$("#signupForm").submit();
	});

	$("#signupForm").submit(function() {
		alert("Sign up Successful");
		loadSQLRecords();
	});
});