document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.depoimento_cards_container');
    const cards = document.querySelectorAll('.depoimento_cards');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    // Sai da função se os elementos essenciais do carrossel não forem encontrados
    if (!container || cards.length === 0 || !prevButton || !nextButton) {
        return;
    }

    let currentIndex = 0;
    const totalCards = cards.length;
    let isCarouselActive = false;

    const nextClickHandler = () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarouselTransform();
    };

    const prevClickHandler = () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarouselTransform();
    };

    function updateCarouselTransform() {
        const offset = -currentIndex * (100 / totalCards);
        container.style.transform = `translateX(${offset}%)`;
    }

    function setupCarousel() {
        if (isCarouselActive) return; // Evita adicionar estilos e eventos novamente

        // Aplica estilos para a funcionalidade de carrossel
        container.style.width = `${totalCards * 100}%`;
        cards.forEach(card => {
            card.style.width = `${100 / totalCards}%`;
        });
        updateCarouselTransform(); // Define a posição inicial

        // Adiciona os eventos de clique
        nextButton.addEventListener('click', nextClickHandler);
        prevButton.addEventListener('click', prevClickHandler);
        isCarouselActive = true;
    }

    function destroyCarousel() {
        if (!isCarouselActive) return; // Evita remover o que não está ativo

        // Remove os estilos inline para reverter para o layout do CSS
        container.style.width = '';
        container.style.transform = '';
        cards.forEach(card => {
            card.style.width = '';
        });

        // Remove os eventos de clique
        nextButton.removeEventListener('click', nextClickHandler);
        prevButton.removeEventListener('click', prevClickHandler);
        isCarouselActive = false;
    }

    function handleResize() {
        window.innerWidth < 768 ? setupCarousel() : destroyCarousel();
    }

    // Verificação inicial quando a página carrega
    handleResize();

    // Adiciona o listener de redimensionamento na janela
    window.addEventListener('resize', handleResize);
});
