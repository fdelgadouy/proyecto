document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel .carousel-item');
    
    function cloneCards() {
        items.forEach((el) => {
            while (el.children.length > 1) {
                el.removeChild(el.lastChild);
            }
            const minPerSlide = window.innerWidth < 768 ? 1 : (window.innerWidth < 992 ? 2 : 3);
            let next = el.nextElementSibling;
            for (let i = 1; i < minPerSlide; i++) {
                if (!next) {
                    next = items[0];
                }
                const cloneChild = next.cloneNode(true);
                el.appendChild(cloneChild.children[0]);
                next = next.nextElementSibling;
            }
        });
    }

    cloneCards();
    window.addEventListener('resize', cloneCards);
});