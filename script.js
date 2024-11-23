const form=document.getElementById('registerform')

form.addEventListener('submit', (event)=>{
    event.preventDefault()

let isValid=true;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const name = form.name.value
const email=form.email.value
const age=form.age.value
const password=form.password.value
const confirmpwd=form.confirmpwd.value

if(name.length<4){
const usernameError=document.getElementById('usernameError')
usernameError.innerText="Name must contain atleast 4 characters";
isValid=false;
}

if(!email.match(emailRegex)){
    const emailError=document.getElementById('emailError')
emailError.innerText="Email validation failed";
isValid=false;

}

if(age<18 || age>60){
    const ageError=document.getElementById('ageError')
    ageError.innerText="Invalid Age";
    isValid=false;

}

if(!password.match(passwordRegex)){

    const passwordError=document.getElementById('passwordError')
    passwordError.innerText="Password validation failed";
    isValid=false;

}

if(password!=confirmpwd){
    const confirmpwdError=document.getElementById('confirmpwdError')
    confirmpwdError.innerText="Password doesn't match";
    isValid=false;

}

if(isValid){
   form.submit()
    
    

}
})

let showStatus = false;

const showHideIcon = document.getElementById('icon')
showHideIcon.addEventListener('click',()=>{
    showStatus = !showStatus
    document.getElementById('password').type = showStatus ? "text" : "password"
    showHideIcon.innerHTML = showStatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
})


let confirmpwdshowStatus = false;

const confirmpwdshowHideIcon = document.getElementById('icon2')
confirmpwdshowHideIcon.addEventListener('click',()=>{
    confirmpwdshowStatus = !confirmpwdshowStatus
    document.getElementById('confirmpwd').type = confirmpwdshowStatus ? "text" : "password"
    confirmpwdshowHideIcon.innerHTML = confirmpwdshowStatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
})