
const vitufe = document.querySelectorAll('.btn-siri');


vitufe.forEach(kitufe => {
    kitufe.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        window.open(url, '_blank');
    });
});
function tengenezaUa() {
    const container = document.getElementById('particles-container') || document.body;
    const kimondo = document.createElement('div');
    kimondo.classList.add('kimondo');


    const size = Math.random() * 10 + 5;
    kimondo.style.width = `${size}px`;
    kimondo.style.height = `${size}px`;

   
    kimondo.style.left = `${Math.random() * 100}vw`;

    
    const duration = Math.random() * 5 + 4;
    kimondo.style.animation = `kudondokaMaua ${duration}s linear infinite`;


    kimondo.style.animationDelay = `${Math.random() * 5}s`;
    
  
    const colors = [
        'radial-gradient(circle, #ff7eb3 0%, #ff758c 100%)',
        'radial-gradient(circle, #ffc3a0 0%, #ffafbd 100%)',
        'radial-gradient(circle, #ffffff 0%, #fbc2eb 100%)'
    ];
    kimondo.style.background = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(kimondo);


    setTimeout(() => {
        kimondo.remove();
    }, duration * 1000);
}


setInterval(tengenezaUa, 200);

const kitufe = document.querySelector('.btn-siri');

