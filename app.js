
//Translate Button....
let buttonTranslate = document.querySelector("#btn-translate");

//Text-Area....
let textInput = document.querySelector("#text-input");

//Output Box....
let outputDiv = document.querySelector("#output-box");

//Server API.....
let serverURL = "https://api.funtranslations.com/translate/minion.json";

const getTranslationURL = (text) => {
    return serverURL + "?" + "text=" + text;
}

//error handling.....

const errorHandler = (error) => {
    console.log("Error Occured: ", error);
    alert("Something went wrong with the server, Try again after some time.");
}

buttonTranslate.addEventListener('click', () => {
    //outputDiv.innerText = "jdskabkda " + textInput.value;

    let inputText = textInput.value;

    //calling server for processing.....
    //fetch api call....
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
});



