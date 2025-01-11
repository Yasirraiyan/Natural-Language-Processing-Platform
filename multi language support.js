const translations = {
            en: {
                title: "Multi-language Support",
                welcomeMessage: "Welcome to our application!",
                description: "Please select your preferred language from the dropdown above."
            },
            es: {
                title: "Soporte Multilingüe",
                welcomeMessage: "¡Bienvenido a nuestra aplicación!",
                description: "Por favor, selecciona tu idioma preferido en el menú desplegable de arriba."
            }
        };

        function changeLanguage() {
            const selectedLanguage = document.getElementById('languageSelect').value;
            document.getElementById('title').textContent = translations[selectedLanguage].title;
            document.getElementById('welcomeMessage').textContent = translations[selectedLanguage].welcomeMessage;
            document.getElementById('description').textContent = translations[selectedLanguage].description;
        }
