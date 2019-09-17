//Table hide/show function
$(document).mouseup(function (e) {
    var container = $('.tableArea');
    if (container.has(e.target).length === 0) {
        container.hide();
        $('.tableActiveToggle').addClass('tableHidden');

    }
});
$('.firstTable').on('click', function (e) {
    $('#firstTable').addClass('firstTableActive');
    $('.firstTableActive').fadeIn(500);
    $('#firstTable').removeClass('tableHidden');
    $('#tableArea').addClass('tableArea');
    var container = $('.tableArea');
    container.show();
});
$('.secondTable').on('click', function (e) {
    $('#secondTable').addClass('secondTableActive');
    $('.secondTableActive').fadeIn(500);
    $('#secondTable').removeClass('tableHidden');
    $('#tableArea').addClass('tableArea');
    var container = $('.tableArea');
    container.show();
});
$('.thirdTable').on('click', function (e) {
    $('#thirdTable').addClass('thirdTableActive');
    $('.thirdTableActive').fadeIn(500);
    $('#thirdTable').removeClass('tableHidden');
    $('#tableArea').addClass('tableArea');
    var container = $('.tableArea');
    container.show();
});
$('.close').on('click', function (e) {
    $('#firstTable').addClass('tableHidden');
    $('#secondTable').addClass('tableHidden');
    $('#thirdTable').addClass('tableHidden');
    $('#tableArea').removeClass('tableArea');
});