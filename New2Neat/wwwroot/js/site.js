$(document).ready(function () {
    if ($("#scrollBtn").length) {
        window.onscroll = function () { scrollFunction() };
    }

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollBtn").style.display = "block";
        }
        else
        {
            document.getElementById("scrollBtn").style.display = "none";

        }
    }

    $("body").on("click", "button[name=scrollBtn]", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.location.href = "/";
    });
});
