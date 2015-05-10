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

		$(".pageTheme").attr("data-theme","a");
		
	});
	
	$(".b").click(function(){

		$(".pageTheme").attr("data-theme","b");
		
	});

	$(".c").click(function(){

		$(".pageTheme").attr("data-theme","c");
		
	});

	$(".d").click(function(){

		$(".pageTheme").attr("data-theme","d");
		
	});

	$(".e").click(function(){

		$(".pageTheme").attr("data-theme","e");
		
	});

	$(".f").click(function(){

		$(".pageTheme").attr("data-theme","f");
		
	});

	

	});
