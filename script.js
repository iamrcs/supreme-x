// Smooth scroll
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });
});

// Form submission
const form = document.getElementById('registration-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you for registering! We'll contact you soon.");
  form.reset();
});
