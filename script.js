const form = document.querySelector(".sms");

form.addEventListener("submit", function () {
    setTimeout(() => {
        form.reset();
    }, 100);
});