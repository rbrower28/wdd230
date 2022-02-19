const images = document.querySelectorAll("[data-src]");


function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}


const imgOptions = {
    threshold: 1,
    // rootmargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});