// exercice 04

function myFunction() {
    var d = new Date();
    d.setFullYear(2020);
    document.getElementById("demo").innerHTML = d;
  }

///////////////////////////////////////////////////////////


// exercice 05 -fiche de renseignement

let name = prompt("Entrez votre nom et prénom");
let sexe = prompt('Renseignez votre genre (homme ou femme)');

if(sexe === 'homme') {
    alert('Bienvevue M ' + name);
}
else{
    alert('Bienvenue Mme ' + name);
}

let utilisateur = {
    name = prompt('Entrez votre nom et prénom'),
    sexe = prompt('Renseignez votre genre (homme ou femme)'),
    

    id: function() {
        return this.name + ' ' + this.sexe;
    }
};
console.log(utilisateur.id);

// une autre façon de faire

function utilisateur(p, n, s){
      this.nom = n;
      this.prenom = p;
      this.sexe = s;
}

let user = new utilisateur(prompt('Entrez votre nom et prénom'));
let gender = new utilisateur(prompt('Identifier votre sexe (homme ou femme'));

      if(sexe=== 'homme'){
        console.log('Bienvenue M ' + user);
      }
      else{
        console.log('Bienvenue Mme ' + user);
      }

///////////////////////////////////////////////////

// exercice 06- les jours de la semaine


let semaine = parseInt(prompt("Entrez le numéro d'un jour de la semaine"));
       const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Samedi'];

       function random() {
           let random = Math.round(Math.random() * jours.length -1);
           alert(jours[random]);
       }

//////////////////////////////////////////////////////////

// exercice 02-

function val(){
  if(frm.password.value == ""){
      alert('Entrez votre mot de passe');
      frm.password.focus();
      return false;
  }
  if ((frm.password.value) .length < 8){
      alert('Votre mot de passe doit contenir 8 caractères au moins.');
      frm.password.focus();
      return false;
  }
  if(frm.confirmpassword.value == ""){
      alert('Confirmez votre mot de passe');
      return false;
  }
  if(frm.confirmpassword.value != frm.password.value){
      alert('Votre mot de passe est incorrect');
      return false;
  }

  return true;
}