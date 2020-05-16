// exercice 01- donne moi ton adresse e-mail

let mail = prompt('Veuillez saisir votre adresse mail :');
let  arobase = /@/; // on creer  une expression regulière (regex)
let recherche = arobase.test(mail);// on recherche le caratere @ avec notre methode test

        if(recherche  && mail == mail.toLowerCase()){
            alert('adresse mail valide: '+ mail);
        } else {
        alert("Erreur votre adresse mail n'est pas valide");
        }

///////////////////////////////////////////////////////////////////////


// exercice 02- choisi un mot de passe

let password = "wordpass12";// declaration de la variable mdt et aaffectation  du mot de passe

        if( mdp.match ( /[0-9]/g) && mdp.match(/[A-Z]/g) && mdp.length >= 8 ){
            alert('mot de passe valide');
        } else {
            alert('Votre mot de passe doit comptenir 8 caractères au moins');
        }

////////////////////////////////////////////////////////////////////////


// exercice 03-Ecrire un programme qui demande à l'utilisateur son nom et le nombre d’enfants qu’il a .

let name = prompt('Entrez votre nom');
       let child = parseInt(prompt("Combien d'enfant avez-vous?"));

        if(child >= 2) {
            alert(name + ' vous avez ' + child + ' enfants ');
        }
        else{
            alert(name + ' vous avez ' + child + ' enfant ');
        }

/////////////////////////////////////////////////////////////////////

// exercice 04-

let date = new Date();
let m = [1,2,3,4,5,6,7,8,9,10,11,12];
let current_date = date.getDate();
let month =m[date.getMonth()];
let year = date.getFullYear();

// Date au format (jj/mm/aaa)
document.getElementById("date_data").innerHTML=""+current_date+"/"+month+"/"+year;


/////////////////////////////////////////////////////////////////////

// exercice 07- Admis ou Recalé

let note1 = parseInt(prompt("Saisissez votre première note"));
let note2 = parseInt(prompt("Saisissez votre deuxième note"));
let note3 = parseInt(prompt("Saisissez votre troisième note"));

//calcul du résultat
let result = (note1 + note2 + note3) /3;

    if(result === 0 && result < 10) {
        alert('Vous êtes recalé votre moyenne est  ' + [ note1 + note2 +note3/3] + " = " + result);
    }
    else if(result >= 10) {
        alert('Vous êtes admis votre moyenne est ' + [note1 + note2 + note3/3] + " = " + result);
    }

//////////////////////////////////////////////////////////////////////

// exercice 10- pair ou impair

let n = parseInt(prompt('Saisir un nombre'));
if(n%2 === 0){
    alert(true);
}
else{
    alert(false);
}


