const btn_contact = document.getElementById("btn-contact");
btn_contact.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/pages/Contacts.html";
});

function VerifContact() {
  var input_nom_prenom = document.forms.contact.name.value;
  var input_email = document.forms.contact.email.value;
  var text_area = document.forms.contact.text.value;
  var msg = "votre message a été envoyé avec succès";
  if (input_nom_prenom == "") {
    document.getElementById("alert1").innerHTML =
      "Vous devez saisir votre nom et prénom complet.";
    document.getElementById("alert1").style.color = "red";
    document.getElementById("alert1").style.fontSize = "12px";
    document.getElementById("alert1").style.marginLeft = "12px";
  }

  if (input_email == "") {
    document.getElementById("alert2").innerHTML = "Saisissez votre courriel";
    document.getElementById("alert2").style.color = "red";
    document.getElementById("alert2").style.fontSize = "12px";
    document.getElementById("alert2").style.marginLeft = "12px";
  }
  if (input_email.indexOf("@") === -1) {
    document.getElementById("alert2").innerHTML =
      "entrez une adresse e-mail valide";
    document.getElementById("alert2").style.color = "red";
    document.getElementById("alert2").style.fontSize = "12px";
    document.getElementById("alert2").style.marginLeft = "12px";
  }

  if (text_area.length < 10) {
    document.getElementById("alert3").innerHTML =
      "votre message est trop court";
    document.getElementById("alert3").style.color = "red";
    document.getElementById("alert3").style.fontSize = "12px";
    document.getElementById("alert3").style.marginLeft = "12px";
  }
  if (
    input_nom_prenom !== "" &&
    text_area.length > 10 &&
    input_email !== "" &&
    input_email.indexOf("@")
  ) {
    alert(msg);
  }
}
