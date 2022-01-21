var url = location.href;
console.log(url);

var splitEgal = url.split("&");
console.log(splitEgal);

// NOM & PRENOM
var np = splitEgal[0];
var nomPrenom = np.split("=");
console.log(nomPrenom[1]);

// TITRE OEUVRE 
var titre = splitEgal[1];
var titre_oeuvre = titre.split("=");
console.log(titre_oeuvre[1]);

//  DATE DEBUT 
var dateD = splitEgal[2];
// console.log(dateD);
var dateDebut = dateD.split("=");
console.log(dateDebut[1]);

// DATE FIN 
var dateF = splitEgal[3];
var dateFin = dateF.split("=");
console.log(dateFin[1]);

//CATEGORIE 
var cat = splitEgal[4];
var categorie = cat.split("=");
console.log(categorie[0]);

document.getElementById("nom_prenom").innerHTML = "Bienvenue " + "<em>" +nomPrenom[1] + "</em>";
document.getElementById("titre").innerHTML      = "Le titre de l'oeuvre est " + "<mark>"+titre_oeuvre[1]+"</mark>";
document.getElementById("date_debut").innerHTML = "Vous avez commencé à l'écrire le " + "<u>" +dateDebut[1] + "</u>";
document.getElementById("date_fin").innerHTML   = "Vous avez terminé de l'écrire le " + "<u>" + dateFin[1] + "</u>";
document.getElementById("cate").innerHTML       = "Vous allez concourir dans la catégorie " + "<b>" +categorie[0] + "</b>" ;