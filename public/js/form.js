window.onload = () =>{
    if(sessionStorage.users){
        user =JSON.parse(sessionStorage.users);
        if(compareToken(users.authToken, users.email)){
            location.replace('/')
        }
    }
}
const loader =document.querySelector('.loader');
//select inputs

const submitbtn =document.querySelector('.Signup-btn');
const name = document.querySelector('#name') || null;
const email =document.querySelector('#email') || null;
const password= document.querySelector('#password') || null;
const number= document.querySelector('#number') || null;
const tandc =document.querySelector('#terms-and-condition' || null);
const notification =document.querySelector('#notification') || null;

submitbtn.addEventListener('click' , ()=>{
    if(name!= null){ // signup
        if(name.value.length <3){
            showAlert('name must be 3 letters long');
    } else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length < 5){
        showAlert('Password must be 5 letters long');
    }
     else if(!number.value.length){
            showAlert('enter your email');
    } else if(!Number(number.value) || number.value.length < 10){
        showAlert('Enter vaild number');
    } else if(!tandc.checked){
        showAlert('You must agree to our terms and conditiions')

    }
    else{
        //submite form
         loader.style.display = 'block';
         sendData('/signup',{
             name:name.value,
             email:email.value,
             password:password.value,
             number:number.value,
             tandc:tandc.checked,
             notification:notification.checked,
             seller: false
            })
    }
    }else{
        //login page
        if(!email.value.length || ! password.value.length){
            showAlert('fill all the inputs');

        }else{
            loader.style.display = 'block';
            sendData('/login',{
                email:email.value,
                password:password.value,
               })

        }
    }

})

// send data function
const sendData =(path, data) =>{
    fetch(path,{
        method: 'post',
        headers: new Headers ({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    }).then((res)=> res.json())
    .then(response =>{
        processData(response);
    })
}
const processData =(data) =>{
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);

    }else if(data.name){
        // crate authtokend
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
     }
}
//alert function
const showAlert =(msg) =>{
    let alertBox =document.querySelector('.alert-box');
    let alertMsg =document.querySelector('.alert-msg');
    alertMsg.innerHTML =msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show'); 
    }, 3000);
}