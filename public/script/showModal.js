export const showError = (elementId, message) => {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
};

export const clearError = (elementId) => {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
};
export const showToast =()=> {
    const toast = document.getElementById('toast');
    
    toast.classList.remove('-bottom-20', 'opacity-0');
    toast.classList.add('bottom-5', 'opacity-100');
    
    setTimeout(() => {
        toast.classList.remove('bottom-5', 'opacity-100');
        toast.classList.add('-bottom-20', 'opacity-0');
    }, 3000);
}