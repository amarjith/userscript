// ==UserScript==
// @name CameHelper-Farm
// @namespace GermanConquererCrew-SkriptingTeam
// @description FarmBot für Kingdoms of Camelot
// @include *.kingdomsofcamelot.com/*
// @include *.facebook.com/kingdomsofcamelot/*
// ==/UserScript==

/*
THX to Nites for his 'POC Helper' (http://userscripts.org/scripts/show/72778). Gave me the kick in the ass to start this Autofarmer and it worked as a little how-to-struct a script for me
*/

// ##### Hole App aus dem iFrame raus #####

// var frames = document.getElementsByTagName('iframe');
// for(var i = 0; i < frames.length; i++) {
//
// if(frames.item(i).src.indexOf('kingdomsofcamelot.com') > 0)
// window.location.replace(frames.item(i).src);
// }

// <#/##### Hole App aus dem iFrame raus #####/#>


CHF_addScripts(); // Skripte registrieren
window.setTimeout('CHF_starting();', 1000); // anstoßen


// ###############################################
// ######## Globaler Initialisierer
// ###############################################
function CHF_starting() {

CHF_SEEDER();
CHF_USERINTERFACE();
CHF_FARMER();


CHF_SEEDER = null;
CHF_USERINTERFACE = null;
CHF_FARMER = null;

CHF_UI.build(); // UI bauen

CHF_FARM.testing();
window.setTimeout('CHF_FARM.timing();',1000); // starten
}


// ###############################################
// ######## Farmer
// ###############################################
function CHF_FARMER() {

window.CHF_FARM = new Object();
window.CHF_FARM_selectedCity = CHF_SEED.getCities()[0][1]; //CHF_debug('Aktuelle Stadt: ' + CHF_SEED.getCities()[0][1]);
window.CHF_FARM_knightsOnTheRoadTimeLeft = [];
window.CHF_FARM_knightsOnTheRoad = new Array();
window.CHF_FARM_updateIntervall = 3000;
window.CHF_FARM_updateStatsIntervall = 3000;
window.CHF_FARM_currentAttackTarget = 0;
window.CHF_FARM_isRunning = 'false';
window.CHF_FARM_debugMaxLength = 400;
window.CHF_FARM_multiWaveCounter = 0;

// ####### Regelmäßiger Check
window.CHF_FARM.timing = function () {
window.setTimeout('CHF_FARM.timing();',CHF_FARM_updateIntervall);

CHF_UI.killAnnoyingFrames();
CHF_FARM.UpdateStats();
}


window.CHF_FARM.switchRunning = function () {
if (CHF_FARM_isRunning == 'false') {
CHF_FARM_isRunning = 'true';
document.getElementById('CHF_UI_switchRunning').innerHTML = 'Stop !!';
CHF_debug('Started !!');
//CHF_FARM_currentAttackTarget = document.getElementById('CHF_AttackList_coords').selectedIndex;
}
else {
CHF_FARM_isRunning = 'false';
document.getElementById('CHF_UI_switchRunning').innerHTML = 'Start !!';
CHF_debug('Stopped !!');
}
}


window.CHF_FARM.setSelectedCity = function (CityID) {
window.CHF_FARM_selectedCity = CityID;
CHF_debug('Aktuelle Stadt: ' + CityID);
CHF_FARM.UpdateStats();
}

window.CHF_FARM.testing = function () {
/*var testing = new Array();
testing.push('4711');
testing.push('1337');
testing.push('42');
testing.push('13');
testing.push('23');
testing.push('100');
var toDel = 0;
testing = testing.slice(0,toDel).concat(testing.slice(toDel+1,testing.length));
alert(testing);*/
}

// GENERELLER UPDATER ALLER STATS
window.CHF_FARM.UpdateStats = function () {
// Ritter in Stadt updaten
document.getElementById('CHF_UI_RitterProStadt').innerHTML = '<b><u>Kampfbereite (freie) Ritter in selektierter Stadt</u></b>';
document.getElementById('CHF_UI_RitterProStadt').innerHTML += "<br/>o) " + CHF_SEED.getCityName(CHF_FARM_selectedCity); //CityInfo[i][0];
var KnightInfo = CHF_SEED.getKnightsOfCity(CHF_FARM_selectedCity,'true');
for ( var j = 0 ; j < KnightInfo.length ; j++) {
//alert(CHF_FARM_knightsOnTheRoadTimeLeft["knt" + KnightInfo[j][0]]);
//CHF_debug(KnightInfo[j][2] + " -- " + CHF_FARM_isOnTheRoad(KnightInfo[j][0]));
document.getElementById('CHF_UI_RitterProStadt').innerHTML += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;- " + KnightInfo[j][1] + " ( ID: " + KnightInfo[j][0] + " ) - Status: ";
if( KnightInfo[j][2] == "10" && CHF_FARM_isOnTheRoad(KnightInfo[j][0])) {
document.getElementById('CHF_UI_RitterProStadt').innerHTML += "Unterwegs. Noch <font color='red'>" + parseInt(CHF_FARM_knightsOnTheRoadTimeLeft["knt" + KnightInfo[j][0]]) + 's</font>';
CHF_FARM_knightsOnTheRoadTimeLeft["knt" + KnightInfo[j][0]] -= parseInt(CHF_FARM_updateStatsIntervall/1000);
}
else {
document.getElementById('CHF_UI_RitterProStadt').innerHTML += "<font color='green'>Frei</font>";

// Prüfe ob ich den Ritter schon losgeschickt habe, aber das Spiel vllt. noch nicht schnell genug im Updaten war
var alreadySend = 'false';
for ( var i = 0 ; i < CHF_FARM_knightsOnTheRoad.length ; i++)
if (KnightInfo[j][0] == CHF_FARM_knightsOnTheRoad[i]) alreadySend = 'true';
if(alreadySend == 'true') continue;

// Rittereintrag in Truppenkostellation finden
var knightFoundAndSend = 0;
if (CHF_FARM_isRunning == 'false') continue;
for ( var i = 0 ; i < document.getElementById('CHF_AttackList_company').length ; i++ ) {
//if ( KnightFoundAndSend != 1 ) {
var Info = document.getElementById('CHF_AttackList_company').options[i].value.split(':');
// Gibts nen Ritter?
if ( KnightInfo[j][0] == Info[1] ) {
CHF_FARM_knightsOnTheRoad.push(KnightInfo[j][0]); // Ich schick den Ritter los und speicher das. Das Spiel schafft es manchmal nicht, das in den 3 Sekunden abzuarbeiten
window.setTimeout('CHF_FARM.releaseKnightOnTheRoad('+KnightInfo[j][0]+')', 15000);
UnitArr = new Array();
var splittedInfo = Info;
for ( var o = 2 ; o < splittedInfo.length ; o++ )
UnitArr.push(splittedInfo[o]);
var Coords = CHF_FARM.getNextCoords();
CHF_FARM.sendKnight(splittedInfo[0], splittedInfo[1],Coords[0],Coords[1],UnitArr);
// Nicht bei 2 Einträgen weitermachen
CHF_debug('Ritter ' + splittedInfo[1] + ' losgeschickt auf ' + Coords[0] + ':' + Coords[1]);
knightFoundAndSend = 1;
if(document.getElementById('CHF_MultiWave').checked == true && CHF_FARM_multiWaveCounter == 1) return;
}
//}
if (knightFoundAndSend == 1) break;
}
}
}
}


//Alle Options abchecken, ob ein Ritter unterwegs ist und ob das Spiel nen Schuss hat
window.CHF_FARM_isOnTheRoad = function (knightID) {

if(CHF_FARM_knightsOnTheRoadTimeLeft["knt"+knightID] > -5) {
//CHF_debug("isOnTheRoad größer -5");
return true;
}
else {
//Prüfe ob der Ritter überhaupt im CHF_FARM_knightsOnTheRoadTimeLeft ist. Wenn NICHT drin, dann true;
//CHF_debug("isOnTheRoad scheint leer zu sein oder < -5");
return false;
}
}
//Ritter aus der Liste der Unterwegsseienden rausholen (Spiel sollte sich nun aktualisiert haben)
window.CHF_FARM.releaseKnightOnTheRoad = function (knightID) {
//CHF_debug('Versuche Ritter ' + knightID + ' aus {' + CHF_FARM_knightsOnTheRoad + '} zu löschen.');
var pos = -10;
for ( var i = 0 ; i < CHF_FARM_knightsOnTheRoad.length ; i++) {
//CHF_debug('Compare: ' + CHF_FARM_knightsOnTheRoad[i] + ' = ' + knightID);
if (CHF_FARM_knightsOnTheRoad[i] == knightID) { /*CHF_debug('success!!');*/ pos = i; /*CHF_debug('Pos = ' + pos + ' - Sollte sein i: ' + i);*/}
else { /*CHF_debug('nope....');*/ }
}
if (pos < 0) { /*CHF_debug('ID nicht im Array gefunden. Pos=' + pos); */ return; }
else {
CHF_FARM_knightsOnTheRoad = CHF_FARM_knightsOnTheRoad.slice(0,pos).concat(CHF_FARM_knightsOnTheRoad.slice(pos+1,CHF_FARM_knightsOnTheRoad.length));
//CHF_debug('ID gelöscht. Neues Array: ' + CHF_FARM_knightsOnTheRoad);
}
}
//Aktuelle Coords ermitteln
window.CHF_FARM.getNextCoords = function () {

var coords = document.getElementById('CHF_AttackList_coords').options[(CHF_FARM_currentAttackTarget) % document.getElementById('CHF_AttackList_coords').length].value.split(':');
if(document.getElementById('CHF_MultiWave').checked == true) {
if(CHF_FARM_multiWaveCounter == 1) {
CHF_FARM_currentAttackTarget++;
CHF_FARM_multiWaveCounter--;
}
else
CHF_FARM_multiWaveCounter++;
}
else {
}
CHF_FARM_currentAttackTarget++;

return coords;
}








//Aktuelle Coords ermitteln
window.CHF_FARM.getNextCoords = function () {

var coords = document.getElementById('CHF_AttackList_coords').options[(CHF_FARM_currentAttackTarget) % document.getElementById('CHF_AttackList_coords').length].value.split(':');
if(document.getElementById('CHF_MultiWave').checked == true) {
if(CHF_FARM_multiWaveCounter == 1) {
CHF_FARM_currentAttackTarget++;
CHF_FARM_multiWaveCounter--;
}
else
CHF_FARM_multiWaveCounter++;
}
else {
}
CHF_FARM_currentAttackTarget++;

return coords;
}







// Ritter losschicken
window.CHF_FARM.sendKnight = function (cityID, knightID, X_coord, Y_coord, unitArray) {
var params=Object.clone(g_ajaxparams); params.cid=cityID; params.type=4; params.kid= knightID; params.xcoord = X_coord; params.ycoord= Y_coord;
var unitsarr=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalTroops=0;
var totalResources=0;

//Einheiten aufbereiten
for( var i = 0 ; i < unitArray.length ; i++ ) {
if( unitArray[i] > 0 ) {
totalTroops += parseInt(unitArray[i]);
params["u"+(i+1)]=unitArray[i];
unitsarr[parseInt(i+1)]=unitArray[i];
}
}

//Ressourcen aufbereiten
var resources=new Array(); params.gold=0; resources.push(params.gold);
for(var i=1;i<5;i++) { params["r"+i]=0; resources.push(params["r"+i]) }

//Items aufbereiten
var iused=new Array(); params.items=iused.join(",");

new Ajax.Request(g_ajaxpath+"ajax/march.php"+g_ajaxsuffix, { method:"post", parameters:params,
onSuccess: function( transport ) {
var rslt = eval("("+transport.responseText+")");
if ( rslt.ok ) {
for( var i = 0 ; i < unitArray.length ; i++ ) {
if( unitArray[i] > 0 ) {
seed.units["city"+cityID]["unt"+(i+1)]=parseInt(seed.units["city"+cityID]["unt"+(i+1)]) - unitArray[i];
}
}
//$("untqueue_list").show();
//alert($("untqueue_list"));
//document.getElementById('untqueue_list').style.display = 'block';
//Modal.hideModalAll();
if(parseInt(params.kid)!=0) {
seed.knights["city"+cityID]["knt"+params.kid].knightStatus=10
}
var timediff = parseInt( rslt.eta ) - parseInt( rslt.initTS );
var ut = unixtime();

CHF_FARM_knightsOnTheRoadTimeLeft["knt"+knightID] = parseInt((2*timediff));
//alert('timediff: ' + timediff + ' ; 2*timediff: ' + (2*timediff) + ' ; (2*timediff)*1.1: ' + (2*timediff)*1.1 + ' ; parseInt((2*timediff)*1.1): ' + parseInt((2*timediff)*1.1) + ' ; CHF_FARM_knightsOnTheRoad[knt'+knightID+']: ' + CHF_FARM_knightsOnTheRoad["knt"+knightID]);

attack_addqueue(rslt.marchId,ut,ut+timediff,params.xcoord,params.ycoord,unitsarr,params.type,params.kid,resources,rslt.tileId,rslt.tileType,rslt.tileLevel);
if(rslt.updateSeed) {
update_seed(rslt.updateSeed)
}
var ut=unixtime();
var boosted=false;
if(parseInt(rslt.atkBoostTime)>0) {
boosted=true; if(!(parseInt(seed.playerEffects.atkExpire)>ut)) {seed.playerEffects.atkExpire=ut+parseInt(rslt.atkBoostTime)}
else {seed.playerEffects.atkExpire=parseInt(seed.playerEffects.atkExpire)+parseInt(rslt.atkBoostTime)}}
if(parseInt(rslt.defBoostTime)>0) {boosted=true;
if(!(parseInt(seed.playerEffects.defExpire)>ut)) {seed.playerEffects.defExpire=ut+parseInt(rslt.defBoostTime) }
else { seed.playerEffects.defExpire=parseInt(seed.playerEffects.defExpire)+parseInt(rslt.defBoostTime) }
}
if(rslt.liftFog) {boosted=true; seed.playerEffects.fogExpire=0; g_mapObject.getMoreSlots()}
if(boosted) {update_boosts()}
if(parseInt(rslt.knightCombatBoostTime)>0) {}
var mpiused="no";
if(iused.length>0) {mpiused="yes"}
var mpmtype="attack";
switch(parseInt(params.type)) { case 1: mpmtype="transport";break;case 2:mpmtype="reinforce";break;case 3:mpmtype="scout";break;case 4:mpmtype="attack";break;case 5:mpmtype="reassign";break}
}
else { CHF_debug('Fehler. Ich versuchs in 15 Sekunden für Ritter ' + knightID + ' auf ' + X_coord +':'+ Y_coord + ' nochmal.<br>Fehlerinfo: ' + (rslt.msg||null));}
}
,onFailure:function() {}}
)
}
} // <#/##### Farmer #####/#>


// ###############################################
// ######## UI-Controller
// ###############################################
function CHF_USERINTERFACE() {

var ScriptName = "FarmBot für Camelot";
var Version = "V 1.0.3 beta";
var Floskel = "..<<:: by Inglourious Basterds::>>..";

window.CHF_UI = new Object();

// ####### UI bauen
window.CHF_UI.build = function () {

//Mainelement
var UIdiv_main = document.createElement("div");
UIdiv_main.setAttribute("id","CHF_UI_Main");
UIdiv_main.setAttribute("style","position:absolute; left: 785px; top: 10px; width: 450px; background-color: white; border: 0px red solid;");

UIdiv_control = document.createElement("div");
UIdiv_main.appendChild(UIdiv_control);

UIdiv_control.setAttribute("style","position:relative; left: 0px; top: 0px; border: 1px black solid; background-color: silver; padding: 10px;");
UIdiv_control.setAttribute("id","CHF_UI_Control");
UIdiv_control.innerHTML = "<center>Willkommen im " + ScriptName + " ; " + Version + "<br/><b>" + Floskel + "</b><hr/></center>";

UIdiv_control.innerHTML += "<u><b>Folgende Städte hast du zur Auswahl:</b></u>";
var CityInfo = CHF_SEED.getCities();
for ( i = 0 ; i < CityInfo.length ; i ++ )
UIdiv_control.innerHTML += '<br/><input type="radio" name="CHF_cityselect" ' + (i==0 ? "checked" : "") + ' onclick="CHF_FARM.setSelectedCity(' + CityInfo[i][1] + ');" id="CHF_checkAttack"'+i+' />' + CityInfo[i][0] + " ( ID: " + CityInfo[i][1] + ')';
UIdiv_control.innerHTML += "</center>";
UIdiv_control.innerHTML += '<br/><a class="button20" onclick="CHF_FARM.switchRunning()"><span id="CHF_UI_switchRunning">Start</span></a>&nbsp;<a class="button20" onclick="CHF_FARM_printInfo();"><span>Info (Erscheint unten im DebugFenster)</span></a>'

//Truppenkonstellation 1 + Angriffsliste 1
UIdiv_control.innerHTML += '<br/><br/><div style="border: solid 0px red;"><div style="float: left; border: solid 0px lime; width: 50px;"><u><b>Truppenkonstellationen:</b></u><br/><select id="CHF_AttackList_company" size="8"></select></div><div style="position: relative; border: solid 0px lime; width: 50px; margin-left: 25em;"><u><b>Angriffsliste:</b></u><br/><select id="CHF_AttackList_coords" size="8"></select></div></div>';

//Button Truppenkonstellation 1 + Button Angriffsliste 1
UIdiv_control.innerHTML += '<input type="checkbox" id="CHF_MultiWave">Nutze 2-Wellen-System ?<br/>';
UIdiv_control.innerHTML += '<hr/><b><u>Truppenkonstellationen Stadt 1:</u></b><br/><input type="text" id="CHF_AttackList_company_new" size="42" value="2958:RRRR:0:0:0:0:0:80000:0:0:0:0:0:0"><br/>Mehrfacheingaben bitte mit " " (Leerzeichen) trennen!<br/><a class="button20" onclick="CHF_UI.AL_company_Delete()"><span>Eintrag löschen</span></a>';
UIdiv_control.innerHTML += '<a class="button20" onclick="CHF_UI.AL_company_Add()"><span>Eintrag hinzufügen</span></a>';
UIdiv_control.innerHTML += '<a class="button20" onclick="CHF_UI.AL_company_Ausgabe()"><span>Einträge ausgeben</span></a><br/><br/><br/>';

UIdiv_control.innerHTML += '<hr/><b><u>Angriffsliste Stadt 1:</u></b><br/><a class="button20" onclick="CHF_UI.AL_coords_Delete()"><span>Eintrag löschen</span></a>';
UIdiv_control.innerHTML += '<a class="button20" onclick="CHF_UI.AL_coords_Add()"><span>Eintrag hinzufügen</span></a>';
UIdiv_control.innerHTML += '<input type="text" id="CHF_AttackList_coords_new" size="10" value="XXX:YYY">';
UIdiv_control.innerHTML += '<br/><br/>';

//Truppenkonstellation 2 + Angriffsliste 2
UIdiv_control.innerHTML += '<br/><br/><div style="border: solid 0px red;"><div style="float: left; border: solid 0px lime; width: 50px;"><u><b>Truppenkonstellationen2:</b></u><br/><select id="CHF_AttackList_company" size="8"></select></div><div style="position: relative; border: solid 0px lime; width: 50px; margin-left: 25em;"><u><b>Angriffsliste2:</b></u><br/><select id="CHF_AttackList_coords2" size="8"></select></div></div>';



//Button Truppenkonstellation 2 + Button Angriffsliste 2
UIdiv_control.innerHTML += '<hr/><b><u>Truppenkonstellationen Stadt 2:</u></b><br/><input type="text" id="CHF_AttackList_company2_new" size="42" value="50318:RRRR:0:0:0:0:0:80000:0:0:0:0:0:0"><br/>Mehrfacheingaben bitte mit " " (Leerzeichen) trennen!<br/><a class="button20" onclick="CHF_UI.AL_company2_Delete()"><span>Eintrag löschen</span></a>';
UIdiv_control.innerHTML += '<a class="button20" onclick="CHF_UI.AL_company2_Add()"><span>Eintrag hinzufügen</span></a>';
UIdiv_control.innerHTML += '<a class="button20" onclick="CHF_UI.AL_company2_Ausgabe()"><span>Einträge ausgeben</span></a><br/><br/><br/>';

UIdiv_control.innerHTML += '<hr/><b><u>Angriffsliste Stadt 2:</u></b><br/><a class="button20" onclick="CHF_UI.AL_coords2_Delete()"><span>Eintrag löschen</span></a>';
UIdiv_control.innerHTML += '<a class="button20" onclick="CHF_UI.AL_coords2_Add()"><span>Eintrag hinzufügen</span></a>';
UIdiv_control.innerHTML += '<input type="text" id="CHF_AttackList_coords2_new" size="10" value="XXX:YYY">';
UIdiv_control.innerHTML += '<br/><br/>';

//Statuspanel
UIdiv_status = document.createElement("div");
UIdiv_main.appendChild(UIdiv_status);
UIdiv_status.setAttribute("id","CHF_UI_Status");
UIdiv_status.setAttribute("style","position:relative; left: 0px; top: 10px; border: 1px black solid; padding: 10px; background-color: silver");
//UIdiv_status.innerHTML = 'Aktueller Tick: <span id="CHF_UI_currentTick"></span><br/>';

UIdiv_status.innerHTML += '<span id="CHF_UI_RitterProStadt"></span>';

//Debugpanel
UIdiv_debug_main = document.createElement("div");
UIdiv_debug_main.setAttribute("style","position:relative; left: 0px; top: 20px; border: 1px black solid; background-color: silver; padding: 10px;");
UIdiv_debug_main.innerHTML = 'Anzahl an Zeichen im Debugfenster: <input type="text" id="CHF_UI_Debug_setMaxLength" size="5" value="400" onkeyup="CHF_setDebugMaxlength();"> (0 für keine)<hr/>';
UIdiv_main.appendChild(UIdiv_debug_main);

UIdiv_debug = document.createElement("div");
UIdiv_debug_main.appendChild(UIdiv_debug);
UIdiv_debug.setAttribute("id","CHF_UI_Debug");
UIdiv_debug.setAttribute("style","position:relative; left: 0px; top: 0px; border: 0px lime solid; background-color: silver; padding: 10px;");
UIdiv_debug.innerHTML = "";

document.getElementsByTagName('body')[0].appendChild(UIdiv_main);
CHF_UI.AL_coords_Read();
CHF_UI.AL_company_Read();
}



// ####### Hilfe für die Angriffsziele
window.CHF_UI.AL_coords_Help = function () {
CHF_debug('Über diesen Knopf ist es dir möglich, neue Ziele in die Liste der Angriffsziele einzureihen.<br/>Ziele werden im Format XXX:YYY eingetragen, also z.B. "34:531" oder "731:2". Bitte beachte, dass die Koordinaten zwischen 0 und 749 liegen MÜSSEN.<br/>Hast du viele Ziele, kannst du diese auch auf einmal eingeben, jeweils mit Leerzeichen getrennt. Also z.B. so: "34:531 731:2 111:222 42:27 456:321".');
}

// ####### Neue Konstellation eintragen
window.CHF_UI.AL_company_Add = function () {

/*alert(document.getElementById('CHF_AttackList_coords').options[(CHF_FARM_currentAttackTarget)%document.getElementById('CHF_AttackList_coords').length].value.split(':'));
return; */
if ( document.getElementById('CHF_AttackList_company_new').value.indexOf(' ') < 0 ) {
var splittedInfo = document.getElementById('CHF_AttackList_company_new').value.split(':');
if (splittedInfo.length != 14) {
alert('Nicht alle 14 Informationen angegeben. Bitte achte auf die korrekte Trennung der Informationen mit Doppelpunkten ":". Klicke zur Not einfach mal auf den Hilfe-Button'); return; }
else {


// Prüfe ob die eingegebene Stadt gültig ist
var userscities = CHF_SEED.getCities(); var correctCity = 'false';
for ( var i = 0 ; i < userscities.length ; i++)
if ( splittedInfo[0] == userscities[i][1] ) correctCity = 'true';
if ( correctCity == 'false' ) { alert('Die Stadt ' + splittedInfo[0] + ' gehört nicht dir!'); return; }

// Prüfe ob der angegebene Ritter zur Stadt gehört und verfügbar ist
var usersknights = CHF_SEED.getKnightsOfCity(splittedInfo[0],'true'); var correctKnight = 'false';
for ( var i = 0 ; i < usersknights.length ; i++)
if ( splittedInfo[1] == usersknights[i][0] && usersknights[i][2] != 10 ) correctKnight = 'true';
if ( correctKnight == 'false' ) { alert('Der Ritter ' + splittedInfo[1] + ' ist nicht deiner oder nicht frei in dieser Stadt!'); return; }

// Prüfe alle Einheitenangaben durch
for ( var i = 2 ; i < splittedInfo.length ; i ++ )
if ( isNaN(splittedInfo[i]) || splittedInfo[i] < 0) {
alert('Fehler bei Einheit ' + (i-1) + ' (Angabe Nummer'+i+' im Textfeld). Fehlerhafter Wert: ' + splittedInfo[i]);
return;
}

document.getElementById('CHF_AttackList_company').innerHTML += "<option>" + document.getElementById('CHF_AttackList_company_new').value + "</option>";
CHF_debug('Truppenkonstellation hinzugefügt: "' + document.getElementById('CHF_AttackList_company_new').value + '"');
CHF_UI.AL_company_Save();
}
}
else {
var ka = document.getElementById('CHF_AttackList_company_new').value.split(' ');
for ( var o = 0 ; o < ka.length ; o++) {
var splittedInfo = ka[o].split(':');
if (splittedInfo.length != 14) {
alert('Nicht alle 14 Informationen angegeben. Bitte achte auf die korrekte Trennung der Informationen mit Doppelpunkten ":". Klicke zur Not einfach mal auf den Hilfe-Button'); return; }
else {
// Prüfe ob die eingegebene Stadt gültig ist
var userscities = CHF_SEED.getCities(); var correctCity = 'false';
for ( var i = 0 ; i < userscities.length ; i++)
if ( splittedInfo[0] == userscities[i][1] ) correctCity = 'true';
if ( correctCity == 'false' ) { alert('Die Stadt ' + splittedInfo[0] + ' gehört nicht dir!'); return; }

// Prüfe ob der angegebene Ritter zur Stadt gehört und verfügbar ist
var usersknights = CHF_SEED.getKnightsOfCity(splittedInfo[0],'true'); var correctKnight = 'false';
//alert(usersknights);
for ( var i = 0 ; i < usersknights.length ; i++) { /*alert('Compare ' + splittedInfo[1] + ' to ' + usersknights[i][0] + ' plus status: ' + usersknights[i][2]);*/
if ( splittedInfo[1] == usersknights[i][0] && usersknights[i][2] != 10 ) correctKnight = 'true'; }
if ( correctKnight == 'false' ) { alert('Der Ritter ' + splittedInfo[1] + ' ist nicht deiner oder nicht frei in dieser Stadt!'); return; }

// Prüfe alle Einheitenangaben durch
for ( var i = 2 ; i < splittedInfo.length ; i ++ )
if ( isNaN(splittedInfo[i]) || splittedInfo[i] < 0) {
alert('Fehler bei Einheit ' + (i-1) + ' (Angabe Nummer'+i+' im Textfeld). Fehlerhafter Wert: ' + splittedInfo[i]);
return;
}
//alert(ka[o]);
document.getElementById('CHF_AttackList_company').innerHTML += "<option>" + ka[o] + "</option>";
}
}
}
CHF_UI.AL_company_Save();
}







// ####### Neue Konstellation eintragen
window.CHF_UI.AL_company2_Add = function () {

/*alert(document.getElementById('CHF_AttackList_coords2').options[(CHF_FARM_currentAttackTarget)%document.getElementById('CHF_AttackList_coords2').length].value.split(':'));
return; */
if ( document.getElementById('CHF_AttackList_company2_new').value.indexOf(' ') < 0 ) {
var splittedInfo = document.getElementById('CHF_AttackList_company2_new').value.split(':');
if (splittedInfo.length != 14) {
alert('Nicht alle 14 Informationen angegeben. Bitte achte auf die korrekte Trennung der Informationen mit Doppelpunkten ":". Klicke zur Not einfach mal auf den Hilfe-Button'); return; }
else {


// Prüfe ob die eingegebene Stadt gültig ist
var userscities = CHF_SEED.getCities(); var correctCity = 'false';
for ( var i = 0 ; i < userscities.length ; i++)
if ( splittedInfo[0] == userscities[i][1] ) correctCity = 'true';
if ( correctCity == 'false' ) { alert('Die Stadt ' + splittedInfo[0] + ' gehört nicht dir!'); return; }

// Prüfe ob der angegebene Ritter zur Stadt gehört und verfügbar ist
var usersknights = CHF_SEED.getKnightsOfCity(splittedInfo[0],'true'); var correctKnight = 'false';
for ( var i = 0 ; i < usersknights.length ; i++)
if ( splittedInfo[1] == usersknights[i][0] && usersknights[i][2] != 10 ) correctKnight = 'true';
if ( correctKnight == 'false' ) { alert('Der Ritter ' + splittedInfo[1] + ' ist nicht deiner oder nicht frei in dieser Stadt!'); return; }

// Prüfe alle Einheitenangaben durch
for ( var i = 2 ; i < splittedInfo.length ; i ++ )
if ( isNaN(splittedInfo[i]) || splittedInfo[i] < 0) {
alert('Fehler bei Einheit ' + (i-1) + ' (Angabe Nummer'+i+' im Textfeld). Fehlerhafter Wert: ' + splittedInfo[i]);
return;
}

document.getElementById('CHF_AttackList_company2').innerHTML += "<option>" + document.getElementById('CHF_AttackList_company2_new').value + "</option>";
CHF_debug('Truppenkonstellation hinzugefügt: "' + document.getElementById('CHF_AttackList_company2_new').value + '"');
CHF_UI.AL_company_Save();
}
}
else {
var ka = document.getElementById('CHF_AttackList_company2_new').value.split(' ');
for ( var o = 0 ; o < ka.length ; o++) {
var splittedInfo = ka[o].split(':');
if (splittedInfo.length != 14) {
alert('Nicht alle 14 Informationen angegeben. Bitte achte auf die korrekte Trennung der Informationen mit Doppelpunkten ":". Klicke zur Not einfach mal auf den Hilfe-Button'); return; }
else {
// Prüfe ob die eingegebene Stadt gültig ist
var userscities = CHF_SEED.getCities(); var correctCity = 'false';
for ( var i = 0 ; i < userscities.length ; i++)
if ( splittedInfo[0] == userscities[i][1] ) correctCity = 'true';
if ( correctCity == 'false' ) { alert('Die Stadt ' + splittedInfo[0] + ' gehört nicht dir!'); return; }

// Prüfe ob der angegebene Ritter zur Stadt gehört und verfügbar ist
var usersknights = CHF_SEED.getKnightsOfCity(splittedInfo[0],'true'); var correctKnight = 'false';
//alert(usersknights);
for ( var i = 0 ; i < usersknights.length ; i++) { /*alert('Compare ' + splittedInfo[1] + ' to ' + usersknights[i][0] + ' plus status: ' + usersknights[i][2]);*/
if ( splittedInfo[1] == usersknights[i][0] && usersknights[i][2] != 10 ) correctKnight = 'true'; }
if ( correctKnight == 'false' ) { alert('Der Ritter ' + splittedInfo[1] + ' ist nicht deiner oder nicht frei in dieser Stadt!'); return; }

// Prüfe alle Einheitenangaben durch
for ( var i = 2 ; i < splittedInfo.length ; i ++ )
if ( isNaN(splittedInfo[i]) || splittedInfo[i] < 0) {
alert('Fehler bei Einheit ' + (i-1) + ' (Angabe Nummer'+i+' im Textfeld). Fehlerhafter Wert: ' + splittedInfo[i]);
return;
}
//alert(ka[o]);
document.getElementById('CHF_AttackList_company2').innerHTML += "<option>" + ka[o] + "</option>";
}
}
}
CHF_UI.AL_company2_Save();
}










// ####### Neue Koordinate einfügen
window.CHF_UI.AL_coords_Add = function () {
if ( document.getElementById('CHF_AttackList_coords_new').value.indexOf(' ') < 0 )
if ( document.getElementById('CHF_AttackList_coords_new').value.indexOf(':') < 0 ) {
alert('Kein ":" in Koordinaten. Bitte im Format XXX:YYY eingeben'); return; }
else {
var kc = document.getElementById('CHF_AttackList_coords_new').value.split(':');
if ( kc[0] < 0 || kc[0] > 749 ) { alert('X-Koordinate nicht zwischen 0 und 749.'); return; }
if ( kc[1] < 0 || kc[1] > 749 ) { alert('Y-Koordinate nicht zwischen 0 und 749.'); return; }
if ( isNaN(kc[0]) ) { alert('X-Koordinate ist keine Zahl.'); return; }
if ( isNaN(kc[1]) ) { alert('Y-Koordinate ist keine Zahl.'); return; }

document.getElementById('CHF_AttackList_coords').innerHTML += "<option>" + kc[0] + ":" + kc[1] + "</option>";
CHF_debug('Koordinate hinzugefügt: "' + kc[0] + ':' + kc[1] + '"');
CHF_UI.AL_coords_Save();
}
else {
var ka = document.getElementById('CHF_AttackList_coords_new').value.split(' ');
for ( var i = 0 ; i < ka.length ; i++) {
if ( trim(ka[i]).length == 0) return;
if ( ka[i].indexOf(':') < 0 ) {
alert('Kein ":" in Koordinaten. Bitte im Format XXX:YYY eingeben'); return; }
else {
var kc = ka[i].split(':');
if ( kc[0] < 0 || kc[0] > 749 ) { alert('X-Koordinate nicht zwischen 0 und 749.'); return; }
if ( kc[1] < 0 || kc[1] > 749 ) { alert('Y-Koordinate nicht zwischen 0 und 749.'); return; }
if ( isNaN(kc[0]) ) { alert('X-Koordinate ist keine Zahl.'); return; }
if ( isNaN(kc[1]) ) { alert('Y-Koordinate ist keine Zahl.'); return; }
CHF_UI.AL_coords_Save();
document.getElementById('CHF_AttackList_coords').innerHTML += "<option>" + kc[0] + ":" + kc[1] + "</option>";
CHF_debug('Koordinate hinzugefügt: "' + kc[0] + ':' + kc[1] + '"');

}
}
}
CHF_UI.AL_coords_Save();
}










// ####### Neue Koordinate einfügen in Stadt 2
window.CHF_UI.AL_coords2_Add = function () {
if ( document.getElementById('CHF_AttackList_coords2_new').value.indexOf(' ') < 0 )
if ( document.getElementById('CHF_AttackList_coords2_new').value.indexOf(':') < 0 ) {
alert('Kein ":" in Koordinaten. Bitte im Format XXX:YYY eingeben'); return; }
else {
var kc = document.getElementById('CHF_AttackList_coords2_new').value.split(':');
if ( kc[0] < 0 || kc[0] > 749 ) { alert('X-Koordinate nicht zwischen 0 und 749.'); return; }
if ( kc[1] < 0 || kc[1] > 749 ) { alert('Y-Koordinate nicht zwischen 0 und 749.'); return; }
if ( isNaN(kc[0]) ) { alert('X-Koordinate ist keine Zahl.'); return; }
if ( isNaN(kc[1]) ) { alert('Y-Koordinate ist keine Zahl.'); return; }

document.getElementById('CHF_AttackList_coords2').innerHTML += "<option>" + kc[0] + ":" + kc[1] + "</option>";
CHF_debug('Koordinate hinzugefügt: "' + kc[0] + ':' + kc[1] + '"');
CHF_UI.AL_coords_Save();
}
else {
var ka = document.getElementById('CHF_AttackList_coords2_new').value.split(' ');
for ( var i = 0 ; i < ka.length ; i++) {
if ( trim(ka[i]).length == 0) return;
if ( ka[i].indexOf(':') < 0 ) {
alert('Kein ":" in Koordinaten. Bitte im Format XXX:YYY eingeben'); return; }
else {
var kc = ka[i].split(':');
if ( kc[0] < 0 || kc[0] > 749 ) { alert('X-Koordinate nicht zwischen 0 und 749.'); return; }
if ( kc[1] < 0 || kc[1] > 749 ) { alert('Y-Koordinate nicht zwischen 0 und 749.'); return; }
if ( isNaN(kc[0]) ) { alert('X-Koordinate ist keine Zahl.'); return; }
if ( isNaN(kc[1]) ) { alert('Y-Koordinate ist keine Zahl.'); return; }
CHF_UI.AL_coords_Save();
document.getElementById('CHF_AttackList_coords2').innerHTML += "<option>" + kc[0] + ":" + kc[1] + "</option>";
CHF_debug('Koordinate hinzugefügt: "' + kc[0] + ':' + kc[1] + '"');

}
}
}
CHF_UI.AL_coords_Save();
}













// ####### Truppenkonstellation aus Liste löschen
window.CHF_UI.AL_company_Delete = function () {
document.getElementById('CHF_AttackList_company').options[document.getElementById('CHF_AttackList_company').selectedIndex] = null;
CHF_UI.AL_company_Save();
}

// ####### Truppenkonstellation aus Liste Stadt 2 löschen
window.CHF_UI.AL_company2_Delete = function () {
document.getElementById('CHF_AttackList_company2').options[document.getElementById('CHF_AttackList_company2').selectedIndex] = null;
CHF_UI.AL_company2_Save();
}



// ####### Koordinate aus Liste löschen
window.CHF_UI.AL_coords_Delete = function () {
document.getElementById('CHF_AttackList_coords').options[document.getElementById('CHF_AttackList_coords').selectedIndex] = null;
CHF_UI.AL_coords_Save();
}

// ####### Koordinate aus Liste Stadt 2 löschen
window.CHF_UI.AL_coords2_Delete = function () {
document.getElementById('CHF_AttackList_coords2').options[document.getElementById('CHF_AttackList_coords2').selectedIndex] = null;
CHF_UI.AL_coords2_Save();
}




// ####### Alle Truppenkonstellationen ausgeben
window.CHF_UI.AL_company_Ausgabe = function () {
var savestring = "";
for ( var i = 0 ; i < document.getElementById('CHF_AttackList_company').length ; i ++) {
if ( i != 0 ) savestring += ' ';
savestring += document.getElementById('CHF_AttackList_company').options[i].value;
}
document.getElementById('CHF_AttackList_company_new').value = savestring;
}



// ####### Alle Koordinaten ausgeben
window.CHF_UI.AL_coords_Ausgabe = function () {
var savestring = "";
for ( var i = 0 ; i < document.getElementById('CHF_AttackList_coords').length ; i ++) {
if ( i != 0 ) savestring += ' ';
savestring += document.getElementById('CHF_AttackList_coords').options[i].value;
}
document.getElementById('CHF_AttackList_coords_new').value = savestring;
}

// ####### Alle Koordinaten ausgeben Stadt 2
window.CHF_UI.AL_coords2_Ausgabe = function () {
var savestring = "";
for ( var i = 0 ; i < document.getElementById('CHF_AttackList_coords2').length ; i ++) {
if ( i != 0 ) savestring += ' ';
savestring += document.getElementById('CHF_AttackList_coords2').options[i].value;
}
document.getElementById('CHF_AttackList_coords2_new').value = savestring;
}





// ####### Truppenkonstallationen in Cookie speichern
window.CHF_UI.AL_company_Save = function () {
var savestring = "";

for ( var i = 0 ; i < document.getElementById('CHF_AttackList_company').length ; i ++) {
if (i != 0) savestring += " ";
savestring += document.getElementById('CHF_AttackList_company').options[i].value;
}




//document.cookie = 'CHF_AttackList='+ savestring + '; expires='+a.toGMTString()+';';
CHF_UI.createCookie('CHF_AttackList_company',savestring,30);
}

// ####### Koordinaten in Cookie speichern
window.CHF_UI.AL_coords_Save = function () {
var savestring = "";

for ( var i = 0 ; i < document.getElementById('CHF_AttackList_coords').length ; i ++) {
if (i != 0) savestring += " ";
savestring += document.getElementById('CHF_AttackList_coords').options[i].value;
}



//document.cookie = 'CHF_AttackList='+ savestring + '; expires='+a.toGMTString()+';';
CHF_UI.createCookie('CHF_AttackList_coords',savestring,30);
}

// ####### Truppenkonstellation aus Cookie lesen
window.CHF_UI.AL_company_Read = function () {
if (CHF_UI.readCookie('CHF_AttackList_company') != null && CHF_UI.readCookie('CHF_AttackList_company').length >= 1) {
CHF_debug('Truppenliste gefunden: ' + CHF_UI.readCookie('CHF_AttackList_company'));
var ia = CHF_UI.readCookie('CHF_AttackList_company').split(' ');
for (var i = 0 ; i < ia.length ; i++)
document.getElementById('CHF_AttackList_company').innerHTML += "<option>" + ia[i] + "</option>";
}
else
CHF_debug('Keine Truppenliste gefunden !!');
}

// ####### Koordinaten aus Cookie lesen
window.CHF_UI.AL_coords_Read = function () {
if (CHF_UI.readCookie('CHF_AttackList_coords') != null && CHF_UI.readCookie('CHF_AttackList_coords').length >= 1) {
CHF_debug('Zielliste gefunden: ' + CHF_UI.readCookie('CHF_AttackList_coords'));
var ia = CHF_UI.readCookie('CHF_AttackList_coords').split(' ');
for (var i = 0 ; i < ia.length ; i++)
document.getElementById('CHF_AttackList_coords').innerHTML += "<option>" + ia[i] + "</option>";
}
else
CHF_debug('Keine Zielliste gefunden !!');
}

// ####### Cookie erzeugen
window.CHF_UI.createCookie = function(naming,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = naming+"="+value+expires;
}

// ####### Cookie lesen
window.CHF_UI.readCookie = function (naming) {
var nameEQ = naming + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}

// ####### Cookie löschen
window.CHF_UI.eraseCookie = function (naming) {
CHF_UI.createCookie(naming,"",-1);
}

window.CHF_UI.killAnnoyingFrames = function () {

/*
if( document.getElementsByTagName('body')[0].innerHTML.indexOf('has cordially invited you to visit their') > 0 ||
document.getElementsByTagName('body')[0].innerHTML.indexOf('area, and asks you for directions') > 0 ||
document.getElementsByTagName('body')[0].innerHTML.indexOf('have anyone in your employ who can break the lock. One of your friends may have just the person') > 0 ||
document.getElementsByTagName('body')[0].innerHTML.indexOf('has cordentially invited you to visit') > 0
) { CHF_debug('Nerviges Fenster gekickt'); Modal.hideModal(); }
*/

// Außerdem noch den POC-Helper verschieben - ich bin wichter :-D
if(document.getElementById('pochmain'))  {
document.getElementById ('pochmain').style.position = 'absolute';
//CHF_debug(CHF_UI.getPosition(document.getElementById('CHF_UI_Debug')).y + document.getElementById('CHF_UI_Debug').offsetHeight + 50);
document.getElementById ('pochmain').style.top = (document.getElementById('CHF_UI_Debug').style.top = CHF_UI.getPosition(document.getElementById('CHF_UI_Debug')).y + document.getElementById('CHF_UI_Debug').offsetHeight + 50)+'px'; //(parseInt(document.getElementById ('pochmain').style.left)+parseInt("450"))+"px";
//CHF_debug(document.getElementById('pochmain').style.left);
}
}

window.CHF_UI.getPosition = function (element) {
var elem=element,tagname="",x=0,y=0;
while ((typeof(elem)=="object")&&(typeof(elem.tagName)!="undefined"))
{
y+=elem.offsetTop;
x+=elem.offsetLeft;
tagname=elem.tagName.toUpperCase();

if (tagname=="BODY")
elem=0;

if (typeof(elem)=="object")
if (typeof(elem.offsetParent)=="object")
elem=elem.offsetParent;
}

position=new Object();
position.x=x;
position.y=y;
return position;
}


window.CHF_UI.sleep = function (millis) {
var date = new Date();
var curDate = null;

do { curDate = new Date(); }
while(curDate-date < millis)
}

} // <#/##### UI-Controller #####/#>

// ###############################################
// ######## Seeder
// ###############################################

function CHF_SEEDER() {

window.CHF_SEED = new Object();

window.CHF_SEED.getCityName = function (CityID) {
var CitArr = seed.cities;
for ( var i = 0 ; i < CitArr.length ; i++)
if (CitArr[i][0] == CityID) return CitArr[i][1];
return '-- Unknown --';
}

window.CHF_SEED.getCities = function () {
var retArr = new Array();
for(var i = 0 ; i < seed['cities'].length; i++) {
var inArr = new Array();
inArr.push(seed['cities'][i][1]); // Namen ablegen
inArr.push(seed['cities'][i][0]); // ID ablegen
retArr.push(inArr); // [Name, ID]
}
return retArr; // [[Name, ID],[Name, ID],[Name,ID]]
}

window.CHF_SEED.getKnightsOfCity = function (cityID, onlyFreeOnes) {
var retArr = new Array();
var SouArr = new Array();
SouArr = seed.knights['city'+cityID]; //.knt2898.knightId;

for(var knight in SouArr) {
var inArr = new Array();

// Falls OnlyFreeOnes gesetzt ist UND er besetzt ist an einer Stelle: spring weiter
if (onlyFreeOnes == 'true' && ( SouArr[knight]['knightId'] == seed.leaders['city'+cityID].resourcefulnessKnightId || SouArr[knight]['knightId'] == seed.leaders['city'+cityID].politicsKnightId || SouArr[knight]['knightId'] == seed.leaders['city'+cityID].combatKnightId || SouArr[knight]['knightId'] == seed.leaders['city'+cityID].intelligenceKnightId)) { continue; }

inArr.push(SouArr[knight]['knightId']); // Ritter-ID ablegen
inArr.push(SouArr[knight]['knightName']); // Ritter-Name ablegen
inArr.push(SouArr[knight]['knightStatus']); // Ritter-Status ablegen
retArr.push(inArr); // [ID, Name, Status]
}
return retArr; // [[ID, Name, Status],[ID, Name, Status],[ID, Name, Status]]
}


} // <#/##### Seeder #####/#>

// ###############################################
// ######## Sonstiges
// ###############################################

function CHF_setDebugMaxlength() {
var maxLen = document.getElementById('CHF_UI_Debug_setMaxLength').value;
if (isNaN(maxLen) || maxLen < 400 || trim(maxLen) == "") {
if(maxLen == 0) { CHF_FARM_debugMaxLength = "unlimited"; CHF_debug('Maximale Länge des Debugfensters geändert auf: unbegrenzt'); return; }
else
{CHF_debug('Bitte ein Zahl über 400 eingeben!'); return; }
}
else {
CHF_FARM_debugMaxLength = maxLen;
CHF_debug('Maximale Länge des Debugfensters geändert auf: ' + maxLen + ' Zeichen');
}
}

function CHF_debug(string) {
if (string.length != 0 ) {
var now = new Date();
//document.getElementById('CHF_UI_Debug').innerHTML = "<b><font color='red'>" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "</font></b> - " + string + "<hr/>" + document.getElementById('CHF_UI_Debug').innerHTML;
var newstring = "<b><font color='red'>" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "</font></b> - " + string + "<hr>";
if(CHF_FARM_debugMaxLength != "unlimited") {
var maxlength = CHF_FARM_debugMaxLength - newstring.length;
var sliced = 'false';
var oldstring = document.getElementById('CHF_UI_Debug').innerHTML;
if(oldstring.length > maxlength) sliced = 'true';
oldstring = oldstring.slice(0,maxlength);
if (sliced == 'true') {var lastHR = oldstring.lastIndexOf("<hr>");
oldstring = oldstring.slice(0,lastHR); }
document.getElementById('CHF_UI_Debug').innerHTML = newstring + oldstring;
return;
}
document.getElementById('CHF_UI_Debug').innerHTML = newstring + document.getElementById('CHF_UI_Debug').innerHTML;

}
}

function trim (zeichenkette) {
return zeichenkette.replace (/^\s+/, '').replace (/\s+$/, '');
}

function CHF_FARM_printInfo () {
//alert('Die Info wurde unten im Debug-Fenster ausgegeben. Bitte aufmerksam lesen und verstehen :-) .\r\nDer Programmierer übernimmt KEINE Garantie auf fehlerfreien Ablauf und / oder Verlust von Spielelementen.');
CHF_debug('<b><center>Willkommen zu Net^Devil\'s FarmBot für Camelot</b><br/>Programmiert von<br/>Net^Devil - aka \'Lord Arktus\'<br/>Vizekanzler der German Conquerer Crew<br/>Join us: Facebook-Server Arondight84</center><br/><br/>Bedienung:<br/>- Füge eine Liste an Angriffszielen hinzu. Wie das geht erfährst du über den Knopf \'? Hilfe zur Angriffsliste ?\'<br/>- Füge danach Truppenkonstellationen hinzu. Eine Anleitung dazu findest du per Knopf \'? Hilfe zur Truppenkonstellation ?\'<br/>- Nach dem Klick auf den Start-Knopf, wird dieser Bot alle Ziele mit den gegebenen Truppenkonstellationen abfarmen.<br/><br/>Aktuell wird nur eine Stadt unterstützt. Das heißt, das alle Angriffe von der oben ausgewählten Stadt ausgehen müssen. Welche deiner Städte das ist, kannst du bestimmen. Klickst du eine Stadt an, siehst du unten, welche Ritter dir hier zur Verfügung stehen. Es lohnt sich daher, alle Ritter zu den Truppen in die Hauptstadt zu holen.<br/><br/>Fehler und sonstige Infos werden hier unten im Debugfenster ausgegeben. Wieviel Text hier maximal stehen darf, kannst du über das Eingabefeld über den Debugtexten regeln.<br/><br/><center>Viel Spaß im Spiel<br/><br/>Net^Devil - aka \'Lord Arktus\'');
}

function CHF_addScript(script){

var a = document.createElement('script');

a.innerHTML = script;

document.getElementsByTagName('head')[0].appendChild(a);

return;

}



function CHF_addScripts() {
CHF_addScript(CHF_FARMER);
CHF_addScript(CHF_USERINTERFACE);
CHF_addScript(CHF_SEEDER);

CHF_addScript(CHF_debug);
CHF_addScript(trim);
CHF_addScript(CHF_starting);
CHF_addScript(CHF_setDebugMaxlength);
CHF_addScript(CHF_FARM_printInfo);
}
// <#/##### Sonstiges #####/#>