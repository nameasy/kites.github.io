$(function () {
    $(window)
        .scroll(function () {});
    $(".logotype")
        .click(function () {
            $(".area.grow.scrollable")
                .animate({
                    scrollTop: 0
                }, 1200);
            return false;
        });
});
