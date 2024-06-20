
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');

        let currentLink = document.querySelector(
          'header nav a[href*=' + id + ']'
        );
        if (currentLink) {
          currentLink.classList.add('active');
        }
      });
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    emailjs
      .send("service_6kphh48", "template_atwgp5s", {
        emailAddress: emailAddress,
        fullName: fullName,
        mobileNumber: mobileNumber,
        emailSubject: emailSubject,
        message: message,
      })
      .then(
        function (response) {
          alert("Email sent successfully!");
          document.getElementById('contact-form').reset();
        },
        function (error) {
          alert("Failed to send email. Error: " + JSON.stringify(error));
        }
      );
  });
