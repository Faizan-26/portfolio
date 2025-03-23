let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const phone = document.querySelector('input[name="phone"]');
    const subject = document.querySelector('input[name="subject"]');
    const message = document.querySelector('textarea[name="message"]');

    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const subjectRegex = /^.{3,100}$/;
    const messageRegex = /^.{10,500}$/;

    if (!nameRegex.test(name.value)) {
        alert('Please enter a valid name (3-50 characters, letters and spaces only).');
        e.preventDefault();
        return;
    }

    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }

    if (!phoneRegex.test(phone.value)) {
        alert('Please enter a valid phone number (10-15 digits).');
        e.preventDefault();
        return;
    }

    if (!subjectRegex.test(subject.value)) {
        alert('Please enter a valid subject (3-100 characters).');
        e.preventDefault();
        return;
    }

    if (!messageRegex.test(message.value)) {
        alert('Please enter a valid message (10-500 characters).');
        e.preventDefault();
        return;
    }
});
