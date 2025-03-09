import { validateName, validateEmail, validateMessage, validateQueryType, validateConsent } from "./validation.js";
import { showError, clearError } from "./showError.js"
import { darkMode } from "./darkTheme.js";
const submitBtn = document.querySelector('#submitBtn')
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  
const  submitHandler=(event) => {
  event.preventDefault();

  let isValid = true;
const nameValue = firstName.value.trim()
const lastNameValue = lastName.value.trim()
const emailValue = email.value.trim()
const messageValue = message.value

//name validation
  if (!validateName(nameValue)) {
    showError("firstNameError", "Please inter a valid name");
    firstName.classList.add('border-error')
    isValid = false;
    if(!nameValue){
     showError("firstNameError", "This field is required");
    firstName.classList.add('border-error')

    }
  } else {
    clearError("firstNameError");
        firstName.classList.remove('border-error')

  }
//Last name validation
  if (!validateName(lastNameValue)) {
    showError("lastNameError", "Please inter a valid last name");
    lastName.classList.add('border-error')

    isValid = false;
    if(!lastNameValue){
      showError("lastNameError", "This field is required");
    lastName.classList.add('border-error')

    }
  } else {
    clearError("lastNameError");
    lastName.classList.remove('border-error')

  }
//Email validation
  if (!validateEmail(emailValue)) {
    showError("emailError", "Please enter a valid email address");
    email.classList.add('border-error')
    

    isValid = false;
    if(!emailValue){
      showError("emailError", "This field is required");
    email.classList.add('border-error')
      
    }
  } else {
    clearError("emailError");
    email.classList.remove('border-error')

  }
//
  if (!validateQueryType()) {
    showError("queryTypeError", "Please select a query type");
    isValid = false;
  } else {
    clearError("queryTypeError");
  }
// Text Area 
  if (!validateMessage(messageValue)) {
    showError("messageError", "This field is required");
    message.classList.add('border-error')
    isValid = false;
  } else {
    clearError("messageError");
        message.classList.remove('border-error')

  }

  if (!validateConsent()) {
    showError("checkboxError", "To submit this form, please consent to being contacted");
    isValid = false;
  } else {
    clearError("checkboxError");
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }

  function checkMessageLength(){
    const charCount = document.querySelector('#charCount')
    const messageError = document.querySelector('#messageError')

    const length = message.value.length
    const minLength = message.minLength
    const maxLength = message.maxLength
        charCount.textContent = `${length}/${maxLength}`;

if(length <minLength){
  messageError.textContent = `Message must be at least ${minLength} characters`
  messageError.style.display = 'block'
}else if(length> maxLength){
  messageError.textContent = `Message must be no more than ${maxLength} characters`
} else {
  messageError.style.display = 'none'
}
  }
  message.addEventListener('input', checkMessageLength)
};

function init(){
darkMode()
}
submitBtn.addEventListener("click", submitHandler) 
document.addEventListener('DOMContentLoaded', init)