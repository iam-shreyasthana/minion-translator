
//Translate Button....
let buttonTranslate = document.querySelector("#btn-translate");

//Text-Area....
let textInput = document.querySelector("#text-input")

const clickEventHandler = () =>{
    console.log("Clicked");
    console.log("input", textInput.value);
}

buttonTranslate.addEventListener('click', clickEventHandler);


