// ==UserScript==
// @name           Mod by Cucuks Kid
// @namespace      http://csmod.uk.to/
// @description    Emot for Tulank Belulank
// @include        http://www.facebook.com/*
// @include		   http://csmod.uk.to/*
// ==/UserScript==
//


String.prototype.isPrefixOf = function(str, from){
	if (arguments.length < 2) 
		from = 0;
	else 
		from = parseInt(from);
	
	if (from < 0 || from >= str.length) 
		return false;
	
	if (from + this.length > str.length) 
		return false;
	
	for (var i = 0; i < this.length; i++) 
		if (this.charCodeAt(i) != str.charCodeAt(from + i)) 
			return false;
	
	return true;
}
	
	
	var emoticons = [];
	emoticons[":asiklank"] = {
		src: "http://id-facebook.cu.cc/tulank-emot1.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kiss"] = {
		src: "http://www.kaskus.us/images/smilies/cewek.gif",
		alt: "csgakmod"
	};
	
	emoticons[":najis"] = {
		src: "http://www.kaskus.us/images/smilies/najis.gif",
		alt: "csgakmod"
	};
	
	emoticons[":marah"] = {
		src: "http://www.kaskus.us/images/smilies/marah.gif",
		alt: "csgakmod"
	};
	
	emoticons[":malu"] = {
		src: "http://www.kaskus.us/images/smilies/malu.gif",
		alt: "csgakmod"
	};
	
	emoticons[":repost"] = {
		src: "http://www.kaskus.us/images/smilies/s_sm_repost1.gif",
		alt: "csgakmod"
	};
	
	emoticons[":sup2:"] = {
		src: "http://www.kaskus.us/images/smilies/sundul.gif",
		alt: "csgakmod"
	};
	
	emoticons[":batabig"] = {
		src: "http://www.kaskus.us/images/smilies/s_big_batamerah.gif",
		alt: "csgakmod"
	};
	
	emoticons[":takut"] = {
		src: "http://www.kaskus.us/images/smilies/takut.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cekpm"] = {
		src: "http://www.kaskus.us/images/smilies/cekpm.gif",
		alt: "csgakmod"
	};
	
	emoticons[":hammer"] = {
		src: "http://www.kaskus.us/images/smilies/hammer.gif",
		alt: "csgakmod"
	};
	
	emoticons[":toast"] = {
		src: "http://www.kaskus.us/images/smilies/toastcendol.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cystg"] = {
		src: "http://www.kaskus.us/images/smilies/cystg.gif",
		alt: "csgakmod"
	};
	
	emoticons[":iloveindonesia"] = {
		src: "http://www.kaskus.us/images/smilies/I-Luv-Indonesia.gif",
		alt: "csgakmod"
	};
	
	emoticons[":maho"] = {
		src: "http://www.kaskus.us/images/smilies/s_sm_maho.gif",
		alt: "csgakmod"
	};
	
	emoticons[":nosara"] = {
		src: "http://www.kaskus.us/images/smilies/nosara.gif",
		alt: "csgakmod"
	};
	
	emoticons[":berduka"] = {
		src: "http://www.kaskus.us/images/smilies/berduka.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ngakak"] = {
		src: "http://www.kaskus.us/images/smilies/ngakak.gif",
		alt: "csgakmod"
	};
	
	emoticons[":repost2"] = {
		src: "http://www.kaskus.us/images/smilies/s_sm_repost2.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cendolbig"] = {
		src: "http://www.kaskus.us/images/smilies/s_big_cendol.gif",
		alt: "csgakmod"
	};
	
	emoticons[":recsel"] = {
		src: "http://www.kaskus.us/images/smilies/recseller.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ngacir2"] = {
		src: "http://www.kaskus.us/images/smilies/ngacir2.gif",
		alt: "csgakmod"
	};
	
	emoticons[":bingung"] = {
		src: "http://www.kaskus.us/images/smilies/bingung.gif",
		alt: "csgakmod"
	};
	emoticons[":bingung:"] = {
		src: "http://www.kaskus.us/images/smilies/bolakbalik.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cd"] = {
		src: "http://www.kaskus.us/images/smilies/capede.gif",
		alt: "csgakmod"
	};
	
	emoticons[":hoax"] = {
		src: "http://www.kaskus.us/images/smilies/hoax.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cendols"] = {
		src: "http://www.kaskus.us/images/smilies/cendols.gif",
		alt: "csgakmod"
	};
	
	emoticons[":p"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/6.gif",
		alt: "csgakmod"
	};
	
	emoticons[":iloveindonesias"] = {
		src: "http://www.kaskus.us/images/smilies/iloveindonesias.gif",
		alt: "csgakmod"
	};
	
	emoticons[":berdukas"] = {
		src: "http://www.kaskus.us/images/smilies/berdukas.gif",
		alt: "csgakmod"
	};
	
	emoticons[":bingungs"] = {
		src: "http://www.kaskus.us/images/smilies/bingungs.gif",
		alt: "csgakmod"
	};
	
	emoticons[":najiss"] = {
		src: "http://www.kaskus.us/images/smilies/najiss.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ilovekaskuss"] = {
		src: "http://www.kaskus.us/images/smilies/iluvkaskuss.gif",
		alt: "csgakmod"
	};
	
	emoticons[":mads"] = {
		src: "http://www.kaskus.us/images/smilies/mads.gif",
		alt: "csgakmod"
	};
	
	emoticons[":sundulgans"] = {
		src: "http://www.kaskus.us/images/smilies/sundulgans.gif",
		alt: "csgakmod"
	};
	
	emoticons[":hammers"] = {
		src: "http://www.kaskus.us/images/smilies/hammers.gif",
		alt: "csgakmod"
	};
	
	emoticons[":batas"] = {
		src: "http://www.kaskus.us/images/smilies/batas.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cekpms"] = {
		src: "http://www.kaskus.us/images/smilies/cekpms.gif",
		alt: "csgakmod"
	};
	
	emoticons[":capedes"] = {
		src: "http://www.kaskus.us/images/smilies/capedes.gif",
		alt: "csgakmod"
	};
	
	emoticons[":mahos"] = {
		src: "http://www.kaskus.us/images/smilies/mahos.gif",
		alt: "csgakmod"
	};
	
	emoticons[":malus"] = {
		src: "http://www.kaskus.us/images/smilies/malus.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kisss"] = {
		src: "http://www.kaskus.us/images/smilies/kisss.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ngakaks"] = {
		src: "http://www.kaskus.us/images/smilies/ngakaks.gif",
		alt: "csgakmod"
	};
	
	emoticons[":takuts"] = {
		src: "http://www.kaskus.us/images/smilies/takuts.gif",
		alt: "csgakmod"
	};
	
	emoticons[":reposts"] = {
		src: "http://www.kaskus.us/images/smilies/reposts.gif",
		alt: "csgakmod"
	};
	
	emoticons[":genit:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/q03.gif",
		alt: "csgakmod"
	};
	
	emoticons[":tabrakan:"] = {
		src: "http://www.kaskus.us/images/smilies/tabrakan.gif",
		alt: "csgakmod"
	};
	
	emoticons[":linux1:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/25.gif",
		alt: "csgakmod"
	};
	
	emoticons[":nohope:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/q11.gif",
		alt: "csgakmod"
	};
	
	emoticons[":malu:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/1.gif",
		alt: "csgakmod"
	};
	
	emoticons[":)"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/15.gif",
		alt: "csgakmod"
	};
	
	emoticons[":fuck3:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/fuck-8.gif",
		alt: "csgakmod"
	};
	
	emoticons[":doctor:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/18.gif",
		alt: "csgakmod"
	};
	
	emoticons[":rose:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/34.gif",
		alt: "csgakmod"
	};
	
	emoticons[":angel:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/017.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kagets:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/3.gif",
		alt: "csgakmod"
	};
	
	emoticons[":eek:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/4.gif",
		alt: "csgakmod"
	};
	
	emoticons[":fm:"] = {
		src: "http://www.kaskus.us/images/smilies/smileyfm329wj.gif",
		alt: "csgakmod"
	};
	
	emoticons[":fuck:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/fuck-4.gif",
		alt: "csgakmod"
	};
	
	emoticons[":hammer:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/8.gif",
		alt: "csgakmod"
	};
	
	emoticons[":rolleyes:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/01.gif",
		alt: "csgakmod"
	};
	
	emoticons[":amazed:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/amazed.gif",
		alt: "csgakmod"
	};
	
	emoticons[":shutup:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/5.gif",
		alt: "csgakmod"
	};
	
	emoticons[":berbusa:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/q20.gif",
		alt: "csgakmod"
	};
	
	emoticons[":D"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/14.gif",
		alt: "csgakmod"
	};
	
	emoticons[":thumbdown"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/48.gif",
		alt: "csgakmod"
	};
	
	emoticons[":heart:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/37.gif",
		alt: "csgakmod"
	};
	
	emoticons[":linux2:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/26.gif",
		alt: "csgakmod"
	};
	
	emoticons[":matabelo:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/004.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kissmouth"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/36.gif",
		alt: "csgakmod"
	};
	
	emoticons[":("] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/06.gif",
		alt: "csgakmod"
	};
	
	emoticons[":siul:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/020.gif",
		alt: "csgakmod"
	};
	
	emoticons[":army:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/24.gif",
		alt: "csgakmod"
	};
	
	emoticons[":confused:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/7.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ngacir:"] = {
		src: "http://www.kaskus.us/images/smilies/ngacir.gif",
		alt: "csgakmod"
	};
	
	emoticons[":fuck2:"] = {
		src: "http://www.kaskus.us/images/smilies/ngacir.gif",
		alt: "csgakmod"
	};
	
	emoticons[":tv:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/44.gif",
		alt: "csgakmod"
	};
	
	emoticons[":medicine:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/33.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kissing:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/014.gif",
		alt: "csgakmod"
	};
	
	emoticons[":wowcantik"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/001.gif",
		alt: "csgakmod"
	};
	
	emoticons[":mad:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/12.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ck"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/kaskuslove.gif",
		alt: "csgakmod"
	};
	
	emoticons[":flower:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/e03.gif",
		alt: "csgakmod"
	};
	
	emoticons[":coffee:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/31.gif",
		alt: "csgakmod"
	};
	
	emoticons[":sun:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/008.gif",
		alt: "csgakmod"
	};
	
	emoticons[":bikini:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/vana-bum-vanaweb-dot-com.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cool:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/05.gif",
		alt: "csgakmod"
	};
	
	emoticons[":gila:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/crazy.gif",
		alt: "csgakmod"
	};
	
	emoticons[":rain:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/60.gif",
		alt: "csgakmod"
	};
	
	emoticons[":present:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/40.gif",
		alt: "csgakmod"
	};
	
	emoticons[":think:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/006.gif",
		alt: "csgakmod"
	};
	
	emoticons[";)"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/13.gif",
		alt: "csgakmod"
	};
	
	emoticons[":beer:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/smiley_beer.gif",
		alt: "csgakmod"
	};
	
	emoticons[":shakehand"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/49.gif",
		alt: "csgakmod"
	};

	emoticons[":shakehand2"] = {
		src: "http://www.kaskus.us/images/smilies/shakehand2.gif",
		alt: "csgakmod"
	};
	
	emoticons[":breakheart"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/38.gif",
		alt: "csgakmod"
	};
	
	emoticons[":babi:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/27.gif",
		alt: "csgakmod"
	};
	
	emoticons[":Peace:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/005.gif",
		alt: "csgakmod"
	};
	
	emoticons[":o"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/07.gif",
		alt: "csgakmod"
	};
	
	emoticons[":afro:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/kribo.gif",
		alt: "csgakmod"
	};
	
	emoticons[":repost:"] = {
		src: "http://www.kaskus.us/images/smilies/fd_7.gif",
		alt: "csgakmod"
	};
	
	emoticons[":bigo:"] = {
		src: "http://www.kaskus.us/images/smilies/fd_3.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cd:"] = {
		src: "http://www.kaskus.us/images/smilies/fd_2.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kts:"] = {
		src: "http://www.kaskus.us/images/smilies/fd_6.gif",
		alt: "csgakmod"
	};
	
	emoticons[":nangis"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/mewek.gif",
		alt: "csgakmod"
	};
	
	emoticons[":rate:"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/rate.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ht:"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/hotrit.gif",
		alt: "csgakmod"
	};
	
	emoticons[":salam"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/sungkem.gif",
		alt: "csgakmod"
	};
	
	emoticons[":hope"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/hope.gif",
		alt: "csgakmod"
	};
	
	emoticons[":malu2"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/malu2.gif",
		alt: "csgakmod"
	};
	
	emoticons[":pertamax"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/pertamax.gif",
		alt: "csgakmod"
	};
	
	emoticons[":nerd"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/nerd.gif",
		alt: "csgakmod"
	};
	
	emoticons[":alay"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/alay.gif",
		alt: "csgakmod"
	};
	
	emoticons[":cendol2"] = {
		src: "http://fadilz.blog.csmod.uk.to/wp-content/plugins/kaskus-emoticons/emoticons/tambahan-kaskuser/cendol.gif",
		alt: "csgakmod"
	};
	emoticons[":kodok"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/iwig2a.gif",
		alt: "csgakmod"
	};
	emoticons[":lol"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/Lips.gif",
		alt: "csgakmod"
	};
	emoticons[":gitar"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/Guitar.gif",
		alt: "csgakmod"
	};
	emoticons[":joget"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/nari2.gif",
		alt: "csgakmod"
	};
	emoticons[":kapak"] = {
		src: "http://i43.tinypic.com/2q354j9.gif",
		alt: "csgakmod"
	};
	emoticons[":metal"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/Punk.gif",
		alt: "csgakmod"
	};
	emoticons[":malu3"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/malu2.gif",
		alt: "csgakmod"
	};
	emoticons[":pisang"] = {
		src: "http://i925.photobucket.com/albums/ad93/kaskusradio/icon%20kaskusbox/party0010.gif",
		alt: "csgakmod"
	};
	
	emoticons[":tai:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/shit-3.gif",
		alt: "csgakmod"
	}
		
	emoticons[":rate1:"] = {
		src: "http://www.kaskus.us/images/rating/rating_1.gif",
		alt: "csgakmod"
	}
	
	emoticons[":rate2:"] = {
		src: "http://www.kaskus.us/images/rating/rating_2.gif",
		alt: "csgakmod"
	}
	
	emoticons[":rate3:"] = {
		src: "http://www.kaskus.us/images/rating/rating_3.gif",
		alt: "csgakmod"
	}
	
	emoticons[":rate4:"] = {
		src: "http://www.kaskus.us/images/rating/rating_4.gif",
		alt: "csgakmod"
	}
	
	emoticons[":rate5:"] = {
		src: "http://www.kaskus.us/images/rating/rating_5.gif",
		alt: "csgakmod"
	}
	
	emoticons[":dp"] = {
		src: "http://www.kaskus.us/images/smilies/dp.gif",
		alt: "csgakmod"
	}
	
	emoticons[":selamat"] = {
		src: "http://www.kaskus.us/images/smilies/selamat.gif",
		alt: "csgakmod"
	}
	
	emoticons[":2thumbup"] = {
		src: "http://www.kaskus.us/images/smilies/jempol2.gif",
		alt: "csgakmod"
	}
	
	emoticons[":thumbup"] = {
		src: "http://www.kaskus.us/images/smilies/jempol1.gif",
		alt: "csgakmod"
	}

	emoticons[":thumbup:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/47.gif",
		alt: "csgakmod"
	};
	
	emoticons[":metal:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/q17.gif",
		alt: "csgakmod"
	};

	emoticons[":hi:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/hi.gif",
		alt: "csgakmod"
	};
	
	emoticons[":hi:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/hi.gif",
		alt: "csgakmod"
	};

	emoticons[":peluk"] = {
		src: "http://www.kaskus.us/images/smilies/peluk.gif",
		alt: "csgakmod"
	};
	
	emoticons[":anjing:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/29.gif",
		alt: "csgakmod"
	};

	emoticons[":moon:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/007.gif",
		alt: "csgakmod"
	};
	
	emoticons[":baby:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/30.gif",
		alt: "csgakmod"
	};
	
	emoticons[":kucing:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/28.gif",
		alt: "csgakmod"
	};
	
	emoticons[":norose:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/35.gif",
		alt: "csgakmod"
	};
	
	emoticons[":Onigiri:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/rice.gif",
		alt: "csgakmod"
	};
	
	emoticons[":ricebowl:"] = {
		src: "http://www.kaskus.us/images/smilies/sumbangan/32.gif",
		alt: "csgakmod"
	};
	emoticons[":mewek"] = {
		src: "http://www.kaskus.us/images/smilies/mewek.gif",
		alt: "csgakmod"
	};
	emoticons[":angel"] = {
		src: "http://www.kaskus.us/images/smilies/angel1.gif",
		alt: "csgakmod"
	};
	emoticons[":matabelo"] = {
		src: "http://www.kaskus.us/images/smilies/matabelo1.gif",
		alt: "csgakmod"
	};
	emoticons[":request"] = {
		src: "http://static.kaskus.us/images/smilies/request.gif",
		alt: "csgakmod"
	};
	emoticons[":kr"] = {
		src: "http://static.kaskus.us/images/smilies/kaskus_radio.gif",
		alt: "csgakmod"
	};
	emoticons[":nohope"] = {
		src: "http://static.kaskus.us/images/smilies/nohope.gif",
		alt: "csgakmod"
	};
	emoticons[":sorry"] = {
		src: "http://static.kaskus.us/images/smilies/sorry.gif",
		alt: "csgakmod"
	};
var emotxt = [];
var yemo = [];
var c;
for (var emo in emoticons) 
	if (!(emoticons[emo] instanceof Function)) {
		c = emo.charCodeAt(0);
		if (!yemo[c]) 
			yemo[c] = [];
		
		yemo[c].push({
			emoticon: emo,
			src: emoticons[emo].src
		});
	}
	
function f(o1, o2){
	if (o1.emoticon.isPrefixOf(o2.emoticon)) 
		return 1;
	
	if (o1.emoticon > o2.emoticon) 
		return 1;
	
	if (o1.emoticon < o2.emoticon) 
		return -1;
	
	return 0;
}
var i;	
for (i = 0; i < yemo.length; i++) 
	if (yemo[i]) 
		yemo[i].sort(f);
	
function replaceTextNode(textNode, sortedEmoticonSet)
{
	var content = textNode.textContent;
	var currentStopPosition;
	var i, j;
	var firstChar;
	var found = false;
	var htmls = [];
	var img;
	currentStopPosition = i = 0;
	while (i < content.length) {
		firstChar = content.charCodeAt(i);
		if (sortedEmoticonSet[firstChar]) 
			for (j = 0; j < sortedEmoticonSet[firstChar].length; j++) 
				if (sortedEmoticonSet[firstChar][j].emoticon.length && sortedEmoticonSet[firstChar][j].emoticon.isPrefixOf(content, i)) {
					if (currentStopPosition < i) 
						htmls.push(document.createTextNode(content.substr(currentStopPosition, i - currentStopPosition)))
					
					img = document.createElement('img');
					img.src = sortedEmoticonSet[firstChar][j].src;
					img.title = sortedEmoticonSet[firstChar][j].emoticon;
					htmls.push(img);
					
					
					i += sortedEmoticonSet[firstChar][j].emoticon.length;
					currentStopPosition = i;
					found = true;
					break;
				}
		
		if (found) {
			found = false;
			continue;
		}
		i++;
	}
	
	if(currentStopPosition>0&&currentStopPosition<content.length-1)
		htmls.push(document.createTextNode(content.substr(currentStopPosition)));
	
	var span=null;
	if (htmls.length) {
		span=document.createElement('span');
		for (i = 0; i < htmls.length; i++) 
			span.appendChild(htmls[i]);
	}
	return span;
}

function replaceElement(element, emos){
	var pathResult = document.evaluate(".//text()", element, null, 7, null);
	
	for (i = 0; i < pathResult.snapshotLength; i++) {
		var tNode = pathResult.snapshotItem(i);
		if (tNode.parentNode) {
			var span = replaceTextNode(tNode, emos);
			if (span) 
				tNode.parentNode.replaceChild(span, tNode);
		}
	}
}
