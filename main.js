$(document).ready(function(){  

 $(".accordion").on("click", ".section", "a.header", function(e){
  e.preventDefault();

  	if(!$(this).find(" + .content").hasClass("open")){
  	$(".content").slideUp().removeClass("open");
  	$(this).find(" + .content").slideDown().removeClass("open");
  	} else {
  		$(".content").slideUp().removeClass("open");
  	}
    })
});   
