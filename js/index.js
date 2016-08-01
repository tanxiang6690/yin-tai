$(".erji").slideUp(0);
$(".yiji").hover(function () {
   $(".erji").stop(true,true)
   var index=$(this).index(".yiji");
   $(".erji").eq(index).slideDown();
},function  () {
	$(".erji").stop(true,false);
	var index=$(this).index(".yiji");
	$(".erji").eq(index).slideUp();
})


// 右边

$(".righterji").slideUp(0);
$(".hua").hover(function  () {
	 $(".righterji").stop(true,true)
	
	 $(".righterji").eq(0).slideDown(50);
},function(){
	$(".righterji").stop(true,false);
	
	$(".righterji").eq(0).slideUp(50);
})



$(".box").slideUp(0);
$(".shopping").hover(function  () {
	 $(".box").stop(true,true)
	
	 $(".box").eq(0).slideDown(50);
},function(){
	$(".box").stop(true,false);
	
	$(".box").eq(0).slideUp(50);
})

// banner

$(".banner").hide().eq(0).show();

  var num=0;
function  move(type) {
	if (type=="r") {   
  num++;
  if (num>=$(".banner").size()) {
  	num=0;
  } 
  } 
  if (type=="l") {
  	num--;
  	if (num<=-1) {
  		num=$(".banner").size()-1;
  	}
  }

  $(".banner").fadeOut(500).eq(num).fadeIn(500);
  $(".btn").css({background:"#211616"}).eq(num).css({background:"#e5004f"})             
}
var t=setInterval(function() { 
	move("r")
	
},2000);

$(".bigbox").hover(function () {
	 $(".left").show();
	 $(".right").show();
	 clearInterval(t);
},function() {
     $(".left").hide();
     $(".right").hide();

 
 t=setInterval(function() { 
	move("r")},2000)



})


$(".btn").hover(function(){
	$(".banner").stop(true,false);
   index=$(this).index();
   $(".btn").css({background:"#211616"}).eq(index).css({background:"#e5004f"})
   $(".banner").hide().eq(index).show();
	num=index;
});



$(".left").click(function () {
$(".banner").stop(true,false)
	move("l")
});
$(".right").click(function () {
	$(".banner").stop(true,false)
	 move("r");
})



$(".righttu").hover(function(){
	$(".righttu").animate({right:100})
},
    function(){
   $(".righttu").animate({right:80})

    })



$(".xz>li").hover(function(){
   index=$(this).index();
   $(".xs").hide().eq(index).show();

})

$(".xztwo>li").hover(function(){
   index=$(this).index();
   $(".xsright").hide().eq(index).show();

})


//选显卡

$(".yincan").slideUp(0);
$(".fenye").hover(function () {
   $(".yincan").stop(true,true)
   var index=$(this).index();
   $(".yincan").eq(index).slideDown(0);
},function  () {
  $(".fenye").stop(true,false);
  var index=$(this).index();
  $(".yincan").eq(index).slideUp(0);
})



//小banner
$(".smolbanner").hover(function(){
  var index3=$(this).index(".smolbanner")
  if ($(".smolbanner").has($("lanleft"))) {
   $(".lanleft").eq(index3).show(); 
   $(".lanright").eq(index3).show();}
},function(){
var index3=$(this).index(".smolbanner")
     var index3=$(this).index(".smolbanner")
    $(".lanleft").eq(index3).hide(); 
   $(".lanright").eq(index3).hide();
})


$(".img1:odd").css({left:-400});

// $(".lanbox>li").css({background:"#6e6e6e"})
$(".lanleft").click(function(){

    var index=$(this).index(".lanleft")
    $(".img1:even").eq(index).animate({left:0});
     $(".lanbox>li:even").eq(index).css({background:"#e71960"})
      $(".lanbox>li:odd").eq(index).css({background:"#6e6e6e"})

   $(".img1:odd").eq(index).animate({left:-400})
   
})

$(".lanright").click(function(){
//     $(".img1:odd").css({left:-390});
// $(".img1:even").css({left:0})
  var indexs=$(this).index(".lanright")
  $(".img1:even").eq(indexs).animate({left:390});

   $(".lanbox>li:even").eq(indexs).css({background:"#6e6e6e"})
    $(".lanbox>li:odd").eq(indexs).css({background:"#e71960"})

   $(".img1:odd").eq(indexs).animate({left:0});
   
   
})
$(".lanbox>li:even").click(function(){
     var index=$(this).index(".lanbox>li:even")
     $(".img1:even").eq(index).animate({left:0});
     $(".lanbox>li:even").eq(index).css({background:"#e71960"})
     $(".lanbox>li:odd").eq(index).css({background:"#6e6e6e"})
     $(".img1:odd").eq(index).animate({left:-400})

})
$(".lanbox>li:odd").click(function(){
   var indexs=$(this).index(".lanbox>li:odd")
  $(".img1:even").eq(indexs).animate({left:390});
  $(".lanbox>li:even").eq(indexs).css({background:"#6e6e6e"})
  $(".lanbox>li:odd").eq(indexs).css({background:"#e71960"})
   $(".img1:odd").eq(indexs).animate({left:0});
})
// 边框

// alert($(".fenlei").size())
$(".fenlei").hover(function(){
     index=$(this).index(".fenlei")
    var w=$(".fenlei").outerWidth();
    var h=$(".fenlei").outerHeight();
    $(".topss").stop(true,true);
    $(".bottomss").stop(true,true);
    $(".leftss").stop(true,true);
    $(".rightss").stop(true,true);
    $(".topss").eq(index).animate({width:w},500)
    $(".bottomss").eq(index).animate({width:w},500)
    $(".leftss").eq(index).animate({height:h},500)
    $(".rightss").eq(index).animate({height:h},500)
  },function(){
      index=$(this).index(".fenlei")
    $(".topss").stop(true,true);
    $(".bottomss").stop(true,true);
    $(".leftss").stop(true,true);
    $(".rightss").stop(true,true);
    $(".topss").eq(index).animate({width:0},500)
    $(".bottomss").eq(index).animate({width:0},500)
    $(".leftss").eq(index).animate({height:0},500)
    $(".rightss").eq(index).animate({height:0},500)
  })

$(".laright").hover(function(){
     index=$(this).index(".laright")
    var w=$(".laright").outerWidth();
    var h=$(".laright").outerHeight();
    $(".topsss").stop(true,true);
    $(".bottomsss").stop(true,true);
    $(".leftsss").stop(true,true);
    $(".rightsss").stop(true,true);
    $(".topsss").eq(index).animate({width:w},500)
    $(".bottomsss").eq(index).animate({width:w},500)
    $(".leftsss").eq(index).animate({height:h},500)
    $(".rightsss").eq(index).animate({height:h},500)
  },function(){
      index=$(this).index(".laright")
    $(".topsss").stop(true,true);
    $(".bottomsss").stop(true,true);
    $(".leftsss").stop(true,true);
    $(".rightsss").stop(true,true);
    $(".topsss").eq(index).animate({width:0},500)
    $(".bottomsss").eq(index).animate({width:0},500)
    $(".leftsss").eq(index).animate({height:0},500)
    $(".rightsss").eq(index).animate({height:0},500)
  })


$(".somllbox").hover(function(){
     index=$(this).index(".somllbox")
    var w=$(".somllbox").outerWidth();
    var h=$(".somllbox").outerHeight();
    $(".topa").stop(true,true);
    $(".bottoma").stop(true,true);
    $(".lefta").stop(true,true);
    $(".righta").stop(true,true);
    $(".topa").eq(index).animate({width:w},500)
    $(".bottoma").eq(index).animate({width:w},500)
    $(".lefta").eq(index).animate({height:h},500)
    $(".righta").eq(index).animate({height:h},500)
  },function(){
      index=$(this).index(".somllbox")
    $(".topa").stop(true,true);
    $(".bottoma").stop(true,true);
    $(".lefta").stop(true,true);
    $(".righta").stop(true,true);
    $(".topa").eq(index).animate({width:0},500)
    $(".bottoma").eq(index).animate({width:0},500)
    $(".lefta").eq(index).animate({height:0},500)
    $(".righta").eq(index).animate({height:0},500)
  })


// 左边选项卡显示与隐藏

//楼层跳转
$(window).scroll(function(){
   var  tops=$(window).scrollTop();

   if (tops>680) {
    $(".gubox").show();
   }
   else{$(".gubox").hide();}

   $(".fenlan").each(function(index,newobj){
      if ($(newobj).position().top<=tops+100) {
        $(".jump").css({opacity:"0"}).eq(index).css({
          opacity:"1"
        })
      };
    })
 
})

$(".jump").click(function(){
     index=$(this).index();
     $(window).scrollTop($(".fenlan").eq(index).position().top+20);
        $(".jump").css({opacity:"0"}).eq(index).css({
          opacity:"1"
    })
})


//回到顶部

 $.backTop(".back")

  $(".l").click(function(){
      index=$(this).index(".l");
     $(".zong").animate({left:"0px"},500,function(){
        
     
        $(".one:last",$(".zong").eq(index)).appendTo($(".zong").eq(index))
        
     })
     
     $(".zong").eq(index).css({left:-165});
  })

  $(".r").click(function(){
      index=$(this).index(".r");
      $(".zong").eq(index).animate({left:"-330px"},500,function(){
       
      
 $(".one:first",$(".zong").eq(index)).prependTo($(".zong").eq(index))
    
      })
     $(".zong").eq(index).css({left:-165});
     
  })