jQuery.extend({
	backTop:function(obj){
		$(window).on("scroll",function(){
     var	tops=$(window).scrollTop();
	if (tops>300){
	$(obj).fadeIn();
	}else{
		$(obj).fadeOut();
	}

   $(obj).click(function(){
   	var objj={st:tops}
   	$(objj).animate({st:0},{
   		speed:1000,
   		step:function(){
   		$(window).scrollTop(objj.st);
}
})
})

}
)
	
}
})