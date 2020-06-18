
function greet(strings) {

  var greetedNames = strings || [];

  function setName(name) {
    if (!greetedNames.includes(name)) {
      greetedNames.push(name)
    }
  }

  function language(lang, name) {
   
      if (lang === "Isixhosa") {
        return "Molo, " + name + " !"
      }
      else if (lang === "English") {
        return "Hello, " + name + " !"
      }
      else if (lang === "Afrikaans") {
        return "Hallo, " + name + " !"
      }
    


  }

  function getName() {
    return greetedNames;
  }

  //must used what we have in local storage(key value pairs in storage) object in storage .

  function counter() {
    // return greetedNames.length;
    //first part
    return Object.keys(greetedNames).length;

  }


  
return {
  setName,
  getName,
  language,
  counter,

}
    }