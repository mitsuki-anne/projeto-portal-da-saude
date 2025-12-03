const ul = document.getElementById("imglist");
const total = ul.children.length;
let index = 0;

document.getElementById("nextbutton").onclick = () => {
    index++;
    if (index >= total) index = 0;
    updateCarousel();
};

document.getElementById("prevbutton").onclick = () => {
    index--;
    if (index < 0) index = total - 1;
    updateCarousel();
};

function updateCarousel() {
    const imgWidth = ul.children[0].querySelector("img").clientWidth;
    ul.style.transform = `translateX(${-index * imgWidth}px)`;
}