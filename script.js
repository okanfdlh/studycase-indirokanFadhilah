document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const aboutSection = document.querySelector('.about');
    const scrollToTopButton = document.querySelector('.back-to-top');
 // Scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
            if (window.scrollY > 50) {
                header.classList.add('transparent');
            } else {
                header.classList.remove('transparent');
            }
        }
        lastScrollY = window.scrollY;

        
        // Parallax effect
        const scrolled = window.scrollY;
        banner.style.transform = `translateY(${scrolled * 0.3}px)`;
        // Adjust margin-top of about section
        aboutSection.style.marginTop = `${Math.max(5, 10 - (window.scrollY / 100))}rem`;
    });
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
 // Slider
 var slideIndex = 0;
tampilkanSlide();

function tampilkanSlide() {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}
  
  slides[slideIndex-1].classList.add('show');
  
  setTimeout(tampilkanSlide, 3000); // Ganti slide setiap 3 detik
}
 // Initialize default tab
 const tablinks = document.querySelectorAll('.tablinks');
 if (tablinks.length > 0) {
     tablinks[0].click(); // Default open first tab
 }

function openTab(event, tabName) {
    const tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(tabcontent => {
        tabcontent.style.display = 'none';
    });

    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(tablink => {
        tablink.classList.remove('active');
    });

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
