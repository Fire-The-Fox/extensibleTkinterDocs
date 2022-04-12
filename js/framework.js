const sidepanel = jQuery(".sidebar");

jQuery('#navbar-button').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
        sidepanel.animate({ left: '-20%' }, 500);
    } else {
        sidepanel.animate({ left: '0px' }, 500);
    }
    $(this).data("clicks", !clicks);
})
