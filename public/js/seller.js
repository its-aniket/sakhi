

const addBtn = document.querySelector(".add-product");

addBtn.addEventListener('click' , ()=>{
    
    if(!users.exists){
        location.replace('/login')
    }else if(email.value= 'jadhav9@gmail.com'){
        addBtn.classList.remove('hide');
    }else{
        location.replace('/')
    }
})