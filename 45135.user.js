// ==UserScript==
// @name           Nettby 4 Fjortis v12 Beta
// @namespace      Nettby4Fjortis Beta :)
// @include        *.nettby.no*
// @description    Nettby 4 Fjortis v12 Beta
// ==/UserScript==


var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://hustadblogg.110mb.com/lawl.css';
cssNode.media = 'screen';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);


var d=document;
var images=d.getElementsByTagName('img');
var welcome=d.getElementsByTagName("span");
var nick1=d.getElementsByTagName("tr");
var nick2=d.getElementsByTagName("span");
var member="";
var city1=d.getElementsByTagName("tr");
var city2=d.getElementsByTagName("strong");
var rcity="Eide";
var count=0;
var fonts=d.getElementsByTagName('font');
var links=d.getElementsByTagName('a');
var mm=d.getElementsByTagName('link');
function m() { 
  e=setTimeout("g()",300);
}
//MENTRIX©
//if (document.all||document.getElementById){
//var thetitle=document.title
//document.title='Nettby 4 Fjortis©'
//}

//var bg1 = window.document.getElementsByTagName('div')[4];
//bg1.style.background = 'url()';

//var bg2 = window.document.getElementsByTagName('div')[5];
//bg2.innerHTML = '';

//var bg3 = window.document.getElementsByTagName('div')[6];
//bg3.innerHTML = '<img src="http://8crazycat8.webs.com/1nettbyhaxZZ.jpg">';

















//SMILEY
for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley6.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley52.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley2.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley4.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley5.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley37.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley29.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley17.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley28.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley13.png")
{images[i].src="http://cdnimg.piczo.com/static/ar_code/50cent/50_cent_logo.gif";}}

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/smiley/smiley30.png")
{images[i].src="http://i41.tinypic.com/2nujfpi.png";}}

for(i=0;i<images.length;i++){if(images[i].src=="")
{images[i].src="";}}

for(i=0;i<images.length;i++){if(images[i].src=="")
{images[i].src="";}}

for(i=0;i<images.length;i++){if(images[i].src=="")
{images[i].src="";}}

for(i=0;i<images.length;i++){if(images[i].src=="")
{images[i].src="";}}












var sted=0;
for(i=0;i<links.length;i++) {
if(links[i].innerHTML=="Møre og Romsdal") {
links[i].innerHTML="Mitt Bosted er";
links[i].style.color="#FF7F00";
sted++;}


if(links[i].innerHTML=="Eide"){
links[i].innerHTML="Gangztaby";
links[i].style.color="#FFFF00";
sted++;}
if (sted==2) break;}


for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Send brev") {
  links[i].innerHTML="Send PM!";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="renati1996") {
  links[i].innerHTML="Drittkjærring";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Profil") {
  links[i].innerHTML="Brukersted";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Medlemmer") {
  links[i].innerHTML="Brukere";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Byvakter") {
  links[i].innerHTML="Wannabez";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="renati1996") {
  links[i].innerHTML="Stygga!";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Ansikter") {
  links[i].innerHTML="Folkz";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Oppslag") {
  links[i].innerHTML="Skjera?";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Bilder av meg") {
  links[i].innerHTML="Bilder av Søten ;)";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Nyheter") {
  links[i].innerHTML="Just Crap;)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Ignorer") {
  links[i].innerHTML="Faen ta!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Legg til profilbilde") {
  links[i].innerHTML="Last opp Bilde";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Slett") {
  links[i].innerHTML="Fjern!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Finn borger") {
  links[i].innerHTML="Finn Fjortis";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Debatter") {
  links[i].innerHTML="Bla Bla...";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Innstillinger") {
  links[i].innerHTML="Change ^^";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Bli venn med") {
  links[i].innerHTML="Bli Lekevenn";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Skriv ny") {
  links[i].innerHTML="Send en ny Melding ;)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Utboks") {
  links[i].innerHTML="Det du har sendt";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Innboks") {
  links[i].innerHTML="Det du har fått";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Gi Nettby Max") {
  links[i].innerHTML="Gi Fjortis-Power";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Skriv en hilsen") {
  links[i].innerHTML="Hilse ?!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Informasjon") {
  links[i].innerHTML="Verktøy";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Postkasse") {
  links[i].innerHTML="Postboks";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Logg ut") {
  links[i].innerHTML="Stikke Fra Nettby!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Logg") {
  links[i].innerHTML="Waschera?";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Varsler") {
  links[i].innerHTML="Kommentarer ;D";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="dagbokinnlegg") {
  links[i].innerHTML="blogginnlegg";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Status") {
  links[i].innerHTML="Statusmelding";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Dagbok") {
  links[i].innerHTML="Blogg";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Gjestebok") {
  links[i].innerHTML="Besøksbok";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Kalender") {
  links[i].innerHTML="Tidsregner";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Fotograf") {
  links[i].innerHTML="Borgermester";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Uteligger") {
  links[i].innerHTML="n00b";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Skopusser") {
  links[i].innerHTML="Dasstømmer";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Student") {
  links[i].innerHTML="Geek!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Bartender") {
  links[i].innerHTML="Vaskehjelp";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Bonde") {
  links[i].innerHTML="Truckfører";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Advokat") {
  links[i].innerHTML="Sekretær";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Pilot") {
  links[i].innerHTML="Narkoman";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Fotograf") {
  links[i].innerHTML="Photoshop-Proff";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Journalist") {
  links[i].innerHTML="VG-Selger";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Politiker") {
  links[i].innerHTML="Vikar";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Vis filterinnstillinger") {
  links[i].innerHTML="Sperr Logg!";
  links[i].style.color="#FFFF00"; {
  }
 }
}


for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Brannmann") {
  links[i].innerHTML="Purk";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="CSI-Agent") {
  links[i].innerHTML="FBI-Agent";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Kunstner") {
  links[i].innerHTML="Økonomisjef";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Linker") {
  links[i].innerHTML="Linkz";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Musiker") {
  links[i].innerHTML="Metallica-Medlem";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Forsker") {
  links[i].innerHTML="Plattform-Arbeider";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Kirurg") {
  links[i].innerHTML="Dataingeniør";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Professor") {
  links[i].innerHTML="Pro Geek!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Skipsreder") {
  links[i].innerHTML="Matros ;)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Pirat") {
  links[i].innerHTML="Homo";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Borgermester") {
  links[i].innerHTML="Konge";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Superstjerne") {
  links[i].innerHTML="Nettbyll-Konge";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Kjendis") {
  links[i].innerHTML="Byller!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Installer Fjortisscriptet") {
  links[i].innerHTML="Gratulerer. Profilen er innstallert.";
  links[i].style.color="#FFFF00"; {
  }
 }
}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Møt") {
  links[i].innerHTML="Flørt og Chat";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Venner") {
  links[i].innerHTML="Kompiza!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="eelin") {
  links[i].innerHTML="Elin Åndal <3";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Eelin") {
  links[i].innerHTML="Elin";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Besøk") {
  links[i].innerHTML="Sjekke ut";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Bilder") {
  links[i].innerHTML="Picz!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Grupper") {
  links[i].innerHTML="Klaner";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="nicc") {
  links[i].innerHTML="Lena Amanda";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="manutd94") {
  links[i].innerHTML="Ole";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="scriptinfo") {
  links[i].innerHTML="Fjortisscriptet er Aktivert :)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="koorsti") {
  links[i].innerHTML="Kristianne Bolli";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Lynmelding") {
  links[i].innerHTML="Kjapt Brev!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="1 ny lynmelding") {
  links[i].innerHTML="Ett Nytt Kjapt Brev ;)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="1 nytt brev") {
  links[i].innerHTML="1 Nytt Mas";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="2 nye brev") {
  links[i].innerHTML="2 Nye Mas";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="1 ny venn") {
  links[i].innerHTML="Venner (+1)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="bennjy13") {
  links[i].innerHTML="Benjamin";
  links[i].style.color="#003300"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="2 nye venner") {
  links[i].innerHTML="Venner (+2)";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Nettby Max") {
  links[i].innerHTML="Max";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Byvakter") {
  links[i].innerHTML="Nettbys Voktere!";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Manchester United") {
  links[i].innerHTML=";D MANU ;D";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Nettby") {
  links[i].innerHTML="Fjortisby";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Siste") {
  links[i].innerHTML="De Siste";
  links[i].style.color="#FFFF00"; {
  }
 }
}
for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Hjelp") {
  links[i].innerHTML="Hjelp?!";
  links[i].style.color="#FFFF00"; {
  }
 }
}


//PROFILLEDER
var D = window.document;
var bilder=getName('img');

function getName(n){return D.getElementsByTagName(n);}
//MENTRIX
for(var i=0;i<bilder.length;i++) {
if(bilder[i].src.match(/\/redshiftv3\/3.jpg/)) {bilder[i].src="http://i42.tinypic.com/25g6kuf.gif";bilder[i].width="220";bilder[i].height="300";}
}


for(i=0;i<images.length;i++){if(images[i].src==
"http://img1.nettby.no/img/no/logo_evening.gif"
){images[i].src=
"http://i43.tinypic.com/bj71ms.jpg"}}
//

for(i=0;i<images.length;i++){if(images[i].src==
"http://img1.nettby.no/img/no/logo_night.gif"
){images[i].src=
"http://i43.tinypic.com/bj71ms.jpg"}}
//

for(i=0;i<images.length;i++){if(images[i].src==
"http://img1.nettby.no/img/no/logo_day.gif"
){images[i].src=
"http://i43.tinypic.com/bj71ms.jpg"}}
//

for(i=0;i<images.length;i++){if(images[i].src==
"http://img4.nettby.no/users/m/e/n/mentrix/3.jpg?1233411424"
){images[i].src=
"http://farm4.static.flickr.com/3262/2368889238_199dcd984e.jpg?v=0"}}

for(i=0;i<images.length;i++){if(images[i].src==
"http://img5.nettby.no/users/m/e/n/mentrix/4.jpg?1233411424"
){images[i].src=
"http://farm4.static.flickr.com/3262/2368889238_199dcd984e.jpg?v=0"}}
//

for(i=0;i<images.length;i++){if(images[i].src==
"http://img1.nettby.no/img/no/logo_morning.gif"
){images[i].src=
"http://i43.tinypic.com/bj71ms.jpg"}}
//



for(i=0;i<images.length;i++){if(images[i].src==
"http://img1.nettby.no/img/top_bg_night.gif"
){images[i].src=
"http://i43.tinypic.com/aujn94.jpg"}}
//

for(i=0;i<images.length;i++){if(images[i].src==
"http://img1.nettby.no/img/user_menu.gif"
){images[i].src=
"http://i41.tinypic.com/2z5q3oz.jpg"}}
//

for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/no_photo_girl.gif"){images[i].src="http://i43.tinypic.com/vsklzs.jpg";images[i].width="55";images[i].height="60";}}
for(i=0;i<images.length;i++){if(images[i].src=="http://img1.nettby.no/img/no_photo_boy.gif"){images[i].src="http://i43.tinypic.com/vsklzs.jpg";images[i].width="55";images[i].height="60";}}



//Mentrix.Gruppeleder
for(i=0;i<images.length;i++){if(images[i].src=="http://img5.nettby.no/users/r/s/h/rshiftv3/1.jpg?1230988270"){images[i].src="http://s222.photobucket.com/albums/dd239/Ragge1991/th_1zd0yhd-1.jpg";images[i].width="55";images[i].height="60";}}
//Mentrix.Gruppevakt
for(i=0;i<images.length;i++){if(images[i].src==""){images[i].src="http://i222.photobucket.com/albums/dd239/Ragge1991/Mordi3.png";images[i].width="55";images[i].height="60";}}


var nick=d.getElementsByTagName('h1');
for(i=0;i<nick.length;i++) {
var s="";
s=nick[i].innerHTML;
if(s.substr(0,12)=='Mentrix') {
alert(nick[i].innerHTML)
alert(nick[i].outerHTML);

nick[i].outerHTML='Chris Tony Hustad';
break;}}

for (var c = 0; c < window.document.getElementsByTagName('div').length; c++){
if (/^Fakta$/.test(window.document.getElementsByTagName('div')[c].innerHTML)) {
akt = window.document.getElementsByTagName('div')[c].nextSibling;
while ((akt.nodeType != 1) || (akt.nodeName != 'DIV')){
akt=akt.nextSibling;
}
akt.innerHTML = akt.innerHTML +'<br><img src="http://i39.tinypic.com/2565u2g.pnghttp://i39.tinypic.com/2565u2g.png">'
akt.innerHTML = akt.innerHTML + '</strong><br></font><font color="#ff0000">&nbsp; <font color="#ffffff"><a href="http://userscripts.org/scripts/show/41513" style="text-decoration: none;"><input class="button" value="Oppdater Nettby4fjortis" name="send" type="submit"></a><br><br><div align="center"><font size="1"><font color="#ff6600">&copy;2009</font> <font color="#00008B"><a href="http://www.nettby.no/user/index.php?user_id=1005363">Mentrix</a></font></font></div>';
}
}
//Mentrix©
for (var c = 0; c < window.document.getElementsByTagName('div').length; c++){
if (/^Informasjon$/.test(window.document.getElementsByTagName('div')[c].innerHTML)) {
akt = window.document.getElementsByTagName('div')[c].nextSibling;
while ((akt.nodeType != 1) || (akt.nodeName != 'DIV')){
akt=akt.nextSibling;
}
akt.innerHTML = akt.innerHTML + '<div id="FAVORITT"></div>';
akt.innerHTML = akt.innerHTML + '<div id="Randomvenn"></div>';
}
}
//Mentrix©
for (var c = 0; c < window.document.getElementsByTagName('div').length; c++){
if (/^Din aktivitet$/.test(window.document.getElementsByTagName('div')[c].innerHTML)) {
akt = window.document.getElementsByTagName('div')[c].nextSibling;
while ((akt.nodeType != 1) || (akt.nodeName != 'DIV')){
akt=akt.nextSibling;
}

akt.innerHTML = akt.innerHTML + '';

akt.innerHTML = akt.innerHTML + '<img src="http://www.a-begynder.dk/images/ani-gear.gif">';
akt.innerHTML = akt.innerHTML + '<div id="Random"></div>';
}
}
//MENTRIX©
var anchor = document.createElement( 'a' );
anchor.setAttribute( 'href', 'http://www.nettby.no/community/news.php?community_id=603' );
anchor.appendChild( document.createTextNode( 'Manchester United! Join :)' ) );
document.getElementById( 'Randomvenn' ).appendChild( anchor );

var anchor = document.createElement( 'a' );
anchor.setAttribute( 'href', 'http://www.nettbyll.net' );
anchor.appendChild( document.createTextNode( 'Nettbyll' ) );
document.getElementById( 'FAVORITT' ).appendChild( anchor );

var anchor = document.createElement( 'a' );
anchor.setAttribute( 'href', 'http://www.nettby.no/user/index.php?user_id=' + Math.round( Math.random() * 1005363 ) );
anchor.appendChild( document.createTextNode( 'RaNdOm Profil' ) );
document.getElementById( 'Random' ).appendChild( anchor );

function poeng(e){try{e.innerHTML=e.innerHTML.replace(/Poeng i dag/,"Pointz i dag").replace(/(\d*)\/20\)/,"--MAX--)").replace(/Poeng totalt/,"Jeg har ").replace(/\(\d*\/2000\)/,"(Fullt Hus) i dag").replace(/Bling-O-Meter:/,"SÅNN PIMP DRITT!!:");
var im=e.getElementsByTagName('img');
var is=im[0].parentNode.style;is.width='200px';
is.background='url(http://i222.photobucket.com/albums/dd239/Ragge1991/Syle2.jpg)';is.opacity="0.9";
if(is.filter)is.filter="alpha(opacity=100)";
is=im[1].parentNode.style;is.width='200px';is.background='url(http://i222.photobucket.com/albums/dd239/Ragge1991/Syle2.jpg)';is.opacity="0.9";
if(is.filter)is.filter="alpha(opacity=90)";
}catch(err){}};
{var d;
for(var i=window.document.getElementsByTagName('div').length;i&&(d=window.document.getElementsByTagName('div')[--i]);)
{switch(d.innerHTML){case 'Din aktivitet':case 'Finn borger':case 'Inviter en venn':case '<span>Sist pålogget </span>':case 'Sist pålogget':case 'Informasjon':d.className="rtl";break;case 'Aktivitet':poeng(window.document.getElementsByTagName('div')[i+1]);

   break;
  }
 }
}


for(i=0;i<fonts.length;i++)
{if(fonts[i].innerHTML=="Fotograf"){fonts[i].innerHTML='<img src="http://img227.imageshack.us/img227/5271/borjemestergfyn2.gif">';
fonts[i].style.color="#3c3c3c";break;}}

for(i=0;i<links.length;i++) {
 if(links[i].innerHTML=="Mentrix") {
  links[i].innerHTML="Hacker";
  links[i].style.color="#00FF00"; {
   if(links[i].href='http://www.nettby.no/user/index.php?user_id=1005363');
   break;
  }
 }
}



//Setter Fakta
var fakta=window.document.getElementsByTagName('div');
for(q=0;q<fakta.length;q++){
	if(fakta[q].innerHTML=="Fakta")
		{fakta[q].innerHTML="Lizzom, Mine Priv@t3 sak3r:";
		break;
	}
}

//Setter Sist innom
var innom=window.document.getElementsByTagName('span');
for(q=0;q<innom.length;q++){





	if(innom[q].innerHTML=="Sist innom")
		{innom[q].innerHTML="Lizzom, disse var før deg!!:";
		break;
	}
}

//Setter status (pålogget)
var imON=window.document.getElementsByTagName('div');
for(q=0;q<imON.length;q++){
	if(imON[q].innerHTML=="Pålogget")
		//{imON[q].innerHTML="Jeg er Lizzom 0n :D";
		{imON[q].innerHTML='<center><blink><img src="http://xs128.xs.to/xs128/08220/24et6wl_png130.png"></blink></center>';
		break;
	}
}
//CALADORION Â©
for (var c = 0; c < window.document.getElementsByTagName('div').length; c++){
if (/^Inviter en venn$/.test(window.document.getElementsByTagName('div')[c].innerHTML)) {


akt = window.document.getElementsByTagName('div')[c].nextSibling;
while ((akt.nodeType != 1) || (akt.nodeName != 'DIV')){
akt=akt.nextSibling;
}


akt.innerHTML = akt.innerHTML + '<img src="http://i32.tinypic.com/1ysjf4.jpg">';
akt.innerHTML = akt.innerHTML + '<div id="lol"></div>';
}
}
var anchor = document.createElement( 'a' );
anchor.setAttribute( 'href', 'http://userscripts.org/scripts/show/40388' );
anchor.appendChild( document.createTextNode( 'Nettby4Fjortis v12' ) );
document.getElementById( 'Test' ).appendChild( anchor );

var ffghj = document.createElement('link');
ffghj.setAttribute('type', 'image/x-icon');
ffghj.setAttribute('rel', 'shortcut icon');
ffghj.setAttribute('href', 'http://static.nettby.no/users/r/a/r/raring61/files/leader.gif');
var head = document.getElementsByTagName('head')[0];
head.appendChild(ffghj);