// ==UserScript==
// @name just testing, please excuse
// ==/UserScript==
/*****************************************************/
// Welcome to BlackHat CodeBreaker, Version 3.0
// This script copyright 2009, BlackHatCodeBreaker.com
// For Personal Use Only:
//   You MAY install it on ALL of your sites and webpages - number is unlimited.
//   You MAY NOT install it on pages not owned by you, or pass it to others for their use.
// Unauthorized duplication, distribution or use are STRICTLY FORBIDDEN.
//
// If you want to profit from reselling the script - You are invited to
// join our Affiliate Program on http://www.blackhatcodebreaker.com/affiliates.html
//
// Enjoy, prosper and profit!
// Brad
// BlackHatCodeBreaker.com
/*****************************************************/
/*USER CUSTOMIZABLE FIELDS */

// 1. TEXT FIELDS (see section 3.3.1 in the manual)
      // HEADLINE
      var blocker_headline = 'Hey, check this out!';

      // INSTRUCTIONAL TEXT ABOVE THE LINKS
      var blocker_instructionalText = 'We don\'t have lame surveys like other websites do. However, video hosting is VERY expensive and we ask you to complete at least one of these offers. Unlike surveys, these WILL TAKE YOU ONLY 5 SECONDS TO COMPLETE!';

      // FOOTER TEXT BELOW THE LINKS
      var blocker_footerText = 'This page will automatically unlock after you fill out one of the above offers. However, please wait up to 30 seconds for the page to unlock after you have completed an offer';

// 2. TIMERS (see section 3.3.2 in the manual)
      // UNLOCKING TIMER, in Seconds
      var timeout_in_seconds_from_click = 45;

      // TEASE TIMER, in Seconds
      var tease_timer = 6;
	
      // COOKIE DURATION, in Days, Hours and Minutes
      var cookie_duration_days = 0;
      var cookie_duration_hours = 0;
      var cookie_duration_minutes = 0;
	
// 3. BASIC CONFIGURATION (see section 3.3.3 in the manual)
      // BHCB FILES PATH 
         // The path to the directory holding all Blackhat Codebreaker files (lock.js, links.txt, goto.php, goto2.php, lock.png etc.)
         // The path must not have more than 90 characters
         // If the files are at the same place as the locked page, use:
         //    var bhcb_files_path = '';
         // If they are at another directory, provide its path
         // For WordPress blogs I recommend using: 
         //    var bhcb_files_path = '/wp-content/plugins/bhcb/';
      var bhcb_files_path = '/lock/';
	
      // HIDE REFERRER ('YES' Hides Referrer, 'NO' Does not hide the referrer)
      var hide_referrer = 'NO';

      // UNLOCK ENTIRE SITE ('YES') OR JUST THIS DIRECTORY ('NO')
      var unlock_entire_site = 'NO';
					
      // TEST MODE ('NO' for operational pages, 'YES' when testing your setup, always return to 'NO' when you finish testing)
      var test_mode = 'NO';

      // BLOCK RIGHT CLICK MENU ('YES' disables right-click menu, 'NO' doesn't disable)
      var block_rightclick_menu = 'YES';
	
// 4. LOOK AND FEEL (see section 3.3.4 in the manual)
      // POSITION AND WIDTH OF LOCK PANEL, in Pixels
      var panel_vertical_position = 100;
      var panel_width = 600;

      // BACKGROUND COLOR AND IMAGE
         // * background_color controls the background color of the lock panel. Value is given in Hex RGB.
         //   For example, background_color = '#FFFF00' Will result in a Yellow background. Default is '#FFFFFF' (White)
         // * border_color controls the color of the lock panel's border. Value is given in Hex RGB. Default is '#CCCCCC' (Light Gray)
         // * background_image is the name of the background image to use in the lock panel. Default is 'lock.png' (the green padlock image)
         // * background_image_repeat specifies (images smaller than the lock panel) whether to repeat the image ('YES') or show it only once ('NO'). Default is 'NO'.
      var background_color = '#FFFFFF';
      var border_color = '#CCCCCC';
      var background_image = 'lock.png';
      var background_image_repeat = 'NO';

      // TEXT COLORS, in Hex RGB.
         // Defaults are: headline_color = '#466805' (GREENISH), instructionalText_color = '#000000' (BLACK) and footerText_color = '#000000' (BLACK)
      var headline_color = '#466805';
      var instructionalText_color = '#000000';
      var footerText_color = '#000000';
      
/*END OF USER CUSTOMIZABLE FIELDS*/
/******************************************************/
var _0x1e50=["\x74\x65\x78\x74\x2F\x78\x6D\x6C","\x6F\x76\x65\x72\x72\x69\x64\x65\x4D\x69\x6D\x65\x54\x79\x70\x65","\x4D\x73\x78\x6D\x6C\x32\x2E\x58\x4D\x4C\x48\x54\x54\x50","\x47\x45\x54","\x6F\x70\x65\x6E","\x73\x65\x6E\x64","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x59\x45\x53","","\x61\x6C\x6C","\x6C\x61\x79\x65\x72\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x77\x68\x69\x63\x68","\x63\x61\x70\x74\x75\x72\x65\x45\x76\x65\x6E\x74\x73","\x6F\x6E\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x6F\x6E\x6D\x6F\x75\x73\x65\x75\x70","\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x72\x65\x74\x75\x72\x6E\x20\x66\x61\x6C\x73\x65","\x6C\x69\x6E\x6B\x73\x2E\x74\x78\x74","\x67\x6F\x74\x6F\x2E\x70\x68\x70","\x6F\x6E\x6C\x6F\x61\x64","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x75\x6E\x6C\x6F\x63\x6B\x65\x64","\x31","\x62\x6C\x6F\x63\x6B\x65\x72\x5F\x69\x6E\x69\x74\x28\x29","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x41\x74","\x2F","\x3F\x66\x70\x3D","\x68\x74\x74\x70\x3A\x2F\x2F","\x6D\x61\x74\x63\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F","\x0A","\x73\x70\x6C\x69\x74","\x4E\x4F","\x3F\x6C\x6E\x3D","\x26\x6C\x6E\x3D","\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x54\x45\x53\x54\x20\x4D\x4F\x44\x45\x20\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x20\x20\x0A\x20\x20\x20\x20\x57\x65\x6C\x63\x6F\x6D\x65\x20\x74\x6F\x20\x42\x6C\x61\x63\x6B\x48\x61\x74\x20\x43\x6F\x64\x65\x42\x72\x65\x61\x6B\x65\x72\x27\x73\x20\x54\x65\x73\x74\x20\x4D\x6F\x64\x65\x21\x0A\x0A\x53\x54\x41\x47\x45\x20\x31\x3A\x20\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x4C\x69\x6E\x6B\x73\x20\x54\x65\x78\x74\x20\x61\x6E\x64\x20\x55\x52\x4C\x73\x2E\x2E\x2E\x0A\x0A\x59\x6F\x75\x20\x68\x61\x76\x65\x20","\x20\x6C\x69\x6E\x6B\x73\x3A","\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x54\x45\x53\x54\x20\x4D\x4F\x44\x45\x20\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x20\x20\x0A\x0A\x53\x54\x41\x47\x45\x20\x31\x3A\x20\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x4C\x69\x6E\x6B\x73\x20\x54\x65\x78\x74\x20\x61\x6E\x64\x20\x55\x52\x4C\x73\x2E\x2E\x2E\x20\x28\x43\x6F\x6E\x74\x69\x6E\x75\x65\x64\x29","\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x54\x45\x53\x54\x20\x4D\x4F\x44\x45\x20\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x20\x20\x0A\x0A\x53\x54\x41\x47\x45\x20\x32\x3A\x20\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x53\x65\x74\x75\x70\x20\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x73\x2E\x2E\x2E","\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x54\x45\x53\x54\x20\x4D\x4F\x44\x45\x20\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x20\x20\x0A\x0A\x53\x54\x41\x47\x45\x20\x33\x3A\x20\x54\x65\x73\x74\x69\x6E\x67\x20\x41\x6C\x6C\x20\x4C\x69\x6E\x6B\x73\x2E\x2E\x2E\x0A\x0A\x59\x6F\x75\x20\x77\x69\x6C\x6C\x20\x6E\x6F\x77\x20\x70\x72\x6F\x63\x65\x65\x64\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x77\x65\x62\x70\x61\x67\x65\x2E\x0A\x49\x74\x20\x73\x68\x6F\x75\x6C\x64\x20\x61\x70\x70\x65\x61\x72\x20\x6C\x6F\x63\x6B\x65\x64\x2E\x0A\x43\x6C\x69\x63\x6B\x20\x61\x6C\x6C\x20\x6C\x69\x6E\x6B\x73\x20\x74\x6F\x20\x74\x65\x73\x74\x20\x74\x68\x61\x74\x20\x74\x68\x65\x79\x20\x6F\x70\x65\x6E\x20\x61\x73\x20\x69\x6E\x74\x65\x6E\x64\x65\x64\x2E\x0A\x0A\x4E\x6F\x74\x65\x20\x74\x68\x61\x74\x20\x77\x68\x69\x6C\x65\x20\x69\x6E\x20\x54\x65\x73\x74\x20\x4D\x6F\x64\x65\x20\x63\x6C\x69\x63\x6B\x69\x6E\x67\x20\x6C\x69\x6E\x6B\x73\x20\x57\x49\x4C\x4C\x20\x72\x65\x64\x69\x72\x65\x63\x74\x20\x79\x6F\x75\x0A\x62\x75\x74\x20\x57\x49\x4C\x4C\x20\x4E\x4F\x54\x20\x75\x6E\x6C\x6F\x63\x6B\x20\x74\x68\x65\x20\x70\x61\x67\x65\x2E\x0A\x54\x68\x69\x73\x20\x77\x61\x73\x20\x73\x65\x74\x20\x73\x6F\x20\x74\x68\x61\x74\x20\x79\x6F\x75\x20\x77\x69\x6C\x6C\x20\x6E\x6F\x74\x20\x68\x61\x76\x65\x20\x74\x6F\x20\x63\x6C\x65\x61\x72\x20\x63\x6F\x6F\x6B\x69\x65\x73\x0A\x65\x76\x65\x72\x79\x20\x74\x69\x6D\x65\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x63\x68\x65\x63\x6B\x20\x74\x68\x65\x20\x6C\x69\x6E\x6B\x73\x2E\x0A\x0A\x2A\x2A\x2A\x2A\x20\x44\x4F\x20\x4E\x4F\x54\x20\x46\x4F\x52\x47\x45\x54\x20\x54\x4F\x20\x43\x41\x4E\x43\x45\x4C\x20\x54\x45\x53\x54\x20\x4D\x4F\x44\x45\x0A\x2A\x2A\x2A\x2A\x20\x42\x45\x46\x4F\x52\x45\x20\x53\x45\x4E\x44\x49\x4E\x47\x20\x54\x52\x41\x46\x46\x49\x43\x20\x54\x4F\x20\x59\x4F\x55\x52\x20\x50\x41\x47\x45\x21\x0A\x2A\x2A\x2A\x2A\x20\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x74\x65\x73\x74\x5F\x6D\x6F\x64\x65\x20\x3D\x20\x27\x4E\x4F\x27\x29","\x45\x52\x52\x4F\x52\x3A\x20\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x6E\x6F\x20\x6C\x69\x6E\x6B\x73\x21\x20\x43\x68\x65\x63\x6B\x20\x79\x6F\x75\x72\x20\x6C\x69\x6E\x6B\x73\x2E\x74\x78\x74\x20\x66\x69\x6C\x65\x21","\x0A\x0A\x54\x65\x78\x74\x20","\x20\x2D\x20","\x0A\x55\x52\x4C\x20\x20","\x0A\x0A\x28\x43\x6F\x6E\x74\x69\x6E\x75\x65\x64\x20\x6F\x6E\x20\x6E\x65\x78\x74\x20\x53\x63\x72\x65\x65\x6E\x20\x2D\x20\x43\x6C\x69\x63\x6B\x20\x4F\x4B\x29","\x0A\x0A\x53\x6F\x72\x72\x79\x20\x2D\x20\x54\x65\x73\x74\x20\x4D\x6F\x64\x65\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x42\x6F\x78\x65\x73\x20\x6F\x6E\x6C\x79\x20\x73\x68\x6F\x77\x20\x75\x70\x20\x74\x6F\x20\x31\x30\x20\x6C\x69\x6E\x6B\x73\x2E","\x0A\x0A\x59\x6F\x75\x72\x20\x44\x65\x66\x61\x75\x6C\x74\x20\x4C\x69\x6E\x6B\x20\x57\x68\x65\x6E\x20\x52\x65\x66\x65\x72\x72\x65\x72\x20\x43\x61\x6E\x6E\x6F\x74\x20\x42\x65\x20\x42\x6C\x6F\x63\x6B\x65\x64\x20\x69\x73\x3A\x0A","\x0A\x20","\x0A\x0A\x52\x65\x66\x65\x72\x72\x65\x72\x20\x48\x69\x64\x69\x6E\x67\x20\x69\x73\x3A\x20\x4F\x4E\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x68\x69\x64\x65\x5F\x72\x65\x66\x65\x72\x72\x65\x72\x29","\x0A\x0A\x52\x65\x66\x65\x72\x72\x65\x72\x20\x48\x69\x64\x69\x6E\x67\x20\x69\x73\x3A\x20\x4F\x46\x46\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x68\x69\x64\x65\x5F\x72\x65\x66\x65\x72\x72\x65\x72\x29","\x0A\x0A\x50\x61\x67\x65\x73\x20\x55\x6E\x6C\x6F\x63\x6B\x20","\x20\x53\x65\x63\x6F\x6E\x64\x73\x20\x61\x66\x74\x65\x72\x20\x6C\x69\x6E\x6B\x20\x69\x73\x20\x63\x6C\x69\x63\x6B\x65\x64\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x74\x69\x6D\x65\x6F\x75\x74\x5F\x69\x6E\x5F\x73\x65\x63\x6F\x6E\x64\x73\x5F\x66\x72\x6F\x6D\x5F\x63\x6C\x69\x63\x6B\x29","\x0A\x0A\x50\x61\x67\x65\x73\x20\x53\x74\x61\x79\x20\x55\x6E\x6C\x6F\x63\x6B\x65\x64\x20\x66\x6F\x72\x20","\x20\x44\x61\x79\x73\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x63\x6F\x6F\x6B\x69\x65\x5F\x64\x75\x72\x61\x74\x69\x6F\x6E\x29","\x0A\x0A\x43\x6C\x69\x63\x6B\x69\x6E\x67\x20\x4C\x69\x6E\x6B\x73\x20\x55\x6E\x6C\x6F\x63\x6B\x73\x20\x45\x6E\x74\x69\x72\x65\x20\x53\x69\x74\x65\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x75\x6E\x6C\x6F\x63\x6B\x5F\x65\x6E\x74\x69\x72\x65\x5F\x73\x69\x74\x65\x29","\x0A\x0A\x43\x6C\x69\x63\x6B\x69\x6E\x67\x20\x4C\x69\x6E\x6B\x73\x20\x55\x6E\x6C\x6F\x63\x6B\x73\x20\x43\x75\x72\x72\x65\x6E\x74\x20\x44\x69\x72\x65\x63\x74\x6F\x72\x79\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x75\x6E\x6C\x6F\x63\x6B\x5F\x65\x6E\x74\x69\x72\x65\x5F\x73\x69\x74\x65\x29","\x0A\x0A\x52\x69\x67\x68\x74\x2D\x43\x6C\x69\x63\x6B\x20\x4D\x65\x6E\x75\x20\x69\x73\x20\x42\x6C\x6F\x63\x6B\x65\x64\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x62\x6C\x6F\x63\x6B\x5F\x72\x69\x67\x68\x74\x63\x6C\x69\x63\x6B\x5F\x6D\x65\x6E\x75\x29","\x0A\x0A\x4C\x6F\x63\x6B\x20\x50\x61\x6E\x65\x6C\x20\x50\x6F\x73\x69\x74\x69\x6F\x6E\x20\x69\x73\x20","\x20\x70\x69\x78\x65\x6C\x73\x20\x42\x65\x6E\x65\x61\x74\x68\x20\x54\x6F\x70\x20\x4F\x66\x20\x50\x61\x67\x65\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x70\x61\x6E\x65\x6C\x5F\x76\x65\x72\x74\x69\x63\x61\x6C\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E\x29","\x0A\x0A\x4C\x6F\x63\x6B\x20\x50\x61\x6E\x65\x6C\x20\x57\x69\x64\x74\x68\x20\x69\x73\x20","\x20\x70\x69\x78\x65\x6C\x73\x0A\x28\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x3A\x20\x70\x61\x6E\x65\x6C\x5F\x77\x69\x64\x74\x68\x29","\x73\x63\x72\x6F\x6C\x6C","\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x73\x74\x79\x6C\x65","\x62\x6F\x64\x79","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x68\x74\x6D\x6C","\x68\x69\x64\x64\x65\x6E","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x64","\x62\x6C\x6F\x63\x6B\x65\x72\x5F\x68\x61\x7A\x65","\x66\x69\x6C\x74\x65\x72","\x61\x6C\x70\x68\x61\x28\x6F\x70\x61\x63\x69\x74\x79\x3D\x35\x30\x29","\x6F\x70\x61\x63\x69\x74\x79","\x68\x65\x69\x67\x68\x74","\x31\x30\x30\x25","\x77\x69\x64\x74\x68","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x23\x30\x30\x30","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x74\x6F\x70","\x30\x70\x78","\x6C\x65\x66\x74","\x7A\x49\x6E\x64\x65\x78","\x63\x65\x6E\x74\x65\x72\x50\x61\x6E\x65","\x62\x6C\x6F\x63\x6B\x65\x72\x5F\x63\x65\x6E\x74\x65\x72\x50\x61\x6E\x65","\x70\x78","\x62\x6F\x72\x64\x65\x72","\x35\x70\x78\x20\x73\x6F\x6C\x69\x64\x20","\x35\x30\x25","\x6D\x61\x72\x67\x69\x6E\x4C\x65\x66\x74","\x2D","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x49\x6D\x61\x67\x65","\x75\x72\x6C\x28","\x29","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x52\x65\x70\x65\x61\x74","\x72\x65\x70\x65\x61\x74\x2D\x79\x65\x73","\x6E\x6F\x2D\x72\x65\x70\x65\x61\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x32\x30\x70\x78\x20\x31\x30\x70\x78","\x70\x61\x64\x64\x69\x6E\x67","\x32\x30\x70\x78","\x68\x31","\x63\x6F\x6C\x6F\x72","\x74\x65\x78\x74\x41\x6C\x69\x67\x6E","\x63\x65\x6E\x74\x65\x72","\x66\x6F\x6E\x74\x53\x69\x7A\x65","\x33\x38\x70\x78","\x6D\x61\x72\x67\x69\x6E","\x30\x20\x30\x20\x31\x30\x70\x78\x20\x30","\x38\x70\x78\x20\x30\x20\x30\x20\x30\x70\x78","\x66\x6F\x6E\x74\x46\x61\x6D\x69\x6C\x79","\x61\x72\x69\x61\x6C","\x6C\x69\x6E\x65\x48\x65\x69\x67\x68\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x70","\x32\x30\x70\x78\x20\x30\x20\x32\x30\x70\x78\x20\x30","\x30","\x31\x38\x70\x78","\x75\x6C","\x6C\x69\x73\x74\x53\x74\x79\x6C\x65\x54\x79\x70\x65","\x6E\x6F\x6E\x65","\x6C\x69","\x61","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x31\x34\x70\x78","\x32\x32\x70\x78","\x42\x6C\x75\x65","\x74\x65\x78\x74\x44\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E","\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x74\x61\x72\x67\x65\x74","\x5F\x62\x6C\x61\x6E\x6B","\x74\x65\x78\x74","\x68\x72\x65\x66","\x75\x72\x6C","\x6F\x6E\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72","\x73\x74\x61\x74\x75\x73","\x20","\x6F\x6E\x63\x6C\x69\x63\x6B","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x32\x30\x70\x78\x20\x30\x20\x30\x20\x30","\x31\x33\x70\x78","\x67\x65\x74\x44\x61\x74\x65","\x73\x65\x74\x44\x61\x74\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D\x2F","\x69\x6E\x64\x65\x78\x4F\x66","\x3B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67"];function getFile(_0xabecx2){oxmlhttp=null;try{oxmlhttp= new XMLHttpRequest();oxmlhttp[_0x1e50[1]](_0x1e50[0]);} catch(e){try{oxmlhttp= new ActiveXObject(_0x1e50[2]);} catch(e){return null;} ;} ;if(!oxmlhttp){return null;} ;try{oxmlhttp[_0x1e50[4]](_0x1e50[3],_0xabecx2,false);oxmlhttp[_0x1e50[5]](null);} catch(e){return null;} ;return oxmlhttp[_0x1e50[6]];} ;if(block_rightclick_menu==_0x1e50[7]){var tenth=_0x1e50[8];function ninth(){if(document[_0x1e50[9]]){(tenth);return false;} ;} ;function twelfth(_0xabecx6){if(document[_0x1e50[10]]||(document[_0x1e50[11]]&&!document[_0x1e50[9]])){if(_0xabecx6[_0x1e50[12]]==2||_0xabecx6[_0x1e50[12]]==3){(tenth);return false;} ;} ;} ;if(document[_0x1e50[10]]){document[_0x1e50[13]](Event.MOUSEDOWN);document[_0x1e50[14]]=twelfth;} else {document[_0x1e50[15]]=twelfth;document[_0x1e50[16]]=ninth;} ;document[_0x1e50[16]]= new Function(_0x1e50[17]);} ;var cpa_offer_links_file=_0x1e50[18];var first_goto_file=_0x1e50[19];var cookie_duration=cookie_duration_days+cookie_duration_hours/24.+cookie_duration_minutes/24./60.;var blocker_originalHtmlOverflow;var blocker_originalBodyOverflow;function blocker_addLoadEvent(_0xabecxd){var _0xabecxe=window[_0x1e50[20]];if( typeof window[_0x1e50[20]]!=_0x1e50[21]){window[_0x1e50[20]]=_0xabecxd;} else {window[_0x1e50[20]]=function (){_0xabecxe();_0xabecxd();} ;} ;} ;blocker_addLoadEvent(blocker_pre_init);function blocker_pre_init(){if((blocker_getCookie(_0x1e50[22])==_0x1e50[23])&&(test_mode!=_0x1e50[7])){return ;} ;var _0xabecx10=setTimeout(_0x1e50[24],tease_timer*1000);} ;function blocker_init(){if(bhcb_files_path!=_0x1e50[8]){if(bhcb_files_path[_0x1e50[26]](bhcb_files_path[_0x1e50[25]]-1)!=_0x1e50[27]){bhcb_files_path=bhcb_files_path+_0x1e50[27];} ;cpa_offer_links_file=bhcb_files_path+cpa_offer_links_file;first_goto_file=bhcb_files_path+first_goto_file+_0x1e50[28]+bhcb_files_path;if(!(background_image[_0x1e50[30]](_0x1e50[29]))&&!(background_image[_0x1e50[30]](_0x1e50[31]))&&!(background_image[_0x1e50[30]](bhcb_files_path))){background_image=bhcb_files_path+background_image;} ;} ;var _0xabecx12=getFile(cpa_offer_links_file);var _0xabecx13=_0xabecx12[_0x1e50[33]](_0x1e50[32]);var _0xabecx14=[];var _0xabecx15;var _0xabecx16;if(hide_referrer!=_0x1e50[34]){for(_0xabecx16=0;_0xabecx16<(_0xabecx13[_0x1e50[25]]-3)/2;_0xabecx16++){_0xabecx15=_0xabecx16*2;if(bhcb_files_path==_0x1e50[8]){_0xabecx14[_0xabecx16]={text:_0xabecx13[_0xabecx15],url:first_goto_file+_0x1e50[35]+(_0xabecx16+1).toString()};} else {_0xabecx14[_0xabecx16]={text:_0xabecx13[_0xabecx15],url:first_goto_file+_0x1e50[36]+(_0xabecx16+1).toString()};} ;} ;} else {for(_0xabecx16=0;_0xabecx16<(_0xabecx13[_0x1e50[25]]-3)/2;_0xabecx16++){_0xabecx15=_0xabecx16*2;_0xabecx14[_0xabecx16]={text:_0xabecx13[_0xabecx15],url:_0xabecx13[_0xabecx15+1]};} ;} ;if(test_mode==_0x1e50[7]){var _0xabecx17=_0x1e50[37]+(_0xabecx16).toString()+_0x1e50[38];var _0xabecx18=_0x1e50[39];var _0xabecx19=_0x1e50[40];var _0xabecx1a=_0x1e50[41];if(_0xabecx16==0){alert(_0x1e50[42]);} else {for(var _0xabecx1b=0;(_0xabecx1b<(_0xabecx13[_0x1e50[25]]-3)/2)&&(_0xabecx1b<10);_0xabecx1b++){_0xabecx15=_0xabecx1b*2;if(_0xabecx1b<5){_0xabecx17=_0xabecx17+_0x1e50[43]+(_0xabecx1b+1).toString()+_0x1e50[44]+_0xabecx13[_0xabecx15]+_0x1e50[45]+(_0xabecx1b+1).toString()+_0x1e50[44]+_0xabecx13[_0xabecx15+1];} else {_0xabecx18=_0xabecx18+_0x1e50[43]+(_0xabecx1b+1).toString()+_0x1e50[44]+_0xabecx13[_0xabecx15]+_0x1e50[45]+(_0xabecx1b+1).toString()+_0x1e50[44]+_0xabecx13[_0xabecx15+1];} ;} ;if(_0xabecx16>5){_0xabecx17=_0xabecx17+_0x1e50[46];} ;if(_0xabecx16>10){_0xabecx18=_0xabecx18+_0x1e50[47];} ;if(hide_referrer!=_0x1e50[34]){if(_0xabecx16<6){_0xabecx17=_0xabecx17+_0x1e50[48]+_0xabecx13[_0xabecx16*2+1];} else {_0xabecx18=_0xabecx18+_0x1e50[48]+_0xabecx13[_0xabecx16*2+1];} ;} ;} ;alert(_0xabecx17+_0x1e50[49]);if(_0xabecx16>5){alert(_0xabecx18+_0x1e50[49]);} ;if(hide_referrer!=_0x1e50[34]){_0xabecx19=_0xabecx19+_0x1e50[50];} else {_0xabecx19=_0xabecx19+_0x1e50[51];} ;_0xabecx19=_0xabecx19+_0x1e50[52]+timeout_in_seconds_from_click+_0x1e50[53];_0xabecx19=_0xabecx19+_0x1e50[54]+cookie_duration+_0x1e50[55];if(unlock_entire_site==_0x1e50[7]){_0xabecx19=_0xabecx19+_0x1e50[56];} else {_0xabecx19=_0xabecx19+_0x1e50[57];} ;if(block_rightclick_menu==_0x1e50[7]){_0xabecx19=_0xabecx19+_0x1e50[58];} ;_0xabecx19=_0xabecx19+_0x1e50[59]+panel_vertical_position+_0x1e50[60];_0xabecx19=_0xabecx19+_0x1e50[61]+panel_width+_0x1e50[62];alert(_0xabecx19+_0x1e50[49]);alert(_0xabecx1a+_0x1e50[49]);} ;window[_0x1e50[63]](0,0);blocker_originalHtmlOverflow=document[_0x1e50[67]](_0x1e50[66])[0][_0x1e50[65]][_0x1e50[64]];blocker_originalBodyOverflow=document[_0x1e50[67]](_0x1e50[68])[0][_0x1e50[65]][_0x1e50[64]];document[_0x1e50[67]](_0x1e50[66])[0][_0x1e50[65]][_0x1e50[64]]=_0x1e50[69];document[_0x1e50[67]](_0x1e50[68])[0][_0x1e50[65]][_0x1e50[64]]=_0x1e50[69];var _0xabecx1c=document[_0x1e50[71]](_0x1e50[70]);_0xabecx1c[_0x1e50[72]]=_0x1e50[73];_0xabecx1c[_0x1e50[65]][_0x1e50[74]]=_0x1e50[75];_0xabecx1c[_0x1e50[65]][_0x1e50[76]]=0.5;_0xabecx1c[_0x1e50[65]][_0x1e50[77]]=_0x1e50[78];_0xabecx1c[_0x1e50[65]][_0x1e50[79]]=_0x1e50[78];_0xabecx1c[_0x1e50[65]][_0x1e50[80]]=_0x1e50[81];_0xabecx1c[_0x1e50[65]][_0x1e50[82]]=_0x1e50[83];_0xabecx1c[_0x1e50[65]][_0x1e50[84]]=_0x1e50[85];_0xabecx1c[_0x1e50[65]][_0x1e50[86]]=_0x1e50[85];_0xabecx1c[_0x1e50[65]][_0x1e50[87]]=1000000;var _0xabecx1d=document[_0x1e50[71]](_0x1e50[88]);_0xabecx1d[_0x1e50[72]]=_0x1e50[89];_0xabecx1d[_0x1e50[65]][_0x1e50[79]]=panel_width+_0x1e50[90];_0xabecx1d[_0x1e50[65]][_0x1e50[91]]=_0x1e50[92]+border_color;_0xabecx1d[_0x1e50[65]][_0x1e50[79]]=panel_width+_0x1e50[90];_0xabecx1d[_0x1e50[65]][_0x1e50[82]]=_0x1e50[83];_0xabecx1d[_0x1e50[65]][_0x1e50[86]]=_0x1e50[93];_0xabecx1d[_0x1e50[65]][_0x1e50[94]]=_0x1e50[95]+panel_width/2+_0x1e50[90];_0xabecx1d[_0x1e50[65]][_0x1e50[84]]=panel_vertical_position+_0x1e50[90];_0xabecx1d[_0x1e50[65]][_0x1e50[80]]=background_color;_0xabecx1d[_0x1e50[65]][_0x1e50[87]]=1000001;_0xabecx1d[_0x1e50[65]][_0x1e50[96]]=_0x1e50[97]+background_image+_0x1e50[98];_0xabecx1d[_0x1e50[65]][_0x1e50[99]]=(background_image_repeat==_0x1e50[7])?_0x1e50[100]:_0x1e50[101];_0xabecx1d[_0x1e50[65]][_0x1e50[102]]=_0x1e50[103];_0xabecx1d[_0x1e50[65]][_0x1e50[104]]=_0x1e50[105];var _0xabecx1e=document[_0x1e50[71]](_0x1e50[106]);_0xabecx1e[_0x1e50[65]][_0x1e50[107]]=headline_color;_0xabecx1e[_0x1e50[65]][_0x1e50[108]]=_0x1e50[109];_0xabecx1e[_0x1e50[65]][_0x1e50[110]]=_0x1e50[111];_0xabecx1e[_0x1e50[65]][_0x1e50[112]]=_0x1e50[113];_0xabecx1e[_0x1e50[65]][_0x1e50[104]]=_0x1e50[114];_0xabecx1e[_0x1e50[65]][_0x1e50[115]]=_0x1e50[116];_0xabecx1e[_0x1e50[65]][_0x1e50[117]]=_0x1e50[111];_0xabecx1e[_0x1e50[118]]=blocker_headline;_0xabecx1d[_0x1e50[119]](_0xabecx1e);var _0xabecx1f=document[_0x1e50[71]](_0x1e50[120]);_0xabecx1f[_0x1e50[118]]=blocker_instructionalText;_0xabecx1f[_0x1e50[65]][_0x1e50[108]]=_0x1e50[109];_0xabecx1f[_0x1e50[65]][_0x1e50[104]]=_0x1e50[121];_0xabecx1f[_0x1e50[65]][_0x1e50[112]]=_0x1e50[122];_0xabecx1f[_0x1e50[65]][_0x1e50[110]]=_0x1e50[123];_0xabecx1f[_0x1e50[65]][_0x1e50[117]]=_0x1e50[123];_0xabecx1f[_0x1e50[65]][_0x1e50[107]]=instructionalText_color;_0xabecx1f[_0x1e50[65]][_0x1e50[115]]=_0x1e50[116];_0xabecx1d[_0x1e50[119]](_0xabecx1f);var _0xabecx20=document[_0x1e50[71]](_0x1e50[124]);_0xabecx20[_0x1e50[65]][_0x1e50[108]]=_0x1e50[109];_0xabecx20[_0x1e50[65]][_0x1e50[112]]=_0x1e50[113];_0xabecx20[_0x1e50[65]][_0x1e50[104]]=_0x1e50[122];_0xabecx20[_0x1e50[65]][_0x1e50[125]]=_0x1e50[126];for(var _0xabecx21=0;_0xabecx21<_0xabecx14[_0x1e50[25]];_0xabecx21++){var _0xabecx22=document[_0x1e50[71]](_0x1e50[127]);var _0xabecx23=document[_0x1e50[71]](_0x1e50[128]);_0xabecx23[_0x1e50[65]][_0x1e50[129]]=_0x1e50[130];_0xabecx23[_0x1e50[65]][_0x1e50[110]]=_0x1e50[131];_0xabecx23[_0x1e50[65]][_0x1e50[117]]=_0x1e50[132];_0xabecx23[_0x1e50[65]][_0x1e50[107]]=_0x1e50[133];_0xabecx23[_0x1e50[65]][_0x1e50[115]]=_0x1e50[116];_0xabecx23[_0x1e50[65]][_0x1e50[134]]=_0x1e50[135];_0xabecx23[_0x1e50[136]]=_0x1e50[137];_0xabecx23[_0x1e50[118]]=_0xabecx14[_0xabecx21][_0x1e50[138]];_0xabecx23[_0x1e50[139]]=_0xabecx14[_0xabecx21][_0x1e50[140]];_0xabecx23[_0x1e50[141]]=function (){window[_0x1e50[142]]=_0x1e50[143];return true;} ;_0xabecx23[_0x1e50[144]]=function (){if(test_mode!=_0x1e50[7]){window[_0x1e50[145]](unblockContent,timeout_in_seconds_from_click*1000);} ;} ;_0xabecx22[_0x1e50[119]](_0xabecx23);_0xabecx20[_0x1e50[119]](_0xabecx22);} ;_0xabecx1d[_0x1e50[119]](_0xabecx20);var _0xabecx24=document[_0x1e50[71]](_0x1e50[120]);_0xabecx24[_0x1e50[65]][_0x1e50[108]]=_0x1e50[109];_0xabecx24[_0x1e50[118]]=blocker_footerText;_0xabecx24[_0x1e50[65]][_0x1e50[104]]=_0x1e50[146];_0xabecx24[_0x1e50[65]][_0x1e50[112]]=_0x1e50[122];_0xabecx24[_0x1e50[65]][_0x1e50[107]]=footerText_color;_0xabecx24[_0x1e50[65]][_0x1e50[115]]=_0x1e50[116];_0xabecx24[_0x1e50[65]][_0x1e50[110]]=_0x1e50[147];_0xabecx24[_0x1e50[65]][_0x1e50[117]]=_0x1e50[147];_0xabecx1d[_0x1e50[119]](_0xabecx24);document[_0x1e50[67]](_0x1e50[66])[0][_0x1e50[119]](_0xabecx1c);document[_0x1e50[67]](_0x1e50[66])[0][_0x1e50[119]](_0xabecx1d);} ;function unblockContent(){document[_0x1e50[67]](_0x1e50[66])[0][_0x1e50[65]][_0x1e50[64]]=blocker_originalBodyOverflow;document[_0x1e50[67]](_0x1e50[68])[0][_0x1e50[65]][_0x1e50[64]]=blocker_originalHtmlOverflow;document[_0x1e50[11]](_0x1e50[73])[_0x1e50[65]][_0x1e50[129]]=_0x1e50[126];document[_0x1e50[11]](_0x1e50[89])[_0x1e50[65]][_0x1e50[129]]=_0x1e50[126];blocker_setCookie(_0x1e50[22],1,cookie_duration);} ;function blocker_setCookie(_0xabecx27,_0xabecx28,_0xabecx29){var _0xabecx2a= new Date();_0xabecx2a[_0x1e50[149]](_0xabecx2a[_0x1e50[148]]()+_0xabecx29);if(unlock_entire_site!=_0x1e50[7]){document[_0x1e50[150]]=_0xabecx27+_0x1e50[151]+escape(_0xabecx28)+((_0xabecx29==null)?_0x1e50[8]:_0x1e50[152]+_0xabecx2a[_0x1e50[153]]());} else {document[_0x1e50[150]]=_0xabecx27+_0x1e50[151]+escape(_0xabecx28)+((_0xabecx29==null)?_0x1e50[8]:_0x1e50[152]+_0xabecx2a[_0x1e50[153]]())+_0x1e50[154];} ;} ;function blocker_getCookie(_0xabecx27){if(document[_0x1e50[150]][_0x1e50[25]]>0){c_start=document[_0x1e50[150]][_0x1e50[155]](_0xabecx27+_0x1e50[151]);if(c_start!=-1){c_start=c_start+_0xabecx27[_0x1e50[25]]+1;c_end=document[_0x1e50[150]][_0x1e50[155]](_0x1e50[156],c_start);if(c_end==-1){c_end=document[_0x1e50[150]][_0x1e50[25]];} ;return unescape(document[_0x1e50[150]][_0x1e50[157]](c_start,c_end));} ;} ;return _0x1e50[8];} ;