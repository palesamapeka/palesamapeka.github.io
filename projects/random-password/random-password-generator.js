const generatedPassword = document.getElementById("generatedPassword");


function randomPasswordGenerator() {
  let password = "";
  const passwordChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789~`!@#$%^&*()_-+=/*-{}[]:;|,.<>?";

    for(let x = 0; x < 13; x++){
        let randomNumber = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.substring(randomNumber, randomNumber + 1)
    }
    generatedPassword.value = password;
}

function copyPassword(){
    generatedPassword.select();
    document.execCommand("copy");
}
