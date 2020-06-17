const textElem = document.querySelector(".enterName");
const btnElem = document.querySelector(".greetMeBtn");
const textAreaElem = document.querySelector(".message");
const counterElem = document.querySelector(".counter");
// if theres something it will put on local storage or return an array
var data = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")): [] ;
var lineDataHolder = data;

var instance = greet(data);

//call function
function greetMe() {

// get the name of text value
var name = textElem.value;
//alert(name);
//getting values for  input checkbox
var langValue = document.querySelector(".selectRadio:checked");
//alert(langValue.value);

//  set/use the name, factory access
instance.setName(name);
var lingoInstance = instance.language(langValue.value, name);
//alert(instance.language(langValue.value, name));

counterFun();
textAreaElem.innerHTML = lingoInstance

//local storage store  , what it should stringify 
localStorage.setName("names", JSON.stringify(lineDataHolder));



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
function counterFun() {
   instance.counter();
    counterElem.innerHTML = instance.counter();
}

btnElem.addEventListener("click", greetMe);





















