//Code césar - cryptographie
//Créez un algorithme permettant de crypter une chaine de caractères.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : avengers
//    chaine cryptée : bwfohfst
//
//courage ! :)
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const dataNonCrypte = "avengers";

const dataNonCrypteTab = dataNonCrypte.split('');

let i2 = 0;
for(let i1 = 0; i1 < alphabet.length; i1++){
    if(alphabet[i1] === dataNonCrypteTab[i2]){
    dataNonCrypteTab[i2] = alphabet[i1+1];
    i2++;
    i1 = 0;
    }
    if (dataNonCrypteTab[i2] === alphabet[25]){
        dataNonCrypteTab[i2] = alphabet[0];
        i2++;
        i1 = 0;
    }
}
console.log(dataNonCrypteTab.join(""));
console.log(dataNonCrypte);