var validationDiv = document.querySelector('.validationContent');
var validText = "Validation results:";

var formInDom = function() {
    if (document.querySelector('#loginForm')) {
        validationDiv.append(validText + " " + 'Form is found' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Form is not found' + " ");
    }
}
formInDom();

var fieldsQuantity = function () {
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber = 2) {
        validationDiv.append(validText + " " + 'Input fields are correct' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'There are missing inputs' + " ");
    }
}
fieldsQuantity()


var requiredFields = function () {
    var inputs = document.querySelectorAll('.infoInput').required;
    if (inputs = true) {
        validationDiv.append(validText + " " + 'All fields are required' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Required attributes missing' + " ");
    }
}
requiredFields();

var associatedLabels = function () {
    var inputs = document.querySelectorAll('.infoInput').name;
    var labels = document.querySelectorAll('labels').for;
    if (inputs === labels) {
        validationDiv.append(validText + " " + 'All inputs have associated labels' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'There are Labels missing for inputs' + " ");
    }
}
associatedLabels();

var validAnchor = function () {
    var anchor = document.querySelector('a').href;
    var validHref = './register.html';
    if (anchor = validHref) {
        validationDiv.append(validText + " " + 'Anchor tag is valid' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Anchor tag is invalid' + " ");
    }
}
validAnchor();

var validBtns = function() {
    var submitBtn = document.querySelector('.submitBtn').nodeValue;
    var resetBtn = document.querySelector('.resetBtn').nodeValue;
    var submitValue = 'Log in';
    var resetValue = 'Reset';
    if ((submitBtn = submitValue) && (resetBtn = resetValue)) {
        validationDiv.append(validText + " " + 'Buttons content is correct' + " ");
    }
    else {
        validationDiv.style.color = 'red';
        validationDiv.append(validText + " " + 'Buttons content is wrong' + " ");
    }
}
validBtns();


var validation = function () {
    if ((formInDom = true) && (fieldsQuantity = true) && (requiredFields = true) &&
    (associatedLabels = true) && (validAnchor = true) && (validBtns = true)) {
        validationDiv.textContent = validText + " " + 'Every validation has passed!';
    }
}
validation();