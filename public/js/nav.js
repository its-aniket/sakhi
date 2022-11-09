const createNav = () =>{
    let nav= document.querySelector('.navbar');
    nav.innerHTML =`
    <div class="nav">
    <img src="img/sakhilogo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
        <input class="search__input" type="text" placeholder="Search">
        <button class="Search-btn">Search</button>
        </div>
        <a>
           <img src="img/userimg.png" class="userimg"  id ="user-image"alt="">
           <div class="login-logout-popup hide">
           <p class="account-info">Log in as , name</p>
           <button class="user-btn" id="user-btn">log out</button>
           </div>
        </a>
        <a href="#"><img src="img/cart.png" alt=""></a>
        <a class="add-product" href="/seller.html"><img class="add-btn hide" src="img/add-removebg-preview.png" alt=""></a>
    </div>

</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Chrismas</a></li>
    <li class="link-item"><a href="#" class="link">Diwali</a></li>
    <li class="link-item"><a href="#" class="link">Anniversary</a></li>
    <li class="link-item"><a href="#" class="link">Birthday</a></li>
</ul>
    `;
}
createNav();

// nav popup

const userImageButton = document.querySelector('#user-image');
const userpopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () =>{
    userpopup.classList.toggle('hide');
})


window.onload =()=>{
    let user =JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in 
        popuptext.innerHTML = `log in as , ${user.name}`;
        actionBtn.innerHTML =`log out`;
        actionBtn.addEventListener('click' ,() =>{
            sessionStorage.clear();
            location.reload();
        })
    }else{

        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click',() =>{
            location.href ='/login'
        })
    }
}