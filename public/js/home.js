const productconatiners = [...document.querySelectorAll('.product-container')]
const nextbtn=[...document.querySelectorAll('.next-btn')]
const pretbtn=[...document.querySelectorAll('.pre-btn')]

productconatiners.forEach((item,i) => {
       let containerDiamenstions = item.getBoundingClientRect();
       let containerWidth = containerDiamenstions.width;
       nextbtn[i].addEventListener('click' ,() =>{
           item.scrollLeft += containerWidth;
        })
        pretbtn[i].addEventListener('click' ,() =>{
                    
           item.scrollLeft -= containerWidth;

       })
})