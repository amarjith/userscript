// ==UserScript==
// @name        Synchtube Emotes
// @namespace   http://userscripts.org/scripts/show/139541
// @include     http://www.synchtube.com/r/vidya4chan
// @version     1.11
// @run-at      document-start
// @updateURL   http://userscripts.org/scripts/source/139541.user.js
// @downloadURL http://userscripts.org/scripts/source/139541.user.js
// ==/UserScript==

(function(){
document.addEventListener("DOMContentLoaded", function(){
	var facecodes={':Ducktart:': '<img src="http://4n0nym0us.org/dooktart.png" width="44" height="45">',
':ducktart:': '<img src="http://4n0nym0us.org/dooktart.png" width="44" height="45">',
':ready:': '<img src="http://4n0nym0us.org/ready.gif" width="43" height="59">',
':usa:': '<img src="http://i.imgur.com/tSXNh.gif" width="60" height="42">',
':birry:': '<img src="http://4n0nym0us.org/ztop.gif" width="33" height="53">',
':dog:': '<img src="http://4n0nym0us.org/cat.gif" width="35" height="43">',
'=/': '<img src="http://4n0nym0us.org/gp.png" width="25" height="25">',
':gaben:': '<img src="http://4n0nym0us.org/zgabe.gif" width="43" height="54">',
':3:': '<img src="http://4n0nym0us.org/seal.png" width="35" height="36">',
':burd:': '<img src="http://4n0nym0us.org/birdy.gif" width="35" height="36">',
':snoop:': '<img src="http://4n0nym0us.org/snoop.gif" width="23" height="50">',
':jimmies:': '<img src="http://4n0nym0us.org/jimmy.gif" width="35" height="38">',
':sanic:': '<img src="http://4n0nym0us.org/sonicx.png" width="50" height="45">',
':burgirl:': '<img src="http://4n0nym0us.org/ss.gif" widt	width="55" height="49">',
':dilbert:': '<img src="http://4n0nym0us.org/dilbert.gif" width="56" height="55">',
':loading:': '<img src="http://i.imgur.com/LpBOu.gif" width="53" height="54">',
':deepdarkfantasy:': '<img src="http://4n0nym0us.org/fantasy.gif" width="33" height="53">',	
':bioware:': '<img src="http://4n0nym0us.org/biogurl.gif" width="41" height="48">',	
':shazbot:': '<img src="http://4n0nym0us.org/33.png" width="41" height="48">',	
':reddit:': '<img src="http://i.imgur.com/wKaFk.png" width="80" height="16">',	
':bestkorea:': '<img src="http://4n0nym0us.org/kim.gif" width="43" height="54">',						
':assntitties:': '<img src="http://i.imgur.com/CALcK.png" width="38" height="42">',				
':hitoame:': '<img src="http://4n0nym0us.org/shower.gif" width="55" height="50">',
':penis:': '<img src="http://i.imgur.com/VorSn.gif" width="50" height="58">',
':duane:': '<img src="http://4n0nym0us.org/duane.gif" width="70" height="47">',
':plzgo:': '<img src="http://vidya4chan.com/hoho.png" width="46" height="55">',
':keke:': '<img src="http://4n0nym0us.org/keke6.png" width="43" height="44">',
':uncle:': '<img src="http://4n0nym0us.org/VffoS.jpg" width="44" height="52">',
':reshiram:': '<img src="http://4n0nym0us.org/ee.gif" width="44" height="50">',
':push:': '<img src="http://4n0nym0us.org/push.gif" width="43" height="49">',
':autism:': '<img src="http://4n0nym0us.org/a.gif" width="43" height="49">',
':juggalo:': '<img src="http://4n0nym0us.org/ll.gif" width="43" height="49">',
':stanza:': '<img src="http://4n0nym0us.org/heh.png" width="41" height="58">',
':bestgames:': '<img src="http://4n0nym0us.org/pstriple.png" width="48" height="54">',
':gamestop:': '<img src="http://4n0nym0us.org/spekettle.gif" width="65" height="33">',
':o:': '<img src="http://4n0nym0us.org/oz.gif" width="34" height="34">',
':fothegrove:': '<img src="http://4n0nym0us.org/grove.gif" width="34" height="34">',
':aliens:': '<img src="http://4n0nym0us.org/aliens.gif" width="50" height="57">',
':go:': '<img src="http://4n0nym0us.org/zgo.gif" width="50" height="38">',
':pomf:': '<img src="http://4n0nym0us.org/pomf.png" width="41" height="46">',
':kreayshawn:': '<img src="http://4n0nym0us.org/kray.png" width="41" height="51">',
':bodywash:': '<img src="http://4n0nym0us.org/bodywash.png" width="41" height="51">',
':goblinu:': '<img src="http://4n0nym0us.org/zgobz.jpg" width="55" height="38">',
':nogaems:': '<img src="http://vidya4chan.com/nogames.gif" width="47" height="57">',
':feel:': '<img src="http://4n0nym0us.org/1ducktart.jpg" width="40" height="37">',
':alien:': '<img src="http://4n0nym0us.org/ssd.gif" width="40" height="60">',
':2spooky4me:': '<img src="http://4n0nym0us.org/spooky.gif" width="80" height="20">',
':2spooky:': '<img src="http://4n0nym0us.org/spooky.gif" width="80" height="20">',
':gooby:': '<img src="http://4n0nym0us.org/o2XNE.jpg" width="55" height="54">',
':dosh:': '<img src="http://4n0nym0us.org/dsdasd.png" width="50" height="58">',
':8bitdose:': '<img src="http://4n0nym0us.org/wee2.gif" width="46" height="42">',
':costanza:': '<img src="http://4n0nym0us.org/heh.png" width="41" height="58">',

':white:' : '<span style="color:white">', 
':black:' : '<span style="color:black">',
':tomato:' : '<span style="color:tomato">',
':yellow:' : '<span style="color:yellow">',
':blue:' : '<span style="color:blue">',
':darkblue:' : '<span style="color:darkblue">',
':cyan:' : '<span style="color:cyan">',
':red:' : '<span style="color:red">',
':green:' : '<span style="color:green">',
':darkgreen:' : '<span style="color:darkgreen">',
':violet:' : '<span style="color:violet">',
':purple:' : '<span style="color:purple">',
':orange:' : '<span style="color:orange">',
':blueviolet:' : '<span style="color:blueviolet">',
':brown:' : '<span style="color:brown">',
':deeppink:' : '<span style="color:deeppink">',
':aqua:' : '<span style="color:aqua">',
':indigo:' : '<span style="color:indigo">',
':orange:' : '<span style="color:orange">',
':pink:' : '<span style="color:pink">',
':chocolate:' : '<span style="color:chocolate">',
':yellowgreen:' : '<span style="color:yellowgreen">',
':steelblue:' : '<span style="color:steelblue">',
':silver:' : '<span style="color:silver">',
':tan:' : '<span style="color:tan">',
':royalblue:' : '<span style="color:royalblue">'
}

		var id= document.getElementById("chat_list");
		var chatstring;
		id.addEventListener("DOMNodeInserted", function(event){
			var element = event.target;
			if(element.innerHTML){
				chatstring=element.innerHTML;
				for(var emotes in facecodes){
					var regexps=new RegExp(emotes,'g');
					chatstring = chatstring.replace(regexps,facecodes[emotes]);
				}
				element.innerHTML=chatstring;
			}
		});
}, false);
})();