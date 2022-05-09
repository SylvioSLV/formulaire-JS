function myFunction() {
    
        // Récupération et affichage du nom
        let nom = document.querySelector("#nom");
        let name = document.querySelector("#name");
    
        name.innerHTML = nom.value;
    
        // Récupération et affichage du mail
        let mail = document.querySelector("#mail");
        let adresse = document.querySelector("#adresse");
    
        adresse.innerHTML = mail.value;
    
        // Récupération et affichage du numéro
        let num = document.querySelector("#num");
        let numero = document.querySelector("#numero");
    
        numero.innerHTML = num.value;
    
        // Récupération et affichage du nom coach
        let caoch = document.querySelector("#caoch");
        let cotch = document.querySelector("#cotch");
    
        cotch.innerHTML = caoch.value;
    
        // Récupération et affichage du texte entré
        let description = document.querySelector("#description");
        let texte = document.querySelector("#texte");
    
        texte.innerHTML = description.value;
    }