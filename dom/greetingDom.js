const textElem = document.querySelector(".enterName");
const btnElem = document.querySelector(".greetMeBtn");
const clearElem = document.querySelector(".counterClear");
const textAreaElem = document.querySelector(".message");
const counterElem = document.querySelector(".counter");

// if theres something it will put on local storage or return an array
var data = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];
var lineDataHolder = data;

var instance = greet(data);
counterFun();
counClearo();
//call function
function greetMe() {

    // get the name of text value
    var stringValue = textElem.value;
    var name = stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase();

    var numbBack = instance.hasNumbers(name)
    var regex = /\d/g;
    var regex2 = /[!@#$%^&*(),.;-_'"?":{}|<>]/g;
    if (!stringValue.match(regex) && !stringValue.match(regex2)) {


        //alert(name);
        //getting values for  input checkbox
        var langValue = document.querySelector(".selectRadio:checked");


        if (langValue === null && name === "") {
            textAreaElem.innerHTML = "please do enter a name and select a language"
        }
        else if (name === "") {
            textAreaElem.innerHTML = "please enter name..."
        }

        else if (langValue === null) {
            textAreaElem.innerHTML = "please selected atleast one language"
        }
        else if (!(langValue === null && name === "")) {
            //  set/use the name, factory access
            instance.setName(name);
            var lingoInstance = instance.language(langValue.value, name);
            //alert(instance.language(langValue.value, name));

            counterFun();
            textAreaElem.innerHTML = lingoInstance

            //local storage store  , what it should stringify 
            localStorage.setItem("names", JSON.stringify(lineDataHolder));
        }



        //langValue(html) value attributes
        /*if (langValue === 'Isixhosa') {
            textAreaElem.innerHTML = instance.language(langValue.value, name)
        
        }
        
        else if (langValue === 'English') {
            textAreaElem.innerHTML = instance.language(langValue.value, name)
        }
        else if (langValue === 'Afrikaans') {
            textAreaElem.innerHTML = instance.language(langValue.value, name)
        
        
        }*/


    }
    else {
        textAreaElem.innerHTML = "please enter a valid name...!"
    }
}
function counterFun() {
    instance.counter();
    counterElem.innerHTML = instance.counter();
}
function counClearo() {
    instance.counter();

    var a = 0;

    var buttonpressed = false;


    if (!buttonpressed && localStorage.length > 0 ) { // Check if the localStorage object exists

        window.localStorage.clear()  //clears the localstorage
        instance.clear();
        location.reload();
    }


    // else {

    // alert("Sorry, no local storage."); //an alert if localstorage is non-existing
    //}


    counterElem.innerHTML = a;

}


btnElem.addEventListener("click", greetMe);
clearElem.addEventListener("click", counClearo);




















