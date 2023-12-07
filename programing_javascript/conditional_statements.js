// Conditional statements

// if / else statement

// (0)        decrearing an emprty variable 
// (1)      = setting value
// (2)      == checking value 
// (3)      === checking value and datatype
// (4)      .typeOf() checking only datatype




let userName; // (0) declearing username as an empty variable

if (userName == undefined){
    console.log("username is undefined, please enter username")
}


userName = "Aleksander"; //(1)
       
//(2)
if (userName == "Julie"){
    // username is "Julie"
    console.log("True, value of userName is 'Julie'")
} // Do not need else 


//(3)
if (userName === "Julie"){
    // username is "Julie" and type is string  (note; is a "AND" condition)
    // litt redundant å sjekke typevalue i tillegg siden value kan ikke være julie uten at typevalue er string. 
    console.log("True, userName is a string and value is 'Julie'")
} else{
    console.log("False, userName is not a String or value not is 'Julie'")
}

//(4)
if (userName.typeOf === "string"){
    // userName is a string
    console.log("True, userName is a string")
} else if (userName == ""){ // Elif example
    // userName is empty
    console.log("userName cannot be empty")
} else {
    // username is not a string
    console.log("False, userName is not a string")
}   




// Switch case ( an onvercomplicated example..)
userName = 89;

if (userName != undefined){
    // (A) username has value 
    
    switch(userName) {
        case "julie":
            // if userName == "Julie"
            console.log("userName is 'Julie'")
        case "Aleksander":
          // if userName == "Aleksander"
            console.log("userName is 'Aleksander'")        
        default:
         if (userName.typeOf == "string") {
             // username has wrong value, but type is correct 
             console.log("ValueError, Invalid userName")
            } else {
                // type is incorrect
                console.log("TypeError, username needs to be a string")
            };
      };
} else {
    // (A) username is undefined / empty
    console.log("ValueError; username is empty, please enter a username")
};

