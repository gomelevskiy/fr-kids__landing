$(document).on("scroll", function() {

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass('fix');
            } else {
                $('.header').removeClass('fix');
            }
        });
    });

});