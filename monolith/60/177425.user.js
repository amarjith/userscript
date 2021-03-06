// ==UserScript==
// @name				Google Image Search Context Menu
// @namespace			lkytal
// @description			Add Search Image context menu
// @version				2.1.0
// @author				lkytal
// @license				GPL
// @description			Popup Search Box for slected Text
// @include				*
// @require				http://code.jquery.com/jquery-2.1.0.min.js
// @grant				GM_openInTab
// ==/UserScript==

if (!("contextMenu" in document.documentElement && "HTMLMenuItemElement" in window)) return;

var body = document.body;
body.addEventListener("contextmenu", initMenu, false);

var menu = body.appendChild(document.createElement("menu"));
menu.outerHTML = '<menu id="userscript-search-by-image" type="context">\
                    <menuitem id="SearchGoogle" label="Search this image"\
                              icon="data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlz\
AAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAEl\
SURBVDiNY/z//z8DJYCRkIKsthv/kRX9Z2BgmFalARdiIcaGKZXqcH5O+01U+ay2G3MYGBiSiXUm\
mofnsBDSjEUTMkiBe2Eq1JnZ7TcZBHhZGNythBl0lLkZODmYGX7++sdw/sZnhl3H3zF8+voHwwsY\
FkR5ijNICLMzTF31hOHnr38MHGxMDJlhMgwv3vxkWL7jJYpaJmzu0lTigWtmYGBg+PHrH8P0VU8Y\
tJV5MNRiNYCfmxmuGQZ+/PrHwMmOqRyrAX///WfgYEOV4mBjwjAUpwHHL31iyA6XgRvCwcbEkBUm\
w3DuxmcMtVgDkYONicHLVoTBSJOXgYONieHHz38Ml+98Ydh88DXDtx//CBtACmBiYGCYS4H+OYyU\
5kasgUgKAADN8WLFzlj9rgAAAABJRU5ErkJggg=="></menuitem>\
				<menuitem id="SearchBaidu" label="Search this Baidu"></menuitem>\
                  </menu>';

document.querySelector("#SearchGoogle").addEventListener("click", searchImage, false); //#userscript-search-by-image menuitem

document.querySelector("#SearchBaidu").addEventListener("click", search_baidu, false); //#userscript-search-by-image menuitem

function initMenu(aEvent) 
{
	// Executed when user right click on web page body
	// aEvent.target is the element you right click on
	var node = aEvent.target;
	//var item = document.querySelector("#userscript-search-by-image menuitem");

	if (node.localName == "img") {
		body.setAttribute("contextmenu", "userscript-search-by-image");
		//item.setAttribute("imageURL", node.src);
		$("#userscript-search-by-image menuitem").attr("imageURL", node.src);
	} 
	else {
		body.removeAttribute("contextmenu");
		//item.removeAttribute("imageURL");
	}
}

function addParamsToForm(aForm, aKey, aValue) 
{
	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", aKey);
	hiddenField.setAttribute("value", aValue);
	aForm.appendChild(hiddenField);
}

function searchImage(aEvent) 
{
	// Executed when user click on menuitem
	// aEvent.target is the <menuitem> element
	var imageURL = aEvent.target.getAttribute("imageURL");

	if (imageURL.indexOf("data:") == 0) 
	{
		var base64Offset = imageURL.indexOf(",");
		if (base64Offset != -1) 
		{
			var inlineImage = imageURL.substring(base64Offset + 1).replace(/\+/g, "-").replace(/\//g, "_").replace(/\./g, "=");

			var form = document.createElement("form");
			form.setAttribute("method", "POST");
			form.setAttribute("action", "//www.google.com.hk/searchbyimage/upload");
			form.setAttribute("enctype", "multipart/form-data");
			form.setAttribute("target", "_blank");
			addParamsToForm(form, "image_content", inlineImage);
			addParamsToForm(form, "filename", "");
			addParamsToForm(form, "image_url", "");
			body.appendChild(form);
			form.submit();
		}
	} 
	else {
		GM_openInTab("http://www.google.com.hk/searchbyimage?image_url=" + encodeURIComponent(imageURL));
	}
}


function search_baidu(aEvent) {
	var imageURL = aEvent.target.getAttribute("imageURL");

	GM_openInTab("http://stu.baidu.com/i?objurl=" + encodeURIComponent(imageURL) + "&filename=&rt=0&rn=10&ftn=searchstu&ct=1&stt=0&tn=shituresult");
}