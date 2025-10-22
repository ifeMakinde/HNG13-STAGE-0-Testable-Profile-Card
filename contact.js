// Selecting the elements
const form = document.querySelector(".contact-form");
const nameTag = document.querySelector(".name");
const emailTag = document.querySelector(".email");
const inputMessage = document.querySelector(".message");
const errTag = document.querySelector(".error");

// default error color to kep codeDRY
const errColor = "red";

// handling all form submision and validating all input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameTag.value.trim(" ");
  const email = emailTag.value.trim(" ");
  const message = inputMessage.value;

  // console.log(name);
  // console.log(email);
  // console.log(message);
  // console.log(message.length);

  // checks if all field are filled
  const checkErr = () => {
    errTag.textContent = "All fields are required ";
    errTag.style.color = errColor;
    errTag.style.textAlign = "center";
  };

  const checkSuccess = () => {
    errTag.textContent = "Success ✅ ";
    errTag.style.textAlign = "center";
  };
  name == "" ? checkErr() : checkSuccess();

  // check if message character is less than 10
  const messageCharacter = () => {
    let min = 10;
    if (message.length < min) {
      errTag.textContent = " Message cannot be less than 10 words";
    } else {
      return;
    }
  };
  messageCharacter();

  // validates user email
  const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRgx.test(email)) {
    errTag.textContent = "Please enter a valid email address";
    errTag.style.color = errColor;
    errTag.style.textAlign = "center";

    return;
  }
});
