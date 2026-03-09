const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const submitButton = document.getElementById('submit-button');
const ApplyName = document.getElementById('name');
const ApplyEmail = document.getElementById('email');
const ApplyPitch = document.getElementById('pitch');
const ApplyStartup = document.getElementById('startup-name');

if (html.classList.contains('light-mode')) {
    darkIcon.classList.remove('hidden'); 
} else {
    lightIcon.classList.remove('hidden');
}


themeBtn.addEventListener('click', () => {
    
    html.classList.toggle('light-mode');

    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (html.classList.contains('light-mode')) {
        localStorage.setItem('color-theme', 'light');
    } else {
        localStorage.setItem('color-theme', 'dark');
    }
});


menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    menuBtn.classList.toggle('active');
});

submitButton.addEventListener('click', function(){
    if (ApplyName.value && ApplyEmail.value && ApplyPitch.value && ApplyStartup.value) {
       alert("Your application has been submitted successfully!");
    }   
});