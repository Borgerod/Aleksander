// Userprofile (class)
class userProfile{
    constructor(){
        this.name = "Julie";
        this.gender = "female";
        this.birthday = "10.10.1996"
        this.premium = false;
    }
}


// Darkmode button (function)
function darkMode(){
    let body = document.querySelector("body");
    body.classList.toggle("light");
    console.log(body);
}


// welcome button (function)
function welcome (userName){
    let button = document.querySelector("#welcomeButton"); 
    let welcomeGreeting ="Welcome";
    console.log( welcomeGreeting, userName)
}    


// main
function main(){
    let user = new userProfile();
    console.log( user.name)
    toggleButton.addEventListener("click", darkMode);
    welcomeButton.addEventListener("click", welcome.bind(null, user.name));
}
main();