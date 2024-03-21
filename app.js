//scroll kopi

document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.querySelector('.products-container');
    const products = document.querySelectorAll('.product');

    let startX;
    let scrollLeft;
    let isDown = false;

    productsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - productsContainer.offsetLeft;
        scrollLeft = productsContainer.scrollLeft;
    });
    productsContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });
    productsContainer.addEventListener('mouseup', () => {
        isDown = false;
    });
    productsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 3; // scroll speed nya
        productsContainer.scrollLeft = scrollLeft - walk;
    });

    // event listener skroll
    products.forEach(product => {
        product.addEventListener('click', () => {
            productsContainer.scrollTo({
                left: product.offsetLeft - productsContainer.offsetLeft,
                behavior: 'smooth'
            });
        });
    });
});


////////////////////////////////////favorit/////////////////////////////////////



// array subyek 
const subjects = [
    {
        imgSrc: "asset/jokowi.jpeg",
        title: "Kopi Malaysia",
        description1: "Kopi tetangga lumayan juga",
        description2: " -Joko Widodo"
    },
    {
        imgSrc: "asset/putin.png",
        title: "Kopi Sultan",
        description1: "Harga Sepadan dengan Rasa",
        description2: " -Vladimir Putin"
    },
    {
        imgSrc: "asset/kim.png",
        title: "Kopi Lokal",
        description1: "Produk Indonesia nikmat juga",
        description2: " -Kim Jong Un"
    },
    {
        imgSrc: "asset/harold.png",
        title: "Kopi Singapura",
        description1: "Barista gila, rasanya sama seperti aslinya",
        description2: " -Mbah Harold"
    }
];

// fungsi HTML slideshow
function createSlideshow(subjects) {
    const div = document.createElement("div");
    div.classList.add("slideshow-container");

    subjects.forEach((subject, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        if (index === 0) {
            slide.classList.add("active");
        }

        const img = document.createElement("img");
        img.src = subject.imgSrc;

        const divText = document.createElement("div");
        divText.classList.add("teks");

        const title = document.createElement("p");
        title.textContent = subject.title;

        const description1 = document.createElement("small");
        description1.textContent = subject.description1;

        const description2 = document.createElement("small");
        description2.textContent = subject.description2;

        divText.appendChild(title);
        divText.appendChild(description1);
        divText.appendChild(description2);

        slide.appendChild(img);
        slide.appendChild(divText);

        div.appendChild(slide);
    });

    return div;
}

// Fungsi slideshow
function showSlideshow(slideshowContainer) {
    const slides = slideshowContainer.querySelectorAll('.slide');
    let slideIndex = 0;

    function showSlide() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[slideIndex].style.display = 'block';
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        setTimeout(showSlide, 5000); // tiap 5 detik
    }

    showSlide();
}

// Fungsi pemanggile slideshow
const slideshowContainer = createSlideshow(subjects);
document.getElementById("showcase-container").appendChild(slideshowContainer);

//  slideshow
showSlideshow(slideshowContainer);






