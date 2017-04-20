var idx=0;
        
        $("#top_content .left_slide .intro .btnIntroRight").click(function(){
            
            $(".intro ul li").eq(idx).find("div").animate({
                left:'-105%'
            },1000).parent().removeClass().next().addClass('on').find('div').css({
                'display':'block',
                left:"105%"
            }).stop().animate({
                'left':'0px'
            },1000);
            
            idx ++;
            
            if(idx == $(".intro ul li").length){
                
                
                idx=0;
                
                $('.intro ul li').eq(idx).addClass('on').find("div").css({
                    display:"block",
                    left:'105%'
                }).stop().animate({
                    left:"0px"
                },1000);
            }
            
        });
        
        $("#top_content .left_slide .intro .btnIntroLeft").click(function(){
            
            $(".intro ul li").eq(idx).find("div").animate({
                left:'105%'
            },1000).parent().removeClass().prev().addClass('on').find('div').css({
                'display':'block',
                left:"-105%"
            }).stop().animate({
                'left':'0px'
            },1000);
            
            idx --;
            
            if(idx < 0){
                
                idx = $(".intro ul li").length-1
                
                $('.intro ul li').eq(idx).addClass('on').find("div").css({
                    display:"block",
                    left:'-105%'
                }).stop().animate({
                    left:"0px"
                },1000);
            }
            
        });
        
        $('.intro ul li .pager').click(function(){
            
            var aa = $('.intro li.on').index()
            // li이의 자기 번호
            idx = $(this).parent().index()
            
            // 이전버튼과 같은효과로 보여져야하는데... 이전은 왼쪽에서 오른쪽을감
            if(aa > idx){
                $('.intro ul li').eq(aa).find('div').css({
                    'left':0,
                    'display':'block'})
                .animate({
                    'left':'105%'},1000)
                    
                $('.intro ul li').eq(idx).addClass('on').find('div')
                .css({
                    left:'-105%',
                    display:"block"
                }).animate({
                    left:0
                },1000)
                .parent().siblings().removeClass()
                
            // 다음 버튼과 같은 효과로 보여져야 하는데.... 다음은 오른쪽에서 왼쪽  
            }else if(aa < idx){
                $('.intro ul li').eq(aa).find('div').css({
                    'left':0,
                    'display':'block'
                }).animate({
                    'left':'-105%'
                },1000).removeClass()
                
                $('.intro ul li').eq(idx).addClass('on').find('div')
                .css({
                    'left':'105%',
                    'display':'block'
                }).animate({
                    'left':0
                },1000)
                .parent().siblings().removeClass()
            }
            return false;
        })
        
        var inter = setInterval(function(){
            $('#top_content .left_slide .intro .btnIntroRight').trigger('click')
        },4500);
        
        $('.intro').mouseenter(function(){
            
            clearInterval(inter)
            
        }).mouseleave(function(){
            
            inter = setInterval(function(){
                
                $('#top_content .left_slide .intro .btnIntroRight').click();
            },4500);
        })