document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.querySelector("#button");
  const myEmail = document.querySelector("#email");
  const myUsername = document.querySelector("#username");

  function validateInputs() {
    const emailIsValid = myEmail.checkValidity();
    const usernameIsValid = myUsername.checkValidity();

    if (emailIsValid && usernameIsValid) {
      myButton.removeAttribute("disabled");
    }
  }

  myEmail.addEventListener("input", validateInputs);
  myUsername.addEventListener("input", validateInputs);

  myButton.addEventListener("click", function () {
    console.log("your email is" + myEmail.value);
    console.log("your username is" + myUsername.value);
  });
});
