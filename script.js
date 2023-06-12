// Smooth scrolling to section
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  // Perform form validation and submit logic here
  // You can use AJAX or any other technique to submit the form data
  // This example demonstrates a simple console log of the form data
  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData.entries());

  console.log(formValues);

  // Clear form fields
  contactForm.reset();
});
