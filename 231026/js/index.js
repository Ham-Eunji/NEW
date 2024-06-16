$(function()
{
    /* 메뉴 */
    $('.mainmenu').mouseover(function()
    {
        $('.submenuback').stop().slideDown(500);
        $('.submenu').stop().slideDown(500);
    })

    $('.mainmenu').mouseout(function()
    {
        $('.submenuback').stop().slideUp(500);
        $('.submenu').stop().slideUp(500);
    })


    /* 모달-show ,hide */

// $('.contents-1 ul li:first').click(function()
// {
//      $('#modal').show();
// })    

// $('button').click(function()
// {
//       $('#modal').hide();
// }) 

    /* 모달-show ,hide */
    $('.contents-1 ul li:first').click(function()
    {
        $('#modal').addClass('active');
    })    

    $('button').click(function()
    {
        $('#modal').removeClass('active');
    })    

    /*슬라이드 영역*/
    $('.slide>a:gt(0)').hide();

    setInterval(function()
    {
        $('.slide>a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.slide');     
    }, 3000)
})