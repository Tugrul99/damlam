
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function () {
            var buttonInnerHTML = this.innerHTML
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
            

        });

}

document.addEventListener("keydown", function(event){

makeSound(event.key);
buttonAnimation(event.key);

});

function makeSound (key){switch (key) {
    case "w":

        var damla1 = new Audio('sounds/dayii.mp3');
        damla1.play();

        break;
    case "a":
        var damla2 = new Audio('sounds/soyliyimmi.mp3');
        damla2.play();
        break;
    case "s":
        var damla3 = new Audio('sounds/iyi geceler.mp3');
        damla3.play();
        break;
    case "d":
        var damla4 = new Audio('sounds/opuyorumseni.mp3');
        damla4.play();
        break;
    case "j":
        var damla5 = new Audio('sounds/Iloveyou.mp3');
        damla5.play();
        break;
    case "k":
        var damla6 = new Audio('sounds/tabi.mp3');
        damla6.play();
        break;
  
    default:
        break;
}


}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

setTimeout(function(){

    activeButton.classList.remove("pressed");},100);



}





