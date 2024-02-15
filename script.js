// la fonction ouvrirMenu() va se lancer à chaque fois que elle va être appelée avec un onclick="ouvrirMenu()"
function ouvrirMenu () {
    // on récupère le bloc qui a comme Id sideMenu et on le met dans la variable "sideMenu"
    var sideMenu = document.getElementById('sideMenu');

    // on récupère le bloc qui a comme Id content et on le met dans la variable "content"
    var content = document.getElementById('content');

    // si sideMenu (= le menu de navigation) est ouvert, donc qu'il est à 0 pixels à gauche,
    // alors on le déplace de 250 pixels à gauche de la page dans le vide (et du coup on le voit pas)
    // et en même temps on met une marge pour le corps de la page de 0 pour qu'il soit à gauche
    if (sideMenu.style.left == "0px") {
        sideMenu.style.left = "-250px";
        content.style.marginLeft = "0";
    }
    else
        // sinon ça veut dire que le menu est fermé,
        // alors on l'ouvre en le mettant son style CSS à gauche et en déplaçant le corps de la page de 250 pixels en ajoutant une marge
    {
        sideMenu.style.left = "0";
        content.style.marginLeft = "250px";
    }
}