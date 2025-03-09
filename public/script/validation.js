export const validateName = (name) => {
  const regex = /^[A-Za-zآ-ی]{3,16}$/;
  const testRegex = regex.test(name)
  return testRegex
};

export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const testRegex = regex.test(email);
  return testRegex
};

export const validateMessage = (message) => {
  if(message.length > 0){
    return true
  }
};

export const validateQueryType = () => {
  return document.querySelector('input[name="query-type"]:checked') !== null;
};

export const validateConsent = () => {
  const consentElem = document.getElementById("consent");
  const checkedConsent = consentElem.checked
  return checkedConsent
};
