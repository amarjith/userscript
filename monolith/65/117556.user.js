// ==UserScript==
// @name          xerotic's HF Special Links
// @namespace     xerotic/hflinks
// @description   Adds special links to the HackForums header just for Pulse, no one else download :)
// @include       http://hackforums.net/*
// @include       http://www.hackforums.net/*
// @version 1.0
// ==/UserScript==

var regex = /\(Unread(.*?)\)/;
var revised = "(Unread $1) | <a href='bans.php'>Bans</a> | <a href='negreplog.php'>Neg Rep Log</a> | <a href='paidstickies.php'>Paid Stickies</a> | <a href='showgroups.php'>Show Groups</a> | <a href='showstaff.php.php'>Staff List</a> | <a href='showmods.php'>Mod List</a> | <a href='member.php?action=profile&uid=485066'>Profile</a>";
document.getElementById('panel').innerHTML= document.getElementById('panel').innerHTML.replace(regex,revised);