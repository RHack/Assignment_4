//we can't use json since we are accessing to an outside domain
//when using with jsonp we couldnt figure out how to use the call back. 
//therefore it goes to the error function.
var main = function() {
	"use strict";
	var $twitterid, $username,$rank,$followers;
	//var url= "http://api.twittercounter.com/?apikey=aeaee78058593cc83a6a04dc68f78658&twitter_id=3074282449";
	
	//reference from https://stackoverflow.com/questions/15537959/how-do-you-use-twitter-bootstrap-button-with-jquery
	
    $('#button1').on('click', function(e){
	$.ajax({
        url: 'http://api.twittercounter.com/?apikey=aeaee78058593cc83a6a04dc68f78658&twitter_id=3074282449',
        type: 'GET',
        dataType: 'jsonp',  
        
        success: function (response) {
        	//console.log(response);
          	//alert('response received');
          	// ajax success callback
          console.log("The User Twitter ID : "+	response.twitter_id);
          console.log("The User Username is : "+	response.username);
          console.log("The User rank : "+	response.rank);
          console.log("The User followers : "+	response.followers_current);
          
        }, error: function (response) {
          alert('ajax failed');
        },
        
      });
    });


};

$(document).ready(main);




