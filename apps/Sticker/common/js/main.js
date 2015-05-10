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
		$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-a ui-page-active");			
	});
	
	$(".b").click(function(){
		
		$(".pageTheme").attr("data-theme","b");                                //da 2lly sh3'al
		$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-b ui-page-active");

		
	});

	$(".c").click(function(){

		
		$(".pageTheme").attr("data-theme","c");
		$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-c ui-page-active");


	});

	$(".d").click(function(){

			
		$(".pageTheme").attr("data-theme","d");
		$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-d ui-page-active");


		
	});

	$(".e").click(function(){

		$(".pageTheme").attr("data-theme","e");
		$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-e ui-page-active");

		
	});

	$(".f").click(function(){

		$(".pageTheme").attr("data-theme","f");
		$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-f ui-page-active");

		
	});

	

	});
