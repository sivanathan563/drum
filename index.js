
for (var i = 0; i<document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        
        var buttoninner = this.innerHTML ;
        Sound(buttoninner);
        
        buttonanim(buttoninner);
    });
   
}

document.addEventListener("keypress", function (event) {
    Sound(event.key);
    
    buttonanim(event.key);
});

function Sound(key) {

    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;  

        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
            
        default:
            break;
    }
}

function buttonanim(key) {

    var activebutton = document.querySelector("." + key);

    activebutton.classList.add("pressed");

    setTimeout( function () {
        activebutton.classList.remove("pressed");
    } , 100 );
}