

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  

  /*css animation*/
  $(window).scroll(function(){
        if($('html').width()>1024 ){
          if($(window).scrollTop()>800){
      $('.a img').addClass('calendar');
        $('.b img').addClass('phone');
        $('.c img').addClass('truck');
        $('.d img').addClass('cake');
        }  
        }
        
        
    })
    
    /* slide banner */ 
    var idx =$('.slide-control ul li.on').index();// 초기값
    var $view= $('.slide .view .row');
    var $slideControl = $('.slide-control ul li');
    var idx2;
    $(window).resize(function(){
        if($('html').width()>1024 ){
            $view= $('.slide .view .row');
            $slideControl = $('.slide-control ul li');
            idx =$('.slide-control ul li.on').index();
            $('.view').css({'display':'block'});
            $('.view2').css({'display':'none'});
            $('.slide-control').css({'display':'block'});
            $('.slide-control2').css({'display':'none'});
        
          
        }else if($('html').width()<1024){
            $view= $('.slide .view2 .row');
            $slideControl = $('.slide-control2 ul li');
            idx2 = $('.slide-control2 ul li.on').index()
            idx=idx2;
            $('.view').css({'display':'none'});
            $('.view2').css({'display':'block'});
            $('.slide-control').css({'display':'none'});
            $('.slide-control2').css({'display':'block'});
            
            
        }
    })

  $(window).trigger('resize');
    slide();
    
    function slide(){
      $('.next').click(function(){
      console.log('다음')
          $view
            .eq(idx)
            .animate({
                  'left':'-100%'
              })
            .next()
            .css({
                'display':'block', 
                'left':'100%'
              })
            .stop()
            .animate({
                'left':0
              })
              
        $slideControl
          .eq(idx)
        .next()
        .addClass('on')
        .siblings()
        .removeClass()
               
              idx ++ // 그리고 idx 증가해 (다음 )
               
              if(idx == $view.length || idx > $view.length){
                    idx = 0;
                  $view.eq(idx).css({
                      'left':'100%'
                  }).stop().animate({
                      'left':0
                  })
                   
                  $slideControl
                  .eq(idx)
                  .addClass('on')
                  .siblings()
                  .removeClass()
                }
            })
          
          
      $('.prev').click(function(){
            console.log('이전')
               
              $view
              .eq(idx)
               .animate({
                  'left':'100%'
              })
               
              .prev()
              .css({
                  'display':'block',
                  'left':'-100%'
              })
              .stop()
              .animate({ 
                  'left':0 
              })
               
              $slideControl
                .eq(idx)
                .prev()
                .addClass('on')
                .siblings()
                .removeClass()
               
              idx -- 
               
              if(idx <0){
                    idx = $view.length-1;
                    
                  $view.eq(idx).css({
                      'display':'block',
                      'left':'-100%'
                  }).stop().animate({
                      'left':0
                  })
                   
                  $slideControl
                  .eq(idx)
                  .addClass('on')
                  .siblings()
                  .removeClass()
                   
                  }
              })  
    
       $('.slide-control a').click(function(){
        idx = $(this).parent().index();
        var sel_A = $('.slide-control li.on').index();
        
        if(idx > sel_A){
          $view.eq(sel_A).animate({
                    'left':'-100%'
            });
            
          $view.eq(idx).css({
            'display':'block', 
            'left':'100%'
          }).stop().animate({
            'left':0
          })
                
          $slideControl.eq(idx).addClass('on').siblings().removeClass();
        }else if(idx < sel_A){
          $view.eq(sel_A).animate({
                    'left':'100%'
            });
            
          $view.eq(idx).css({
            'display':'block', 
            'left':'-100%'
          }).stop().animate({
            'left':0
          })
                
          $slideControl.eq(idx).addClass('on').siblings().removeClass();
        }
    })
    
      //작은 화면 클릭 이벤트
      $('.slide-control2 a').click(function(){
        idx = $(this).parent().index();
        var sel_A = $('.slide-control2 li.on').index();
        
        if(idx > sel_A){
          $view.eq(sel_A).animate({
                    'left':'-100%'
            });
            
          $view.eq(idx).css({
            'display':'block', 
            'left':'100%'
          }).stop().animate({
            'left':0
          })
                
          $slideControl.eq(idx).addClass('on').siblings().removeClass();
        }else if(idx < sel_A){
          $view.eq(sel_A).animate({
                    'left':'100%'
            });
            
          $view.eq(idx).css({
            'display':'block', 
            'left':'-100%'
          }).stop().animate({
            'left':0
          })
                
          $slideControl.eq(idx).addClass('on').siblings().removeClass();
        }
      })
        
    }
    
   
    
  /*add*/
  $("#subtract").click(function(){
                if( $("#cake_number").val()>0)
                {
                    var t=$("#cake_number").val()-1;
                    $("#cake_number").val(t)
                }
            })
            $("#add").click(function(){
                  var t=Number($("#cake_number").val())+1;
              $("#cake_number").val(t)
            })
            
            console.log("ddrr")
            
  
  $('.js--section-about').waypoint(function(direction){
    if(direction == "down"){
       $('nav').addClass('sticky')
    }else{
      $('nav').removeClass('sticky')
    }
    },{offset:'60px;'
  })
  
});

/* Mobile nav*/

var nav = $('.js--main-nav');
var icon = $('.js--nav-icon i');

$(window).resize(function(){
  if($(this).width()>768){
    $('.main-nav').css('display','block');
  }else if($(this).width()<768){
    $('.main-nav').css('display','none');
    if(icon.hasClass('ion-close-round')){
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  }
})

$('.js--nav-icon').click(function() {
    if(icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round')
    }else{
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round')
    }
    nav.slideToggle(200);
})
