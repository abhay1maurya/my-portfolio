document.addEventListener("DOMContentLoaded", () => {
    const eduEntries = document.querySelectorAll('.edu-entry');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1
    });

    eduEntries.forEach(entry => {
        observer.observe(entry);
    });
});
