// ==UserScript==
                                // @name           Iceman's Ignore Script
                                // @namespace      Forum
                                // @include        http://goallineblitz.com/game/forum_thread.pl?*
                                // @include        http://goallineblitz.com/game/forum_thread_list.pl?*
                                // ==/UserScript==
                                
                                var list = ['issacar', 'Stafford2Johnson81', 'BigBlackOne69', 'Boltz', 'Taha19', 'Tony Dungy', 'tansien', 'StevenJackson39', 'Club America', 'LittleM', ,'LoveGoose', 'Falcons84', 'dkwon100', 'Oden', 'Bustin 5 Knots', 'jlohnik', 'IIAMLEGEND', 'Phantom_Opera', 'sean5231', 'Flobby', 'David Stern', 'Phil Jackson', 'Lee06', 'Ravenwood', 'MDterpsBBall03', 'Lord Thomas Drake', 'quzur', 'Stutts11T', 'Ahrens858', 'IJesus', 'tortop', 'bid2', 'nlnwalsh', 'RevanX', 'LoperKTHNXBAI', 'Timetoshine', 'SteelCity Mafia', 'Alpha Q', 'titans15', 'icefreeze57', 'JoeFlacco05', 'Sciz', 'DAKING', 'Mr. AdamZona', 'slntkilla', 'Raindeer58', 'kostitsyn', 'Walshy.', 'allnotorious', 'gherman', 'Osmlol', '5STAR', 'GP1', 'Diecy', 'Ted Buckland', 'Jerem Yollar', 'Derekross', 'Greenday4537', 'Beware94', 'krisdaschwab912', 'Homage']
                                
                                function getElementsByClassName(classname, par){
                                   var a=[];
                                   var re = new RegExp('\\b' + classname + '\\b');
                                   var els = par.getElementsByTagName("*");
                                   for(var i=0,j=els.length; i<j; i++){
                                      if(re.test(els[i].className)){
                                         a.push(els[i]);
                                      }
                                   }
                                   return a;
                                };
                                
                                function findName(nameentry) {
                                  for (var i=0; i<list.length; i++)
                                    if (nameentry.innerHTML.indexOf('>' + list[i] + '<', 0)>=0) return 1;
                                  return 0;
                                }
                                
                                function findNameInQuote(nameentry) {
                                  for (var i=0; i<list.length; i++)
                                    if (nameentry.innerHTML.indexOf('Originally posted by <b>' + list[i] + '</b>', 0)>=0) return 1;
                                  return 0;
                                }
                                
                                function findNameInThread(nameentry) {
                                  for (var i=0; i<list.length; i++)
                                    if (nameentry.innerHTML.indexOf('Started by: ' + list[i] + '</', 0)>=0) return 1;
                                  return 0;
                                }
                                
                                function IgnorePosts(par) {
                                   var els = par.getElementsByTagName("*");
                                   for(var i=0,j=els.length; i<j; i++)
                                      if (els[i].className == 'post_user') {
                                         els2 = els[i].getElementsByTagName("*");
                                         for (var m=0, n=els2.length; m<n; m++) 
                                              if (els2[m].className=='user_name' && findName(els2[m])) {
                                                 par.parentNode.removeChild(par);
                                             }
                                       }
                                }
                                
                                function IgnoreQuote(par) {
                                   var els = par.getElementsByTagName("*");
                                   for(var i=0,j=els.length; i<j; i++)
                                      if (els[i].className == 'post_content_container') {
                                         els2 = els[i].getElementsByTagName("*");
                                         for (var m=0, n=els2.length; m<n; m++) 
                                              if (els2[m].className=='post_content' && findNameInQuote(els2[m])) {
                                                 var p1=els2[m].innerHTML.indexOf('<span class="quote">', 0), p2=els2[m].innerHTML.lastIndexOf('</span>'), len=els2[m].innerHTML.length;
                                                 els2[m].innerHTML=els2[m].innerHTML.substring(0, p1) + els2[m].innerHTML.substring(p2+7, len);
                                                 return 0;
                                             }
                                       }
                                }
                                
                                function IgnoreThreads(par) {
                                   var els = par.getElementsByTagName("*");
                                   for(var i=0,j=els.length; i<j; i++)
                                      if (els[i].className == 'thread_title')  {
                                           if (findNameInThread(els[i])) 
                                              par.parentNode.removeChild(par);
                                       }
                                }
                                
                                window.setTimeout( function() {
                                
                                  var url=window.location.toString();
                                  if (url.indexOf("forum_thread.pl",0) >= 0) {
                                
                                    var posts = getElementsByClassName('post content_container', document);
                                    for (var i=0; i<posts.length; i++) 
                                       IgnorePosts(posts[i]);
                                    posts = getElementsByClassName('post content_container', document);
                                    for (var i=0; i<posts.length; i++) 
                                       IgnoreQuote(posts[i]);
                                  }
                                  else if (url.indexOf("forum_thread_list.pl",0) >= 0) {
                                    var threads = getElementsByClassName('alternating_color2 thread thread_new_posts', document);
                                    for (var i=0; i<threads.length; i++) 
                                       IgnoreThreads(threads[i]);
                                    threads = getElementsByClassName('alternating_color2 thread', document);
                                    for (var i=0; i<threads.length; i++) 
                                       IgnoreThreads(threads[i]);
                                
                                  }
                                
                                }, 100);