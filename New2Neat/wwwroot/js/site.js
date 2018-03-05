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

    $("body").on("click", "button#scrollBtn", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.location.href = "/";
    });
});

jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");
