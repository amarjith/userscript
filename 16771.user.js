// ==UserScript==
// @name          Download Video from YouTube
// @description   adds a link to download flv form YouTube
// @include       *youtube.com/*v=*
// ==/UserScript==


       function getEl(w){
               return document.getElementById(w);
       }

       desc = getEl("a1_i1");
       descP = desc.parentNode;
       dv = document.createElement("a");
       dv.innerHTML="<span class='actionText'>Download</span>";
       dv.setAttribute("rel", "nofollow");
       dv.setAttribute("class", "actionLink");
       dv.href=video_url;
       descP.insertBefore(dv, desc);
