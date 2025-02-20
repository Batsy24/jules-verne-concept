window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sensitivity = 0.7;
    const rotationSpeed = 0.1;
    const img2 = document.getElementById("2");
    const img3 = document.getElementById("3");


    document.querySelectorAll('.sidebar').forEach(sidebar => {
        const offset = (scrollY - sidebar.offsetTop) * sensitivity;
        sidebar.style.objectPosition = `50% ${offset}px`;
    });

        img2.style.transform = `rotate(${scrollY * rotationSpeed}deg)`;


        img3.style.transform = `rotate(${-scrollY * rotationSpeed*2}deg)`;

});
