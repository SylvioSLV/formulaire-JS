function myFunction() {
    let nom = document.querySelector("#nom");
    let name = document.querySelector("#name");

    name.innerHTML = nom.value;

                    
    let mail = document.querySelector("#mail");
    let adresse = document.querySelector("#adresse");

    adresse.innerHTML = mail.value;

    let num = document.querySelector("#num");
    let numero = document.querySelector("#numero");

    numero.innerHTML = num.value;

    let caoch = document.getElementById("#caoch");
    let cotch = document.getElementById("#cotch");

    cotch.innerHTML = caoch.value;

    let description = document.querySelector("#description");
    let texte = document.querySelector("#texte");

    texte.innerHTML = description.value;
}