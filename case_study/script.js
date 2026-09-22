const form = document.getElementById("gymForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const eyeColor = document.getElementById("eyeColor").value;
    const ability = document.getElementById("ability").value.trim();

    const sex = document.querySelector(
        'input[name="sex"]:checked'
    );

    const fitnessOptions = document.querySelectorAll(
        'input[name="fitness"]:checked'
    );

    // Form validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (!sex) {
        alert("Please select your sex.");
        return;
    }

    if (eyeColor === "") {
        alert("Please select your eye color.");
        return;
    }

    if (ability === "") {
        alert("Please describe your athletic ability.");
        return;
    }

    // Display submitted information
    let selectedOptions = "";

    fitnessOptions.forEach(function (option) {
        selectedOptions += option.value + ", ";
    });

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <strong>Registration Successful!</strong><br><br>
        Name: ${name}<br>
        Sex: ${sex.value}<br>
        Eye Color: ${eyeColor}<br>
        Fitness Details: ${selectedOptions || "None"}<br>
        Athletic Ability: ${ability}
    `;
});