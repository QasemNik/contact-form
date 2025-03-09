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
    const selectedRadio = document.querySelector('input[name="query-type"]:checked');
    
    // 🟢 همه رادیو باتن‌ها را پیدا کرده و کلاس 'active' را حذف کن
    document.querySelectorAll('input[name="query-type"]').forEach(radio => {
        radio.parentElement.classList.remove('active');
    });

    // 🟢 اگر گزینه‌ای انتخاب شده، به والد آن کلاس 'active' اضافه کن
    if (selectedRadio) {
        selectedRadio.parentElement.classList.add('active');
        return true;
    }
    
    return false;
};


export const validateConsent = () => {
  const consentElem = document.getElementById("consent");
  const checkedConsent = consentElem.checked
  return checkedConsent
};
