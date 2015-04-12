function wlCommonInit(){
	
	
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}

$(function(){
	$(".a").click(function(){

		alert("A!!");
		
	});
	
	$(".b").click(function(){

		alert("B!!");
		
	});

	$(".c").click(function(){

		alert("C!!");
		
	});

	$(".d").click(function(){

		alert("D!!");
		
	});

	$(".e").click(function(){

		alert("E!!");
		
	});

	$(".f").click(function(){

		alert("F!!");
		
	});

	

	});
