// ==UserScript==
// @name       试客联盟试用报告提交
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==
javascript: (function(){var ci=[['非常','很','不一般','与众不同','格外','尤其','十分','极','及其'],['小巧玲珑','雍容华贵','大方','喜欢','喜爱','合适','漂亮','舒服'],['快递很快就到了','快递非常快','快递人员态度非常好','快递的原来还是个帅哥','快递效率真的非常高','快递要是再快点就好了'],['包装很严实。','快递的包装也很严实','快递包的很紧','快递也没有写里面是什么很为顾客考虑','快递包装很人性化','很人性化的快递包装','很为顾客考虑的快递','包装严实'],['卖家发货非常迅速。','卖家很讲信用，第二天就发货了','卖家很快就发货了','卖家当天就发货了','发货非常快','当天就发货了','一点都不耽误时间当天就发货了'],['宝贝包装看起来非常漂亮。','宝贝包装的很好看。','宝贝包装的很漂亮。','宝贝包装的很细致。','很细致的包装。','很好看的包装盒。','很精美的包装盒。'],['我女朋友也非常喜欢','我同学也非常喜欢','我姐姐也很喜欢','我哥哥也蛮感兴趣的','给我同学看了看','给我女朋友看了看','给我家里人看了看'],['她也希望能有机会获得这款产品。','他们都很羡慕','他也很想要啊','他也很喜欢啊','他也很感兴趣','就只能羡慕嫉妒恨了'],['做工非常精致。','做工真的不错。','头一次这么下功夫的试用品。','真的非常有诚意。','做工精细。','做工细致。','做工严丝合缝的。'],['非常喜欢这款产品。','非常喜欢。','非常喜爱。','非常喜欢这款产品。','很喜欢这款产品。','很喜欢。','很喜爱。','很喜欢这款产品。'],['太感谢卖家了。','非常感激卖家。','非常感觉这次机会。','谢谢！','感谢！','谢谢大家！','太幸运了！']];var RDci=function(i){return ci[i][Math.round(Math.random()*(ci[i].length-1))]};document.getElementById('report-title').value=RDci(0)+RDci(1)+'的';document.getElementsByClassName('degree')[4].click();document.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByClassName('ke-content')[0].innerText=RDci(0)+'感谢卖家给与这次试用机会，'+RDci(10)+RDci(9)+RDci(4)+'，'+RDci(3)+'，'+RDci(2)+'，'+RDci(5)+RDci(0)+RDci(1)+'，'+RDci(6)+'，'+RDci(7)+'，'+RDci(8);document.getElementsByClassName('textarea')[0].value=RDci(4)+'，'+RDci(3);document.getElementsByClassName('textarea')[1].value=RDci(2)+'，'+RDci(5);document.getElementsByClassName('textarea')[2].value='宝贝'+RDci(0)+RDci(1)+'，'+RDci(8);document.getElementsByClassName('textarea')[3].value=RDci(6)+'，'+RDci(7);document.getElementsByClassName('textarea')[4].value=RDci(10)+RDci(9);document.getElementsByClassName('mt20 clearfix wreport-list wreport-list-title')[0].getElementsByTagName('label')[0].click();document.getElementsByClassName('btn-box')[0].getElementsByTagName('label')[0].click();document.getElementsByClassName('btn-box')[1].getElementsByTagName('label')[0].click();document.getElementsByClassName('btn-box')[2].getElementsByTagName('label')[0].click();document.getElementsByClassName('btn-box')[3].getElementsByTagName('label')[0].click();document.getElementsByClassName('btn-box')[4].getElementsByTagName('label')[0].click();})();