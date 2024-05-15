document.addEventListener("DOMContentLoaded", function () {
  // alert("lkjdk");

  const stepOne = document.querySelector(".step-1");
  const stepTwo = document.querySelector(".step-2");
  const stepThree = document.querySelector(".step-3");
  const stepFour = document.querySelector(".step-4");

  // console.log(stepFour, stepOne, stepThree, stepTwo);

  //

  function isHavePassword() {
    let selectedOption = document.getElementById("passwordOption").value;
    let havePassword = document.querySelector(".have-password");
    if (selectedOption === "1") {
      havePassword.classList.remove("d-none");
    } else {
      havePassword.classList.add("d-none");
    }
  }
});
