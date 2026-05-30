const form = document.querySelector(".sms");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            form.reset();
        } else {
            alert("Failed to send message.");
        }
    } catch (error) {
        alert("Something went wrong.");
        console.error(error);
    }
});