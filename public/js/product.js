const productImages = document.querySelectorAll(".product-images img");
const productimageslide = document.querySelector(".image-slider");
let activeImageSlide = 0;
productImages.forEach((item, i)=>{
    item.addEventListener('click' , ()=>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productimageslide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide=i;

    })
})
