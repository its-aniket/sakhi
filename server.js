

//importing  packeges
const express = require('express');
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
const path = require('path')
const sql = require('mssql')

// firebase admin setup
let serviceAccount = require("./sakhi-website-firebase-adminsdk-gyeso-6f9c6ece50.json");
const { resourceUsage } = require('process');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
//declare staticpath
let staticPath= path.join(__dirname,"public");

//intializing express.js
const app = express();
//middlewares
app.use(express.static(staticPath));
app.use(express.json());
app.get('/' , function(req,res){
    
    const config ={
        user: 'Aniket' ,
        password: 'nopassword',
        server: 'localhost',
        database: 'Sakhi studio'

    };

    sql.connect(config , function (err){
        if(err) console.log(err)

        // creating request object
        const request =new sql.Request();
        // query to the database and getting the records 
        request.query('' , function(err ,recordset){
            
            if(err) console.log(err)
            
            // send record as response
            res.send(data)
        })
        
        
    })
})

//routes
//home route
app.get("/",(req ,res)=>{
    res.sendFile(path.join(staticPath , "index.html"));
})
//signup route
app.get('/signup',(req,res)=>{
    
    res.sendFile(path.join(staticPath,"signup.html"));
})
app.post('/signup', (req,res)=>{
    let{
        name , email , password , number , tandc , notification 
    } = req.body;
    //form validation
    if(name.lenght <3){
        return res.json({'alert': 'name must be 3 leeters long'});
    }else if(!email.length){
        return res.json({ 'alert':'enter your email'});
    } else if(password.length < 5){
        return res.json({'alert':'Password must be 5 letters long'});
    }
     else if(!number.length){
            return res.json({'alert':'enter your email'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert':'Enter vaild number'});
    } else if(!tandc){
        showAlert('You must agree to our terms and conditiions')

    }
    
    db.collection('users').doc(email).get()
    .then(users=>{
        if(users.exists){
            return res.json({'alert': 'email already exists'})
        } else{
            // encrypting password before storing it
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password, salt,(err, hash)=>{ 
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data =>{
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })

        }
    })
    
})
// login route
app.get('/login', (req ,res)=>{
    res.sendFile(path.join(staticPath , "login.html"));

})
app.post('/login',(req ,res)=>{
    let{email ,password} =req.body;

    if(!email.length || !password.length){
        return res.json({'alert':'fill all the inputs'});

    }
    db.collection('users').doc(email).get()
    .then(user =>{
        if(!user.exists){
            return res.json({'alert':'log in email does not exist'});

        }else
        {
            bcrypt.compare(password ,user.data().password , (err ,result)=>{
                if(result){
                    let data = user.data()
                    return res.json({
                        name: data.name,
                        email: data.email,
                        seller: data.seller,
                    })


                    }else{
                        return res.json({'alert': 'password is incorect'})

                    }
                
            })
        }
    })
})
//seller route
app.get('/seller', (req ,res)=>{
    res.sendFile(path.join(staticPath , "seller.html"))
})
//add product
app.get('/add-product' , (req ,res)=>{
    res.sendFile(path.join(staticPath, "addproduct.html"))
})
//404 page
app.use((req,res)=>{
    res.sendFile(path.join(staticPath,"404.html"));
})
app.get((req,res)=>{
        res.redirect('/404');
    })
    app.listen(3000,()=>{
    console.log('listning on port 3000..........');
})