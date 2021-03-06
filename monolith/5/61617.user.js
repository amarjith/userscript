// ==UserScript==
// @name           Twilight Heros Adventure Script (version 3.4.1)
// @namespace      www.twilightheroes.com
// @description    Autoadventuring for TH - improved
// @include        http://www.twilightheroes.com/fight.php*
// @include        http://www.twilightheroes.com/computer-lab.php*
// ==/UserScript==


//   Obviously, this script owes a great deal to clownhammer's work.  I see this
//as being what clownhammer would've turned that script into, if development
//had continued.
//
//  As many people who'll use this script have little to no knowledge of coding,
//but will likely want to personalize this script, comments have been added
//to this version to make it easier for such people. Those who do know will 
//just have to put up with it. (It's not like you can't just whip up a perl script
//to strip out comments, after all.)

function gll(){
	return "1:Your neighborhood;2:Nearby slums: 3:Golden Wooden Nickel Casino;4:Military base of the Unborn;5:Investigate the trash bin out back;6:The neighborhood sewers;7:Campus: Investigate a Protest;8:A renegade robot hive;9:Shiloh Sanatarium;10:Neighboring and neighborly neighborhood;11:The streets of downtown Twilight;12:Through the Dimensional Gate;13:Zion's Tears building;14:Guild for Imaginative Metachronism;15:Outskirts of Area 54;16:Cube Theater;17:Cannonball Tavern;19:Fiendish Pit;20:Dank and Rusty Maze;21:Porcelain Bay;22:City of Lost Robots;23:Campus: Investigate a Retro Rave;24:The Docks;25:Back of the House;26:Mafia Storeroom;27:Rooftops of downtown;28:Flying above Twilight;31:Row vs. Wade Battlefield;32:Quadrant Delta-Delta-Delta Force;33:Sector 7-Gamma;34:Triassic Park and Bestiary;35:An empty footpath through the park;36:An Ark of Anarchy;37:Goody Two Shoes rally;38:Byzantine Interior of the Unborn Base;39:Inner sanctum of the Unborn Base;40:Big Earl's Big Oil Derrick;41:Underwater Base;42:Castle Hundenswein;43:NCI Live building;44:Staked Tundra;45:Astral Badlands;46:Mouths of Darkness Cave;47:The Farthest Reaches of Insanity;48:The Underwater City;49:The Depths of Space;50:The Ancient Crypts;54:A.R.F.;1001:Buzzkill's Army;1005:Frank's Ballpark;1010:The streets of Somerset;1011:Hyde Park streets".split(';');}

function Select_Value_Set(SelectName, Value) {
//just sets the selected strategy to the last strategy used
  var SelectObject = document.getElementById(SelectName);
  for(index = 0; index < SelectObject.length; index++) {
   if(SelectObject[index].value == Value)
     SelectObject.selectedIndex = index;}}

function Select_Value_Set_Name(SelectName,which, Value) {
//changes drop-down selection box values for item/skill use iff Value is 
//non-negative. (negative Value is a flag to do nothing)
  if (Value<0) return true;
  var SelectObject = document.getElementsByName(SelectName)[which];
  var found = false;
  for(index = 0; index < SelectObject.length; index++)
   if(SelectObject[index].value == Value){
     SelectObject.selectedIndex = index;
     found = true;}
   return found;}

function dll(){
	var t=gll();
	var x;
	var fll = '\n<SELECT id="fdl">';
	for(var i=0;i<t.length;i++){
		x=t[i].split(':');
		fll += '<OPTION VALUE="'+x[0]+'">'+x[1]+'</OPTION>';}
	fll += '</SELECT>';
	return fll;}

function generateStratList () {
	var stratList = new Array();
	//List of attack types, any string Specification string. Each attack is
	// seperated by a semicolon and if there is a skill use the id follows the S. 
	//A = normal attack
	//S:ID = use a skill with the appropriate ID following the colon. If none is specified
	//		 it will default to the last skill used (if possible)
	//IS:ID = perform the attack a specific number of times and then just use
	// 	 attack. Right now IS must be the only option if its being used so you
	// 	 can't put something like 'IS:152;A;IS:133' since you wouldn't know which
	// 	 IS block. I probably could change this in the future, but don't see much
	//		 need... if you want to use a skill a (hopefully small) number of times, it
	//		 is easy enough to do so with hard-coding a strategy.
	//I:ID = use the item having the ID specified after the colon. If none is specified
	//		 it will default to the last item used.
	//T:A = tame if the option exists, otherwise normal attack
	//T:S:ID = tame if the option exists, otherwise use the skill specified.
	//T:I:ID = tame if the option exists, otherwise use the item specified.
//There should be enough examples below that anyone can create their own
// strategies. If you're unable to come up with the right encoding for a strategy
// that you want to use (and it is consistent - no 'do this against this enemy, and
// something else against other enemies... that isn't available yet) ask someone
// in chat or post a request in the forums on the greasemonkey thread.
//If you don't want to use any of these specific example strategies, simply comment
// out the strategy that isn't desired to list. (This means simply inserting the
// characters '//' at the beginning of the line. Likewise, 'uncommenting' would be
// removing the '//' from the beginning of the line.) If you want to use one of the
// strategies which are currently not active, uncomment them.
//note: I've removed most of the strategies from this version, but left a handful as a template for creating 
//  new strategies.
	stratList['3 Stars then Attack To Death'] = 'I:881;I;I;T:A'; //3 black holes, then tame or attack 
	stratList['6 Stars then Attack to Death'] = 'I:881;I;I;T:I:882;I:880;I;A';//6 black holes, attack to death
	stratList['Tame, otherwise Bovine Charge To Death'] = 'T:S:52'; //nat only, self-explanatory
	stratList['3 Stars then $SKILL To Death'] = 'I:881;I;I;S'; //3 black holes, then use previous skill 
	stratList['Mall of the cave bear for '] = 'IS:66';
	
	var htmlStrat = '\n<SELECT id="Strat" onchange="updateAttackControls();">';
	htmlStrat += '<OPTION VALUE="A">Attack Only</OPTION>';
	for (keys in stratList) {
		htmlStrat += '<OPTION VALUE="'+stratList[keys]+'">'+keys+'</OPTION>';	}
	
	htmlStrat += '</SELECT>';
	htmlStrat += '\n<script>function updateAttackControls() {					'+
		'\nvar strat = document.getElementById(\'Strat\');			'+
		'\nvar actionstuff = strat[strat.selectedIndex].value.split(\';\');	'+
		'\nvar possible = actionstuff[0].split(\':\');			'+
		'\nif (possible[0] == \'IS\') {					'+
		'\n	document.getElementById(\'control\').innerHTML = \'<input type="text" maxlength="5" size="2" id="maxAttacks"> rounds then attack.\';	'+
		'\n	} else {							'+
		'\n	document.getElementById(\'control\').innerHTML = \'\';	'+
		'\n	}								'+
		'\n} '+
		'</script>								'+
			'';
	return htmlStrat;}

function updateAttackControls() {					
	var strat = document.getElementById('Strat');			
	var actionstuff = strat[strat.selectedIndex].value.split(';');	
	var possible = actionstuff[0].split(':');			
	if (possible[0] == 'IS') {
		var currentRound = (GM_getValue('roundNumber',0) < 0? 0:GM_getValue('roundNumber',0));
		var attacksLeft = GM_getValue('maxAttacks',0) - (currentRound);
		attacksLeft = (attacksLeft < 0?0:attacksLeft);
		document.getElementById('control').innerHTML = 
								'<input type="text" maxlength="5" size="2"'+
								' id="maxAttacks" '+
								(GM_getValue('maxAttacks',0)!=0?'value="'+
								GM_getValue('maxAttacks',0)+'"':'value="0"')+
								'> rounds then attack.'+
								' <br> rounds for skill use left : '+attacksLeft;}
	else 							
		document.getElementById('control').innerHTML = '';	}	

function acb(x){
	var a,b,c,d,e;
	a=parseInt(localStorage.getItem("chp"));
	b=parseInt(localStorage.getItem("thp"));
	c=parseInt(localStorage.getItem("lpp"));
	d=parseInt(localStorage.getItem("cpp"));
	e=parseInt(localStorage.getItem("hpp"));
	GM_log(a+':'+b+';'+c+':'+d+':'+e);
	if((a>b)&&(c<d)&&(d<e))x.click();
	else shutDown();}

function sfb(){
	GM_xmlhttpRequest({
	  method: "GET",
	  url: 	"http://www.twilightheroes.com/nav.php",
	  headers: {"User-Agent": navigator.userAgent },
	  onload: function(r) {
		var rsp = r.responseText;
		var pat = /(\d+)\/\d.*?(\d+)\/\d/;   
		if (!r.responseXML) 
		    r.responseXML = new DOMParser().parseFromString(rsp,"text/xml");
		var cfv = pat(rsp);
		localStorage.setItem("chp",cfv[1]);
		localStorage.setItem("cpp",cfv[2]);}});}

function stepToNextRound() {
	var nonComName = getNonCombatName();
	var nextButton = getNextButton(nonComName);
	if (getNonCombatName())
		acb(nextButton);
        else{	
		var strat = document.getElementById('Strat');
		var h=document.getElementsByName('hpstring')[0].value;
		var p=document.getElementsByName('ppstring')[0].value;
		localStorage.setItem("chp",h);
		localStorage.setItem("cpp",p);
		acb(nextButton);}}


function stepToNextCombat() {
	var asd;
	var searchy = find('.//td[contains(.,"Patrol again")]');
	if (searchy != null) {
		var linkk = find('.//a',searchy);
		if(document.getElementById('vandal'))
			linkk=document.getElementById('vandal');
		if(/crimebusters IOU/.test(document.body.innerHTML)){
			var frt = GM_getValue('fdfl');
			linkk='fight.php?location='+frt;
			GM_log(linkk);}
		localStorage.setItem("gbt",linkk);
		var strat = document.getElementById('Strat');
		if(strat[strat.SelectedIndex])
			GM_setValue('selectedStrat',strat[strat.SelectedIndex].value);}
	if(GM_getValue('dfd')){
		if(document.getElementById('computer'))
			location.href='computer-lab.php';
		else{
			linkk=localStorage.getItem("gbt");
			GM_setValue('roundNumber',-1);
			window.location = linkk;}}
	else{
		GM_setValue('roundNumber',-1);
		window.location = linkk;}}

function endOfTurn() {
	var searchy = find('.//td[contains(.,"Patrol again")]');
	if (searchy != null) {
		var linkk = find('.//a',searchy);
		if (linkk != null) {
			return true;}}
	return false;}

function idEncounter() {
	var combatIndicator = find('.//h1[1]');
	var nonCombatIndicator = find('.//h2[1]');
	var type = null;
	if (combatIndicator != null) {
		if ('Combat!' == combatIndicator.innerHTML) {
			type = 'combat'}}
	if (nonCombatIndicator != null) { 
		if (endOfTurn()) {
			GM_log(" found type non-combat "+nonCombatIndicator.innerHTML);
			type='non-combat';}
		else {
			GM_log(" found type choice-non-combat "+nonCombatIndicator.innerHTML);
			type='choice-non-combat';}}
	return type;}

function getNonCombatName() {
	var nonCombatIndicator = find('.//h2[1]');
	var nonname;
	if (nonCombatIndicator != null) { 
		nonname = nonCombatIndicator.innerHTML;}
	return nonname;}	

function getNextButton(nonCombatName) {
	var nonComChoice = new Array();	
//again, for those who don't know programming: if the choice you prefer is on a
// line beginning with "//" simply remove those characters from the start of thei
// line, and add them to the beginning of the line containing the choice you don't
// want. I've tried to simplify your choices by specifying the result of each choice
// and also specifying which choice is currently selected - ie: not commented out.
	//nonComChoice["Crime Never Sleeps ... or Does It?"+"choice"] = "1"; //chips
	//nonComChoice["Crime Never Sleeps ... or Does It?"+"choice"] = "2"; //XP
	nonComChoice["Crime Never Sleeps ... or Does It?"+"choice"] = "3"; //HP
//current choice: HP farming
	nonComChoice["Crime Never Sleeps ... or Does It?"+"submitvalue"] = "Make your choice"; 

	nonComChoice["All's Quiet on the Nearby Front"+"choice"] = "1"; //pipe
	//nonComChoice["All's Quiet on the Nearby Front"+"choice"] = "2"; //XP
	//nonComChoice["All's Quiet on the Nearby Front"+"choice"] = "3"; //chips
//current choice: HP farming
	nonComChoice["All's Quiet on the Nearby Front"+"submitvalue"] = "Make your choice"; 
	
	//nonComChoice["Shall We Play A Game?"+"choice"] = "1"; //+str
	//nonComChoice["Shall We Play A Game?"+"choice"] = "2"; //+int
	nonComChoice["Shall We Play A Game?"+"choice"] = "3"; //+ref
	//nonComChoice["Shall We Play A Game?"+"choice"] = "4"; //lame fight
// farm REF
	nonComChoice["Shall We Play A Game?"+"common 4-choice"]=true;
	nonComChoice["Shall We Play A Game?"+"submitvalue"] = "Choose your form of action"; 

//these default to the correct choice, so I didn't bother coding choices
	nonComChoice["Radioactive Death from Above!"+"submitvalue"] = "Fight or flight?"; 
	nonComChoice["Cat Food or Men?"+"submitvalue"] = "Pick one"; 
	nonComChoice["Doggone It"+"submitvalue"] = "Should you stay or should you go?"; 

	//nonComChoice["Pick Yer Poison"+"choice"] = "1"; //caffeine
	nonComChoice["Pick Yer Poison"+"choice"] = "2"; //PP
	//nonComChoice["Pick Yer Poison"+"choice"] = "3"; //SFA
//uncomment the following line if you use option 3 (assuming it doesn't use time
//	nonComChoice["Pick Yer Poison"+"dwts"] = true; 
//current choice: grab the caffeine
	nonComChoice["Pick Yer Poison"+"submitvalue"] = "What do you do?"; 

	//nonComChoice["Trapped!"+"choice"] = "1"; //bricks
	//nonComChoice["Trapped!"+"choice"] = "2"; //fight
//assuming you can't fly, the following choice defaults to getting the bricks
	nonComChoice["Trapped!"+"choice"] = "3"; //no time wasted?
//if you can't fly, comment out this next line
	nonComChoice["Trapped!"+"dwts"] = true;
	nonComChoice["Trapped!"+"clfc"] = true;
//current choice: don't waste time
	nonComChoice["Trapped!"+"submitvalue"] = "Which way to run?"; 

	//nonComChoice["Gotta Move Quick"+"choice"] = "3"; //XP
	nonComChoice["Gotta Move Quick"+"choice"] = "4"; //loot
	//nonComChoice["Gotta Move Quick"+"choice"] = "5"; //unlock rooftops/nothing?
//current choice: grab the backpack
	nonComChoice["Gotta Move Quick"+"submitvalue"] = "Think Fast!" 

	//nonComChoice["That Man's Father Is My Father's Son"+"choice"] = "1"; //XP
	//nonComChoice["That Man's Father Is My Father's Son"+"choice"] = "2"; //chips
	nonComChoice["That Man's Father Is My Father's Son"+"choice"] = "3"; //don't waste time
//comment out this next line if you change the choice
	nonComChoice["That Man's Father Is My Father's Son"+"dwts"] = true;
//current choice: don't waste time on the old guy 
	nonComChoice["That Man's Father Is My Father's Son"+"submitvalue"] = "What do you do?";

	nonComChoice["Glove Slap, Baby"+"choice"] = "1"; //fight knight
	//nonComChoice["Glove Slap, Baby"+"choice"] = "2"; //cheat
	//nonComChoice["Glove Slap, Baby"+"choice"] = "3"; //run, coward, run
//current choice: fight
	nonComChoice["Glove Slap, Baby"+"submitvalue"] = "What do you do?"; 

	nonComChoice["Just Deserts"+"choice"] = "1"; //shotgun
	//nonComChoice["Just Deserts"+"choice"] = "2"; //who cares?
	//nonComChoice["Just Deserts"+"choice"] = "3"; //unlock space station
//current choice: get the gun
	nonComChoice["Just Deserts"+"submitvalue"] = "Take Action"; 

	//nonComChoice["Aio, Quantitas Magna Frumentorum Est"+"choice"] = "1"; // dunno
	nonComChoice["Aio, Quantitas Magna Frumentorum Est"+"choice"] = "2"; // XP/rep
//current choice: get the XP 
	nonComChoice["Aio, Quantitas Magna Frumentorum Est"+"submitvalue"] = "What do you do?";

//current choice: defaults to getting the villains, so no point in setting explicitly
	nonComChoice["Anonymity: Blessing or A Curse?"+"submitvalue"] = "Make your choice";
	nonComChoice["Anonymity: Blessing or A Curse?"+"dwts"] = true;

	nonComChoice["A Dilemma of the Horns"+"choice"] = "6"; // chips/rep
	//nonComChoice["A Dilemma of the Horns"+"choice"] = "7"; //item
	//nonComChoice["A Dilemma of the Horns"+"choice"] = "8"; //squat
 //current choice: get the chips and improve your rep. 
	nonComChoice["A Dilemma of the Horns"+"submitvalue"] = "What do you do?";

	///nonComChoice["Shipping Clerk"+"choice"] = "1"; //caffeine
	//nonComChoice["Shipping Clerk"+"choice"] = "2"; //money/rep
	nonComChoice["Shipping Clerk"+"choice"] = "3"; //xp
//current choice: get the XP
	nonComChoice["Shipping Clerk"+"submitvalue"] = "What do you do?"; 

	nonComChoice["Forgot to Mention the Crystal Skulls"+"choice"] = "5"; //fight - lotsa good drops and XP
	//nonComChoice["Forgot to Mention the Crystal Skulls"+"choice"] = "6"; //lustrous liquid
	//nonComChoice["Forgot to Mention the Crystal Skulls"+"choice"] = "7"; //aqua melior
//current choice - fight.. get items+chips+xp
	nonComChoice["Forgot to Mention the Crystal Skulls"+"submitvalue"] = "Make your choice"; 

	//nonComChoice["Behind Door Number Three ..."+"choice"] = "1"; //lame item 1
	//nonComChoice["Behind Door Number Three ..."+"choice"] = "2"; //lame item 2
	//nonComChoice["Behind Door Number Three ..."+"choice"] = "3"; //lame item 3
	nonComChoice["Behind Door Number Three ..."+"choice"] = "4"; //don't waste a turn here
//comment out this next line if you change the choice specified
	nonComChoice["Behind Door Number Three ..."+"dwts"] = true;
	nonComChoice["Behind Door Number Three ..."+"clfc"] = true;
//this line isn't really needed, but... it will allow sub-optimal choices to be
//   specified for this encounter.
	nonComChoice["Behind Door Number Three ..."+"common 4-choice"]=true;
	nonComChoice["Behind Door Number Three ..."+"submitvalue"] = "Go with the plan"; 

//note: for this adventure, the choice is a back-up only. the script will choose the 'fourth wall' option if it exists, and 
//		fall back on the strategy chosen here only if that option doesn't exist.
	///nonComChoice["Intermission"+"choice"] = "1"; // caffeine
	//nonComChoice["Intermission"+"choice"] = "2"; //something shitty
	nonComChoice["Intermission"+"choice"] = "3"; //XP
// current choice: get the XP if the SQUID disc isn't an option
	nonComChoice["Intermission"+"submitvalue"] = "Pick Your Exit";

//note: for this adventure, the choice is a back-up only. the script will choose the pegasus option if it exists, and 
//		fall back on the strategy chosen here only if that option doesn't exist.
	nonComChoice["Two Paths Diverged in a Prehistoric Wood"+"choice"] = "1"; // fight if the pegasus option doesn't exist
	//nonComChoice["Two Paths Diverged in a Prehistoric Wood"+"choice"] = "2"; //lame item 1
	//nonComChoice["Two Paths Diverged in a Prehistoric Wood"+"choice"] = "3"; //lame item 2
// current choice: fight the sphinx if the pegasus isn't an option
    nonComChoice["Two Paths Diverged in a Prehistoric Wood"+"submitvalue"] = "What do you do?"; 
	
    var nextButton;
    if (nonCombatName != null) {
 	var datum = document.getElementsByName('choice');
 	if(nonComChoice[nonCombatName+"dwts"])
 	    GM_setValue('turnsLeft',parseInt(GM_getValue('turnsLeft',0))+1);
 	var radiochoice = find('.//input[@type="radio" and @name="choice" and @value="'+nonComChoice[nonCombatName+"choice"]+'"]');
 	if(nonComChoice[nonCombatName+"clfc"]){
//slight change... just flagging which encounters to use the 'final option' with
  	    datum[datum.length-1].checked=true;
  	    if((datum.length<3)&&(nonComChoice[nonCombatName+"dwts"]))
 	    	GM_setValue('turnsLeft',parseInt(GM_getValue('turnsLeft',0))-1);}
//this should automatically choose a fourth choice. I hope. It works in the castle, so I'm guessing it'll work on the specials...
   	if ((datum.length>3)&&(!nonComChoice[nonCombatName+"common 4-choice"])){
	 	GM_log(" found 4-choice adventure, choosing "+datum[3].value);
	 	datum[3].checked=true;}
	 else if (radiochoice != null) {
	 	radiochoice.checked=true;}
//this following line should allow choice-non-combats that result in combat to
//	 use the same combat strategies, as it should refresh the round count 
		GM_setValue('roundNumber',-1);
		nextButton=find('.//input[@type="submit" and @value="'+nonComChoice[nonCombatName+"submitvalue"]+'"]');}
	else {
		var qqq=document.getElementsByName("pickwhich").length;
		var strategy = GM_getValue('selectedStrat','A').split(';');
		var round =(GM_getValue('roundNumber', 0)>=strategy.length?strategy.length-1:GM_getValue('roundNumber', 0));
		round=((round<0)?0:round);
		GM_log(round);
		var selectedAction = strategy[round].split(':');
		if (selectedAction[0]=='T') { 
			nextButton=find('.//input[@type="submit" and contains(@value,"Tame the Animal")]');
			if (!nextButton){
				if(selectedAction[1])
					selectedAction[0]=selectedAction[1];
				else
					selectedAction[0]='A';
				if (selectedAction.length>2)
					selectedAction[1]=selectedAction[2];}}
		if (!selectedAction[1])
			selectedAction[1] = -666;
		if (selectedAction[0]=='A') {
			nextButton=find('.//input[@type="submit" and contains(@value,"Attack")]');}
		else if (selectedAction[0]=='S') { 
			nextButton=find('.//input[@type="submit" and contains(@value,"Skill")]');
			if (!Select_Value_Set_Name('pickwhich',qqq-2,selectedAction[1])) {
				nextButton=find('.//input[@type="submit" and contains(@value,"Attack")]');}}
		else if (selectedAction[0]=='IS') { 
			var currentRound = (GM_getValue('roundNumber',0) < 0? 0:GM_getValue('roundNumber',0));
			var attacksLeft = GM_getValue('maxAttacks',0) - (currentRound);
			if (attacksLeft > 0) {
				nextButton=find('.//input[@type="submit" and contains(@value,"Skill")]');
				if (!Select_Value_Set_Name('pickwhich',qqq-2,selectedAction[1])) {
					nextButton=find('.//input[@type="submit" and contains(@value,"Attack")]');} }
				else{
						nextButton=find('.//input[@type="submit" and contains(@value,"Attack")]');}}
		else if (selectedAction[0]=='I'){
			nextButton=find('.//input[@type="submit" and contains(@value,"Item")]');
			if (!Select_Value_Set_Name('pickwhich',qqq-1,selectedAction[1])) {
				nextButton=find('.//input[@type="submit" and contains(@value,"Attack")]');}}}
	return nextButton;}


var imageTD = find('.//img[@border="3"]/..');
if (/computer-lab/.test(location.href))
	if(GM_getValue("running")){
		if(document.getElementById("decrypt")) document.getElementById("decrypt").click();
		else{
			var x=localStorage.getItem('gbt');
			window.location=x;}}
if (imageTD) {
	var victory = /Victory!/;
	var loss = / /;
	var last = find('./*[last()]',imageTD);
	var weWon = victory.exec(document.body.innerHTML);
	var advTable = document.createElement("table");
	var advRow = document.createElement("tr");
	var advCell = document.createElement("td");
	var buttontype= null;
	var displayRound = null;
	if (endOfTurn()) {
		GM_setValue('turnsLeft',GM_getValue('turnsLeft',0)-1);
		var round = GM_getValue('roundNumber',-1)+1;
		displayRound= round;
		GM_setValue('roundNumber', -1);
		if (GM_getValue('running',false)&&(GM_getValue('turnsLeft',false) > 0)){
//if you want to speed up the script... and risk upsetting Ryme, change the
// 500 in the next line. note: much shorter than this, and you'll be unlikely
// to be able to stop a run if you need to...
//also note: this next bit is for the delay between encounters of any type
			GM_setValue('delayID',setTimeout(stepToNextCombat,500));}
		else{ 
			GM_setValue('running',false);
//this next line allows the text box to never drop below 1, so that you can always
//	just click 'start' to move through one adventure at a time without fucking 
//	around with entering new values in the text field. Note that if you have stopped
//	the script from running and have a number of turns remaining, you can still use
//      the normal attack buttons  and the text box value will step down from whatever
//	value to 1, but it will never drop to zero. I could probably have accomplished 
//	this better by changing the value elsewhere, but I was in a hurry when I did 
//      this, and it works exactly how I wanted it, so I don't see much need to change.
// If you liked having to constantly type in new values if all you wanted was to
//	step through one adventure at a time, just comment out the following line.
			GM_setValue('turnsLeft',(GM_getValue('turnsLeft',0) < 2? 1:GM_getValue('turnsLeft',0)));}}
	else{
		var round = GM_getValue('roundNumber',-1)+1;
		GM_setValue('roundNumber', round);		
		displayRound= GM_getValue('roundNumber', -1);}
	if (GM_getValue('turnsLeft',false) <= 0)
		GM_setValue('running',false);
	if (GM_getValue('running',false)) 
		buttontype = '<br><input type="button" id="stop" value="Stop">';
	else 
		buttontype = '<br><input type="button" id="start" value="Click to Start">';
	var x,y,z;
	x= localStorage.getItem("thp");
	y= localStorage.getItem("lpp");
	z= localStorage.getItem("hpp");
	advCell.innerHTML=	'Battle Computer : Combat Round '
					+displayRound  
					+'<br> Adventure <input type="text" maxlength="3" id="turns" value="'
					+(GM_getValue('turnsLeft',false)?GM_getValue('turnsLeft',false):'0')+'">times. Only'
					+' adventure when HP exceeds '
					+'<input type="text" style="width:34px" maxlength="4" id="acol" value="'
					+(x?x:'100')+'"> and PP is between '
					+'<input type="text" style="width:34px" maxlength="4" id="bcol" value="'
					+(y?y:'1')+'">and '
					+'<input type="text" style="width:34px" maxlength="4" id="ccol" value="'
				       	+(z?z:'1')+'"><br>'
					+generateStratList()+'<div id="control"></div>'
					+'Mainly adventure in:<br>'
					+dll()+'<div id="control2"></div>'
					+'<input type="checkbox" id="dfdp"> Decode dataplates? <br>'
					+buttontype;
	advRow.insertBefore(advCell,null);
	advTable.insertBefore(advRow,null);
	imageTD.insertBefore(advTable,null);
	document.getElementById("dfdp").checked=GM_getValue("dfd");
	Select_Value_Set('Strat',GM_getValue('selectedStrat','I:881;I:881;I:881;T')); //Default to optimal if there is no selected strat.
	Select_Value_Set('fdl',GM_getValue('fdfl',1)); //Default to your neighborhood if there is no selected default location.
	updateAttackControls();
	if (document.getElementById("start")) 
		document.getElementById("start").addEventListener("click",rockIt,true);
	if (document.getElementById("stop")) 
		document.getElementById("stop").addEventListener("click",shutDown,true);
	if ((weWon == null)&&(GM_getValue('running',false))) 
//again, if you want to risk Ryme's wrath, you can reduce the value from 400
// to something you're more comfortable with. remember, this will make stopping
// the script mid-run (should you find a need to) to be more difficult.
//also note that the delay is for the time between page refreshes in a single encounter
		GM_setValue('delayID',setTimeout(stepToNextRound,400));}

function find(xp,location){
	if(!location)location = document;
	var temp = document.evaluate(xp, location, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null);
	return temp.singleNodeValue;}

function rockIt(){
	GM_setValue("running", true);
	var strat = document.getElementById('Strat');
	var ll = document.getElementById('fdl');
	GM_setValue('selectedStrat',strat[strat.selectedIndex].value);
	GM_setValue('fdfl',ll[ll.selectedIndex].value);
	GM_setValue('turnsLeft',document.getElementById("turns").value);
	sfb();
	GM_setValue("dfd",document.getElementById("dfdp").checked);
	GM_setValue('roundNumber',0);
	if (document.getElementById("maxAttacks")) 
		GM_setValue('maxAttacks',document.getElementById("maxAttacks").value);
	var attackButton = find('.//input[@type="submit" and contains(@value,"Attack")]');
	var a,b,c,d,e;
	localStorage.setItem("thp",document.getElementById("acol").value);
	localStorage.setItem("lpp",document.getElementById("bcol").value);
	localStorage.setItem("hpp",document.getElementById("ccol").value);
	a=parseInt(localStorage.getItem("chp"));
	b=parseInt(localStorage.getItem("thp"));
	c=parseInt(localStorage.getItem("cpp"));
	d=parseInt(localStorage.getItem("lpp"));
	e=parseInt(localStorage.getItem("hpp"));
	if((a>b)&&(c>d)&&(c<e)){
		if (endOfTurn()) stepToNextCombat();
		else stepToNextRound();}}

function shutDown(){
	GM_setValue("running", false);
	GM_setValue('roundNumber', -1);
	var strat = document.getElementById('Strat');
	if(strat)GM_setValue('selectedStrat',strat[strat.selectedIndex].value);
	if (GM_getValue('delayID')) 
		clearTimeout(GM_getValue('delayID'));}