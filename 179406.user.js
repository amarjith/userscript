// ==UserScript==
// @name           nwr

// @description    Automatically selects professions for empty slots
// @namespace      http://userscripts.org/scripts/show/179406
// @include        https://gateway.playneverwinter.com
// @include        https://gateway.playneverwinter.com/*
// @include        https://gatewaysitedown.playneverwinter.com
// @include        https://gatewaysitedown.playneverwinter.com/* 
// @include        http://gateway.playneverwinter.com
// @include        http://gateway.playneverwinter.com/*
// @include        http://gatewaysitedown.playneverwinter.com
// @include        http://gatewaysitedown.playneverwinter.com/* 
// @updateURL      https://userscripts.org/scripts/source/179406.meta.js
// @downloadURL    https://userscripts.org/scripts/source/179406.user.js
// @originalAuthor Mustex
// @modifiedBy     Bunta, Lodrial
// @version        0.1.30
// @license        http://creativecommons.org/licenses/by-nc-sa/4.0/
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_listValues
// @grant          GM_deleteValue
// @grant          GM_addStyle
// ==/UserScript==

/* RELEASE NOTES
0.1.29-30	Fix Timing Issues
0.1.27-28	Fix Gateway Error Issue
0.1.26		Fix Sleep Timer for single character
0.1.24-5	Page Error Timer
0.1.23		Alchemy Fix
0.1.19-22	Bug Fixes
0.1.18		Merge in source script
0.1.17		Add HTML5 LocalStorage support
0.1.16		Level 20 Mailsmithing tasks
0.1.15		Refine AD
0.1.10-14	Optimizations 
0.1.9		Fix UI bug
0.1.8		Adjust for source changes
0.1.7 		Add optional asset usage
0.1.6		Disable clicking
0.1.5		Play/Pause Icon Bug
0.1.4		Minor Bug Fix
0.1.3		Fix Task Bug
0.1.0		Initial Release
*/

/* REQUESTED FEATURES
 * - Add settings to restrict types of optional assets selected
 * - Add logic to determine when to 'hire' more assets (Depends on number of open slots, profession level, and current assets of the correct level)
 * - Add settings for defining a minimum amount of resources to attempt to keep in stock (When the rare tasks come up we will need to have some resources available)
 */

// Make sure it's running on the main page, no frames
if(window.self !== window.top) {
    throw "";
}

// Set global console variables
var fouxConsole = {log:function(){},info:function(){},error:function(){},warn:function(){}};
var console = unsafeWindow.console || fouxConsole;

// Page Reloading function
// Every second the page is idle or loading is tracked
var loading_reset = false; // Enables a periodic reload if this is toggled on by the Auto Reload check box on the settings panel
var s_paused = false;      // extend the paused setting to the Page Reloading function

(function() {
    var $                  = unsafeWindow.$;
    var state_loading      = 0;   // If "Page Loading" takes longer than 30 seconds, reload page (maybe a javascript error)
    var state_loading_time = 30;  // default of 30 seconds

    var state_idle         = 0;   // If the page is idle for longer than 60 seconds, reload page (maybe a javascript error)
    var state_idle_time    = 120; // default of 120 seconds
    var reload_hours       = [2,5,8,11,14,17,20,23]; // logout and reload every three hours - 2:29 - 5:29 - 8:29 - 11:29 - 14:29 - 17:29 - 20:29 - 23:29
    var last_location      = "";  // variable to track reference to page URL
    var reload_timer       = setInterval(function() {
        if (!s_paused) {
            if (loading_reset) {
                var loading_date       = new Date;
                var loading_sec        = Number(loading_date.getSeconds());
                var loading_min        = Number(loading_date.getMinutes());
                var loading_hour       = Number(loading_date.getHours());
                if (reload_hours.indexOf(loading_hour) >= 0 && loading_min == 29 && loading_sec < 2) {
                    console.log("Auto Reload");
                    unsafeWindow.location.href = "http://gateway.playneverwinter.com";
                    return;
                }
            }
            
            if ($("div.loading-image:visible").length) {
                last_location = location.href;
                state_idle = 0;
                if (state_loading >= state_loading_time) {
                    console.log("Page Loading too long");
                    state_loading = 0;
                    location.reload();
                }
                else {
                    state_loading++;
                    console.log("Page Loading ...", state_loading + "s");
                }
            }
            else if (location.href == last_location) {
                state_loading = 0;
                if (state_idle >= state_idle_time) {
                    console.log("Page Idle too long");
                    state_idle = 0;
                    unsafeWindow.location.href = "http://gateway.playneverwinter.com";
                }
                else {
                    state_idle++;
                    // comment out to avoid console spam
                    //console.log("Page Idle ...", state_idle + "s");
                }
            }
            else {
                last_location = location.href;
                state_loading = 0;
                state_idle = 0;
            }
        }
    },1000);
})();

(function() {

    /**
     * Add a string of CSS to the main page
     *
     * @param {String} cssString The CSS to add to the main page
     */
    function AddCss(cssString) {
        var head = document.getElementsByTagName('head')[0];
        if(!head)
            return;
        var newCss = document.createElement('style');
        newCss.type = "text/css";
        newCss.innerHTML = cssString;
        head.appendChild(newCss);
    }
    function countLeadingSpaces(str) {
        return str.match(/^(\s*)/)[1].length;
    }

    var image_pause = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAY" +
        "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" +
        "BNp57TyT3+MAAAAASUVORK5CYII="
    var image_play = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYA" +
        "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"
    var image_prefs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQC" +
        "AMAAAAoLQ9TAAAAllBMVEUAGQASEhIfHx8fJy8pKSk2NjZBQUFJR0ZQUE9RUVFSUlJNX3No" +
        "aGhsaWdramlycG1meY98fHx+fn5wgpV0iqKKh4R4jaR9jJx8kad9kad/mbONmaWEnrmEnrq" +
        "koZy3t7fIx8bKyMHT0c3S0dDU09DV1NPP1t3W1dXY2Njb2tfe29bf3tzj4uHr6+js6+r39/" +
        "f5+PgAAABrL3yvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTA" +
        "QCanBgAAAAHdElNRQfWBRoFKh31UQ8DAAAAgUlEQVQY022OxxLCMAwFRSc4BEIPJZQQ08v+" +
        "/8+RsTExDDpIe3ijfSJ/hx9g62Dt4GaAI+8YT0t27+BxxvvE/no5pYT10lGFrE34Ja40W3g" +
        "1oMGmW7YZ6hnCYexKTPVkXivuvWe1Cz1aKqPNI3N0slI2TNYZiARJX30qERc7wBPKC4WRDz" +
        "WdWHfmAAAAAElFTkSuQmCC";
    var image_close = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQC" +
        "AQAAAC1+jfqAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfW" +
        "BRkTNhxuPxLkAAAAHXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBUaGUgR0lNUO9kJW4AAAE" +
        "KSURBVCjPhdGxSgNBFAXQMzpgYWwsLEQUDBJBQgqFIChZEPR7/DA/QCGQTgQtJE1ENoWohY" +
        "UgbGKQyFjErNv52nObe19wqGWg7z0l5YVgVdOu+wUt507tqIVQ4Zodp861ooELe15M5KFI6" +
        "Zfr9u25MIj6Jl4cmSIPBWrq2o5cufO4aOJDYSozNTa2pK4t03PtwUdMKRRykAmW0dTRcyNX" +
        "pBQpI8GJDTR050zkNzK0bMMZLvUNZ8yCfy6Wvbc1NVyi4dloXjqWvds6uvp41pFmpVOKJWd" +
        "6bgwxkmTMIotWKpwrfBkZl7uMonUHf5wSlV2+fUZrjnXdzrmyy7djD8GWTW9e51z557o1Tz" +
        "85FH/WkOkaHQAAAABJRU5ErkJggg==";


    // Setup global closure variables
    var $ = unsafeWindow.jQuery;
    var timerHandle = 0;
    var longDelay = 300000; // 5 minutes
    var delay = 20000; // 20 seconds
    var delayShort = 5000; // 5 second
    var dfdNextRun = $.Deferred();
    var charcurrent = 0; // current character counter
    var settingwipe = false; // Use to wipe stored settings
    
    unsafeWindow.onerror = function(errorMsg, url, lineNumber){
       console.log("oi!");
       console.error(errorMsg, url, lineNumber);
       unsafeWindow.document.location.reload(true); 
        
       return false;
    }
    /*
     * Tasklist can be modified to configure the training you want to perform.
     * The configurable options window sets how many profession slots you want to use for each profession.
     * The level array below for each professions specifies the tasks you want to learn at each crafting level.
     * Each craft slot will pick the first task that meets requirements.
     */
var tasklist = [
        {
            taskName:"Leadership",
            level: {
                 0:["Hire Your First Mercenary"],
                 1:["Complete Advanced Training", "Protect Grateful Merchant","Pick Up Package", "Basic Training"],
                 2:["Guard Duty"],
                 3:["Guard Duty","Hire a Mercenary"],
                 4:["Gather Astral Diamonds","Protect Caravan","Hire a Mercenary"],
                 5:["Gather Astral Diamonds","Protect Caravan","Explore Local Area","Hire a Mercenary"],
                 6:["Gather Astral Diamonds","Protect Caravan","Explore Local Area","Hire a Mercenary"],
                 7:["Gather Astral Diamonds","Protect Caravan","Explore Local Area","Hire a Mercenary"],
                 8:["Gather Astral Diamonds","Protect Caravan","Explore Local Area","Train a Guard","Hire a Mercenary"],
                 9:["Gather Astral Diamonds","Protect Caravan","Chart Region","Explore Local Area","Train a Guard","Hire a Mercenary"],
                10:["Gather Astral Diamonds","Protect Caravan","Chart Region","Explore Local Area","Battle Undead","Train a Guard","Hire a Mercenary"],
                11:["Gather Astral Diamonds","Protect Caravan","Chart Region","Explore Local Area","Battle Undead","Train a Guard","Hire a Mercenary"],
                12:["Gather Astral Diamonds","Protect Caravan","Chart Region","Explore Local Area","Battle Undead","Train a Guard","Hire a Mercenary"],
                13:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Protect Caravan","Explore Local Area","Train a Guard","Battle Undead","Hire a Mercenary"],
                14:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Protect Caravan","Explore Local Area","Train a Guard","Battle Undead","Hire a Mercenary"],
                15:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Protect Caravan","Explore Local Area","Train a Guard","Battle Undead","Hire a Mercenary"],
                16:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Protect Caravan","Explore Local Area","Train a Guard","Battle Undead","Hire a Mercenary"],
                17:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Deliver Metals","Protect Caravan","Explore Local Area","Collect Taxes","Train a Guard","Battle Undead","Hire a Mercenary"],
                18:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Deliver Metals","Protect Caravan","Explore Local Area","Collect Taxes","Train a Guard","Battle Undead","Hire a Mercenary"],
                19:["Gather Astral Diamonds","Patrol the Mines","Chart Region","Deliver Metals","Protect Caravan","Explore Local Area","Collect Taxes","Train a Guard","Battle Undead","Hire a Mercenary"],
                20:["Gather Astral Diamonds","Assault Enemy Stronghold","Follow Map to an Unknown Location","Recover Large Mineral Claim","Destroy Enemy Camp","Deliver Metals","Protect Diamond Shipment","Collect Taxes","Give Refugees a Home","Battle Undead","Protect Caravan","Patrol the Mines","Chart Region","Explore Local Area"],
            },
        },
        {
            // Mailsmithing
            taskName:"Armorsmithing_Med",
            level: {
                 0:["Hire your first Prospector"],
                 1:["Gather Iron Ore","Chain Boots","Chain Shirt"],
                 2:["Gather Iron Ore","Chain Armor","Chain Pants","Hire an additional Prospector"],
                 3:["Gather Iron Ore","Chain Armor","Chain Boots +1","Hire an additional Prospector"],
                 4:["Gather Iron Ore","Chain Armor","Chain Boots +1","Hire an additional Prospector"],
                 5:["Gather Iron Ore","Chain Armor +1","Chain Boots +1","Hire an additional Prospector"],
                 6:["Gather Iron Ore","Chain Armor +1","Chain Boots +1","Hire an additional Prospector"],
                 7:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                 8:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                 9:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                10:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                11:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                12:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                13:["Gather High quality Iron Ore","Upgrade Prospector","Hire an additional Prospector"],
                14:["Gather Mithral Ore","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
                15:["Gather Mithral Ore","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
                16:["Gather Mithral Ore","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
                17:["Gather Mithral Ore","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
                18:["Gather Mithral Ore","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
                19:["Gather Mithral Ore","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
                20:["Upgrade Master Mailsmith","Upgrade Mailsmith","Upgrade Blacksmith","Upgrade Prospector","Hire an additional Prospector"],
            },
        },
        {
            // Platesmithing
            taskName:"Armorsmithing_Heavy",
            level: {
                 0:["Hire your first Miner"],
                 1:["Plate Boots","Plate Shirt","Iron Shield"],
                 2:["Plate Armor","Plate Pants","Hire an additional Miner"],
                 3:["Plate Armor","Plate Boots +1","Hire an additional Miner"],
                 4:["Plate Armor","Plate Boots +1","Hire an additional Miner"],
                 5:["Plate Armor +1","Plate Boots +1","Hire an additional Miner"],
                 6:["Plate Armor +1","Plate Boots +1","Hire an additional Miner"],
                 7:["Plate Armor +1","Plate Boots +2","Detailed Plate Shirt","Steel Shield +2","Upgrade Miner","Hire an additional Miner"],
                 8:["Plate Armor +2","Detailed Plate Pants","Plate Boots +2","Detailed Plate Shirt","Upgrade Miner","Hire an additional Miner"],
                 9:["Plate Armor +2","Detailed Plate Pants","Plate Boots +2","Detailed Plate Shirt","Upgrade Miner","Hire an additional Miner"],
                10:["Plate Armor +2","Detailed Plate Pants","Plate Boots +2","Superb Plate Shirt","Upgrade Miner","Hire an additional Miner"],
                11:["Plate Armor +2","Superb Plate Pants","Plate Boots +2","Superb Plate Shirt","Detailed Plate Pants","Upgrade Miner","Hire an additional Miner"],
                12:["Plate Armor +2","Superb Plate Pants","Plate Boots +2","Superb Plate Shirt","Detailed Plate Pants","Upgrade Miner","Hire an additional Miner"],
                13:["Plate Armor +2","Superb Plate Pants","Plate Boots +2","Superb Plate Shirt","Detailed Plate Pants","Upgrade Miner","Hire an additional Miner"],
                14:["Plate Armor +2","Superb Plate Pants","Ornate Plate Shirt","Plate Boots +4","Upgrade Armorer","Upgrade Miner","Hire an additional Miner"],
                15:["Plate Armor +4","Ornate Plate Pants","Fancy Plate Shirt","Plate Boots +4","Upgrade Armorer","Upgrade Miner","Hire an additional Miner"],
                16:["Plate Armor +4","Fancy Plate Pants","Fancy Plate Shirt","Plate Helm +4","Ornate Plate Pants","Upgrade Armorer","Upgrade Miner","Hire an additional Miner"],
                17:["Plate Armor +4","Fancy Plate Pants","Fancy Plate Shirt","Plate Helm +4","Ornate Plate Pants","Upgrade Armorer","Upgrade Miner","Hire an additional Miner"],
                18:["Plate Armor +4","Fancy Plate Pants","Fancy Plate Shirt","Plate Helm +4","Ornate Plate Pants","Upgrade Armorer","Upgrade Miner","Hire an additional Miner"],
                19:["Plate Armor +4","Fancy Plate Pants","Fancy Plate Shirt","Plate Helm +4","Ornate Plate Pants","Upgrade Armorer","Upgrade Miner","Hire an additional Miner"],
                20:[],
            },
        },
        {
            taskName:"Leatherworking",
            level: {
                 0:["Hire your first Skinner"],
                 1:["Leather Boots","Leather Shirt"],
                 2:["Leather Armor","Leather Pants","Hire an additional Skinner"],
                 3:["Leather Armor","Leather Boots +1","Hire an additional Skinner"],
                 4:["Leather Armor","Leather Boots +1","Hire an additional Skinner"],
                 5:["Leather Armor +1","Leather Boots +1","Hire an additional Skinner"],
                 6:["Leather Armor +1","Leather Boots +1","Hire an additional Skinner"],
                 7:["Leather Armor +1","Leather Boots +2","Detailed Leather Shirt","Upgrade Skinner","Hire an additional Skinner"],
                 8:["Leather Armor +2","Detailed Leather Pants","Leather Boots +2","Detailed Leather Shirt","Upgrade Skinner","Hire an additional Skinner"],
                 9:["Leather Armor +2","Detailed Leather Pants","Leather Boots +2","Detailed Leather Shirt","Upgrade Skinner","Hire an additional Skinner"],
                10:["Leather Armor +2","Detailed Leather Pants","Leather Boots +2","Superb Leather Shirt","Upgrade Skinner","Hire an additional Skinner"],
                11:["Leather Armor +2","Superb Leather Pants","Leather Boots +2","Superb Leather Shirt","Detailed Leather Pants","Upgrade Skinner","Hire an additional Skinner"],
                12:["Leather Armor +2","Superb Leather Pants","Leather Boots +2","Superb Leather Shirt","Detailed Leather Pants","Upgrade Skinner","Hire an additional Skinner"],
                13:["Leather Armor +2","Superb Leather Pants","Leather Boots +2","Superb Leather Shirt","Detailed Leather Pants","Upgrade Skinner","Hire an additional Skinner"],
                14:["Leather Armor +2","Superb Leather Pants","Ornate Leather Shirt","Leather Boots +4","Upgrade Tanner","Upgrade Skinner","Hire an additional Skinner"],
                15:["Leather Armor +4","Ornate Leather Pants","Fancy Leather Shirt","Leather Boots +4","Upgrade Tanner","Upgrade Skinner","Hire an additional Skinner"],
                16:["Leather Armor +4","Fancy Leather Pants","Fancy Leather Shirt","Leather Helm +4","Ornate Leather Pants","Upgrade Tanner","Upgrade Skinner","Hire an additional Skinner"],
                17:["Leather Armor +4","Fancy Leather Pants","Fancy Leather Shirt","Leather Helm +4","Ornate Leather Pants","Upgrade Tanner","Upgrade Skinner","Hire an additional Skinner"],
                18:["Leather Armor +4","Fancy Leather Pants","Fancy Leather Shirt","Leather Helm +4","Ornate Leather Pants","Upgrade Tanner","Upgrade Skinner","Hire an additional Skinner"],
                19:["Leather Armor +4","Fancy Leather Pants","Fancy Leather Shirt","Leather Helm +4","Ornate Leather Pants","Upgrade Tanner","Upgrade Skinner","Hire an additional Skinner"],
                20:[],
            },
        },
        {
            taskName:"Tailoring",
            level: {
                 0:["Hire your first Weaver"],
                 1:["Cloth Boots","Cloth Shirt"],
                 2:["Cloth Robes","Cloth Pants","Hire an additional Weaver"],
                 3:["Cloth Robes","Cloth Boots +1","Hire an additional Weaver"],
                 4:["Cloth Robes","Cloth Boots +1","Hire an additional Weaver"],
                 5:["Cloth Robes +1","Cloth Boots +1","Hire an additional Weaver"],
                 6:["Cloth Robes +1","Cloth Boots +1","Hire an additional Weaver"],
                 7:["Cloth Robes +1","Cloth Boots +2","Detailed Cloth Shirt","Upgrade Weaver","Hire an additional Weaver"],
                 8:["Cloth Robes +2","Detailed Cloth Pants","Cloth Boots +2","Detailed Cloth Shirt","Upgrade Weaver","Hire an additional Weaver"],
                 9:["Cloth Robes +2","Detailed Cloth Pants","Cloth Boots +2","Detailed Cloth Shirt","Upgrade Weaver","Hire an additional Weaver"],
                10:["Cloth Robes +2","Detailed Cloth Pants","Cloth Boots +2","Superb Cloth Shirt","Upgrade Weaver","Hire an additional Weaver"],
                11:["Cloth Robes +2","Superb Cloth Pants","Cloth Boots +2","Superb Cloth Shirt","Detailed Cloth Pants","Upgrade Weaver","Hire an additional Weaver"],
                12:["Cloth Robes +2","Superb Cloth Pants","Cloth Boots +2","Superb Cloth Shirt","Detailed Cloth Pants","Upgrade Weaver","Hire an additional Weaver"],
                13:["Cloth Robes +2","Superb Cloth Pants","Cloth Boots +2","Superb Cloth Shirt","Detailed Cloth Pants","Upgrade Weaver","Hire an additional Weaver"],
                14:["Cloth Robes +2","Superb Cloth Pants", "Ornate Cloth Shirt","Cloth Boots +4","Upgrade Outfitter","Upgrade Weaver","Hire an additional Weaver"],
                15:["Cloth Robes +4","Ornate Cloth Pants","Fancy Cloth Shirt","Cloth Boots +4","Upgrade Outfitter","Upgrade Weaver","Hire an additional Weaver"],
                16:["Cloth Robes +4","Fancy Cloth Pants","Fancy Cloth Shirt","Cloth Cap +4","Ornate Cloth Pants","Upgrade Outfitter","Upgrade Weaver","Hire an additional Weaver"],
                17:["Cloth Robes +4","Fancy Cloth Pants","Fancy Cloth Shirt","Cloth Cap +4","Ornate Cloth Pants","Upgrade Outfitter","Upgrade Weaver","Hire an additional Weaver"],
                18:["Cloth Robes +4","Fancy Cloth Pants","Fancy Cloth Shirt","Cloth Cap +4","Ornate Cloth Pants","Upgrade Outfitter","Upgrade Weaver","Hire an additional Weaver"],
                19:["Cloth Robes +4","Fancy Cloth Pants","Fancy Cloth Shirt","Cloth Cap +4","Ornate Cloth Pants","Upgrade Outfitter","Upgrade Weaver","Hire an additional Weaver"],
                20:[],
            },
        },
        {
            taskName:"Artificing",
            level: {
                 0:["Hire your first Carver"],
                 1:["1:Gather Ore and Wood"],
                 2:["1:Gather Ore and Wood","Hire an additional Carver"],
                 3:["1:Gather Ore and Wood","Hire an additional Carver"],
                 4:["1:Gather Ore and Wood","Hire an additional Carver"],
                 5:["1:Gather Ore and Wood","Hire an additional Carver"],
                 6:["1:Gather Ore and Wood","Hire an additional Carver"],
                 7:["7:Gather Ore and Wood","Hire an additional Carver"],
                 8:["7:Gather Ore and Wood","Upgrade Carver","Hire an additional Carver"],
                 9:["7:Gather Ore and Wood","Upgrade Carver","Hire an additional Carver"],
                10:["7:Gather Ore and Wood","Upgrade Carver","Hire an additional Carver"],
                11:["7:Gather Ore and Wood","Upgrade Carver","Hire an additional Carver"],
                12:["7:Gather Ore and Wood","Upgrade Carver","Hire an additional Carver"],
                13:["7:Gather Ore and Wood","Upgrade Carver","Hire an additional Carver"],
                14:["14:Gather Ore and Wood","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
                15:["14:Gather Ore and Wood","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
                16:["14:Gather Ore and Wood","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
                17:["14:Gather Ore and Wood","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
                18:["14:Gather Ore and Wood","Upgrade Master Artificer","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
                19:["14:Gather Ore and Wood","Upgrade Master Artificer","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
                20:["Upgrade Master Artificer","Upgrade Artificer","Upgrade Engraver","Upgrade Carver","Hire an additional Carver"],
            },
        },
        {
            taskName:"Weaponsmithing",
            level: {
                 0:["Hire your first Smelter"],
                 1:["Dagger +1"],
                 2:["Dagger +1","Hire an additional Smelter"],
                 3:["Dagger +1","Hire an additional Smelter"],
                 4:["Dagger +2","Hire an additional Smelter"],
                 5:["Dagger +2","Hire an additional Smelter"],
                 6:["Dagger +2","Hire an additional Smelter"],
                 7:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                 8:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                 9:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                10:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                11:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                12:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                13:["Dagger +3","Upgrade Smelter","Hire an additional Smelter"],
                14:["Dagger +4","Upgrade Grinder","Upgrade Smelter","Hire an additional Smelter"],
                15:["Dagger +4","Upgrade Grinder","Upgrade Smelter","Hire an additional Smelter"],
                16:["Dagger +4","Upgrade Grinder","Upgrade Smelter","Hire an additional Smelter"],
                17:["Dagger +4","Upgrade Grinder","Upgrade Smelter","Hire an additional Smelter"],
                18:["Dagger +4","Upgrade Grinder","Upgrade Smelter","Hire an additional Smelter"],
                19:["Dagger +4","Upgrade Grinder","Upgrade Smelter","Hire an additional Smelter"],
                20:[],
            },
        },
        {
            taskName:"Alchemy",
            level: {
                 0:["Hire your first Apothecary"],
                 1:["Alchemical Research","Rank 1 Experimentation",],
                 2:["Alchemical Research","Rank 2 Experimentation","Hire an additional Apothecary"],
                 3:["Alchemical Research","Rank 3 Experimentation","Hire an additional Apothecary"],
                 4:["Alchemical Research","Rank 4 Experimentation","Hire an additional Apothecary"],
                 5:["Alchemical Research","Rank 5 Experimentation","Hire an additional Apothecary"],
                 6:["Alchemical Research","Rank 6 Experimentation","Hire an additional Apothecary"],
                 7:["Alchemical Research","Rank 7 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                 8:["Transmutation Research","Rank 8 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                 9:["Alchemical Research","Rank 9 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                10:["Transmutation Research","Rank 10 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                11:["Alchemical Research","Rank 11 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                12:["Alchemical Research","Rank 12 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                13:["Alchemical Research","Rank 13 Experimentation","Upgrade Apothecary","Hire an additional Apothecary"],
                14:["Alchemical Research","Rank 14 Experimentation","Upgrade Mixologist","Upgrade Apothecary","Hire an additional Apothecary"],
                15:["Alchemical Research","Rank 15 Experimentation","Upgrade Mixologist","Upgrade Apothecary","Hire an additional Apothecary"],
                16:["Alchemical Research","Rank 16 Experimentation","Upgrade Mixologist","Upgrade Apothecary","Hire an additional Apothecary"],
                17:["Alchemical Research","Rank 17 Experimentation","Upgrade Mixologist","Upgrade Apothecary","Hire an additional Apothecary"],
                18:["Alchemical Research","Rank 18 Experimentation","Upgrade Mixologist","Upgrade Apothecary","Hire an additional Apothecary"],
                19:["Alchemical Research","Rank 19 Experimentation","Upgrade Mixologist","Upgrade Apothecary","Hire an additional Apothecary"],
                20:["Rank 20 Experimentation"],
            },
        },
        {
            taskName:"WinterEvent",
            level: {
                1:["Glowing Fishing Pole","1:Entertain Master of Lights (Rank Up)","Refine Light Pods","1:Fish for Light Pods"],
                2:["Bright Angler's Fishing Pole","2:Entertain Master of Lights (Rank Up)","Refine Light Pods","2:Fish for Light Pods","2:Large Batch of Shiny Lures","1:Fish for Light Pods"],
                3:["Brilliant Angler's Fishing Pole","Lightwine","Refine Light Pods","3:Fish for Light Pods","2:Large Batch of Shiny Lures","1:Fish for Light Pods"],
            },
        },
	];
    // Load Settings
    var settingnames = [
        {name: 'paused',              title: 'Pause Script',                         def: false, type:'checkbox', tooltip:'Disable All Automation'},
        {name: 'debug',               title: 'Enable Debug',                         def: false, type:'checkbox', tooltip:'Enable all debug output to console', onsave: function(newValue, oldValue) {console=newValue?unsafeWindow.console||fouxConsole:fouxConsole;}},
		{name: 'disablesound',        title: 'Disable Sound',                        def: true,  type:'checkbox', tooltip:'Disable Web Page Sounds'},
        {name: 'optionals',           title: 'Fill Optional Assets',                 def: true,  type:'checkbox', tooltip:'Enable to include selecting the optional assets of tasks'},
        {name: 'autopurchase',        title: 'Auto Purchase Resources',              def: true,  type:'checkbox', tooltip:'Automatically purchase required resources from gateway shop (100 at a time)'},
        {name: 'excluderare',         title: 'Exclude Rare Tasks',                   def: true,  type:'checkbox', tooltip:'Exclude rare tasks to avoid selecting wrong tasks during profession leveling. When disabled, selection of specific tasks can be performed by specifying level in task name (eg. "4:Leather Armor +1" will craft the rare task only)'},
		{name: 'enablemass',		  title: 'Enable Mass Tasks',                    def: '0',   type:'text',     tooltip:'0 - Off, 1 - On level 14, 2 - Always On'},
        {name: 'refinead',            title: 'Refine AD',                            def: true,  type:'checkbox', tooltip:'Enable refining of AD on character switch'},
        {name: 'autoreload',          title: 'Auto Reload',                          def: false, type:'checkbox', tooltip:'Enabling this will reload the gateway periodically'},
        {name: 'autologin',           title: 'Attempt to login automatically',       def: false, type:'checkbox', tooltip:'Automatically attempt to login to the neverwinter gateway site'},
        {name: 'nw_username',         title: '  Neverwinter Username',               def: '',    type:'text',     tooltip:''},
        {name: 'nw_password',         title: '  Neverwinter Password',               def: '',    type:'password', tooltip:''},
        {name: 'charcount',           title: '  Number of Characters',               def: '2',   type:'text',     tooltip:'Enter number of characters to use (reload page to update settings form)'},
    ];
    
    // Load local settings cache (unsecured)
    var settings = {};
	for (var i = 0; i < settingnames.length; i++) {
		// Ignore label types
		if(settingnames[i].type === 'label') {
			continue;
		} 
		settings[settingnames[i].name] = GM_getValue(settingnames[i].name, settingnames[i].def);
		// call the onsave for the setting if it exists
		if(typeof(settingnames[i].onsave) === "function") {
			console.log("Calling 'onsave' for", settingnames[i].name);
			settingnames[i].onsave(settings[settingnames[i].name], settings[settingnames[i].name]);
		}
	}  
    
    if (settings["charcount"]<1) { settings["charcount"] = 1; }
    if (settings["charcount"]>99) { settings["charcount"] = 99; }

    var charSettings = [];
    for(var i = 0; i < settings["charcount"]; i++) {
        charSettings.push({name: 'nw_charname'+i,         title: 'Character',      def: 'Character '+(i+1), type:'text',     tooltip:'Characters Name'});
        charSettings.push({name: 'Leadership'+i,          title: 'Leadership',     def: '9',                type:'text',     tooltip:'Number of slots to assign to Leadership'});
        charSettings.push({name: 'Armorsmithing_Med'+i,   title: 'Mailsmithing',   def: '0',                type:'text',     tooltip:'Number of slots to assign to Mailsmithing'});
        charSettings.push({name: 'Armorsmithing_Heavy'+i, title: 'Platesmithing',  def: '0',                type:'text',     tooltip:'Number of slots to assign to Platesmithing'});
        charSettings.push({name: 'Leatherworking'+i,      title: 'Leatherworking', def: '0',                type:'text',     tooltip:'Number of slots to assign to Leatherworking'});
        charSettings.push({name: 'Tailoring'+i,           title: 'Tailoring',      def: '0',                type:'text',     tooltip:'Number of slots to assign to Tailoring'});
        charSettings.push({name: 'Artificing'+i,          title: 'Artificing',     def: '0',                type:'text',     tooltip:'Number of slots to assign to Artificing'});
        charSettings.push({name: 'Weaponsmithing'+i,      title: 'Weaponsmithing', def: '0',                type:'text',     tooltip:'Number of slots to assign to Weaponsmithing'});
        charSettings.push({name: 'Alchemy'+i,             title: 'Alchemy',        def: '0',                type:'text',     tooltip:'Number of slots to assign to Alchemy'});
    }
    
    for (var i = 0; i < charSettings.length; i++) {
        settings[charSettings[i].name] = GM_getValue(charSettings[i].name, charSettings[i].def);
    }
    
    // load current character position and values
    if(settings["charcount"] > 1){
        charcurrent =  GM_getValue("charcurrent", 0);
        for(i=0; i < (charSettings.length/settings["charcount"]); i++) {
            j = i + (charcurrent*charSettings.length/settings["charcount"]);
            settings[charSettings[j].name.replace(new RegExp(charcurrent+"$"),'')] = settings[charSettings[j].name];
        }   
    }
    
    // Page Settings
    var PAGES = Object.freeze({
        LOGIN : { name: "Login", path: "div#login"},
        GUARD : { name: "Account Guard", path: "div#page-accountguard"},
        CHARSELECT : { name: "Character Select", path: "div.page-characterselect"},
        FRONTPAGE : { name: "Front Page", path: "div.page-front"},
        PROFESSIONS : { name: "Professions", path: "div.page-professions"},
		ERROR : { name : "Error", path:"div.page-error"},
    });
	
	//Disable sound
	function ToggleSound(){
        if(settings.disablesound) {
            unsafeWindow.client.sounds.toggle(false);
        }
	}
	
    /**
     * Uses the page settings to determine which page is currently displayed
     */
    function GetCurrentPage() {
        for each(var page in PAGES) {
            if($(page["path"]).filter(":visible").length) {
                return page;
            }
        }
    }
    
    function page_DEFAULT() {
        dfdNextRun.resolve();
    }
    function page_LOGIN() {
        //if(!$("form > p.error:visible").length && settings["autologin"]) {
            // No previous log in error - attempt to log in
            console.log("Setting username");
            $("input#user").val(settings["nw_username"]);
            console.log("Setting password");
            $("input#pass").val(settings["nw_password"]);
            console.log("Clicking Login Button");
            $("div#login > input").click();
        //}
        dfdNextRun.resolve();
    }
    function page_GUARD() {
        // Do nothing on the guard screen
        dfdNextRun.resolve();
    }
    function page_CHARSELECT() {
		ToggleSound();
	
        for(i=0; i < (charSettings.length/settings["charcount"]); i++) {
            j = i + (charcurrent*charSettings.length/settings["charcount"]);
            settings[charSettings[j].name.replace(new RegExp(charcurrent+"$"),'')] = settings[charSettings[j].name]
        }
        
        // Select the character if it is set
        var charname = settings["nw_charname"+charcurrent];
        if(charname.length) {
            $(".char-list-name").filter(function( index ) { return $( this ).text() === settings["nw_charname"] } ).click();
        }
        dfdNextRun.resolve();
    }
    function page_FRONTPAGE() {
        // Click the professions tab
        $("a.professions").click();
        dfdNextRun.resolve();
    }
    function page_PROFESSIONS() {
		ToggleSound();
        
        //debugger;
		
		// check selected character is expected
    	if($("span.name-char").text() != settings["nw_charname"+charcurrent]) {
    	    console.log("Incorrect character loaded. Switching characters...");
    	    switchChar();
    	    return;
    	}
		
        // Switch to overview
        $("a.professions-overview").click();
        WaitForState("").done(function() {
            // List the buttons on the overview
            var completedSlotButtons = $("div.panel-content button").filter(":contains('Collect Result')").filter(":visible");
            var openSlotButtons = $("div.panel-content button").filter(":contains('Choose Task')").filter(":visible");
            
            // See if there are any completed tasks on the overview
            if(completedSlotButtons.length) {
                completedSlotButtons[0].click();
                WaitForState("div.professions-rewards-modal button:contains('Collect Result')").done(function() {
                    $("div.professions-rewards-modal button:contains('Collect Result')").click();
                    WaitForState("").done(function() {
                        dfdNextRun.resolve(delayShort);
                    });
                });
            }
            // See if there are any open tasks on the overview
            else if(openSlotButtons.length) {
                var foundTask = false;
                // Go through the professions to assign tasks until specified slots filled
                for (var i = 0; i < tasklist.length; i++) {
                    var currentTasks = $("div.professions-slot-icon." + tasklist[i].taskName);
                    if(currentTasks.length < settings[tasklist[i].taskName + charcurrent]) {
                        foundTask = true;
                        openSlotButtons[0].click();
                        WaitForState("div#content_professions:visible").done(function() {
                            // Switch to correct type
                            $("a.professions-" + tasklist[i].taskName).click();
                            WaitForState("").done(function() {
                                createNextTask(tasklist[i], 0, dfdNextRun);
                            });
                        });
                        break;
                    }
                }
                if(!foundTask) {
                    console.log("All task counts assigned");
                    switchChar();
                }
            }
            else {
                console.log("Nothing to do");
                switchChar();
            }
        });
    }

    /**
     * Iterative approach to finding the next task to assign to an open slot.
     *
     * @param {Array} list The list of task names to try in order of precedence
     * @param {int} i The current attempt number. Will try to find the i'th task.
     * @param {Deferred} dff The deffered object to resolve when a task is found or if all tasks were not found
     */
    function createNextTask(prof, i, dff) {
        // Check level
        var level = parseInt($("a.professions-"+prof.taskName).closest("span").prevAll("div:first").find("span").text(), 10);
        console.log(prof.taskName, "is level", level);
        var list = prof.level[level];
        console.log("createNextTask", list.length, i);
        if(list.length <=i) {
            console.log("Nothing Found");
            dff.resolve();
            return;
        }

        var taskName = list[i];
        console.log("Searching for task:", taskName);
        var task = SearchForTaskByName(taskName, prof.taskName, level);
        if(task == null) {
            console.log("Skipping task selection to purchase resources");
            dff.resolve();
            return;
        }
        if(task) {
            console.log('Task Found');
            task.click();
            WaitForState("div.page-professions-taskdetails").done(function() {
                // Click all buttons and select an item to use in the slot
                var def = $.Deferred();
                var buttonList = $("h3:contains('Optional Assets:')").closest("div").find("button");
                if(buttonList.length && settings["optionals"]) {
                    SelectItemFor(buttonList, 0, def, prof);
                }
                else {
                    def.resolve();
                }
                def.done(function() {
                    // All items are populated
                    console.log("Items Populated");
                    // Click the Start Task Button
                    //Get the start task button if it is enabled
                    var enabledButton = $("div.footer-body > div.input-field.button:not('.disabled') > button:contains('Start Task')");
                    if(enabledButton.length) {
                        console.log("Clicking Start Task Button");
                        enabledButton.click();
                        WaitForState("").done(function() {
                            // Done
                            dff.resolve(delayShort);
                        });
                    }
                    else { // Button not enabled, something required was probably missing
                        // Go back
                        $("div.footer-body > div.input-field.button > button:contains('Back')").click();
                        WaitForState("").done(function() {
                            // continue with the next one
                            console.log('Finding next task');
                            createNextTask(prof, i+1, dff);
                        });
                    }
                });
            });
        }
        else {
            console.log('Finding next task');
            createNextTask(prof, i+1, dff);
        }
    }
    
    /**
     * Selects the highest level asset for the i'th button in the list. Uses an iterative approach
     * in order to apply a sufficient delay after the asset is assigned
     *
     * @param {Array} The list of buttons to use to click and assign assets for
     * @param {int} i The current iteration number. Will select assets for the i'th button
     * @param {Deferred} jQuery Deferred object to resolve when all of the assets have been assigned
     */
    function SelectItemFor(buttonListIn, i, def, prof) {
        buttonListIn[i].click();
        WaitForState("").done(function() {
            var specialItems = $("div.modal-item-list a.Special");
            var goldItems = $("div.modal-item-list a.Gold");
            var silverItems = $("div.modal-item-list a.Silver");
            var bronzeItems = $("div.modal-item-list a.Bronze");
            var clicked = false;

            // Try to avoid using up higher rank assets needlessly
            if(prof.taskName === "Leadership") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Mercenary')");
                var guards = $("div.modal-item-list a.Bronze:contains('Guard')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Footman')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Tailoring") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Weaver')");
                var guards = $("div.modal-item-list a.Bronze:contains('Outfitter')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Tailor')");
 

                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Weaponsmithing") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Smelter')");
                var guards = $("div.modal-item-list a.Bronze:contains('Grinder')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Weaponsmith')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Platesmithing") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Miner')");
                var guards = $("div.modal-item-list a.Bronze:contains('Armorer')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Platesmith')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Mailsmithing") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Prospector')");
                var guards = $("div.modal-item-list a.Bronze:contains('Blacksmith')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Mailsmith')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Leatherworking") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Skinner')");
                var guards = $("div.modal-item-list a.Bronze:contains('Tanner')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Leatherworker')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Artificing") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Carver')");
                var guards = $("div.modal-item-list a.Bronze:contains('Engraver')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Artificer')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }
            else if(prof.taskName === "Alchemy") {
                var mercenarys = $("div.modal-item-list a.Bronze:contains('Apothecary')");
                var guards = $("div.modal-item-list a.Bronze:contains('Mixologist')");
                var footmen = $("div.modal-item-list a.Bronze:contains('Assistant Alchemist')");
 
                if(mercenarys.length)   { clicked = true; mercenarys[0].click(); }
                else if(guards.length)  { clicked = true; guards[0].click(); }
                else if(footmen.length) { clicked = true; footmen[0].click(); }
            }

            if (!clicked) {
                // Click the highest slot
                if(specialItems.length)     { specialItems[0].click(); }
                else if(goldItems.length)   { goldItems[0].click(); }
                else if(silverItems.length) { silverItems[0].click(); }
                else if(bronzeItems.length) { bronzeItems[0].click(); }
                else { $("button.close-button").click(); }
            }

            console.log("Clicked item");
            WaitForState("").done(function() {
                // Get the new set of select buttons created since the other ones are removed when the asset loads
                var buttonList = $("h3:contains('Optional Assets:')").closest("div").find("button");
                if(i < buttonList.length - 1) {
                    SelectItemFor(buttonList, i+1, def, prof);
                }
                else {
                    // Let main loop continue
                    def.resolve();
                }
            });
        });
    }
    
    /**
     * Given a task name and that the search pane is active, will attempt to search for the given task
     * and return the button element if the level and resource criteria are met.
     *
     * @param {String} taskname The name of the task to search within the search pane for
     */
    function SearchForTaskByName(taskname, profName, profLevel) {
        var tasklevel = 0;
        if(taskname.indexOf(":") > -1) {
            // split task with level requirement
            tasklevel=taskname.split(":",2)[0];
            taskname=taskname.split(":",2)[1];
        }
        // Filter the results
        var filterDiv = $("div#tasklist_filter input");
        console.log("Searching for:", taskname);
        filterDiv.val(taskname);
        filterDiv.keyup();
        
        // Find the result
        var taskTitle = $("table#tasklist tr h4 span").filter(function() {
            return $(this).text() === taskname;
        });
        if(taskTitle.length) {
            for (var i = 0; i < taskTitle.length; i++) {
                if(($(taskTitle[i]).closest("div.task-list-entry").find("div.task-rewards div.Gold").length || $(taskTitle[i]).closest("div.task-list-entry").find("div.task-rewards div.Special").length)
                   && profName != "Leadership" && profName != "Alchemy" && settings["excluderare"]) {
                    // Avoid rare tasks unless profession is Leadership
                    console.log("Avoiding rare craft: ", taskname);
                }
                else if($(taskTitle[i]).closest("div.higherlevel").length) {
                    // Too high level
                    console.log("Task level is too high: ", taskname);
                }
                else if(tasklevel > 0 && $(taskTitle[i]).closest("div").find("span.level-pip").text() != tasklevel) {
                    // Task level doesn't match
                    console.log("Task level does not match requirement: ", taskname, tasklevel);
                }
                else if($(taskTitle[i]).closest("div.unmet").length) {
                    // Check for required ingredients
                    console.log("Checking for craftable ingredients for", taskname);
                    var requires = $(taskTitle[i]).closest("div.unmet").find("div.task-requirements div.icon-slot.red").filter("[data-tt-item]");
                    for (var j = 0; j < requires.length; j++) {
                        var ingName = $(requires[j]).attr("data-tt-item");
                        console.log("Found", ingName);
                        var searchStr = ingName;
        
                        // Specify task search string depending on type of ingredient required
                        // Add here any ingredient types you want to check tasks for
                        
                        // Resources
                        if     (ingName.indexOf("Resource_Charcoal")         > -1
                             || ingName.indexOf("Resource_Rocksalt")         > -1
                             || ingName.indexOf("Resource_Spool_Thread")     > -1
                             || ingName.indexOf("Resource_Porridge")         > -1
                             || ingName.indexOf("Resource_Solvent")          > -1
                             || ingName.indexOf("Resource_Brimstone")        > -1
                             || ingName.indexOf("Resource_Coal")             > -1
                             || ingName.indexOf("Resource_Moonseasalt")      > -1
                             || ingName.indexOf("Resource_Quicksilver")      > -1
                             || ingName.indexOf("Resource_Spool_Threadsilk") > -1) {
                            if (settings["autopurchase"]) {
                                BuyResource(ingName);
                                return null;
                            }
                            else {
                                console.log("Auto resource purchasing disabled");
                                continue;
                            }
                        }
						
						//Gather/craft using non-mass methods (when making items)
                        else if((ingName.indexOf("Resource_Wood_Carved")      > -1
                             || ingName.indexOf("Resource_Ornaments")        > -1
                             || ingName.indexOf("Resource_Weapon")           > -1)
							 && settings.enablemass == '0') { searchStr = "Craft"; }
                        else if((ingName.indexOf("Resource_Pelt")             > -1
                             || ingName.indexOf("Resource_Wood")             > -1
                             || ingName.indexOf("Resource_Ore")              > -1
                             || ingName.indexOf("Resource_Clothscraps")      > -1)
							 && settings.enablemass == '0') { searchStr = "Gather"; }
                        else if((ingName.indexOf("Resource_Leather")          > -1)
							 && settings.enablemass == '0') { searchStr = "Cure Pelt"; }
                        else if((ingName.indexOf("Resource_Rings")            > -1)
							 && settings.enablemass == '0') { searchStr = "Forge Ring"; }
                        else if((ingName.indexOf("Resource_Clothbolt")        > -1)
							 && settings.enablemass == '0') { searchStr = "Weave Cloth"; }
                        else if((ingName.indexOf("Resource_Ingot")            > -1)
							 && settings.enablemass == '0') { searchStr = "Forge Plate"; }
                        
						// Mass gathering / crafting above level 14 only (for levelling)
                        else if(
                             (ingName.indexOf("Resource_Pelt")             > -1
                             || ingName.indexOf("Resource_Wood")             > -1
                             || ingName.indexOf("Resource_Ore")              > -1
                             || ingName.indexOf("Resource_Clothscraps")      > -1)
                             && ( profLevel < 14 || profName == "Alchemy" ) && settings.enablemass == '1' ) { searchStr = "Gather"; }
                        else if(
                             (ingName.indexOf("Resource_Pelt")             > -1
                             || ingName.indexOf("Resource_Wood")             > -1
                             || ingName.indexOf("Resource_Ore")              > -1)
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Deep Wilderness Gathering"; }
                        else if( ingName.indexOf("Resource_Clothscraps")      > -1
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Intensive Scrap Gathering"; }
                        else if(
                             (ingName.indexOf("Resource_Wood_Carved")      > -1
                             || ingName.indexOf("Resource_Ornaments")        > -1
                             || ingName.indexOf("Resource_Weapon")           > -1)
                             && profLevel < 14 && settings.enablemass == '1' ) { searchStr = "Craft"; }
                        else if(
                             (ingName.indexOf("Resource_Wood_Carved")      > -1
                             || ingName.indexOf("Resource_Ornaments")        > -1
                             || ingName.indexOf("Resource_Weapon")           > -1)
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Mass Craft"; }
                        else if(ingName.indexOf("Resource_Leather")          > -1
                             && profLevel < 14 && settings.enablemass == '1' ) { searchStr = "Cure Pelt"; }
                        else if(ingName.indexOf("Resource_Leather")          > -1
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Mass Curing"; }
                        else if(ingName.indexOf("Resource_Rings")            > -1
                             && profLevel < 14 && settings.enablemass == '1' ) { searchStr = "Forge Ring"; }
                        else if(ingName.indexOf("Resource_Rings")            > -1
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Mass Ring Forging"; }
                        else if(ingName.indexOf("Resource_Clothbolt")        > -1
                             && profLevel < 14 && settings.enablemass == '1' ) { searchStr = "Weave Cloth"; }
                        else if(ingName.indexOf("Resource_Clothbolt")        > -1
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Mass Weaving"; }
                        else if(ingName.indexOf("Resource_Ingot")            > -1
                             && profLevel < 14 && settings.enablemass == '1' ) { searchStr = "Forge Plate"; }
                        else if(ingName.indexOf("Resource_Ingot")            > -1
                             && profLevel >= 14 && settings.enablemass == '1' ) { searchStr = "Mass Plate Forging"; }
							 
						else if((ingName.indexOf("Resource_Wood_Carved")      > -1
                             || ingName.indexOf("Resource_Ornaments")        > -1
                             || ingName.indexOf("Resource_Weapon")           > -1)
							 && settings.enablemass == '2') { searchStr = "Mass Craft"; }
                        else if((ingName.indexOf("Resource_Pelt")             > -1
                             || ingName.indexOf("Resource_Wood")             > -1
                             || ingName.indexOf("Resource_Ore")              > -1)
							 && settings.enablemass == '2') { searchStr = "Deep Wilderness Gathering"; }
                        else if((ingName.indexOf("Resource_Clothscraps")      > -1)
							 && settings.enablemass == '2') { searchStr = "Intensive Scrap Gathering"; }
                        else if((ingName.indexOf("Resource_Leather")          > -1)
							 && settings.enablemass == '2') { searchStr = "Mass Curing"; }
                        else if((ingName.indexOf("Resource_Rings")            > -1)
							 && settings.enablemass == '2') { searchStr = "Mass Ring Forging"; }
                        else if((ingName.indexOf("Resource_Clothbolt")        > -1)
							 && settings.enablemass == '2') { searchStr = "Mass Weaving"; }
                        else if((ingName.indexOf("Resource_Ingot")            > -1)
							 && settings.enablemass == '2') { searchStr = "Mass Plate Forging"; }
                        
                        // Alchemy
                        else if(ingName.indexOf("Aquavitae")                 > -1) { searchStr = "Aqua Vitae"; }
                        else if(ingName.indexOf("Aquaregia")                 > -1) { searchStr = "Aqua Regia"; }
                        else if(ingName.indexOf("Vitriol")                   > -1) { searchStr = "Vitriol Extraction"; }
                        else if(ingName.indexOf("Potion")                    > -1) { searchStr = ingName.replace(/Potion_/,"").replace(/_[0-9]+$/,""); }
                        
                        // Shirts
                        else if(ingName.indexOf("Chain_Shirt")               > -1) { searchStr = "Chain Shirt"; }
                        else if(ingName.indexOf("Scale_Shirt")               > -1
                             || ingName.indexOf("Med_Armorsmithing_Shirt")   > -1) { searchStr = "Scale Shirt"; }
                        else if(ingName.indexOf("Shirt")                     > -1) { searchStr = "Shirt"; }
                        
                        // Pants
                        else if(ingName.indexOf("Chain_Pants")               > -1) { searchStr = "Chain Pants"; }
                        else if(ingName.indexOf("Scale_Pants")               > -1
                             || ingName.indexOf("Med_Armorsmithing_Pants")   > -1) { searchStr = "Scale Pants"; }
                        else if(ingName.indexOf("Pants")                     > -1) { searchStr = "Pants"; }

                        // Armor
                        else if(ingName.indexOf("T1_Chain_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("T2_Chain_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("Chain_Armor")               > -1) { searchStr = "Chain Armor"; }
                        else if(ingName.indexOf("T1_Scale_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("T2_Scale_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("Scale_Armor")               > -1) { searchStr = "Scale Armor"; }
                        else if(ingName.indexOf("T1_Cloth_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("T2_Cloth_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("Cloth_Armor")               > -1) { searchStr = "Cloth Robes"; }
                        else if(ingName.indexOf("T1_Leather_Armor")          > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("T2_Leather_Armor")          > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("Leather_Armor")             > -1) { searchStr = "Leather Armor"; }
                        else if(ingName.indexOf("T1_Plate_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("T2_Plate_Armor")            > -1) { searchStr = "Skip Me"; }
                        else if(ingName.indexOf("Plate_Armor")               > -1) { searchStr = "Plate Armor"; }

                        // Helms
                        else if(ingName.indexOf("Chain_Helm")                > -1) { searchStr = "Chain Helm"; }
                        else if(ingName.indexOf("Med_Armorsmithing_T2_Helm") > -1) { searchStr = "Scale Helm"; }
                        else if(ingName.indexOf("Tailoring_T2_Helm")         > -1) { searchStr = "Cloth Cap"; }
                        else if(ingName.indexOf("Helm")                      > -1) { searchStr = "Helm"; }

                        // Arms
                        else if(ingName.indexOf("T1_Chain_Gloves")           > -1) { searchStr = "Chain Gloves +1"; }
                        else if(ingName.indexOf("T2_Chain_Gloves")           > -1) { searchStr = "Chain Gloves +2"; }
                        else if(ingName.indexOf("Chain_Gloves")              > -1) { searchStr = "Chain Gloves"; }
                        else if(ingName.indexOf("T1_Scale_Gloves")           > -1) { searchStr = "Scale Gauntlets +1"; }
                        else if(ingName.indexOf("T2_Scale_Gloves")           > -1) { searchStr = "Scale Gauntlets +2"; }
                        else if(ingName.indexOf("Scale_Gloves")              > -1) { searchStr = "Scale Gauntlets"; }
                        else if(ingName.indexOf("T1_Cloth_Gloves")           > -1) { searchStr = "Cloth Sleeves +1"; }
                        else if(ingName.indexOf("T2_Cloth_Gloves")           > -1) { searchStr = "Cloth Sleeves +2"; }
                        else if(ingName.indexOf("Cloth_Gloves")              > -1) { searchStr = "Cloth Sleeves"; }
                        else if(ingName.indexOf("T1_Leather_Gloves")         > -1) { searchStr = "Leather Gloves +1"; }
                        else if(ingName.indexOf("T2_Leather_Gloves")         > -1) { searchStr = "Leather Bracers +2"; }
                        else if(ingName.indexOf("Leather_Gloves")            > -1) { searchStr = "Leather Bracers"; }
                        else if(ingName.indexOf("T1_Plate_Gloves")           > -1) { searchStr = "Plate Gauntlets +1"; }
                        else if(ingName.indexOf("T2_Plate_Gloves")           > -1) { searchStr = "Plate Gauntlets +2"; }
                        else if(ingName.indexOf("Plate_Gloves")              > -1) { searchStr = "Plate Gauntlets"; }

                        // Boots
                        else if(ingName.indexOf("T1_Chain_Boots")            > -1) { searchStr = "Chain Boots +1"; }
                        else if(ingName.indexOf("T2_Chain_Boots")            > -1) { searchStr = "Chain Boots +2"; }
                        else if(ingName.indexOf("Chain_Boots")               > -1) { searchStr = "Chain Boots"; }
                        else if(ingName.indexOf("T1_Scale_Boots")            > -1) { searchStr = "Scale Boots +1"; }
                        else if(ingName.indexOf("T2_Scale_Boots")            > -1) { searchStr = "Scale Boots +2"; }
                        else if(ingName.indexOf("Scale_Boots")               > -1) { searchStr = "Scale Boots"; }
                        else if(ingName.indexOf("T1_Cloth_Boots")            > -1) { searchStr = "Cloth Boots +1"; }
                        else if(ingName.indexOf("T2_Cloth_Boots")            > -1) { searchStr = "Cloth Boots +2"; }
                        else if(ingName.indexOf("Cloth_Boots")               > -1) { searchStr = "Cloth Boots"; }
                        else if(ingName.indexOf("T1_Leather_Boots")          > -1) { searchStr = "Leather Boots +1"; }
                        else if(ingName.indexOf("T2_Leather_Boots")          > -1) { searchStr = "Leather Boots +2"; }
                        else if(ingName.indexOf("Leather_Boots")             > -1) { searchStr = "Leather Boots"; }
                        else if(ingName.indexOf("T1_Plate_Boots")            > -1) { searchStr = "Plate Boots +1"; }
                        else if(ingName.indexOf("T2_Plate_Boots")            > -1) { searchStr = "Plate Boots +2"; }
                        else if(ingName.indexOf("Plate_Boots")               > -1) { searchStr = "Plate Boots"; }

                        // Daggers
                        else if(ingName.indexOf("T2_Dagger_3")               > -1) { searchStr = "Dagger +3"; }
                        else if(ingName.indexOf("T2_Dagger_2")               > -1) { searchStr = "Dagger +2"; }
                        else if(ingName.indexOf("T1_Dagger_1")               > -1) { searchStr = "Dagger +1"; }

                        // Icons
                        else if(ingName.indexOf("T3_Icon_Virtuous_4")        > -1) { searchStr = "Virtuous Icon +4"; }
                        else if(ingName.indexOf("T2_Icon_Virtuous_3")        > -1) { searchStr = "Virtuous Icon +3"; }
                        else if(ingName.indexOf("T1_Icon_Virtuous_2")        > -1) { searchStr = "Virtuous Icon +2"; }
                        else if(ingName.indexOf("T1_Icon_Virtuous_1")        > -1) { searchStr = "Virtuous Icon +1"; }

                        // Shields
                        else if(ingName.indexOf("T2_Shield")                 > -1) { searchStr = "Steel Shield"; }
                        else if(ingName.indexOf("T1_Shield")                 > -1) { searchStr = "Iron Shield"; }
            
                        else {
                            console.log("Found unhandled ingredient", ingName);
                            continue;
                        }
        
                        console.log("Searching for tasks for:", searchStr);
                        filterDiv.val(searchStr);
                        filterDiv.keyup();
                        // Find the ingredient task
                        var ingTaskIcon = $("table#tasklist div.task-rewards div.icon-slot").filter(function() {
                            return $(this).attr("data-tt-item") === ingName;
                        });
        
                        // Check ingredient task for requirements and return task if valid
                        if (ingTaskIcon.length) {
                            for (var k = 0; k < ingTaskIcon.length; k++) {
                                var ingTitle = $($(ingTaskIcon[k]).closest("div.task-list-entry").find("h4 span")).text();
                                var ingLevel = $($(ingTaskIcon[k]).closest("div.task-list-entry").find("span.level-pip")).text();
                                
                                if(ingLevel > profLevel){ continue; }
                                
                                console.log("Found ingredient task",ingTitle);
                                // Skip batch potion tasks
                                if(ingTitle.indexOf("Batch ") == 0) { continue; }
                                // Skip mass production tasks for levels lower than 14
                                if( ingTitle.indexOf("Mass ") == 0 && ( profLevel < 14 || profName == "Alchemy" ) ) { continue; }
                                // Skip deep gathering tasks for levels lower than 14
                                if( ingTitle.indexOf("Deep ") == 0 && ( profLevel < 14 || profName == "Alchemy" ) ) { continue; }
                                // Skip intensive gathering tasks for levels lower than 14
                                if( ingTitle.indexOf("Intensive ") == 0 && profLevel < 14 ) { continue; }
                                
                                // Search for correct level task for same named Artificing gather tasks
                                if(ingTitle.indexOf("Gather Ore and Wood") > -1 || ingTitle.indexOf("Craft Ornamental metal and Carved Wood") > -1) {
                                    if     (ingName.indexOf("_T1") > -1) { ingTitle = "1:" + ingTitle; }
                                    else if(ingName.indexOf("_T2") > -1) { ingTitle = "7:" + ingTitle; }
                                    else if(ingName.indexOf("_T3") > -1) { ingTitle = "14:" + ingTitle; }
                                }
                                                                
                                var ingTask = SearchForTaskByName(ingTitle, profName, profLevel);
                                console.log("Requesting required ingredient task", ingTitle);
                                return ingTask;
                            }
                        }
                        else { console.log("No ingredient tasks available:", taskname); }
                    }
                    
                    // Not enough resources
                    console.log("Not enough resources:", taskname);
                }
                else {
                    return $(taskTitle[i]).closest("tr").find("button");
                }
            }
            console.log("No valid tasks found:", taskname);
        }
        return false;
    }
    
    /**
     * Will buy a given purchasable resource
     *
     * @param {String} item The data-tt-item id of the Resource to purchase
     */
    function BuyResource(item) {
        console.log("Purchasing resources:", item);
        // Switch to overview
        $("a.professions-overview").click();
        WaitForState("").done(function() {
            // Enter resource shop
            $("button").filter(function() { return $(this).attr("data-url") === "/professions/vendor"; }).click();
            WaitForState("ul.vendor-group.resources li.vendor-entry div").done(function() {
                // Get shop section for required item
                var shopItem = $("ul.vendor-group.resources li.vendor-entry div").filter(function() {
                    return $(this).attr("data-tt-item") === item;
                }).closest("li");
                shopItem.find("button").click();
                WaitForState("input[name='inventoryBuyQty']").done(function() {
                    // Set purchase amount to 100 and buy
                    $("input[name='inventoryBuyQty']").val(100);
                    $("button:contains('OK')").click();
                    console.log("Resources purchased");
                    // Close the notification that never times out
                    WaitForState("button.closeNotification").done(function() {
                        $("button.closeNotification").click();
                    });
                });
            });
        });
    }
    
    function switchChar(refine) {
        //debugger;
        
        var last_ad = GM_getValue("ad_last" + charcurrent, 0);
        if(typeof last_ad == "string"){
            last_ad = new Date(last_ad);
			if(last_ad < new Date(new Date() - 60*60*1000)){
				return;
			}
		}
        
        if (settings["refinead"] && !refine) {
            console.log("Refining AD");
            GM_setValue("ad_last" + charcurrent, new Date());
            $("a.inventory").click();
            WaitForState("div.inventory-container").done(function() {
                if($("span.bag-currency-button button").attr('disabled') !== "disabled"){
                	$("span.bag-currency-button button").click();
                }
                $("a.professions").click();
                switchChar(true);
            });
        }
        else {
			if(settings["charcount"] > 1){
				console.log("Switching Characters");
				if (++charcurrent >= settings["charcount"]) { charcurrent = 0; }
				GM_setValue("charcurrent", charcurrent);
				$('a[data-url-silent$="characterselect/modal"]').click();
				WaitForState("div.page-characterselect:visible").done(function() { page_CHARSELECT(); });
			} else {
				WaitForState("div.page-professions-main").done(function(){ page_PROFESSIONS();});
			}
        }
    }
    
    /**
     * Waits for the loading symbol to be hidden.
     *
     * @return {Deferred} A jQuery defferred object that will be resolved when loading is complete
     */
    function WaitForLoad() {
        return WaitForState("");
    }
    /**
     * Creates a deferred object that will be resolved when the state is reached
     *
     * @param {string} query The query for the state to wait for
     * @return {Deferred} A jQuery defferred object that will be resolved when the state is reached
     */
    function WaitForState(query) {
        var dfd = $.Deferred();
        window.setTimeout(function() {AttemptResolve(query, dfd);}, delayShort); // Doesn't work without a short delay
        return dfd;
    }
    /**
     * Will continually test for the given query state and resolve the given deferred object when the state is reached
     * and the loading symbol is not visible
     *
     * @param {string} query The query for the state to wait for
     * @param {Deferred} dfd The jQuery defferred object that will be resolved when the state is reached
     */
    function AttemptResolve(query, dfd) {
        if((query === "" || $(query).length) && $("div.loading-image:visible").length == 0) {
            dfd.resolve();
        }
        else {
            window.setTimeout(function() {AttemptResolve(query, dfd);}, delayShort); // Try again in a little bit
        }
    }

    /**
     * The main process loop:
     * - Determine which page we are on and call the page specific logic
     * - When processing is complete, process again later
     *   - Use a short timer when something changed last time through
     *   - Use a longer timer when waiting for tasks to complete
     */
    function process() {
        // Make sure the settings button exists
        addSettings();
        // Enable/Disable the unconditional page reload depending on settings
        loading_reset = settings["autoreload"]; 

        // Check if timer is paused
        s_paused = settings["paused"]; // let the Page Reloading function know the pause state
        if(settings["paused"]) {
            // Just continue later - the deferred object is still set and nothing will resolve it until we get past this point
            var timerHandle = window.setTimeout(function() {process();}, delay);
            return;
        } 

        // check for errors
        if($("title").text() == "Error" && settings["autologin"]) {
            console.log("Error detected - relogging");
            unsafeWindow.location.href = "http://gateway.playneverwinter.com";
            return;
        }

        // Check for Gateway down
        if(window.location.href.indexOf("gatewaysitedown") > -1) {
            // Do a long delay and then retry the site
            console.log("Gateway down detected - relogging in " + (longDelay/1000) + " seconds");
            window.setTimeout(function() {unsafeWindow.location.href = "http://gateway.playneverwinter.com";}, longDelay);
            return;
        }

        // Determine which page is displaying
        var currentPage = GetCurrentPage();
             if(currentPage == PAGES.LOGIN)       { page_LOGIN();       }
        else if(currentPage == PAGES.GUARD)       { page_GUARD();       }
        else if(currentPage == PAGES.CHARSELECT)  { page_CHARSELECT();  }
        else if(currentPage == PAGES.FRONTPAGE)   { page_FRONTPAGE();   }
        else if(currentPage == PAGES.PROFESSIONS) { page_PROFESSIONS(); }
		else if(currentPage == PAGES.ERROR)       { unsafeWindow.location.href = "http://gateway.playneverwinter.com"; }
        else                                      { page_DEFAULT();     }

        // Continue again later
        dfdNextRun.done(function(delayTimer) {
            dfdNextRun = $.Deferred();
            timerHandle = window.setTimeout(function() {process();}, typeof delayTimer!== 'undefined' ? delayTimer:delay);
        });
    }

    function addSettings() {
        if($("#settingsButton").length)
            return;
        // Add the required CSS
        AddCss("\
            #settingsButton{border-bottom: 1px solid rgb(102, 102, 102); border-right: 1px solid rgb(102, 102, 102); background: none repeat scroll 0% 0% rgb(238, 238, 238); display: block; position: fixed; overflow: auto; right: 0px; top: 0px; padding: 3px; z-index: 1000;}\
            #pauseButton{border-bottom: 1px solid rgb(102, 102, 102); border-right: 1px solid rgb(102, 102, 102); background: none repeat scroll 0% 0% rgb(238, 238, 238); display: block; position: fixed; overflow: auto; right: 23px; top: 0px; padding: 3px; z-index: 1000;}\
            #settingsPanel{border-bottom: 1px solid rgb(102, 102, 102); border-right: 1px solid rgb(102, 102, 102); background: none repeat scroll 0% 0% rgb(238, 238, 238); color: rgb(0, 0, 0); position: fixed; overflow: auto; right: 0px; top: 0px; width: 350px;max-height:750px;font: 12px sans-serif; text-align: left; display: block; z-index: 1000;}\
            #settings_title{font-weight: bolder; background: none repeat scroll 0% 0% rgb(204, 204, 204); border-bottom: 1px solid rgb(102, 102, 102); padding: 3px;}\
            #settingsPanelButtonContainer {background: none repeat scroll 0% 0% rgb(204, 204, 204); border-top: 1px solid rgb(102, 102, 102);padding: 3px;text-align:center} \
            #settingsPanel label.purple {font-weight:bold;color:#7C37F6}\
            #settingsPanel label.blue {font-weight:bold;color:#007EFF}\
            #settingsPanel label.green {font-weight:bold;color:#8AFF00}\
            #settingsPanel label.white {font-weight:bold;color:#FFFFFF}\
            #charPanel {width:340px;max-height:400px;overflow:auto;display:block;padding:3px;}\
        ");

        // Add settings panel to page body
        $("body").append(
            '<div id="settingsPanel">\
                <div id="settings_title">\
                    <img src='+image_prefs+' style="float: left; vertical-align: text-bottom;"\>\
                    <img id="settings_close" src='+image_close+' title="Click to hide preferences" style="float: right; vertical-align: text-bottom; cursor: pointer; display: block;"\>\
                    <span style="margin:3px">Settings</span>\
                </div>\
                <form style="margin: 0px; padding: 0px">\
                    <ul style="list-style: none outside none; max-height: 500px; overflow: auto; margin: 3px; padding: 0px;">\
                    </ul>\
                </form>\
            </div>'
        );

        // Add each setting input
        var settingsList = $("#settingsPanel form ul");
        for (var i=0;i<settingnames.length;i++) {
            var id = 'settings_' + settingnames[i].name;
            var indent = countLeadingSpaces(settingnames[i].title) * 2;
            switch(settingnames[i].type) {
                case "checkbox":
                    settingsList.append('<li title="'+settingnames[i].tooltip+'" style="margin-left:'+indent+'em"><input style="margin:4px" name="'+id+'" id="'+id+'" type="checkbox" /><label class="'+settingnames[i].class+'" for="'+id+'">'+settingnames[i].title+'</label></li>')
                    $('#'+id).prop('checked', settings[settingnames[i].name]);
                    break;
                case "text":
                    settingsList.append('<li title="'+settingnames[i].tooltip+'" style="margin-left:'+indent+'em"><label class="'+settingnames[i].class+'" for="'+id+'">'+settingnames[i].title+'</label><input style="margin:4px" name="'+id+'" id="'+id+'" type="text" /></li>')
                    $('#'+id).val(settings[settingnames[i].name]);
                    break;
                case "password":
                    settingsList.append('<li title="'+settingnames[i].tooltip+'" style="margin-left:'+indent+'em"><label class="'+settingnames[i].class+'" for="'+id+'">'+settingnames[i].title+'</label><input style="margin:4px" name="'+id+'" id="'+id+'" type="password" /></li>')
                    $('#'+id).val(settings[settingnames[i].name]);
                    break;
                case "select":
                    settingsList.append('<li title="'+settingnames[i].tooltip+'" style="margin-left:'+indent+'em"><label class="'+settingnames[i].class+'" style="padding-left:4px" for="'+id+'">'+settingnames[i].title+'</label><select style="margin:4px" name="'+id+'" id="'+id+'" /></li>')
                    var options = settingnames[i].opts;
                    var select = $('#'+id);
                    for(var j=0;j<options.length;j++) {
                        if(settings[settingnames[i].name] == options[j].path)
                            select.append('<option value="'+options[j].path+'" selected="selected">'+options[j].name+'</option>');
                        else 
                            select.append('<option value="'+options[j].path+'">'+options[j].name+'</option>');
                    }
                    break;
                case "label":
                    settingsList.append('<li title="'+settingnames[i].tooltip+'" style="margin-left:'+indent+'em;><label class="'+settingnames[i].class+'">'+settingnames[i].title+'</label></li>')
                    break; 
            }
        }
        
        // Add character settings for each char
        var addText = '\
            <script type="text/javascript">\
            <!--\
            function click_position(obj)\
            {\
                change_position(obj.value)\
            }\
            \
            function change_position(val)\
            {\
                for(var i = 0; i < '+settings["charcount"]+'; i++)\
                {\
                    document.getElementById("charContainer"+i).style.display="none";\
                }\
                document.getElementById("charContainer"+val).style.display="block";\
            }\
            //-->\
            </script>\
            <div id="charPanel">\
                <div style="width:150px;float:left;max-height:400px;overflow:auto;">\
            ';
        for(var i = 0; i < settings["charcount"]; i++) {
            addText += '\
                    <div><input autocomplete="off" type="radio" name="radio_position" onclick="click_position(this)" id="value_'+i+'" value="'+i+'" /><label for="value_'+i+'">'+settings["nw_charname"+i]+'</label></div>\
                ';
        }
        addText += '\
                </div>\
                <div style="width:170px;float:right;">\
            ';
        for(var i = 0; i < settings["charcount"]; i++) {
            addText += '\
                    <div id="charContainer'+i+'" style="display:none">\
                            <ul style="list-style: none outside none; max-height: 500px; overflow: auto;">\
                ';
            var k = 0 + (i*charSettings.length/settings["charcount"]);
            var id = 'settings_' + charSettings[k].name;
            addText += '<li title="'+charSettings[k].tooltip+'"><input style="margin:4px" name="'+id+'" id="'+id+'" type="text" /></li>';
            for (var j=1; j < (charSettings.length/settings["charcount"]); j++) {
                k = j + (i*charSettings.length/settings["charcount"]);
                id = 'settings_' + charSettings[k].name;
                addText += '<li title="'+charSettings[k].tooltip+'"><input maxlength="2" size="1" style="margin:4px" name="'+id+'" id="'+id+'" type="text" /><label class="'+charSettings[k].class+'" for="'+id+'">'+charSettings[k].title+'</label></li>';
            }
            addText +=         '</ul>\
                    </div>\
                ';
        }
        addText += '</div>\
            </div>\
            ';
        $("#settingsPanel form").append(addText);

        // Add values to character input fields
        for(var i = 0; i < charSettings.length; i++) {
            id = 'settings_' + charSettings[i].name;
              $('#'+id).val(settings[charSettings[i].name]);
        }

        // Add save/cancel buttons to panel
        $("#settingsPanel form").append('\
            <div id="settingsPanelButtonContainer">\
                <input id="settings_save" type="button" value="Save and Apply">\
                <input id="settings_close" type="button" value="Close">\
            </div>');

        // Add open settings button to page
        $("body").append('<div id="settingsButton"><img src="'+image_prefs+'" title="Click to show preferences" style="cursor: pointer; display: block;"></div>');

        // Add pause button to page
        $("body").append('<div id="pauseButton"><img src="'+(settings["paused"]?image_play:image_pause)+'" title="Click to '+(settings["paused"]?"resume":"pause")+' task script" style="cursor: pointer; display: block;"></div>');
        // Add the javascript
        $("#settingsPanel").hide();
        $("#settingsButton").click(function() {
            $("#settingsButton").hide();
            $("#pauseButton").hide();
            $("#settingsPanel").show();
        });
        $("#settings_close,settings_cancel").click(function() {
            $("#settingsButton").show();
            $("#pauseButton").show();
            $("#settingsPanel").hide();
        });
        $("#pauseButton").click(function() {
            settings["paused"] = !settings["paused"]
            GM_setValue("paused", settings["paused"]);
            $("#settings_paused").prop("checked", settings["paused"]);
            $("#pauseButton img").attr("src",(settings["paused"]?image_play:image_pause));
            $("#pauseButton img").attr("title","Click to "+(settings["paused"]?"resume":"pause")+" task script");
        });

        // Use setTimeout to workaround permission issues when calling GM functions from main window
        $("#settings_save").click(function() { setTimeout(function() { SaveSettings();}, 0)});
    }

    function SaveSettings() {
        var charcount = settings["charcount"];

        // Get each value from the UI
        for (var i=0;i<settingnames.length;i++) {
            var name = settingnames[i].name;
            var el = $('#settings_' + name);
            var value = false;
            switch(settingnames[i].type) {
                case "checkbox":
                    value = el.prop("checked");
                    break;
                case "text":
                    value = el.val();
                    break;
                case "password":
                    value = el.val();
                    break;
                case "select":
                    value = el.val();
                    break;
                case "label": // Labels don't have values
                    continue;
            }
            if(typeof(settingnames[i].onsave) === "function") {
                console.log("Calling 'onsave' for", name);
                settingnames[i].onsave(value, settings[name]);
            }
            if(settings[name] !== value) { settings[name] = value; } // Save to local cache
            if(GM_getValue(name) !== value) { GM_setValue(name, value); } // Save to GM cache
        }

        // Get character settings from UI
        for (var i=0;i<charSettings.length;i++) {
            var name = charSettings[i].name;
            var el = $('#settings_' + name);
            var value = el.val();
            if(settings[name] !== value) { settings[name] = value; } // Save to local cache
            if(GM_getValue(name) !== value) { GM_setValue(name, value); } // Save to GM cache
        }
        
        // If character numbers have changed reload page
        if(charcount != settings["charcount"]) {
            console.log("Reloading Gateway to update character count");
            unsafeWindow.location.href = "http://gateway.playneverwinter.com";
            return;
        }

        // Delete all saved settings
        if(settingwipe) {
            var keys = GM_listValues();
            for (var i=0, key=null; key=keys[i]; i++) {
                GM_deleteValue(key);
            }
        }
        
        // Close the panel
        $("#settingsButton").show();
        $("#pauseButton img").attr("src",(settings["paused"]?image_play:image_pause));
        $("#pauseButton img").attr("title","Click to "+(settings["paused"]?"resume":"pause")+" task script");
        $("#pauseButton").show();
        $("#settingsPanel").hide();
    }

    // Add the settings button and start a process timer
    addSettings();
    timerHandle = window.setTimeout(function() {process();}, delayShort);
})();