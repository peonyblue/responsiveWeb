$(function () {
    $('#mainVisual .mainSlider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });
    $('.mbtn').on('click', () => $('.gnb').toggleClass('on'), console.log('nyam'))

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on'))
            e.preventDefault()
        $('.smenu').stop().slideUp()
        $(this).next().stop().slideToggle()
    });
    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
        $('.smenu').removeAttr('style')
    })
});