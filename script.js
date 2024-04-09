let closeEyeIcon = document.getElementById('closeEyeIcon');
let passwordTag = document.getElementById('password');

// change hide and reveal user password input
closeEyeIcon.onclick = function(){
    if(passwordTag.type == "password"){
        passwordTag.type = "text"
    }else{
        passwordTag.type = "password"
    }
}