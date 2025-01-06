document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Collect the form data
    const formData = new FormData(event.target);

    // Convert the FormData to an object
    const formObject = Object.fromEntries(formData.entries());

    // Send the email using EmailJS
    emailjs.send("service_jo9wxal", "template_w1d0vua", formObject)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your appointment has been successfully submitted!");
            window.location.href = "Thankyou.html"; // Redirect to Thank You page
        })
        .catch(function (error) {//handles the error if the submission fails
            console.error("FAILED...", error);
            alert("There was an error submitting your appointment. Please try again.");
        });
});
