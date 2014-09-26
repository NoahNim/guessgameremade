//alert("JavaScript is loaded");

$(document).ready(function(){

   	$("#answer").click(function(event){
   		var guess = $("#guess").val();
	    var theAnswer = 42;
	    if (guess == theAnswer){
	    	$("div").fadeOut("slow");
	    } else {
	    	console.log("Incorrect");
	    }
   });
});

















