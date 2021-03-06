// ==UserScript==
// @name           SharePoint Feature Admin Enhancement Suite
// @namespace      pzl.com
// @version        3.0
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @include        */_layouts/ManageFeatures.aspx*
// @include        */_layouts/15/ManageFeatures.aspx*
// ==/UserScript==


/*
 * jQuery Address Plugin v1.5
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2011-12-01 10:57:56 +0200 (Thu, 01 Dec 2011)
 */
(function(c){c.address=function(){var q=function(a){c(c.address).trigger(c.extend(c.Event(a),function(){for(var b={},e=c.address.parameterNames(),l=0,p=e.length;l<p;l++)b[e[l]]=c.address.parameter(e[l]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:e,parameters:b,queryString:c.address.queryString()}}.call(c.address)))},s=function(a){return Array.prototype.slice.call(a)},g=function(){c().bind.apply(c(c.address),Array.prototype.slice.call(arguments));
return c.address},F=function(){return y.pushState&&d.state!==j},U=function(){return("/"+h.pathname.replace(new RegExp(d.state),"")+h.search+(G()?"#"+G():"")).replace(T,"/")},G=function(){var a=h.href.indexOf("#");return a!=-1?w(h.href.substr(a+1),m):""},t=function(){return F()?U():G()},V=function(){return"javascript"},M=function(a){a=a.toString();return(d.strict&&a.substr(0,1)!="/"?"/":"")+a},w=function(a,b){if(d.crawlable&&b)return(a!==""?"!":"")+a;return a.replace(/^\!/,"")},u=function(a,b){return parseInt(a.css(b),
10)},C=function(){if(!H){var a=t();if(f!=a)if(z&&A<7)h.reload();else{z&&!I&&d.history&&r(N,50);f=a;B(m)}}},B=function(a){q(W);q(a?X:Y);r(fa,10)},fa=function(){if(d.tracker!=="null"&&d.tracker!==null){var a=c.isFunction(d.tracker)?d.tracker:i[d.tracker],b=(h.pathname+h.search+(c.address&&!F()?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");if(c.isFunction(a))a(b);else if(c.isFunction(i.urchinTracker))i.urchinTracker(b);else if(i.pageTracker!==j&&c.isFunction(i.pageTracker._trackPageview))i.pageTracker._trackPageview(b);
else i._gaq!==j&&c.isFunction(i._gaq.push)&&i._gaq.push(["_trackPageview",decodeURI(b)])}},N=function(){var a=V()+":"+m+";document.open();document.writeln('<html><head><title>"+n.title.replace(/\'/g,"\\'")+"</title><script>var "+x+' = "'+t()+(n.domain!=h.hostname?'";document.domain="'+n.domain:"")+"\";<\/script></head></html>');document.close();";if(A<7)k.src=a;else k.contentWindow.location.replace(a)},$=function(){if(D&&Z!=-1){var a,b,e=D.substr(Z+1).split("&");for(a=0;a<e.length;a++){b=e[a].split("=");
if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(b[0]))d[b[0]]=isNaN(b[1])?/^(true|yes)$/i.test(b[1]):parseInt(b[1],10)!==0;if(/^(state|tracker)$/.test(b[0]))d[b[0]]=b[1]}D=null}f=t()},ba=function(){if(!aa){aa=o;$();var a=function(){ga.call(this);ha.call(this)},b=c("body").ajaxComplete(a);a();if(d.wrap){c("body > *").wrapAll('<div style="padding:'+(u(b,"marginTop")+u(b,"paddingTop"))+"px "+(u(b,"marginRight")+u(b,"paddingRight"))+"px "+(u(b,"marginBottom")+u(b,"paddingBottom"))+"px "+(u(b,"marginLeft")+
u(b,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+x+'" style="height:100%;overflow:auto;position:relative;'+(J&&!window.statusbar.visible?"resize:both;":"")+'" />');c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});J&&c('<style type="text/css" />').appendTo("head").text("#"+x+"::-webkit-resizer { background-color: #fff; }")}if(z&&!I){a=n.getElementsByTagName("frameset")[0];k=n.createElement((a?"":"i")+"frame");k.src=V()+":"+m;if(a){a.insertAdjacentElement("beforeEnd",
k);a[a.cols?"cols":"rows"]+=",0";k.noResize=o;k.frameBorder=k.frameSpacing=0}else{k.style.display="none";k.style.width=k.style.height=0;k.tabIndex=-1;n.body.insertAdjacentElement("afterBegin",k)}r(function(){c(k).bind("load",function(){var e=k.contentWindow;f=e[x]!==j?e[x]:"";if(f!=t()){B(m);h.hash=w(f,o)}});k.contentWindow[x]===j&&N()},50)}r(function(){q("init");B(m)},1);if(!F())if(I)if(i.addEventListener)i.addEventListener(E,C,m);else i.attachEvent&&i.attachEvent("on"+E,C);else ia(C,50)}},ga=function(){var a,
b=c("a"),e=b.size(),l=-1,p=function(){if(++l!=e){a=c(b.get(l));a.is('[rel*="address:"]')&&a.address('[rel*="address:"]');r(p,1)}};r(p,1)},ha=function(){if(d.crawlable){var a=h.pathname.replace(/\/$/,"");c("body").html().indexOf("_escaped_fragment_")!=-1&&c('a[href]:not([href^=http]), a[href*="'+document.domain+'"]').each(function(){var b=c(this).attr("href").replace(/^http:/,"").replace(new RegExp(a+"/?$"),"");if(b===""||b.indexOf("_escaped_fragment_")!=-1)c(this).attr("href","#"+encodeURI(decodeURIComponent(b.replace(/\/(.*)\?_escaped_fragment_=(.*)$/)),
"!$2"))})}},j,x="jQueryAddress",E="hashchange",W="change",X="internalChange",Y="externalChange",o=true,m=false,d={autoUpdate:o,crawlable:m,history:o,strict:o,wrap:m},K=c.browser,A=parseFloat(K.version),z=!c.support.opacity,J=K.webkit||K.safari,i=function(){try{return top.document!==j?top:window}catch(a){return window}}(),n=i.document,y=i.history,h=i.location,ia=setInterval,r=setTimeout,T=/\/{2,9}/g,ca=navigator.userAgent,I="on"+E in i,k,D=c("script:last").attr("src"),Z=D?D.indexOf("?"):-1,O=n.title,
H=m,aa=m,P=o,da=o,L=m,f=t();if(z){A=parseFloat(ca.substr(ca.indexOf("MSIE")+4));if(n.documentMode&&n.documentMode!=A)A=n.documentMode!=8?7:8;var ea=n.onpropertychange;n.onpropertychange=function(){ea&&ea.call(n);if(n.title!=O&&n.title.indexOf("#"+t())!=-1)n.title=O}}if(y.navigationMode)y.navigationMode="compatible";if(document.readyState=="complete")var ja=setInterval(function(){if(c.address){ba();clearInterval(ja)}},50);else{$();c(ba)}c(window).bind("popstate",function(){if(f!=t()){f=t();B(m)}}).bind("unload",
function(){if(i.removeEventListener)i.removeEventListener(E,C,m);else i.detachEvent&&i.detachEvent("on"+E,C)});return{bind:function(){return g.apply(this,s(arguments))},init:function(){return g.apply(this,["init"].concat(s(arguments)))},change:function(){return g.apply(this,[W].concat(s(arguments)))},internalChange:function(){return g.apply(this,[X].concat(s(arguments)))},externalChange:function(){return g.apply(this,[Y].concat(s(arguments)))},baseURL:function(){var a=h.href;if(a.indexOf("#")!=-1)a=
a.substr(0,a.indexOf("#"));if(/\/$/.test(a))a=a.substr(0,a.length-1);return a},autoUpdate:function(a){if(a!==j){d.autoUpdate=a;return this}return d.autoUpdate},crawlable:function(a){if(a!==j){d.crawlable=a;return this}return d.crawlable},history:function(a){if(a!==j){d.history=a;return this}return d.history},state:function(a){if(a!==j){d.state=a;var b=U();if(d.state!==j)if(y.pushState)b.substr(0,3)=="/#/"&&h.replace(d.state.replace(/^\/$/,"")+b.substr(2));else b!="/"&&b.replace(/^\/#/,"")!=G()&&r(function(){h.replace(d.state.replace(/^\/$/,
"")+"/#"+b)},1);return this}return d.state},strict:function(a){if(a!==j){d.strict=a;return this}return d.strict},tracker:function(a){if(a!==j){d.tracker=a;return this}return d.tracker},wrap:function(a){if(a!==j){d.wrap=a;return this}return d.wrap},update:function(){L=o;this.value(f);L=m;return this},title:function(a){if(a!==j){r(function(){O=n.title=a;if(da&&k&&k.contentWindow&&k.contentWindow.document){k.contentWindow.document.title=a;da=m}if(!P&&K.mozilla)h.replace(h.href.indexOf("#")!=-1?h.href:
h.href+"#");P=m},50);return this}return n.title},value:function(a){if(a!==j){a=M(a);if(a=="/")a="";if(f==a&&!L)return;P=o;f=a;if(d.autoUpdate||L){B(o);if(F())y[d.history?"pushState":"replaceState"]({},"",d.state.replace(/\/$/,"")+(f===""?"/":f));else{H=o;if(J)if(d.history)h.hash="#"+w(f,o);else h.replace("#"+w(f,o));else if(f!=t())if(d.history)h.hash="#"+w(f,o);else h.replace("#"+w(f,o));z&&!I&&d.history&&r(N,50);if(J)r(function(){H=m},1);else H=m}}return this}return M(f)},path:function(a){if(a!==
j){var b=this.queryString(),e=this.hash();this.value(a+(b?"?"+b:"")+(e?"#"+e:""));return this}return M(f).split("#")[0].split("?")[0]},pathNames:function(){var a=this.path(),b=a.replace(T,"/").split("/");if(a.substr(0,1)=="/"||a.length===0)b.splice(0,1);a.substr(a.length-1,1)=="/"&&b.splice(b.length-1,1);return b},queryString:function(a){if(a!==j){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}a=f.split("?");return a.slice(1,a.length).join("?").split("#")[0]},parameter:function(a,
b,e){var l,p;if(b!==j){var Q=this.parameterNames();p=[];b=b?b.toString():"";for(l=0;l<Q.length;l++){var R=Q[l],v=this.parameter(R);if(typeof v=="string")v=[v];if(R==a)v=b===null||b===""?[]:e?v.concat([b]):[b];for(var S=0;S<v.length;S++)p.push(R+"="+v[S])}c.inArray(a,Q)==-1&&b!==null&&b!==""&&p.push(a+"="+b);this.queryString(p.join("&"));return this}if(b=this.queryString()){e=[];p=b.split("&");for(l=0;l<p.length;l++){b=p[l].split("=");b[0]==a&&e.push(b.slice(1).join("="))}if(e.length!==0)return e.length!=
1?e:e[0]}},parameterNames:function(){var a=this.queryString(),b=[];if(a&&a.indexOf("=")!=-1){a=a.split("&");for(var e=0;e<a.length;e++){var l=a[e].split("=")[0];c.inArray(l,b)==-1&&b.push(l)}}return b},hash:function(a){if(a!==j){this.value(f.split("#")[0]+(a?"#"+a:""));return this}a=f.split("#");return a.slice(1,a.length).join("#")}}}();c.fn.address=function(q){var s;if(typeof q=="string"){s=q;q=undefined}c(this).attr("address")||c(s?s:this).live("click",function(g){if(g.shiftKey||g.ctrlKey||g.metaKey||
g.which==2)return true;if(c(this).is("a")){g.preventDefault();g=q?q.call(this):/address:/.test(c(this).attr("rel"))?c(this).attr("rel").split("address:")[1].split(" ")[0]:c.address.state()!==undefined&&!/^\/?$/.test(c.address.state())?c(this).attr("href").replace(new RegExp("^(.*"+c.address.state()+"|\\.)"),""):c(this).attr("href").replace(/^(#\!?|\.)/,"");c.address.value(g)}}).live("submit",function(g){if(c(this).is("form")){g.preventDefault();g=c(this).attr("action");g=q?q.call(this):(g.indexOf("?")!=
-1?g.replace(/&$/,""):g+"?")+c(this).serialize();c.address.value(g)}}).attr("address",true);return this}})(jQuery);

/* end libs*/



// inject our html
if(getParameterByName("Scope")==""){
	$("#ctl00_MSO_ContentDiv").before("<h1>Web Features</h1>");
	$("#ctl00_MSO_ContentDiv").before('<a class="featurenav" href="ManageFeatures.aspx?Scope=Site">Site Collection Features</a> &raquo;');
} else {
	$("#ctl00_MSO_ContentDiv").before("<h1>Site Collection Features</h1>");
	$("#ctl00_MSO_ContentDiv").before('&laquo; <a class="featurenav" href="ManageFeatures.aspx">Web Features</a>');
}

$("#ctl00_MSO_ContentDiv").before('<div>' + 
								  '<input type="text" id="SPFASearchBox" />' + 
                                  '<button id="SPFASearchButton" name="query" >Search</button>' + 
								  '<input type="radio" class="filteractivegrp" id="statusall" name="FilterActiveGrp">All</input>' + 
								  '<input type="radio" class="filteractivegrp" id="statusactive" name="FilterActiveGrp">Active</input>' + 
								  '<input type="radio" class="filteractivegrp" id="statusdisabled" name="FilterActiveGrp">Disabled</input>' + 
								  '</div>');

// Setup address plugin								  
// Event fired everytime adress (url) is updated
$.address.change(function(event) {  
	filterList( decodeURIComponent($.address.parameter("q")) );
	if($.address.parameter("q")!=undefined){
		$("#SPFASearchBox").val( decodeURIComponent( $.address.parameter("q") ) );	
	}
    if($.address.parameter("s")!=undefined){
        $( '#'+$.address.parameter("s") ).attr('checked','checked');
    }
    
}).strict(false);  


// event handlers
$('.featurenav').click(function(){
	$(this).attr('href', $(this).attr('href')+"#"+$.address.value());
	return true;
});

$("#SPFASearchBox").keyup(function(e){
	$.address.parameter("q", $(this).val());
});

$(".filteractivegrp").click(function(){
	$.address.parameter("s", $(this).attr('id'));
});

// trap the event for the search box, its just there
// as a visual cue
$("#SPFASearchButton").click(function(){
	return false;
});

// *** helper methods ***
function filterList(text) {
	var filtertext = text;
	
	if(filtertext=="undefined"){
		filtertext="";
	}
	// iterate through the list of features, hiding and showing rows
    
    var tableRows = $('#ctl00_MSO_ContentDiv > table > tbody > tr > td > table > tbody > tr');
    
	$(tableRows).each(function(){
		
		var header = $(this).find(".ms-standardheader");
		
        
		if( header && header.text()!=""){
			if(header.text().toLowerCase().indexOf(filtertext.toLowerCase())==-1 ){
				$(this).hide();
			} else {
                $(this).show();
			}
		}
		
        if( $(this).is(':visible') ){
			
                var status = $(this).find(".ms-featurestatustext");
                if( $.address.parameter("s")!= "statusall" ){
                    if($.address.parameter("s")=="statusactive" && status.html()==undefined){
                        $(this).hide();
                    }
                    else if($.address.parameter("s")=="statusdisabled" && status.html()=="Active") {
                        $(this).hide();
                    }				
                 }
			}
	});
}

// TODO: Can probably be replaced by method from address API
function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
