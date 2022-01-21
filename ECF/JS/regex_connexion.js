// S'IDENTIFIER JURE 
// REGEX 
var reg_cle_jure = /^[a-z0-9]/;

// CLE CONNEXION
var cleJure = "jure123";
var passJure = "pass123";
// var timeOut = setTimeout()

document.getElementById("btn_jure").addEventListener("click", envoyer_cle_jure);
function envoyer_cle_jure() {
    var regCleJure = document.getElementById("cle_jure").value;
    var regPassJure = document.getElementById("pass_jure").value;
    // var regPassJure = document.getElementByID("pass_jure").value;
    console.log(regCleJure);
    if (regCleJure.match(cleJure) && regPassJure.match(passJure))
    {
        alert("gG");
    }
    else
    {
        alert("error");
    }
}



// S'IDENTIFIER ATEUR/EDITEUR
var reg_cle_auteur = /^[a-z0-9]/;
document.getElementById("btn_auteur").addEventListener("click", envoyer_cle_auteur);
// CLE CONNEXION
function envoyer_cle_auteur() {
    var regCleAuteur = document.getElementById("cle_auteur").value;
    console.log(regCleAuteur);
    if(regCleAuteur.match(reg_cle_auteur))
    {
        alert("gg");
    }else
    {
        alert("error");
    }
    
}


