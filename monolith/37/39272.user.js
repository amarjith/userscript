// ==UserScript==
// @name           3.0 sekire afs100
// @author         KomorniG
// @description    Travian Auto-Farm Script
// @include        http://*.travian.*
// @exclude        http://*.travian.*/
// @exclude        http://*.travian.*/login.php
// @exclude        http://forum.travian.*
// @email          komigabor@gmail.com
// @version        2.0 GOLD
// ==/UserScript==

var eigenCoords;
if(false)
{
//names can differ per race and server


troepen = new Array();

	
};


function getNumber(tekst)
{
	var terug;
	//alert(tekst.indexOf("'")+1+"      "+tekst.lastIndexOf("'"));
	if((tekst.indexOf("=")+1 ) == 0 &&  tekst.lastIndexOf(";") == -1)
	{
		return 0;
	}else
	{
		return tekst.substring(tekst.indexOf("=")+1, tekst.indexOf(";"));
	}
};


function Random(minimum, maximum)
{	
	if(minimum == null && maximum == null )
	{
		minimum = 1000;
		maximum = 10000;
	}
	return Math.random()*(maximum-minimum+1);
		
};

function sendtroops() {
	var tekst = document.URL;
	tekst = tekst.substring(tekst.indexOf("://")+3, tekst.lastIndexOf("/") );
	var aantal = GM_getValue("teller"+tekst,0);
	var pagina = document.getElementById("lmid2").innerHTML;	
	if(pagina.indexOf("There isn't a Village on these coĂ¶rdinates.") > -1)
	{
		setTimeout( 'window.location.replace( "a2b.php")', Random(1000, 5000));
	}else{
	if( pagina.indexOf("kid") > -1)
	{
		var e = document.getElementsByTagName('form');
		e[0].submit();

	}else{
		var code = document.getElementById('lmid2').innerHTML;
		//alert (code.substr(code.lastIndexOf("t1.value"), 20));
		var type1 = getNumber(code.substr(code.lastIndexOf("t1.value"), 20));
		var type2 = getNumber(code.substr(code.lastIndexOf("t2.value"), 20));
		var type3 = getNumber(code.substr(code.lastIndexOf("t3.value"), 20));
		var type4 = getNumber(code.substr(code.lastIndexOf("t4.value"), 20));
		var type5 = getNumber(code.substr(code.lastIndexOf("t5.value"), 20));
		var type6 = getNumber(code.substr(code.lastIndexOf("t6.value"), 20));
		var type7 = getNumber(code.substr(code.lastIndexOf("t7.value"), 20));
		var type8 = getNumber(code.substr(code.lastIndexOf("t8.value"), 20));
		var type9 = getNumber(code.substr(code.lastIndexOf("t9.value"), 20));
		var type10 = getNumber(code.substr(code.lastIndexOf("t10.value"), 20));
		//alert(type1+","+type2+","+type3+","+type4+","+type5+","+type6+","+type7+","+type8+","+type9+","+type10);
		
		intevullen = new Array();
		//alert("fermos"+tekst+''+getEigen());
		intevullen = GM_getValue("fermos"+tekst+''+getEigen(),"").split("\n");
		//alert(GM_getValue("fermos"+tekst+''+getEigen(),""));
		if(intevullen == "")	{
			veranderDorp();
		}else{
		
		
			if(aantal < intevullen.length-1)
			{
				aantal = aantal+1;
			}else
			{
				aantal = 1;
			}
			
			//alert(aantal);
			
			intevullen[aantal] = intevullen[aantal].split("|");
			intevullen[aantal][0] = intevullen[aantal][0].split(",");
			intevullen[aantal][1] = intevullen[aantal][1].split(","); 		
			//alert(type1+","+type2+","+type3+","+type4+","+type5+","+type6+","+type7+","+type8+","+type9+","+type10);
			if(		parseInt(intevullen[aantal][1][0]) > parseInt(type1) ||
					parseInt(intevullen[aantal][1][1]) > parseInt(type2) ||
					parseInt(intevullen[aantal][1][2]) > parseInt(type3) ||
					parseInt(intevullen[aantal][1][3]) > parseInt(type4) ||
					parseInt(intevullen[aantal][1][4]) > parseInt(type5) ||
					parseInt(intevullen[aantal][1][5]) > parseInt(type6) ||
					parseInt(intevullen[aantal][1][6]) > parseInt(type7) ||
					parseInt(intevullen[aantal][1][7]) > parseInt(type8) ||
					parseInt(intevullen[aantal][1][8]) > parseInt(type9) ||
					parseInt(intevullen[aantal][1][9]) > parseInt(type10) )
			{
				//alert ("Not enough troops!");
				/*alert(type1+","+type2+","+type3+","+type4+","+type5+","+type6+","+type7+","+type8+","+type9+","+type10);
				alert(intevullen[aantal][1][0]+","+intevullen[aantal][1][1]+","+intevullen[aantal][1][2]+","+intevullen[aantal][1][3]+","+intevullen[aantal][1][4]+","+intevullen[aantal][1][5]+","+intevullen[aantal][1][6]+","+intevullen[aantal][1][7]+","+intevullen[aantal][1][8]+","+intevullen[aantal][1][9]);*/
				if (aantal < intevullen.length-1) {
					aantal++;
					GM_setValue("teller"+tekst,aantal);
					sendtroops();
				} else {
					veranderDorp();
				}
			}else{
				
				//alert ("vul in");
				

				
				document.forms.namedItem("snd").elements.namedItem('t1').value= intevullen[aantal][1][0];
				document.forms.namedItem("snd").elements.namedItem('t2').value= intevullen[aantal][1][1];
				document.forms.namedItem("snd").elements.namedItem('t3').value= intevullen[aantal][1][2];
				document.forms.namedItem("snd").elements.namedItem('t4').value= intevullen[aantal][1][3];
				document.forms.namedItem("snd").elements.namedItem('t5').value= intevullen[aantal][1][4];
				document.forms.namedItem("snd").elements.namedItem('t6').value= intevullen[aantal][1][5];
				document.forms.namedItem("snd").elements.namedItem('t7').value= intevullen[aantal][1][6];
				document.forms.namedItem("snd").elements.namedItem('t8').value= intevullen[aantal][1][7];
				document.forms.namedItem("snd").elements.namedItem('t9').value= intevullen[aantal][1][8];
				document.forms.namedItem("snd").elements.namedItem('t10').value= intevullen[aantal][1][9];
				//held  document.forms.namedItem("snd").elements.namedItem('t1').value= "10";
				
				document.forms.namedItem("snd").elements.namedItem('c').value = 3;
				document.forms.namedItem("snd").elements.namedItem('x').value = intevullen[aantal][0][0];
				document.forms.namedItem("snd").elements.namedItem('y').value = intevullen[aantal][0][1];
				GM_setValue("teller"+tekst,aantal);
				document.forms.namedItem("snd").submit();
				//	document.namedItem("s1").submit();
			}
		}
	}
	}
};


function veranderDorp()
{

	var teller = 0 ;
	var linklijst = new Array();
	var doel;
	var plaats;
	dorplink = document.getElementById("lright1").innerHTML;
	//alert (dorplink);
	while(dorplink.indexOf("?newdid=") != -1)
	{
		linklijst[teller] = dorplink.substr(dorplink.indexOf("?newdid=")+8,8);
		linklijst[teller] = linklijst[teller].substring(0,linklijst[teller].indexOf("\""));
		teller++;
		dorplink = dorplink.substr(dorplink.indexOf("?newdid=")+15);
	}
	plaats = Math.round(Random(0, teller-1 )-0.5);
	//alert (plaats);
	doel = linklijst[plaats];
	//alert (doel);
	//window.location.replace( "a2b.php?newdid="+doel+"");
	setTimeout( 'window.location.replace( "a2b.php?newdid='+doel+'")', Random(1500, 5000));
	//alert (dorplink);
	//stringObject.substr(start,length)
	
};

function getEigen() {
	/*if (document.getElementById('lright1')) {
		var code = document.getElementById('lright1').innerHTML;
		code = code.substring(code.indexOf("class=\"active_vl\"")+1);
		//alert (code.substr(code.indexOf(">("),code.indexOf("center dlist2")));
		var x = code.substring(code.indexOf(">(")+2, code.indexOf("center dlist2")-17);
		var y = code.substring(code.indexOf("left dlist3")+13, code.indexOf(")"));;
		return (x+y);
	}
	else {
	*/
		var x = -94;
		var y = 185;
	//}
	return (x+"|"+y); 
};

function voegToe() {
	var code = document.getElementById('lmid2').innerHTML;
	var x = code.substring(code.indexOf("(")+1,code.indexOf("|"));
	var y = code.substring(code.indexOf("|")+1,code.indexOf(")"));
	var dorpnaam = code.substring(code.indexOf("<h1>")+21,code.indexOf("</div>"));
	var conf = confirm("Légiós? (10)");
	if (conf) {
		addList(x+","+y+"|0,0,100,0,0,0,0,0,0,0|"+dorpnaam);
	} else {
		addList(x+","+y+"|0,0,0,0,0,0,0,0,0,0|"+dorpnaam);
	}
	alert('Added: '+dorpnaam+" ("+x+"|"+y+")\nFarm whit 100 " + ((conf) ? "legionari" : "axes"));
};

function addList(add) {
	var tekst = document.URL;
	tekst = tekst.substring(tekst.indexOf("://")+3, tekst.lastIndexOf("/") );
	var tekst = tekst+''+getEigen();
	var doel = GM_getValue("fermos"+tekst,"");
	//var doel = readList();
	doel = doel+"\n"+add;
	//alert(doel);
	GM_setValue("fermos"+tekst,doel);

};

function readList() {
	var tekst = document.URL;
	tekst = tekst.substring(tekst.indexOf("://")+3, tekst.lastIndexOf("/") );
	var tekst = tekst+''+getEigen();
	var doel = GM_getValue("fermos"+tekst,"");
	alert(doel);
	return doel;

};


function addForm() {
	
	var addButton = document.createElement('a');
	addButton.href = 'javascript:void(0)';
	addButton.innerHTML = "» Add to AutoFarm";
	addButton.addEventListener('click',voegToe,true);
	
	var cont = document.getElementById("lmid2");	

	var tbody = cont.getElementsByTagName("tbody")[2];
	var row = document.createElement("TR");
	var cell1 = document.createElement("TD");
	cell1.appendChild(addButton);
	row.appendChild(cell1);
	tbody.appendChild(row);

};

function geefOverzicht() {

	//Button for removing farm
	var addButton = document.createElement('a');
	addButton.href = 'javascript:void(0)';
	addButton.addEventListener('click',removeFarm,true);
	var img = document.createElement('img');
	img.addEventListener('click',removeFarm,true);
	img.src = 'http://'+document.domain+'/img/un/a/del.gif';
	img.setAttribute('height','12'); img.setAttribute('width','12');	img.style.height = '12px';img.style.width = '12px';
	addButton.appendChild(img);

	//button ON or OFF
	var onoffButton = document.createElement('a');
	onoffButton.href = 'javascript:void(0)';
	if(GM_getValue("valaan"+document.domain,0) == 0)	onoffButton.innerHTML = "AutoFarm is [OFF]";	//http://s3.travian.lt/img/un/a/del.gif
	else onoffButton.innerHTML = "AutoFarm is [ON]";
	onoffButton.addEventListener('click',startenstop,true);
	
	var tekst = document.domain+''+getEigen();
	var doel = GM_getValue("fermos"+tekst,"");
	var farms = new Array;
	farms = doel.split("\n");
	
	var cont = document.getElementById("lmid2");	

	var table = cont.getElementsByTagName("table")[0];
	
	var ntable = document.createElement("table");
	ntable.className = "tbg";
	ntable.setAttribute('cellpadding', 2);	//cellpadding="2"
	ntable.setAttribute('cellspacing', 1);	//cellspacing="1"
	ntable.style.marginBottom = "14px";
	
	var ntbody = document.createElement("tbody");
	ntable.appendChild(ntbody);
	
	var ntr = document.createElement("tr");
	ntr.className = "cbg1";
	
	var ntd = document.createElement("td");
	ntd.width = "20%";
	ntd.appendChild(onoffButton);
	
	var ntd1 = document.createElement("td");
	ntd1.width = "20%";
	ntd1.setAttribute('colspan', 10);
	ntd1.innerHTML = "<span class='c0'><a href='http://userscripts.org/scripts/source/25482.user.js'>Update AutoFarm script</a></span>";
	
	ntr.appendChild(ntd);
	ntr.appendChild(ntd1);
	ntbody.appendChild(ntr);
	
	if (farms.length > 0) {
		for (b=1;b<farms.length;b++) {
			var ntr = document.createElement("tr");
			ntr.className = "unit";
			
			//alert(farms[b].split("|")[2]);
		
			var ntd = document.createElement("td");
			ntd.classname = 'r7';
			ntd.appendChild(addButton);
			//Vilage
			ntd.addEventListener('click',removeFarm,true);
			ntd.innerHTML += farms[b].split("|")[2]+' ('+(farms[b].split("|")[0]).replace(',','|')+')';
			ntr.appendChild(ntd);
			
			for (i=0;i<=9;i++) {
				var ntd = document.createElement("td");
				var troops = farms[b].split("|")[1];
				if (farms.length > 1) {
					troops = troops.split(',');
					ntd.innerHTML = parseInt(troops[i]);
				}
				ntr.appendChild(ntd);
			}
			
			ntbody.appendChild(ntr);
		}
	}
	
	cont.insertBefore(ntable,table);
	
};

function removeFarm() {
	var tekst = document.URL;
	tekst = tekst.substring(tekst.indexOf("://")+3, tekst.lastIndexOf("/") );
	GM_setValue("fermos"+tekst+getEigen(),'');
	GM_setValue("valaan"+tekst,0);
	alert('List cleared! And autofarm Turned OFF');
	window.location.reload();
	//return;
};

function startenstop() {
	var tekst = document.URL;
	tekst = tekst.substring(tekst.indexOf("://")+3, tekst.lastIndexOf("/") );

	if(GM_getValue("valaan"+tekst,0) == 0) {
		GM_setValue("valaan"+tekst,1);
		//alert("start");
	}else{
		GM_setValue("valaan"+tekst,0);
		//alert("stop");
	}
	window.location.reload(); 
	
};


function valAan()
{
	var tekst = document.URL;
	tekst = tekst.substring(tekst.indexOf("://")+3, tekst.lastIndexOf("/") );
	
	if(GM_getValue("valaan"+tekst,0) == 1)
	{
	
		var addButton = document.createElement('div');
 		addButton.innerHTML = "Script running<br>press here to stop!";
	
		addButton.addEventListener('click',startenstop,true);
 		addButton.style.position = "absolute";

 		addButton.style.zIndex = "999";
 		addButton.style.width = "200px";
 		addButton.style.height = "50px";
		addButton.style.top = "250px";
		addButton.style.left = "500px";
	 	addButton.style.background = "#000000";
		addButton.style.color = "#FFFFFF";
		addButton.style.opacity = 0.8;
		addButton.style.cursor = "pointer";
		//addButton.filters.alpha.opacity = 60;
		
		var backgroundUnEditable = document.createElement('div');
    backgroundUnEditable.style.position = "absolute";
    backgroundUnEditable.style.top = "0px";
    backgroundUnEditable.style.left = "0px";
		backgroundUnEditable.style.zIndex = "998";
    backgroundUnEditable.style.width = "100%";
    backgroundUnEditable.style.height = "100%";
    backgroundUnEditable.style.background = "#ffffff";
    backgroundUnEditable.style.opacity = 0.5;

		document.body.appendChild(backgroundUnEditable);
		document.body.appendChild(addButton);

		
		var url = document.URL;
		url = url.substring(url.lastIndexOf("/")+1);
		
		switch(url)
		{
				case "a2b.php":
				setTimeout( sendtroops, Random());
	 				 break;
				default:
					 setTimeout( 'window.location.replace( "a2b.php" )', Random());
	
		}

		
	}
	//else GM_addStyle("body { color:red; }");
	
};


function hoofdfunctie() {
	tekst = document.body.innerHTML; // In case 'Unable to load site' is showed, try to Refresh the page.
	if(tekst.indexOf(" <!-- ERROR ITEM CONTAINER") != -1)
	{
		window.location.reload();
	}

	getEigen()
	var url = document.URL;
	url = url.substring(url.lastIndexOf("/")+1);
	//alert (url);
	switch(url)
	{
	case "build.php?id=39" :
	 	geefOverzicht();  
	default:
		valAan();
	  break;
	}
	if (url.indexOf('karte.php?d=') > -1) {
	addForm();
	}
};



window.addEventListener('DOMContentLoaded', hoofdfunctie, false);
if (document.body) hoofdfunctie();