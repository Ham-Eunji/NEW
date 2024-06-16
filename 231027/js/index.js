$(function()
{
    // 이미지 슬라이더
    $('.slide>a:gt(0)').hide();
    setInterval(function()
    {
        $('.slide>a:first').fadeOut()
                           .next('a')
                           .fadeIn()
                           .end()
                           .appendTo('.slide')
    },3000);

    // 서브메뉴 
    $('.submenu').hide();

    $('.mainmenu li:first').mouseover(function()
    {
        $('.submenu:first').stop().slideDown(500);
    })
    $('.mainmenu li:first').mouseout(function()
    {
        $('.submenu:first').stop().slideUp(500);
    })
    
    $('.mainmenu li:nth-of-type(2)').mouseover(function()
    {
        $('.submenu2').stop().slideDown(500);
    })
    $('.mainmenu li:nth-of-type(2)').mouseout(function()
    {
        $('.submenu2').stop().slideUp(500);
    })
    
    $('.mainmenu li:nth-of-type(3)').mouseover(function()
    {
        $('.submenu3').stop().slideDown(500);
    })
    $('.mainmenu li:nth-of-type(3)').mouseout(function()
    {
        $('.submenu3').stop().slideUp(500);
    })
    
    $('.mainmenu li:nth-of-type(4)').mouseover(function()
    {
        $('.submenu4').stop().slideDown(500);
    })
    $('.mainmenu li:nth-of-type(4)').mouseout(function()
    {
        $('.submenu4').stop().slideUp(500);
    })


    //모달
    $('#modal').hide();

    $('.c-1 li:first').click(function()
    {
        $('#modal').show();
    });
    $('button').click(function()
    {
        $('#modal').hide();
    });

    //탭메뉴
    $('.c-2').hide();

    $('.btn2').click(function()
    {
        $('.c-1').hide();
        $('.c-2').show();
    })
    $('.btn1').click(function()
    {
        $('.c-2').hide();
        $('.c-1').show();
    })
})