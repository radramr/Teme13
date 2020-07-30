
let s = "javascript este un Limbaj de programare orienTat obiect bazat pe conceptul prototipurilor. este folosit mai ales pentru introducerea unor funcționalități în paginile web. limbajul Este binecunoscut pentru folosirea sa în construirea siturilor web, dar este folosit și pentru accesul la obiecte încapsulate (embedded objects) în alte aplicații.";


const number = s.split(".");
console.log("Lungimea sirului", number.length - 1);

//textOriginal – propozitia curenta asa cum a fost primita

//	textProcesat – propozita curenta in care doar primul caracter este scris cu litera mare, iar resul cu litere mici. In textul procesat cuvantul javascript trebuie sa apara sub forma: JavaScript

//	numarCuvinte – numarul de cuvinte din propozita curenta

//	numarVocale – numarul de vocale din propozita curenta

//numarConsoane – numarul de consoane din propozita curenta


console.log("Sirul initial \n", s);

function literaMare(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}
console.log("Sirul cu litera mare " , literaMare(s));

const cuvinte = s.split(" ");
console.log("Numarul de cuvinte", cuvinte.length - 1);



function vocale(s) {
  var lista_vocale = 'aeiouAEIOU';
  var vcount = 0;

  for (var x = 0; x < s.length; x++) {
    if (lista_vocale.indexOf(s[x]) !== -1) {
      vcount += 1;
    }

  }
  return vcount;
}
console.log("Numarul de vocale", vocale(s));


function consoane(s) {
  var lista_consoane = 'bcdfghjklmnpqrstuvwxyzBCDFGHJKLMNPQRSTUVWXYZ';
  var ccount = 0;

  for (var x = 0; x < s.length; x++) {
    if (lista_consoane.indexOf(s[x]) !== -1) {
      ccount += 1;
    }

  }
  return ccount;
}
console.log("Numarul de consoane", consoane(s));