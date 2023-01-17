let count = 0;
const result = document.getElementById("resultat")

function reponse(quiz) {
  console.log(quiz.choix5[0]);
  if (quiz.choix[0].checked) {
    document.getElementById("value1").style.color = "red";
  }
  if (quiz.choix[1].checked) {
    document.getElementById("value2").style.color = "green";
    count++;
  }
  if (quiz.choix[2].checked) {
    document.getElementById("value3").style.color = "red";
  }
  if (quiz.choix1[0].checked) {
    document.getElementById("value4").style.color = "green";
    count++;
  }
  if (quiz.choix1[1].checked) {
    document.getElementById("value5").style.color = "red";
  }
  if (quiz.choix1[2].checked) {
    document.getElementById("value6").style.color = "red";
  }
  if (quiz.choix2[0].checked) {
    document.getElementById("value7").style.color = "green";
    count++;
  }
  if (quiz.choix2[1].checked) {
    document.getElementById("value8").style.color = "red";
  }
  if (quiz.choix2[2].checked) {
    document.getElementById("value9").style.color = "red";
  }
  if (quiz.choix3[0].checked) {
    document.getElementById("value10").style.color = "green";
    count++;
  }
  if (quiz.choix3[1].checked) {
    document.getElementById("value11").style.color = "red";
  }
  if (quiz.choix3[2].checked) {
    document.getElementById("value12").style.color = "red";
  }
  if (quiz.choix4[0].checked) {
    document.getElementById("value13").style.color = "red";
  }
  if (quiz.choix4[1].checked) {
    document.getElementById("value14").style.color = "red";
  }
  if (quiz.choix4[2].checked) {
    document.getElementById("value15").style.color = "green";
    count++;
  }

  if (quiz.choix5[0].checked) {
    document.getElementById("value16").style.color = "green";
    count++;
  }
  if (quiz.choix5[1].checked) {
    document.getElementById("value17").style.color = "red";
  }
  if (quiz.choix5[2].checked) {
    document.getElementById("value18").style.color = "red";
  
  }
  if (quiz.choix6[0].checked) {
    document.getElementById("value19").style.color = "red";
  
  }
  if (quiz.choix6[1].checked) {
    document.getElementById("value20").style.color = "green";
    count++;
  }
  if (quiz.choix6[2].checked) {
    document.getElementById("value21").style.color = "red";
  
  }
  if (quiz.choix7[0].checked) {
    document.getElementById("value22").style.color = "green";
    count++;
  }
  if (quiz.choix7[1].checked) {
    document.getElementById("value23").style.color = "red";
  }
  if (quiz.choix7[2].checked) {
    document.getElementById("value24").style.color = "red";
  
  }
  if (quiz.choix8[0].checked) {
    document.getElementById("value25").style.color = "green";
    count++;
  }
  if (quiz.choix8[1].checked) {
    document.getElementById("value26").style.color = "red";
  }
  if (quiz.choix8[2].checked) {
    document.getElementById("value27").style.color = "red";
  
  }
  if (quiz.choix9[0].checked) {
    document.getElementById("value28").style.color = "red";

  }
  if (quiz.choix9[1].checked) {
    document.getElementById("value29").style.color = "green";
    count++;
  }
  if (quiz.choix9[2].checked) {
    document.getElementById("value30").style.color = "red";
  
  }
}
function affiche(){
  alert( `Votre resultat est égale à  ${count}/12`)
}