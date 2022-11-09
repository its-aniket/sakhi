

let user =JSON.parse(sessionStorage.user || null);
let loader =document.querySelector('.loader');

// checking user is not logged in or not
window.onload = ()=>{
    if(user){
        if(!compareToken(user.authToken, user.email)){
            location.replace('/login')
        }
    }else{
        location.replace('/login');
    }
}

//price inputs 
const actualPrice = document.querySelector('#actual-price');
const discountPercentage = document.querySelector('#discount-price');
const sellingPrice = document.querySelector('#selling-price');

discountPercentage.addEventListener('input' , ()=>{
    
    if(discountPercentage.value > 100){
        discountPercentage.value =90;
    }else{
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount;
    }
})

sellingPrice.addEventListener('input' , ()=>{
    let discount =( actualPrice.value / sellingPrice.value)*100 ;
    discountPercentage.value =discount;

})


// upload image handle
let uploadImages = document.querySelectorAll('.fileupload');
let imagesPaths=[]; // will stores the path of images in database
