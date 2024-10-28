const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => { 
    navLinks.classList.toggle('active');}
    );
// Code Explained: (credits to ChatGPT)
// hamburger.addEventListener waits for a click & when it is clicked, it runs the code below
// nav.Links.classList.toggle('active') this is adds or "hides" the link