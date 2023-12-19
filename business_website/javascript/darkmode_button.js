let lightmodePopUp = document.querySelector("bodylightmode");
lightmodePopUp.style.display="none";

function lightmodeButton() {
        let snd = new Audio("/media/audio/overthrone.mp3");
        snd.play();
        
        // make lightmode popup vissible
        lightmodePopUp.style.display = "block";

        // trigger transition after 5.5s
        setTimeout(function() {lightmodePopUp.classList.toggle("dark-light-mode-transition")}, 5500);
        
        // pause sound and close popup after 9s
        setTimeout(function() {snd.pause()}, 9000);
        setTimeout(function() {lightmodePopUp.style.display = "none";}, 9000);
}

