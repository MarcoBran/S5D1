var dataOggi = new Date();

const giorno = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdi', 'Sabato'];
const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
document.getElementById('today').innerHTML +=   dataOggi.getDate() + '-' + dataOggi.getMonth() +'-'+ dataOggi.getFullYear();



document.getElementById('data').innerHTML = dataOggi;
document.getElementById('giorno').innerHTML += dataOggi.getDate();


var meseAttuale = mesi[dataOggi.getMonth()];
document.getElementById('mese').innerHTML += meseAttuale;

document.getElementById('data1').innerHTML +=   dataOggi.getDate() + ' / ' + meseAttuale +' / '+ dataOggi.getFullYear();


