// ==UserScript==
// @name           tribalwars--Browse--forum
// @version        1.3
// @namespace      EnigmaBrand
// @description    ????? ???? ?? ??????? ?????? ?? ?????
// @include        http://ae1.tribalwars.ae/*
// @exclude        http://ae1.tribalwars.ae/forum.php*
// ==/UserScript==
// ===========================================================================

//
// 
//

var version="100%";
var displayedflag = 0;

unsafeWindow.displaywiki = function() {
	if(displayedflag == 0) {
		document.getElementById("wikiframe").innerHTML = '<iframe width="764" border="0" frameborder="0" height="100%" src="http://ae1.tribalwars.ae/forum.php" style="margin-left:26px;"></iframe>';
		displayedflag = 1;
	}
}

unsafeWindow.showwiki = function() {
	if(document.getElementById("wikibar").style.left == "-802px")
	{
		document.getElementById("wikibar").style.left = "0px;"
	}
	document.getElementById("wikibar").style.left = "0px;"
}

unsafeWindow.hidewiki = function() {
	document.getElementById("wikibar").style.left = "-802px;"
}

vwikibar = document.createElement("div");
vwikibar.setAttribute("id", "wikibar");

var body = document.getElementsByTagName("body");

body[0].appendChild(vwikibar);


var wkHTML = '<div id="wikitab" onmouseover="showwiki()" onclick="hidewiki()"><a style="height:100%;width:100%;"></a></div>'
	+ '<div style="color:#542C0F;line-height: 35px; font-size: 12px; font-weight: bold;width:800px;position:absolute;top:0px;left:0px;height:30px;background:url(ttp://ae1.tribalwars.ae/graphic/background/content.jpg);background-repeat:no-repeat;">'
	+ '<a style="border-bottom:1px #542C0F dotted; color: #542C0F;" href="http://do7an.ucoz.com">do7an.ucoz.com'+version+'</a></div>'
	+ '<div id="wikiframe" style="position:absolute;top:30px;bottom:3px;left:4px;" onmouseover="displaywiki()">Mouse over this area to load the wiki</div>'
	+ '<div style="width:800px;position:absolute;bottom:0px;left:0px;height:3px;background:url(ttp://ae1.tribalwars.ae/graphic/background/content.jpg);background-repeat:no-repeat;"></div>';

GM_addStyle("#wikibar { background:url(http://ae1.tribalwars.ae/graphic/background/content.jpg); padding-top:33px; width:800px; position:fixed; left:-802px; top:15px; bottom:50px; border:1px black solid; z-index:50;");
GM_addStyle("#wikibar:hover { left:0px; }");
GM_addStyle("#wikitab { background:url(http://www6.0zz0.com/2010/05/11/18/866220401.jpg); width:17px; height:102px; position:absolute; right:-17px; top:0px; } ");
GM_addStyle("#wikitab:hover { cursor: pointer; } ");

document.getElementById("wikibar").innerHTML = wkHTML;

///// End of script /////