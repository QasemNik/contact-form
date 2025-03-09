
 export function darkMode () {
            const toggleBtn = document.getElementById("toggle");
            const html = document.documentElement;

            function toggleDarkMode() {
                html.classList.toggle("dark"); // تغییر کلاس به جای data-mode

                // تغییر آیکون
                const isDark = html.classList.contains("dark");
                toggleBtn.textContent = isDark ? "☀️" : "🌒";
            }

            toggleBtn.addEventListener("click", toggleDarkMode);
        }