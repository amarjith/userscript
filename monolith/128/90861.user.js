// ==UserScript==
// @name           Google Reader Font in Palatino and enlarged
// @version        1.0
// @creator        Dan
// @description    Changes the font family and size from Google Reader page
// @namespace      userscripts.org
// @include        https://www.google.com/reader/*
// @include        http://www.google.com/reader/*

// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.entry-body{font-family:Palatino,"Palatino Linotype","Hoefler Text",Times,serif;font-size:110%;line-height:150%;}');
addGlobalStyle('A.entry-title-link {font-family:Palatino,"Palatino Linotype","Hoefler Text",Times,serif;font-size: 20px;}');

//eof