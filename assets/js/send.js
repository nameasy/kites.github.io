//pop-up-win-form
$(".send-a-kite")
    .on("click", function () {
        $(".pop-up-win-form")
            .css("display", "flex");
        setTimeout(function () {
            $(".pop-up-win-form")
                .addClass("open");
        }, 1);
    });
//pop-up-win-form-close-area
$("body")
    .click(function (e) {
        if ($(".pop-up-win-form")
            .hasClass("open")) {
            if (!$(".pop-up-win-form")
                .has(e.target)
                .length) {
                $(".pop-up-win-form")
                    .removeClass("open");
                setTimeout(function () {
                    $(".pop-up-win-form")
                        .css("display", "none");
                }, 50);
            }
        }
    });
//pop-up-win-form-close-left-button
$(".pop-up-win-form-close-left")
    .on("click", function () {
        $(".pop-up-win-form")
            .removeClass("open");
        setTimeout(function () {
            $(".pop-up-win-form")
                .css("display", "none");
        }, 50);
    });
//pop-up-win-form-close-right-button
$(".pop-up-win-form-close-right")
    .on("click", function () {
        $(".pop-up-win-form")
            .removeClass("open");
        setTimeout(function () {
            $(".pop-up-win-form")
                .css("display", "none");
        }, 50);
    });
