
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('fix');
        } else {
            $('.header').removeClass('fix');
        }
    });
});


$(document).ready(function() {

    // mask to phone
    $('input[name="tel"]').mask('+7 (999) 999-99-99');

    // Input as material design
    $('.modal-input').blur(function(){
        if($(this).val().length !== 0) {
            $(this).addClass('filled');
        }
        else {
            $(this).removeClass('filled');
        }
    });

    // Parralax effect init
    var rellax = new Rellax('.rellax');

    // Modal
    $(".btn-modal").click(function() {
       $('.modal').modal("show");
    });

    $(".close-modal-btn").click(function() {
        $('.modal').modal("hide");
    });

    // tabs init for Formats section
    $(".tabs-formats .tabs-formats-points>a").click( function () {

        $(".tabs-formats .tabs-formats-points>a").removeClass("current");
        $(this).addClass("current");

        $(".tabs-formats .tabs_content>div").hide();
        t_content = $(this).attr("href");
        $(t_content).show();

        return false
    });

    $(".tabs-formats .tabs-formats-points>a:first").trigger("click");

    // tabs init for Steps section
    $(".tabs-steps>a").click( function () {

        $(".tabs-steps>a").removeClass("current");
        $(this).addClass("current");

        $(".tabs-steps .tabs_content>div").hide();
        t_content = $(this).attr("href");
        $(t_content).show();

        return false
    });

    $(".tabs-steps>a:first").trigger("click");

    var frameVideo1 = "<iframe width=\"920\" height=\"510\" src=\"https://www.youtube.com/embed/YBNrC8OpBAo?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
    $(".video1").on("click", function(){
        $(".video1").html(frameVideo1).addClass("play");
    });

    var frameVideo2 = "<iframe width=\"920\" height=\"510\" src=\"https://www.youtube.com/embed/rtbcUVC5zk4?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
    $(".video2").on("click", function(){
        $(".video2").html(frameVideo2).addClass("play");
    });

});