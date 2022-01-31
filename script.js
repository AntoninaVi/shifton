$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger', 'header__nav').toggleClass('active');
    });
});