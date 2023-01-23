
//Translate Button....
let buttonTranslate = document.querySelector("#btn-translate");

//Text-Area....
let textInput = document.querySelector("#text-input");

//Output Box....
let outputDiv = document.querySelector("#output-box");

buttonTranslate.addEventListener('click', () => {
    outputDiv.innerText = "jdskabkda " + textInput.value;
});

 
