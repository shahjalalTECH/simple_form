$(document).ready(function () {
    $(".bb-input-password .fa-solid").on("click", function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).parent('.bb-input-password').find('input').attr('type', 'text');
        } else {
            $(this).parent('.bb-input-password').find('input').attr('type', 'password');
        }
    });
});

//Flag

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});