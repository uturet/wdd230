
document.addEventListener("scroll", function () {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const height = window.innerHeight + window.scrollY - 300

    lazyImages.forEach((img) => {
        if (img.getBoundingClientRect().top < height && !img.src.includes(img.dataset.src)) {
            img.src = img.dataset.src;
        }
    });
  });