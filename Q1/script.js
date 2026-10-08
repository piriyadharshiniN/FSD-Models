const form = document.getElementById("courseForm");

const message = document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();

    let regNo = document.getElementById("regNo").value.trim();

    let email = document.getElementById("email").value.trim();

    let course = document.getElementById("course").value;

    let semester = document.getElementById("semester").value;

    let mode = document.querySelector(
        'input[name="mode"]:checked'
    );


    // Required field validation
    if (
        name === "" ||
        regNo === "" ||
        email === "" ||
        course === "" ||
        semester === "" ||
        mode === null
    ) {

        message.style.color = "red";

        message.innerHTML =
            "Please fill all required fields.";

        return;
    }


    // Email validation
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        message.style.color = "red";

        message.innerHTML =
            "Please enter a valid email.";

        return;
    }


    // Success message
    message.style.color = "green";

    message.innerHTML =
        "Registration successful! Welcome " + name + ".";
});