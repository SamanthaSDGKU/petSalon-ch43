function displayCards(){
    let card="";
    const DIV = document.getElementById("pets");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];

        card+=`
            <div class="pet">
                <p>Name: ${pet.nameP}</p>
                <p>Age: ${pet.ageP}</p>
                <p>Gender: ${pet.genderP}</p>
            </div>
        `;
    }
    DIV.innerHTML=card;
}
