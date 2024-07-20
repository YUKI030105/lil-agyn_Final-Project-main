const prev = document.querySelector('.uni-news-prev');
const next = document.querySelector('.uni-news-next');
const items = document.querySelectorAll('.uni-news-carousel-item');
const indicators = document.querySelectorAll('.uni-news-indicator');

let index = 0;

const showItem = (index) => {
    const width = items[2].clientWidth;
    items.forEach((item, idx) => {
        const offset = (idx - index) * width;
        item.style.transform = `translateX(${offset}px)`;
    });

    indicators.forEach((indicator, idx) => {
        if (idx === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
        
    });
};

prev.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
});

next.addEventListener('click', () => {
    index = (index + 1) % items.length;
    showItem(index);
});

// Initial call to show the active item
showItem(index);
