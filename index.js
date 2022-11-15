$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
history.scrollRestoration = "manual"