 import {getLocalStorage, saveDataToLocalStorage} from './localStorage.js'
 const toggleBtn = document.getElementById("toggle");
 const html = document.documentElement;

 export function darkMode () {
const applyDarkMode=(isDark)=>{
    html.classList.toggle("dark", isDark)
    toggleBtn.textContent = isDark ?'☀️' :'🌛'
}
    
    function toggleDarkMode(){
        const isDark = (!html.classList.contains("dark") )
applyDarkMode(isDark)
         saveDataToLocalStorage("dark", isDark)
    }
applyDarkMode(getLocalStorage("dark"))
toggleBtn.addEventListener('click', toggleDarkMode)
 }