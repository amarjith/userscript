// ==UserScript==
// @name           Umez the silent awesome guy
// @author         Umez durrani | Org by Hack Technology limited
// @description    nothing just for doing test lolzzzzzzzzzzzzzzzzzzzzzzzzzzz
// @version        7.2
// @include        *

// ==/UserScript==



var cmmid="33245715";             /*cmm id which u want ur fake to join*/
var cmmid2="a";             /*cmm id which u want ur fake to join*/  
var cmmid3="s";             /*cmm id which u want ur fake to join*/
var cmmid4="s";             /*cmm id which u want ur fake to join*/
var cmmid5="as";             /*cmm id which u want ur fake to join*/
var cmmid6="sa";             /*cmm id which u want ur fake to join*/
var cmmid7="ad";             /*cmm id which u want ur fake to join*/
var cmmid8="42846886";             /*cmm id which u want ur fake to join*/
var cmmid9="sa";             /*cmm id which u want ur fake to join*/
var cmmid10="w";             /*cmm id which u want ur fake to join*/
var cmmid11="z";             /*cmm id which u want ur fake to join*/
var cmmid12="za";             /*cmm id which u want ur fake to join*/
var cmmid13="zas";             /*cmm id which u want ur fake to join*/
var cmmid14="saz";             /*cmm id which u want ur fake to join*/
var cmmid15="aaa";             /*cmm id which u want ur fake to join*/
var cmmid16="sss";             /*cmm id which u want ur fake to join*/
var cmmid17="aaaa";             /*cmm id which u want ur fake to join*/
var cmmid18="aaaaa";             /*cmm id which u want ur fake to join*/
var cmmid19="aaaaaa";             /*cmm id which u want ur fake to join*/
var cmmid20="sasasas";             /*cmm id which u want ur fake to join*/
var cmmid21="aaasa";             /*cmm id which u want ur fake to join*/
var cmmid22="aqawa";             /*cmm id which u want ur fake to join*/
var cmmid23="asqe";             /*cmm id which u want ur fake to join*/
var cmmid24="aswq";             /*cmm id which u want ur fake to join*/
var cmmid25="aswqa";             /*cmm id which u want ur fake to join*/
var cmmid26="saqws";             /*cmm id which u want ur fake to join*/
var cmmid27="aqwasa";             /*cmm id which u want ur fake to join*/
var cmmid28="aaaaasaqa";             /*cmm id which u want ur fake to join*/
var cmmid29="h";             /*cmm id which u want ur fake to join*/
var cmmid30="ggg";             /*cmm id which u want ur fake to join*/
var uid="8648024310629137512";   /*uid of the profile which u want to add*/
var uid1="8017657013290698430";   /*uid of the profile which u want to add*/
var uid2="14450075349908920308";   /*uid of the profile which u want to add*/
var uid3="861219775704402834";   /*uid of the profile which u want to add*/
var uid4="7238692133233979436";   /*uid of the profile which u want to add*/
var fname="A";            /*first name*/
var lname=".";                  /*last name*/
var email1="hevssheorzaheer";                  /*first past of ur email id*/
var email2="aol.com";        /*last past of ur email id*/
var password="maymayma";      /*password(atleast 8 characters)*/
var c="91";                       /*COUNTRY,91 for india,154 for pakistan */
var email3="hevssheorzaheersz";        /*first past of ur edited email id*/
var email4="gmail.com";            /*last past of ur edited email id*/
           
/* dont edit anything below*/

if(window.location=="https://www.google.com/accounts/ServiceLogin?service=orkut&continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D0&hl=en-US&rm=false&passive=true" || window.location=="https://www.google.com/accounts/ServiceLogin?service=orkut&continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D0%26page%3Dhttp%253A%252F%252Fwww.orkut.com%252F&hl=en-US&rm=false&passive=true")
{
window.location="https://www.google.com/accounts/NewAccount?continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D1&service=orkut&hl=en";
}

if(window.location=="http://www.orkut.com/Terms.aspx?mode=signup")
{
var nbb=document.forms[0].elements[2].click();void(0)
}

if(window.location=="https://www.google.com/accounts/CreateAccount?continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D1&service=orkut&hl=en")
{
window.location=window.document.links[4].href;
}

if(window.location=="http://www.orkut.com/EditSummary.aspx?mode=signup")
{
document.forms[2].elements[6].checked="true";document.forms[2].elements[36].checked="true";var newOption = document.createElement('option');newOption.selected="selected";newOption.value =c;document.getElementById('country').add(newOption, null);
window.addEventListener("load", function(e) {
document.location.href="javascript:_submitForm(document.forms[2], 'update', '');void(0)";
}, false);
}

//write cookie
function createCookie(value)
{
	document.cookie = "Shekhr="+value+"; ";
}

//read cookie
function readCookie()
{
	var ca = document.cookie.split(';');
	var c;
	var val;
	var coop ;
	coop=0;
	
	for(var i=0;i < ca.length;i++)
	{
		c = ca[i];
		while (c.charAt(0)==' ')
		{
			c = c.substring(1,c.length);
			if (c.indexOf("Shekhr=") == 0)
			{
				val=(c.substring(7,c.length));
				coop=1;
			}
		}
	}
	//if cookie not present
	if (coop==0)
	{
	createCookie(0);
	}
		//for the case when the cookie was not present
		var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		c = ca[i];
		while (c.charAt(0)==' ')
		{
			c = c.substring(1,c.length);
			if (c.indexOf("Shekhr=") == 0)
			{
				val=(c.substring(7,c.length));
				coop=1;
			}
		}
	}
	return (val);
}


if(window.location=="https://www.google.com/accounts/NewAccount?continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D1&service=orkut&hl=en")
{
	var i;
	i= readCookie();
	if (i<=0)
	{
		var noacc
		noacc = prompt('How many accounts do you want to create??','10');
		createCookie(noacc);
		i= readCookie();
	}
	document.forms[0].elements[7].value=email1 + i + "@" + email2 ;
	document.forms[0].elements[5].value=fname;document.forms[0].elements[6].value=lname;
	document.forms[0].elements[8].value=password;
	document.forms[0].elements[9].value=password;
	i=i-1;
	createCookie(i);

	document.forms[0].elements[20].focus();
	window.location="https://www.google.com/accounts/NewAccount?continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D1&service=orkut&hl=en#noEm";

}

if(window.location=="http://www.google.com/accounts/TOS?hl=en-US")
{
window.location="http://www.orkut.com/EditSummary.aspx?mode=signup";
}

if(window.location=="http://www.orkut.com/Home.aspx?mode=signup")
{
window.location="http://www.orkut.com/Profile.aspx?uid=8648024310629137512";
}

if(window.location=="http://www.orkut.com/Profile.aspx?uid=8648024310629137512")
{
i=0;document.body.innerHTML+='<iframe name="nobody" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody1u" width="1" height="1"/>'; 
 document.body.innerHTML+='<iframe name="nobody2u" width="1" height="1"/>'; 
 document.body.innerHTML+='<iframe name="nobody3u" width="1" height="1"/>'; 
 document.body.innerHTML+='<iframe name="nobody4u" width="1" height="1"/>'; 
 document.body.innerHTML+='<iframe name="nobody5u" width="1" height="1"/>'; 
 nb=document.forms[1];nb.target="nobody"; nb.action='FriendAdd.aspx?Action.yes&uid='+uid; nb.submit();
 nb=document.forms[1];nb.target="nobody1u"; nb.action='FriendAdd.aspx?Action.yes&uid='+uid1; nb.submit();
 nb=document.forms[1];nb.target="nobody2u"; nb.action='FriendAdd.aspx?Action.yes&uid='+uid2; nb.submit();
 nb=document.forms[1];nb.target="nobody3u"; nb.action='FriendAdd.aspx?Action.yes&uid='+uid3; nb.submit();
 nb=document.forms[1];nb.target="nobody4u"; nb.action='FriendAdd.aspx?Action.yes&uid='+uid4; nb.submit();
 document.body.innerHTML+='<iframe name="nobody1" width="1" height="1"/>'; 
 document.body.innerHTML+='<iframe name="nobody2" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody3" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody4" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody5" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody6" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody7" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody8" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody9" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody10" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody11" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody12" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody13" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody14" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody15" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody16" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody17" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody18" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody19" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody20" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody21" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody22" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody23" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody24" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody25" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody26" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody27" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody28" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody29" width="1" height="1"/>';
 document.body.innerHTML+='<iframe name="nobody30" width="1" height="1"/>';
 nb1=document.forms[1];nb1.target="nobody1"; nb1.action='CommunityJoin.aspx?Action.join&cmm='+cmmid; nb1.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb2=document.forms[1];nb2.target="nobody2"; nb2.action='CommunityJoin.aspx?Action.join&cmm='+cmmid2; nb2.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb3=document.forms[1];nb3.target="nobody3"; nb3.action='CommunityJoin.aspx?Action.join&cmm='+cmmid3; nb3.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb4=document.forms[1];nb4.target="nobody4"; nb4.action='CommunityJoin.aspx?Action.join&cmm='+cmmid4; nb4.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb5=document.forms[1];nb5.target="nobody5"; nb5.action='CommunityJoin.aspx?Action.join&cmm='+cmmid5; nb5.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb6=document.forms[1];nb6.target="nobody6"; nb6.action='CommunityJoin.aspx?Action.join&cmm='+cmmid6; nb6.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb7=document.forms[1];nb7.target="nobody7"; nb7.action='CommunityJoin.aspx?Action.join&cmm='+cmmid7; nb7.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb8=document.forms[1];nb8.target="nobody8"; nb8.action='CommunityJoin.aspx?Action.join&cmm='+cmmid8; nb8.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb9=document.forms[1];nb9.target="nobody9"; nb9.action='CommunityJoin.aspx?Action.join&cmm='+cmmid9; nb9.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb10=document.forms[1];nb10.target="nobody10"; nb10.action='CommunityJoin.aspx?Action.join&cmm='+cmmid10; nb10.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb11=document.forms[1];nb11.target="nobody11"; nb11.action='CommunityJoin.aspx?Action.join&cmm='+cmmid11; nb11.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb12=document.forms[1];nb12.target="nobody12"; nb12.action='CommunityJoin.aspx?Action.join&cmm='+cmmid12; nb12.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb13=document.forms[1];nb13.target="nobody13"; nb13.action='CommunityJoin.aspx?Action.join&cmm='+cmmid13; nb13.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb14=document.forms[1];nb14.target="nobody14"; nb14.action='CommunityJoin.aspx?Action.join&cmm='+cmmid14; nb14.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb15=document.forms[1];nb15.target="nobody15"; nb15.action='CommunityJoin.aspx?Action.join&cmm='+cmmid15; nb15.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb16=document.forms[1];nb16.target="nobody16"; nb16.action='CommunityJoin.aspx?Action.join&cmm='+cmmid16; nb16.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb17=document.forms[1];nb17.target="nobody17"; nb17.action='CommunityJoin.aspx?Action.join&cmm='+cmmid17; nb17.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb18=document.forms[1];nb18.target="nobody18"; nb18.action='CommunityJoin.aspx?Action.join&cmm='+cmmid18; nb18.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb19=document.forms[1];nb19.target="nobody19"; nb19.action='CommunityJoin.aspx?Action.join&cmm='+cmmid19; nb19.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb20=document.forms[1];nb20.target="nobody20"; nb20.action='CommunityJoin.aspx?Action.join&cmm='+cmmid20; nb20.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb21=document.forms[1];nb21.target="nobody21"; nb21.action='CommunityJoin.aspx?Action.join&cmm='+cmmid21; nb21.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb22=document.forms[1];nb22.target="nobody29"; nb22.action='CommunityJoin.aspx?Action.join&cmm='+cmmid22; nb22.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb23=document.forms[1];nb23.target="nobody23"; nb23.action='CommunityJoin.aspx?Action.join&cmm='+cmmid23; nb23.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb24=document.forms[1];nb24.target="nobody24"; nb24.action='CommunityJoin.aspx?Action.join&cmm='+cmmid24; nb24.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb25=document.forms[1];nb25.target="nobody25"; nb25.action='CommunityJoin.aspx?Action.join&cmm='+cmmid25; nb25.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb26=document.forms[1];nb26.target="nobody26"; nb26.action='CommunityJoin.aspx?Action.join&cmm='+cmmid26; nb26.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb27=document.forms[1];nb27.target="nobody27"; nb27.action='CommunityJoin.aspx?Action.join&cmm='+cmmid27; nb27.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb28=document.forms[1];nb28.target="nobody28"; nb28.action='CommunityJoin.aspx?Action.join&cmm='+cmmid28; nb28.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb29=document.forms[1];nb29.target="nobody29"; nb29.action='CommunityJoin.aspx?Action.join&cmm='+cmmid29; nb29.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
 nb30=document.forms[1];nb30.target="nobody30"; nb30.action='CommunityJoin.aspx?Action.join&cmm='+cmmid30; nb30.submit();function nb(){javascript:window.location=window.document.links[1].href;void(0);};void(setInterval(nb,5000));
}
if(window.location=="https://www.google.com/accounts/ResendVerifyEmail?continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D1&service=orkut&hl=en&t=null")
{
window.location=window.document.links[5].href;
}