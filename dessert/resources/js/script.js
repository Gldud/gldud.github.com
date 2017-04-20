

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
        
        if($(window).scrollTop()>800){
        console.log('ddddd');
        $('.a img').addClass('calendar');
        $('.b img').addClass('phone');
        $('.c img').addClass('truck');
        $('.d img').addClass('cake');
        }
        
    })
      
    /* slide banner */ 
    var idx =$('.slide-control ul li.on').index();// 초기값
    var $view= $('.slide .view .row');
    var $slideControl = $('.slide-control ul li');
    var idx2;
    $(window).resize(function(){
        if($('html').width()>992 ){
            
            $view= $('.slide .view .row');
            $slideControl = $('.slide-control ul li');
            idx =$('.slide-control ul li.on').index();
            $('.view').css({'display':'block'});
            $('.view2').css({'display':'none'});
            $('.slide-control').css({'display':'block'});
            $('.slide-control2').css({'display':'none'});
        
              
        }else if($('html').width()<992){
            
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
    
    
       //큰 화면 클릭 이벤트 
       //방해 안할게요 난 놀구있을게요 화이팅 chu~~ 희영씨^^ 끝났어요 진짜?
       // ♡ 다햇죠~~~ 한번 봐보고 버그좀 알려주세요~~
       //우왕!!!! 멋있어요 진짜 고마워요 포켓남 ㅋㅋㅋ
       //보민씨 소원다들어줄게요 오빠 어디갔오 
       // 내가 찾은 버그가 있어서~~ 해결하구 왔죵~
       //씨나인이 연애도구가 될 줄은 상상도 못했어요
       //이거 카톡대신에 하는거구나 ㅋㅋㅋ 
       //회사 취업하면 c9으로 해줘두 되겠다^^
       //대박 나 못하면 다해줘요 보민씨가 
       //ㅋㅋ당연하지만... 안되요 !!
       //고마워요 진짜 뭘해줘야 될지 모르겠어요
       //그러면 옆에만 있어줘요 ㅎㅎ
       //진짜 아무것도 안해주면 실망할텐데
       //아니에요 ㅎㅎ 실망안해요~ 희영씨가 선물이라 좋아요
       //내가 다 자료로 남겨놓을 거니깐 두고봐요!!!!!!! 딴말하기 없기
       //당연하죠~~~ 안졸려요??
       //어머 매너남 나 이제 보민씨 공부 방해 안할테니깐 어서 팝업하고 성공해서 
       //알려줘요 
       //알겠습니다 ㅎㅎㅎ 열심히 하고 올게요 ~~~ 열심히 하구있어요!!
       //하트하려면 ㅁ한자 누르면 되나용? ㅋㅋㅋㅋㅋㅋ 네~~~♡
       //나가요 먼저 ㅎㅎ 
       //ㅂ2~~~
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