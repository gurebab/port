$(function(){
    //풀페이지
    $('#fullpage').fullpage({
        responsiveWidth: 1601,

        
        afterLoad: function(origin,destination, direction){
            if(destination.index == 1){
                $(".sec2 .con > .content-txt").css({'opacity' : 1 , 'margin-left' : 0,});
                $(".sec2 .con > .sec-name").css({'opacity' : 1 , 'margin-right' : 0,});
            }else{
                $(".sec2 .con > .content-txt").css({'opacity' : 0 , 'margin-left' : '-50px',});
                $(".sec2 .con > .sec-name").css({'opacity' : 0 , 'margin-right' : '-50px',});
            };

            if(destination.index == 2){
                var svg = $('.vital').drawsvg({
                    duration:1200,
                    easing: 'swing',
                    reverse: true,  
                })
                svg.drawsvg('animate');
                $(".sec3 .con > .vital-wrap").css({'opacity' : 1,});
                $(".sec3 .con > .contetn-txt").addClass("active");
            }else{
                $(".sec3 .con > .vital-wrap").css({'opacity' : 0,});
                $(".sec3 .con > .contetn-txt").removeClass("active");
            };

            
            if(destination.index >= 3){
                $(".bg").css({'opacity' : 0 , 'visibility': 'hidden'});
                $(".sec4 .con").addClass("active");
                $(".header-btn .btn-wrap .bar").css({'background-color' : 'black'});
                $(".arrow .arrow-color").css({'fill' : 'black'});
                $(".arrow").addClass("com");
            }else{
                $(".bg").css({'opacity' : 1 , 'visibility': 'visible'});
                $(".sec4 .con").removeClass("active");
                $(".header-btn .btn-wrap .bar").css({'background-color' : 'white'});
                $(".arrow .arrow-color").css({'fill' : 'white'});
                $(".arrow").removeClass("com");
            };

            
            if(destination.index == 4){
                var fill = $('.graph').drawsvg({
                    duration: 1000,
                    easing: 'swing',
                    reverse: true,  
                  })
                fill.drawsvg('animate');
                $(".work-item > svg").css({ 'opacity' : 1 });
                $(".svg-text").css({'opacity' :'1' , 'left' : '50%'});
                // $(".arrow .arrow-color").css({'fill' : 'white'});
                // $(".arrow").removeClass("com");
            }else{
                $(".work-item > svg").css({ 'opacity' : 0 });
                $(".svg-text").css({'opacity' :'0' , 'left' : '40%'});
                // $(".arrow .arrow-color").css({'fill' : 'black'});
                // $(".arrow").addClass("com");
            };


            if(destination.index == 7){
                $('.arrow').css({'opacity' : '0'});
                console.log("푸터");
            }else{
                $('.arrow').css({'opacity' : '1'}); 
            }
            
        },
        anchors : ['section1','section2','section3','section4','section5','section6' ,'section7', 'section8'],
	});

    //네비게이션
    $('.header-btn').click(function(){
        $('header').toggleClass("active");
        $(this).toggleClass("active");
    });

    //fixed 아이콘

    //섹션1
    var fill = $('.svg-logo').drawsvg({
        duration:500,
        easing: 'swing',
        reverse: false, 
    })
    fill.drawsvg('animate');

    //섹션4
    $(".sec4 .picto-wrap").slick({
        infinite : true,
        autoplay : true,
        autoplaySpeed : 1400,
        speed: 100,
        arrows : false,
        fade: true,
        draggable: false,
        pauseOnHover: false,
    });
    $(".sec4 .text-wrap").slick({
        infinite : true,
        autoplay : true,
        autoplaySpeed : 1500,
        speed: 0,
        arrows : false,
        fade: true,
        draggable: false,
        pauseOnHover: false,
    });
    //섹션5

    //섹션6
    $(".sec6 .port-wrap .item").mouseover(function(){
        var index = $(this).index();
        var bg = $(".sec6 .port-wrap .item").eq(index).css("background-image");
        $(".sec6").css({'background-image' : bg});
        $(".sec6-wrap").addClass("active");
        $(".sec6 .port-wrap .item").removeClass("active");
        $(".sec6 .port-wrap .item").eq(index).addClass("active");
        $(".sec6 .sec-name").css({'color' : 'rgba(0,0,0,0'});
        $(".sec6 .sec-name").addClass("hide");
    });
    $(".sec6 .port-wrap").mouseleave(function(){
        $(".sec6").css({'background-image' : 'none'});
        $(".sec6-wrap").removeClass("active");
        $(".sec6 .port-wrap .item").removeClass("active");
        $(".sec6 .sec-name").css({'color' : '#353e43'});
        $(".sec6 .sec-name").removeClass("hide");
    });

    //섹션7
    $(".sec7-slide-wrap").slick({
        infinite : true,
        arrows : false,
        autoplay : true,
        autoplaySpeed : 2500,
        speed : 500,
        slidesToShow : 2,
        slidesToScroll : 2,
        dots : true,
        responsive:[
            {  
                breakpoint: 769,
                settings: {
                    slidesToShow:1,
                    slidesToScroll :1,
                    dots : true,
                }
            },
        ]
    });
    $(".sec7-list li").click(function(){
        var index = $(this).index();
        var li = $(".sec7-list > li").eq(index).index();
        var slide = $(".sec7-slide-wrap").eq(index).index();
        if(li == (slide - 1)){
            $(".sec7-slide-wrap").addClass("hide");
            $(".sec7-slide-wrap").eq(index).removeClass("hide");
            $(".sec7-list li").css({'color' : '#353e43'});
            $(".sec7-list li").eq(index).css({'color' : '#67cec9'});
        }
        console.log(li);
        console.log(slide);
    });
    $(".sec7 .item > img").click(function(){
        var image = $(this).attr('src');
        $(".sec7 .pop").addClass("active");
        $(".sec7 .pop img").attr('src',image);

        //이미지 확대 기능
        console.log($(".sec7 .pop img").css('height'));
        if($(".sec7 .pop img").height() > $(window).height()){
            var indexImg = $(this).index();
            $(".sec7 .pop img").eq(indexImg).height('60%');
            $(".sec7 .pop img").eq(indexImg).width('auto');
            console.log('큼');
        }else{
            $(".sec7 .pop img").height('80%');
            $(".sec7 .pop img").width('auto');
            console.log('엘스임')
        };
        //모바일에서 확대 기능 (비율 조정용)
        if($(window).width() < 769){
            if($(".sec7 .pop img").height() > $(window).height()){
                var indexImg = $(this).index();
                $(".sec7 .pop img").eq(indexImg).height('auto');
                $(".sec7 .pop img").eq(indexImg).width('60%');
                console.log('모바일 큼');
            }else{
                $(".sec7 .pop img").height('40%');
                console.log('모바일 엘스임');
                if($(".sec7 .pop img").width() > $(window).width()){
                    console.log('넓이가 더 큼');
                    $(".sec7 .pop img").eq(indexImg).width('70%');
                    $(".sec7 .pop img").eq(indexImg).height('auto');
                }
            };
        }
        $(".sec7 .pop").click(function(){
            $(".sec7 .pop").removeClass("active");
        });
    });





    //모바일에서 변해야 할 것들
    $(window).scroll(function(){
        var scr = $(".sec2").offset().top;
        if($(".arrow").offset().top >= scr){
            $(".arrow").css({'opacity' : 0});
        }
        else{
            $(".arrow").css({'opacity' : 1});
        }
    });

    //반응형 1600px
    if (matchMedia("screen and (max-width: 1600px)").matches){
        $(".sec-name").addClass("hide");
        console.log("1600임")
    }
    $(window).resize(function(){
        if($(window).width() >768){
            $(".sec-name").addClass("hide");
            console.log("1600임 리사이즈")
        }
    });
});