
document.querySelector('.logo').addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        
        document.querySelector('nav ul').classList.remove('active');
    });
});
