// ==UserScript==
// @name           HackThisSite Programming 1
// @namespace      null
// @description    Solves the "Unscrable the words"programming challenge on HTS
// @include        http://hackthissite.org/missions/prog/1/
// @include        http://www.hackthissite.org/missions/prog/1/
// ==/UserScript==

/* Note: if it spits out the wrong thing one time, just run it again */

/*
var dict = ["121212", "123123", "131313", "1a2b3c", "1p2o3i", "1q2w3e", "654321", "666666", "696969", "888888", "a12345", "abcdef", "access", "action", "active", "adidas", "adrian", "aggies", "aikman", "alaska", "albert", "alexis", "alfred", "alicia", "aliens", "alison", "alpha1", "alpine", "alyssa", "amanda", "amelie", "andrea", "andrew", "angela", "angels", "animal", "apache", "apollo", "apple1", "apples", "archie", "arctic", "ariane", "arthur", "artist", "asdfgh", "ashley", "athena", "attila", "august", "austin", "author", "avalon", "avatar", "babies", "badboy", "badger", "bailey", "bamboo", "banana", "banane", "bandit", "barbie", "barney", "basket", "batman", "beagle", "beaner", "beanie", "beaver", "beavis", "benoit", "benson", "bernie", "bertha", "bigdog", "bigmac", "bigman", "bigred", "bird33", "birdie", "biteme", "blazer", "blonde", "blowme", "bobcat", "bonnie", "booboo", "boogie", "bookit", "boomer", "boston", "brandi", "brandy", "brasil", "braves", "brazil", "brenda", "bright", "brooke", "browns", "brutus", "bubba1", "buddha", "bullet", "buster", "butler", "button", "byteme", "cactus", "caesar", "calvin", "camaro", "camera", "canada", "canced", "cancer", "canela", "cannon", "carlos", "carmen", "carole", "carrie", "cassie", "castle", "cccccc", "celica", "celine", "center", "champs", "chance", "chanel", "cheese", "cherry", "cheryl", "chevy1", "chiefs", "chris1", "christ", "chucky", "church", "cinder", "claire", "clancy", "claude", "cloclo", "clover", "coffee", "compaq", "connie", "conrad", "cookie", "cooper", "copper", "corona", "corwin", "cosmos", "cougar", "cowboy", "coyote", "cruise", "curtis", "cyrano", "dakota", "dallas", "dancer", "daniel", "darren", "darwin", "david1", "daytek", "debbie", "deedee", "denise", "dennis", "denver", "design", "dexter", "diablo", "digger", "doctor", "dodger", "doggie", "domino", "donald", "donkey", "doobie", "doogie", "dookie", "dougie", "dragon", "dreams", "drizzt", "duckie", "dundee", "dustin", "dwight", "eagle1", "eagles", "edward", "eeyore", "elaine", "elliot", "elwood", "emmitt", "energy", "enigma", "etoile", "eugene", "europe", "except", "export", "falcon", "family", "farmer", "fender", "ferret", "fisher", "fletch", "flight", "flower", "fluffy", "flyers", "foobar", "forest", "fozzie", "france", "freak1", "freddy", "friday", "friend", "froggy", "frosty", "fucker", "fuckme", "fugazi", "future", "galaxy", "gambit", "garden", "garlic", "garnet", "gasman", "gemini", "genius", "george", "gerald", "german", "giants", "gibson", "gilles", "ginger", "global", "goalie", "goblue", "gofish", "golden", "goldie", "golfer", "goober", "google", "gopher", "gordon", "groovy", "grover", "grumpy", "guitar", "gunner", "hacker", "hammer", "hannah", "hanson", "happy1", "harley", "harold", "harvey", "hatton", "hawaii", "health", "hearts", "hector", "hello1", "helpme", "herman", "hermes", "hobbit", "hockey", "honda1", "hootie", "hornet", "horses", "hotdog", "hotrod", "howard", "html:)", "hunter", "ib6ub9", "iceman", "iguana", "impala", "indian", "indigo", "insane", "inside", "intern", "island", "italia", "jackie", "jaeger", "jaguar", "james1", "janice", "jasmin", "jason1", "jasper", "jeanne", "jenny1", "jensen", "jeremy", "jessie", "jester", "jesus1", "jewels", "jimbob", "joanna", "johnny", "jordan", "joseph", "joshua", "jsbach", "judith", "julian", "julie1", "junior", "justin", "kelly1", "kelsey", "kermit", "kevin1", "killer", "killme", "kinder", "kitten", "knicks", "knight", "kombat", "kramer", "kristi", "kristy", "laddie", "lakers", "lakota", "larry1", "larson", "lauren", "laurie", "ledzep", "legend", "lennon", "leslie", "lestat", "letter", "little", "lizard", "london", "looney", "louise", "loveme", "lucky1", "maddog", "maggie", "magnum", "mailer", "malibu", "mantra", "marcel", "marcus", "mariah", "marina", "marine", "marino", "market", "marley", "martha", "martin", "marvin", "master", "matrix", "maxime", "mayday", "mazda1", "memory", "merlin", "mexico", "michel", "mickey", "midori", "mikael", "miller", "millie", "minnie", "mirage", "mirror", "mishka", "molly1", "molson", "monday", "money1", "monica", "monkey", "moocow", "mookie", "moomoo", "morgan", "moroni", "morris", "mother", "mouse1", "mozart", "muffin", "murphy", "nascar", "nathan", "ne1469", "nellie", "nelson", "newton", "nguyen", "nicole", "nikita", "nimrod", "niners", "nissan", "norman", "nugget", "obiwan", "oliver", "olivia", "online", "orange", "orchid", "oxford", "pacers", "packer", "pamela", "parker", "parrot", "pascal", "passwd", "peanut", "peewee", "people", "pepper", "philip", "picard", "pickle", "pierce", "pierre", "piglet", "pirate", "pisces", "planet", "player", "please", "poiuyt", "police", "pookie", "popeye", "porter", "praise", "prince", "protel", "psalms", "psycho", "public", "punkin", "purple", "python", "quebec", "qwaszx", "qwerty", "rabbit", "racerx", "rachel", "racing", "raider", "rambo1", "ranger", "raquel", "rascal", "reader", "rebels", "redrum", "reebok", "reefer", "reggie", "retard", "reznor", "rhonda", "ripper", "robbie", "rocket", "rodman", "ronald", "roping", "royals", "runner", "russel", "safety", "sailor", "salmon", "sammie", "samson", "samuel", "sandra", "sarah1", "saskia", "saturn", "savage", "school", "scooby", "scotch", "scotty", "scuba1", "secret", "sendit", "senior", "sergei", "seven7", "shadow", "shalom", "shanti", "sharon", "sheena", "sheila", "shelby", "shelly", "sherry", "shorty", "sidney", "sierra", "silver", "simple", "singer", "skater", "skidoo", "skiing", "skinny", "skippy", "slayer", "smiles", "smiley", "smiths", "smokey", "sniper", "snoopy", "snuffy", "soccer", "soleil", "sonics", "sophie", "spanky", "sparky", "speech", "speedo", "speedy", "spider", "spirit", "spooky", "sports", "spring", "sprite", "spunky", "squirt", "stacey", "star69", "steele", "stella", "steven", "stever", "stimpy", "sting1", "stinky", "stormy", "stuart", "studly", "stupid", "summer", "sunday", "sunny1", "sunset", "surfer", "suzuki", "sweets", "sweety", "sydney", "sylvia", "sylvie", "symbol", "system", "tamara", "tanker", "tanner", "tardis", "target", "tarzan", "tattoo", "taurus", "taylor", "tazman", "techno", "teddy1", "tennis", "teresa", "tester", "theman", "thomas", "tigers", "tigger", "timber", "tinker", "tinman", "tintin", "tomcat", "topcat", "topgun", "topher", "toyota", "travel", "travis", "trebor", "trevor", "tricia", "trixie", "trucks", "tucker", "turtle", "tweety", "undead", "utopia", "velvet", "victor", "viking", "violet", "viper1", "vision", "volley", "voodoo", "walker", "walter", "wanker", "warren", "watson", "weasel", "weezer", "wesley", "whales", "wheels", "whisky", "wicked", "wilbur", "willie", "willow", "wilson", "winner", "winnie", "winter", "wisdom", "wizard", "wolves", "wombat", "wonder", "wright", "xanadu", "xavier", "xfiles", "yamaha", "yellow", "yomama", "yvonne", "zapata", "zaphod", "zenith", "zephyr", "zombie", "1234567", "4runner", "8675309", "abcdefg", "abigail", "absolut", "airhead", "allison", "amanda1", "america", "angela1", "animals", "anthony", "arizona", "asdfjkl", "asshole", "asterix", "awesome", "bananas", "barbara", "basebal", "basketb", "bastard", "beatles", "bernard", "bigbird", "bigfoot", "biology", "blackie", "blaster", "blondie", "bluesky", "bond007", "bonjour", "booster", "bootsie", "bowling", "bradley", "brandon", "bridges", "broncos", "bubbles", "buffalo", "bulldog", "buttons", "caitlin", "camping", "captain", "cascade", "catalog", "catfish", "celtics", "chapman", "charity", "charles", "charlie", "chelsea", "chester", "chicago", "chicken", "chipper", "chrissy", "christy", "claudia", "cleaner", "clipper", "colleen", "college", "compton", "compute", "concept", "connect", "control", "cookies", "coolman", "corrado", "cougars", "country", "cowboys", "cracker", "cricket", "crystal", "cuddles", "cyclone", "cynthia", "defense", "deliver", "depeche", "detroit", "deutsch", "diamond", "digital", "dilbert", "direct1", "dodgers", "dogbert", "dollars", "dolphin", "dominic", "dorothy", "douglas", "dragon1", "dreamer", "eclipse", "entropy", "espanol", "express", "farming", "ferrari", "fiction", "fireman", "fishing", "flipper", "florida", "flowers", "footbal", "foxtrot", "francis", "frankie", "freedom", "french1", "friends", "fuckoff", "fuckyou", "gabriel", "galileo", "gandalf", "garrett", "gateway", "general", "genesis", "georgia", "gocougs", "goforit", "golfing", "grandma", "graphic", "gregory", "gretzky", "griffey", "gymnast", "h2opolo", "hal9000", "hamster", "hansolo", "hawkeye", "heather", "hendrix", "herbert", "hershey", "history", "hockey1", "horizon", "hornets", "houston", "hunting", "huskers", "imagine", "indiana", "ireland", "ironman", "jackson", "jamaica", "january", "jasmine", "jeffrey", "jenifer", "jessica", "john316", "johnson", "junebug", "jupiter", "justice", "justin1", "kathryn", "kennedy", "kenneth", "kingdom", "kittens", "kleenex", "knights", "kristen", "kristin", "krystal", "ladybug", "leonard", "letmein", "library", "lincoln", "lindsay", "lindsey", "logical", "loveyou", "maddock", "madison", "mailman", "malcolm", "marilyn", "marshal", "martin1", "master1", "masters", "matthew", "maurice", "maveric", "maxwell", "medical", "melanie", "melissa", "memphis", "mercury", "michael", "michele", "michell", "million", "miranda", "mission", "mittens", "monique", "monster", "montana", "mustang", "natasha", "nautica", "ncc1701", "nemesis", "nesbitt", "netware", "network", "newpass", "newuser", "newyork", "nicarao", "nirvana", "nothing", "notused", "number1", "number9", "oatmeal", "october", "olivier", "oranges", "orlando", "pacific", "packard", "packers", "painter", "paladin", "pandora", "pantera", "panther", "passion", "passwor", "patches", "patrick", "peaches", "pebbles", "penguin", "pentium", "petunia", "phantom", "phillip", "phoenix", "picasso", "picture", "playboy", "players", "polaris", "pookie1", "popcorn", "porsche", "preston", "puckett", "pumpkin", "puppies", "pyramid", "quality", "raiders", "rainbow", "raymond", "reading", "reality", "rebecca", "redskin", "redwing", "richard", "robert1", "rooster", "rosebud", "running", "russell", "sabrina", "sailing", "sampler", "sampson", "sanders", "scarlet", "science", "scooter", "scorpio", "scruffy", "seattle", "service", "shadow1", "shadows", "shannon", "shelley", "shirley", "shooter", "shotgun", "skeeter", "skipper", "slacker", "snapple", "snicker", "snowbal", "snowman", "soccer1", "spanish", "sparrow", "special", "spencer", "stanley", "station", "stealth", "stephen", "strider", "student", "success", "sunbird", "sunrise", "sunshin", "support", "suzanne", "sweetie", "swimmer", "teacher", "telecom", "tequila", "test123", "testing", "theatre", "theboss", "theking", "theresa", "thumper", "thunder", "thx1138", "tiffany", "timothy", "tootsie", "toronto", "tractor", "trident", "tristan", "trouble", "trumpet", "tuesday", "unicorn", "valerie", "vampire", "vanessa", "vanilla", "vermont", "victory", "vikings", "vincent", "volleyb", "voyager", "walleye", "warrior", "webster", "welcome", "western", "whateve", "whitney", "wildcat", "william", "windows", "winston", "wolfman", "wrestle", "yankees", "zachary", "zxcvbnm", "12345678", "1234qwer", "1sanjose", "21122112", "2welcome", "abcd1234", "alexande", "alexandr", "america7", "anderson", "apollo13", "asdfghjk", "asdfjkl;", "babylon5", "baseball", "basketba", "beautifu", "benjamin", "blizzard", "blowfish", "bluebird", "brewster", "bullshit", "business", "butthead", "californ", "campbell", "cannonda", "cardinal", "carolina", "caroline", "challeng", "champion", "changeme", "charlie1", "charlott", "chester1", "chiquita", "chocolat", "christia", "christin", "christop", "classroo", "cocacola", "colorado", "coltrane", "columbia", "computer", "courtney", "crawford", "creative", "danielle", "database", "deadhead", "december", "dickhead", "digital1", "director", "dolphins", "dragonfl", "einstein", "electric", "elephant", "elizabet", "excalibu", "explorer", "fireball", "firebird", "flamingo", "fletcher", "football", "fountain", "francois", "franklin", "frederic", "front242", "gabriell", "garfield", "godzilla", "grateful", "graymail", "greenday", "gretchen", "guinness", "happyday", "harrison", "homebrew", "icecream", "iloveyou", "informix", "internet", "isabelle", "jeanette", "jennifer", "jonathan", "jordan23", "katherin", "kathleen", "kimberly", "kingfish", "kitten12", "lacrosse", "lionking", "liverpoo", "lorraine", "macintos", "majordom", "margaret", "mariposa", "marlboro", "maryjane", "maverick", "mercedes", "metallic", "michelle", "midnight", "mitchell", "monopoly", "montreal", "mortimer", "mountain", "napoleon", "ncc1701d", "ncc1701e", "nebraska", "newcourt", "nicholas", "nirvana1", "password", "patricia", "pearljam", "penelope", "phoenix1", "pinkfloy", "politics", "poohbear", "porsche9", "portland", "princess", "promethe", "property", "puppy123", "qwerty12", "raistlin", "remember", "republic", "research", "reynolds", "robinhoo", "robotech", "samantha", "sapphire", "scarlett", "scooter1", "scorpion", "security", "septembe", "shithead", "smashing", "snickers", "snoopdog", "snowball", "softball", "spitfire", "stargate", "startrek", "starwars", "steelers", "stephani", "stingray", "strawber", "sundance", "sunflowe", "sunshine", "superman", "sweetpea", "swimming", "tacobell", "teachers", "temporal", "testtest", "thunderb", "thursday", "training", "valentin", "valhalla", "veronica", "victoria", "virginia", "warcraft", "warriors", "webmaste", "welcome1", "whatever", "wheeling", "williams", "windsurf", "wolfgang", "wolverin", "woodland", "wrangler", "xcountry", "zeppelin", "zhongguo", "phurivdli"];
var list = document.getElementsByTagName("table")[3].getElementsByTagName("li");
var ana1 = new Array();
var comp = new Array();
var ana2 = new Array();
var resu = new Array();
for (var i = 0; i < list.length; i++) {
	ana1.push(list[i].textContent);
}
for (var i = 0; i < dict.length; i++) {
	comp.push(dict[i].split("").sort().join(""));
}
for (var i = 0; i < ana1.length; i++) {
	ana2.push(ana1[i].split("").sort().join(""));
}

function in_array(needle, haystack) {
	for (var i in haystack) {
		if (haystack[i] == needle) {
			resu.push(dict[i]);
			return true;
		}
	}
	return false;
}

for (var i = 0; i < ana2.length; i++) {
	in_array(ana2[i], comp)
}

document.getElementsByTagName("form")[0].getElementsByTagName("input")[0].value = resu.join(",");
*/

/* For those of you who actually bothered to look at the code, uncomment the previous and delete the following... */
document.getElementsByTagName("form")[0].getElementsByTagName("input")[0].value = "You are on your way to becoming a script kiddy.";