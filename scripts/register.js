// object literal 
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm street",
        zip:"22111",
        state:"Baja california",
        country:"Mexico"
    },
    pets:[] //this is an arrays
}

//object constructor (special function)
function Pet(name,age,gender,service,breed){
    this.nameP=name;
    this.ageP=age;
    this.genderP=gender;
    this.serviceP=service;
    this.breedP=breed;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");

function isValid(aPet){
    // assuming that the pet is valid
    let validation =true;

    inputName.classList.remove("error");
    inputAge.classList.remove("error");

    if(aPet.nameP==""){
        validation=false;
        inputName.classList.add("error");
    }

    //validate the age
    if(aPet.ageP==""){
        validation=false;
        inputAge.classList.add("error");
    }

    return validation;
}

function register(){
    //get the values from the input
    //use the construor to create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value);
    
    if(isValid(newPet)==true){
        //push the new pet into thearray 
        petSalon.pets.push(newPet);
        //display the new pet on the console
        displayCards();
        clearForm();
    }
}

function clearForm(){
    inputName.value="";
}

function init(){
    //crearting objects using constructor
    let scooby = new Pet("Scooby",60,"Male","Grooming","Dane");
    let scrappy = new Pet("Scrappy",50,"Male","Grooming","Dane");
    petSalon.pets.push(scooby,scrappy); //pushing the elements on the array
    displayCards();
}
window.onload=init;