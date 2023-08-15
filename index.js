$(function(){

    //Header
    $(window).scroll(function(){
        if($(window).scrollTop() <= 600){
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(0).find('a').addClass('active')
        }
        else if($(window).scrollTop() > $('.story').offset().top  && $(window).scrollTop() <= $('.today').offset().top){
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(1).find('a').addClass('active')
        }
        else if( $(window).scrollTop() > $('.today').offset().top && $(window).scrollTop() <= $('.slider').offset().top){
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(2).find('a').addClass('active')
        }
        else if( $(window).scrollTop() > $('.menu').offset().top && $(window).scrollTop() <= $('.gallery').offset().top){
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(3).find('a').addClass('active')
        }
        else if( $(window).scrollTop() > $('.gallery').offset().top && $(window).scrollTop() <= $('.table').offset().top){
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(4).find('a').addClass('active')
        }
        else if( $(window).scrollTop() > $('.service').offset().top &&  $(window).scrollTop() <= $('.contact').offset().top){
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(5).find('a').addClass('active')
        }
        else{
            $('.header .contain .tools .tool').each(function(){
                $(this).find('a').removeClass('active')
            })
            $('.header .contain .tools .tool').eq(6).find('a').addClass('active')
        }



        if($(window).scrollTop() >= 170){
            $('.header').css({
                'position':'fixed',
                'background':'#fff',
                'color':'#111'
            })
            $('.header .contain .tools .tool a').css({
                color:'#111'
            })
            $('.header').css({
                'box-shadow':'var(--box-shadow)'
            })
            $('.scroll').fadeIn();
        }
        else{
            $('.header').css({
                'position':'absolute',
                'background':'transparent',
                'color':'#fff'
            })
            $('.header .contain .tools .tool a').css({
                color:'#fff'
            })
            $('.scroll').fadeOut();
        }
    })
    $('.header .contain .list').click(function(){
        $('.header .contain .tools').fadeToggle();
    })
    $('.main .container .tools > div').click(function(){
        $('.header .contain .tools').fadeOut();
    })

    //Title
    let imgs=['./Images/mike-tinnion-PrYEJghQZoo-unsplash.jpg','./Images/rumman-amin-LNn6O_Mt730-unsplash.jpg'];
    let i=0;
    let count1=setInterval(()=>{
        if(i==imgs.length){
            i=0;
        }
        $('.title').css({
            'background-image':`url(${imgs[i]})`
        })
        
        $('.title .contain .points span').eq(0).click(function(){
            i=0;
            $('.title').css({
                'background-image':`url(${imgs[i]})`
            })
            $('.title .contain .points span').eq(0).addClass('active');
            $('.title .contain .points span').eq(1).removeClass('active');
        })
        $('.title .contain .points span').eq(1).click(function(){
            i=1;
            $('.title').css({
                'background-image':`url(${imgs[i]})`
            })
            $('.title .contain .points span').eq(1).addClass('active');
            $('.title .contain .points span').eq(0).removeClass('active');
        })
        if(i==0){
            $('.title .contain .points span').eq(0).addClass('active');
            $('.title .contain .points span').eq(1).removeClass('active');
        }
        else if(i==1){
            $('.title .contain .points span').eq(1).addClass('active');
            $('.title .contain .points span').eq(0).removeClass('active');
        }
        i++;
    },5000)

    //Slider
    let x=0;
    let names=['FOOD MAGAZINE','THE TELEGRAPH','MAGAZIN RESTAURANT'];
    let par=['"The food is plentiful and delicious, huge portions. It is all part of the "old world" sort of dining experience"','"It’s an unlikely setting for an exquisite dining experience served up by a couple straight out of a rom-com plot. "','"Huge portions, great food, fast service. This location obviously is always packed due to being in Times Sq. "']
    let count2=setInterval(()=>{
        if(x==par.length){
            x=0;
        }
        $('.slider .contain > i:first-of-type').click(function(){
            x--;
            if(x<0){
                x=names.length-1;
            }
            $('.slider .contain .text .txt .name').html(names[x]);
            $('.slider .contain .text .txt p').html(par[x]);
        })
        $('.slider .contain > i:last-of-type').click(function(){
            x++;
            if(x>names.length){
                x=0;
            }
            $('.slider .contain .text .txt .name').html(names[x]);
            $('.slider .contain .text .txt p').html(par[x]);
        })
        $('.slider .contain .text .txt .name').html(names[x]);
        $('.slider .contain .text .txt p').html(par[x]);
        x++;
    },10050)

    //Menu
    $('.menu .contain .bottom .boxes').each(function(){
        $(this).fadeOut()
    })
    $('.menu .contain .bottom .boxes').eq(0).fadeIn();
    $('.menu .contain .middle span').eq(0).click(function(){
        $('.menu .contain .bottom .boxes').each(function(){
            $(this).fadeOut()
        })
        $('.menu .contain .bottom .boxes').eq(0).fadeIn();
    })

    $('.menu .contain .middle span').eq(1).click(function(){
        $('.menu .contain .bottom .boxes').each(function(){
            $(this).fadeOut()
        })
        $('.menu .contain .bottom .boxes').eq(1).fadeIn();
    })

    $('.menu .contain .middle span').eq(2).click(function(){
        $('.menu .contain .bottom .boxes').each(function(){
            $(this).fadeOut()
        })
        $('.menu .contain .bottom .boxes').eq(2).fadeIn();
    })

    $('.menu .contain .middle span').eq(3).click(function(){
        $('.menu .contain .bottom .boxes').each(function(){
            $(this).fadeOut()
        })
        $('.menu .contain .bottom .boxes').eq(3).fadeIn();
    })
})