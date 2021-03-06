// Globes TalkBack Stripper
// version 3.0
// 2008-04-08
// Copyright (c) 2008, Ran Yaniv Hartstein
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Globes TalkBack Stripper", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name            Globes TalkBack Stripper
// @author          Ran Yaniv Hartstein <http://ranh.co.il/>
// @namespace       http://www.brunotorres.net/greasemonkey/
// @description     Removes the talkback section from globes.co.il articles
// @include         http://*globes.co.il*
// ==/UserScript==


var tbdiv = document.getElementById('ArticleResponseNew');
if (tbdiv) {
    tbdiv.parentNode.removeChild(tbdiv);
}