/*
Usage: 
showErrorMessage(objClass, errorMessage);
*/

$(document).ready(function () {
    addErrMessangerStyles();
});


function addErrMessangerStyles(){
    // Setting CSS styles in JS
    var styles = `
    .errMsg{
        color: red;
        font-size: 14px;
        font-weight: "Arial";
        margin-top: 5px;
        margin-bottom: 5px;
    }
    `
    // Applying CSS styles to document NODE
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet);
}


function showErrorMessage(objClass, errorMessage){
    $(`.${objClass}`).after(`<div class = "errMsg">${errorMessage}</div>`)
}