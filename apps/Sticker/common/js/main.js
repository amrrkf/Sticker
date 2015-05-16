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
//get parameters from link address
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


// regular expression for mail form validation
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

$(function(){
	 
//	$(".pageTheme").attr("class","pageTheme ui-page ui-page-theme-"+$(".pageTheme").attr("data-theme")+" ui-page-active");
	$(".pageTheme").removeClass("ui-page-theme-a").addClass("ui-page-theme-"+$(".pageTheme").attr("data-theme"));
	$(".a").click(function(){

		$(".pageTheme").removeClass("ui-page-theme-"+$(".pageTheme").attr("data-theme")).addClass("ui-page-theme-a");
		$(".pageTheme").attr("data-theme","a");
	});
	
	$(".b").click(function(){
		
		$(".pageTheme").removeClass("ui-page-theme-"+$(".pageTheme").attr("data-theme")).addClass("ui-page-theme-b");
		$(".pageTheme").attr("data-theme","b");
		

		
	});

	$(".c").click(function(){

		
		$(".pageTheme").removeClass("ui-page-theme-"+$(".pageTheme").attr("data-theme")).addClass("ui-page-theme-c");
		$(".pageTheme").attr("data-theme","c");

	});

	$(".d").click(function(){

			
		$(".pageTheme").removeClass("ui-page-theme-"+$(".pageTheme").attr("data-theme")).addClass("ui-page-theme-d");
		$(".pageTheme").attr("data-theme","d");

		
	});

	$(".e").click(function(){

	$(".pageTheme").removeClass("ui-page-theme-"+$(".pageTheme").attr("data-theme")).addClass("ui-page-theme-e");
		$(".pageTheme").attr("data-theme","e");
		
	});

	$(".f").click(function(){

	$(".pageTheme").removeClass("ui-page-theme-"+$(".pageTheme").attr("data-theme")).addClass("ui-page-theme-f");
		$(".pageTheme").attr("data-theme","f");
		
	});

	

	});
