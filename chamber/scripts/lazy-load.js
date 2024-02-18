
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const height = window.innerHeight + window.scrollY

    lazyImages.forEach((img) => {
        if (img.getBoundingClientRect().top < height && !img.src.includes(img.dataset.src)) {
            img.src = img.dataset.src;
        }
    });
  }

document.addEventListener("scroll", lazyLoadImages);
lazyLoadImages();