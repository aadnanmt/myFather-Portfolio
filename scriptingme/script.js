        document.addEventListener('DOMContentLoaded', function() {
            
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');

            const activateNavLink = (id) => {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            };

            const faders = document.querySelectorAll('.fade-in');
            
            const observerOptions = {
                root: null, 
                rootMargin: '0px',
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        const id = entry.target.getAttribute('id');
                        if (id) {
                           activateNavLink(id);
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
            
            faders.forEach(fader => {
                if(!fader.hasAttribute('id')){
                    observer.observe(fader);
                }
            });

        });
