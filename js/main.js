$(document).ready(function () {
    var d = new Date();
    var month = new Array($('.month_1').text(), $('.month_2').text(), $('.month_3').text(), $('.month_4').text(), $('.month_5').text(), $('.month_6').text(),
        $('.month_7').text(), $('.month_8').text(), $('.month_9').text(), $('.month_10').text(), $('.month_11').text(), $('.month_12').text());
    d.setDate(d.getDate());
    $('.monthThen').text(month[d.getMonth() + 1]);

    var zodiak = '';

    $('.zodiakText').on('click', function (e) {
        e.preventDefault();
        zodiak = $(this).find('.ztext').text();
        $('._firstPage').fadeOut(0);
        $('._secondPage').fadeIn(0);
        $('.cat-news').fadeOut(0);
        $('._fadeOut').fadeOut(0);
        $('._fk2').fadeIn(0);
        $('.zodiacText').text(zodiak);
    })
});