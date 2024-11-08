document.addEventListener('DOMContentLoaded', () => {
    const subtitles = document.querySelectorAll('.subtitle');
    
    subtitles.forEach((subtitle, index) => {
        if (index % 2 === 0) {
            subtitle.classList.add('from-left');
        } else {
            subtitle.classList.add('from-right');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    });

    subtitles.forEach(subtitle => observer.observe(subtitle));
});
