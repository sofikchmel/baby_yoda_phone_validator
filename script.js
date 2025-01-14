const phoneInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const regexPhoneNumber = /^1?\s*\d\d\d[\s|-]*\d\d\d[\s*|-]*\d\d\d\d$/;
const regexPhoneNumberWithParentheses =
  /^1?\s*\(\d\d\d\)\s*\d\d\d[\s*|-]*\d\d\d\d$/;

checkButton.addEventListener("click", (e) => {
  let input = phoneInput.value;
  let isValid =
    regexPhoneNumber.test(input) || regexPhoneNumberWithParentheses.test(input);

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  if (isValid) {
    results.innerText = "Valid US number: " + input;
  } else {
    results.innerText = "Invalid US number: " + input;
  }
});

clearButton.addEventListener("click", (e) => {
  results.innerText = "";
});
