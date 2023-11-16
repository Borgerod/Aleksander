
// FUCTIONS
function userProfile(){
    // a block of code inside {} that can run when called upon 
    let userName = "Julie";
    let gender = "female";
    let birthday = "10.10.1996"
    let premium = false;
}
userProfile(); // calling function







// DOM MANIPULATION
// ("button") Will get all the elements that is named "button" from the folder it is in. (js_kurs in this case)
// (".button") ("#button") for  getting element from class or ID name 
let button = document.querySelector("button"); 
console.log(button);

// we add the function "eventlistener to "the variable "button", now it will listen or wait for a user-action "click" in this case. 
// when the user-action has been made, it will run the code inside the {}
button.addEventListener("click", ()=>{
    let welcomeGreeting ="Welcome";
    console.log( welcomeGreeting)
    // console.log( welcomeGreeting, document.querySelector("userProfile.userName") )
    }
)








// CLASSES
// A small library or "theme" of relevant functions, statements and states.
// View the class as a Chapters and a function as a section. Where the script is a book, and the whole program is a library.      