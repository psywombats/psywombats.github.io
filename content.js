var content = {};
content.header = {};

content.header.pro = {};
content.header.pro.title = "AARON KING";
content.header.pro.image = "header_pro.png"
content.header.pro.subtitle = "game dev + software engineer";
content.header.pro.links = [{
        title: "PROFESSIONAL",
        games: ["gotc", "mirai", "varonis", "words3", "wot", "cascade", "rainfall", "cw"]
    }, {
        title: "INDIE (tech)",
        games: ["mirai", "varonis", "dememorize", "varonis", "vertigo", "pri2", "saga4", "snowbound", "mgne", "skirmisher", "gar"]
    }, {
        title: "INDIE (creative)",
        games: ["varonis", "dememorize", "maredeo", "vertigo", "doomsday","pri", "divergence", "lcpanes", "guild", "swallow"]
    }, {
        title: "GITHUB",
        external: "https://github.com/psywombats"
    }, {
        title: "LINKEDIN",
        external: "https://www.linkedin.com/in/aking0/"
    }
]

content.header.indie = {};
content.header.indie.title = "psy_wombats";
content.header.indie.image = "header_indie.png"
content.header.indie.subtitle = "game coder / writer";
content.header.indie.links = [{
        title: "STORY GAMES",
        games: ["dememorize", "vertigo", "lunenberg", "maredeo", "doomsday", "divergence", "swallow", "pri", "lcpanes", "mbf", "wal"]
    },{
        title: "RPGs",
        games: ["varonis", "saga4", "lunenberg", "pri2", "swallow", "guild", "zs", "zs2", "drh", "gar", "sk", "loap"]
    }, {
        title: "TECH",
        games: ["mirai", "pri2", "erebus", "violet", "snowbound", "mgne", "terra_nova", "blockbound", "hallowombat", "rainfall", "cbrogue", "skirmisher"]
    }, {
        title: "TWITTER",
        external: "http://www.twitter.com/psy_wombats"
    }, {
        title: "GITHUB",
        external: "https://github.com/psywombats"
    }
]
content.varonis = {
    title: "The Secret of Varonis",
    date: "2020-ongoing",
    link: "https://varonis-rpg.com",
    tech: "Unity, TileD, lua",
    youtube: "klxjzrIc1Jk",
    role: "Producer, programmer",
    partners: [{
        name: "Jamie Obeso",
        link: "https://soundcloud.com/elfmo"
    }, {
        name: "Joseph Seraph",
        link: "https://seraphcircle.itch.io/"
    }, {
        name: "Ocean's Dream",
        link: "https://oceansdream.itch.io/"
    }],
    description: "An upcoming Gameboy-style RPG! The Secret of Varonis features old-school combat mechanics and visuals faithful to the gaming heyday of 1989. Built in Unity with embedded lua processing, TileD map support, and a bunch of retro VFX shaders."
}
content.lunenberg = {
    title: "Thankless Sidequests",
    date: "April 2022",
    link: "https://psy-wombats.itch.io/thankless-sidequests",
    tech: "RPGmaker 2000",
    img: "lunenberg.png",
    description: "A dialog-based game featuring Chelsea, princess of the very-not-fake kingdom of Lemuria, and her friends as they harass NPCs and try to slay a big lizard or something.\n\nA short comedy game. It features a lot of dialog, some very dumb sideplots, and renaissance RM mapping. Browser-playable via EasyRPG."
}
content.dememorize = {
    title: "Dememorize",
    date: "October 2021",
    link: "https://psy-wombats.itch.io/dememorize",
    tech: "Unity",
    role: "Programmer/lead",
    partners: [{
        name: "whitemana (audio)",
        link: "https://soundcloud.com/crystalchambersounds"
    }, {
        name: "Galactica M. (portraits)",
        link: "https://t.co/UFFxD4rSeG?amp=1"
    }],
    img: "dememorize.png",
    description: "A 2.5d story horror game about Neural-9, a memory disease that spreads via eye contact. By day, talk to ward residents in 3rd person, and at night, explore the hospital in 1st person.\n\nRanked #2 story and #8 overall of 200+ entries for Screamjam 2021."
}
content.mirai = {
    title: "The Future Radio and the Artificial Pigeons",
    date: "2023",
    link: "https://futureradio.nekonyansoft.com/",
    tech: "Unity",
    role: "Localization engineer",
    youtube: "xzj9IdScJ14",
    partners: [{
        name: "NekoNyan Soft",
        link: "https://nekonyansoft.com"
    }],
    description: "Ported the game from the Japanese CatSystem2 visual novel engine into Unity to support the English translation. Heavy data processing and reverse-engineering."
};
content.gotc = {
    title: "Game of Thrones: Conquest",
    date: "2019-(ongoing)",
    link: "https://www.gotconquest.com/",
    tech: "Unity (mobile)",
    role: "Adv. software engineer",
    youtube: "iEYCSbE0n-o",
    partners: [{
        name: "WB Games Boston",
        link: "https://careers.wbgames.com/studios/boston/"
    }],
    description: "Worked with a multidisciplinary team as a mobile gameplay engineer, shipping bold beat features such as messaging and analytics. Optimized the Unity engine for memory, crash reduction, and startup times. Integrated native analytics for both iOS (obj-c) and Android (java).",
};
content.maredeo = {
    title: "Mare Deo",
    date: "September 2020",
    link: "https://psy-wombats.itch.io/mare-deo",
    tech: "Unity",
    role: "Programmer/lead",
    youtube: "ET4D__mBmHQ?t=810",
    partners: [{
        name: "Jamie Obeso",
        link: "https://soundcloud.com/elfmo"
    },
    {
        name: "Nerdiko",
        link: "https://nerdiko.itch.io/"
    },
    {
        name: "Frogge",
        link: "https://rpgmaker.net/users/Frogge/"
    }],
    description: "Half VN, half 2D horror. Two castaways, one dying and one mute, are rescued by the Revolution, a container ship seemingly manned by only four crewmen, each with their own objectives and mystery.",
};
content.vertigo = {
    title: "Vertigo Temple",
    date: "April 2020",
    link: "https://psy-wombats.itch.io/vertigo-temple",
    tech: "Unity",
    role: "Programmer/lead",
    youtube: "RrjpFiInJWQ?t=488",
    partners: [{
        name: "Jamie Obeso (sound)",
        link: "https://soundcloud.com/elfmo"
    },
    {
        name: "Frogge (pixels)",
        link: "https://rpgmaker.net/users/Frogge/"
    }],
    description: "A cyberpunk/horror game, half visual novel and half sidescroller. A text message from the protagonist's supposedly-led sister sparks an investigation into a complex conspiracy involving BBSs, cults, AI, and a certain 'plan' that unites them all. Scream:Machine jam entry.",
};
content.pri = {
    title: "The Kidnapping of Princess Pri",
    date: "Sept 2018",
    link: "https://rpgmaker.net/games/10765/",
    tech: "RPGmaker 2000",
    img: "pri.png",
    partners: [{
        name: "Liberty",
        link: "https://rpgmaker.net/users/Liberty/"
    }],
    description: "The Kidnapping of Princess Pri is a short exploration/adventure/escape game. Foil (and maybe carry out) a kidnapping by searching items, talking to characters, finding keys, and solving clues.\n\nThis game was made a for a split-in-the-middle event. Emphasis is on visual design."
};
content.violet = {
    title: "Project Violet",
    date: "May 2019",
    link: "https://rpgmaker.net/media/content/users/1541/locker/violet_02.zip",
    tech: "Unity",
    img: "project_violet.png",
    description: "A sprite-based 3D exploration game built in a month for a theme event. Explore a lab, check cryptic text messages, marvel at weird BGM/shaders/owls."
};
content.pri2 = {
    title: "Princess Pri and the Infinitely Irritating Castle",
    date: "7DRL 2019",
    link: "https://psy-wombats.itch.io/princess-pri-and-the-infinitely-irritating-castle",
    tech: "Unity",
    img: "pri2.png",
    description: "PPatIIC is a 3D sprite-based roguelike built in a week for 7 Day Roguelike 2019. It features procedurally generated 3D maps, a dynamic spellcrafting system, and a protagonist with a slight attitude problem.\n\nSource code available upon request."
};
content.blockbound = {
    title: "Blockbound",
    date: "2010-2013",
    link: "https://rpgmaker.net/games/2401/",
    tech: "LibGDX (Java), Tiled",
    img: "blockbound.png",
    role: "Project lead (6 members), programmer",
    partners: [{
        name: "WombatRPGs crew",
        link: "http://www.wombatrpgs.net/"
    }],
    description: "Blockbound is an adventure/puzzle game featuring Nico Willis, a stonemason's apprentice who can summon his petrified friend Waldsworth. The block can be used to squish enemies, block fire, fill in holes in the floor, etc.\n\nThis is the first game using the homebrew MGNE engine, a collision + map system. The physics is a pseudo-3D system that allowed the top of the block to function as floor."
};
content.drh = {
    title: "Deep Realm Heroes",
    date: "7DRL 2011",
    link: "https://rpgmaker.net/games/2401/",
    tech: "Java applet",
    img: "drh.png",
    description: "7-Day Roguelike entry for 2011. Pretty simple but features procedurally generated maps, and rudimentary AI."
};
content.drh2 = {
    title: "Deep Realm Heroes 2",
    date: "2013",
    link: "https://rpgmaker.net/games/5111/",
    tech: "C++, OpenGL",
    img: "drh2.png",
    partners: [{
        name: "Enker (art)",
        link: "http://www.cascadestudios.co.uk/"
    }],
    description: "A 3D realtime roguelike featuring procedurally generated maps and basic physics. Written with a QT GUI but apart from that, raw C++/OpenGL."
};
content.divergence = {
    title: "divergence",
    date: "May 2015",
    link: "https://rpgmaker.net/games/7346/",
    tech: "LibGDX (Java), GLSL, Tiled, Lua",
    role: "Project lead, programmer",
    img: "divergence.png",
    partners: [{
        name: "arcan",
        link: "https://rpgmaker.net/users/arcan"
    }, {
        name: "alterego",
        link: "https://rpgmaker.net/users/alterego"
    }],
    description: "Divergence is an exploration game pitting you against an abandoned laboratory and whatever secrets it may contain. Discover the nature of a terrible experiment, witness the result, and ultimately uncover the fate of the research team. Game length ranges from half an hour to over an hour to find all the secrets the facility has to offer. Featuring top-notch visuals, a unique world-shifting mechanic, and a compelling story.\n\nThe main gimmick of divergence is its shifting worlds mechanics, implemented with a unique shader that blends two maps based on the position of objects in Tiled maps."
};
content.gar = {
    title: "Golden Age: Endless Dungeon",
    date: "2011",
    link: "http://www.roguebasin.com/index.php?title=Golden_Age:_Endless_Dungeon",
    tech: "Java applet, Facebook",
    img: "gar.png",
    partners: [{
        name: "Enker (art)",
        link: "http://www.cascadestudios.co.uk/"
    }],
    description: "A full-featured lunchbox roguelike featuring online/offline play, leaderboards, 50 items, 20 monsters, and several bosses. First WombatRPGs roguelike to integrate premade maps with procedural elements. Set in the Golden Age fantasy universe."
};
content.guild = {
    title: "Guild Raider!",
    date: "2009-2011",
    link: "https://rpgmaker.net/games/1377/",
    tech: "RPGmaker 2000",
    img: "guild.png",
    partners: [{
        name: "bob_esc",
        link: "https://twitter.com/qlu_zak"
    }],
    description: "Join Malu, Gordon, and others on a mission to find the 77 magi hidden in the Magischolar's Guild. Sixteen adventurers have been commissioned to bring the magi, relics of the ancient sages, back to the great sage Aven. Malu's party must evade traps, monsters, and rival characters to make their way through the labyrinth.\n\nGame features decent battles and maps, but most of the emphasis is on character interaction and writing."
};
content.loap = {
    title: "Lament of a Pactkeeper",
    date: "May 2007",
    link: "https://rpgmaker.net/games/531/",
    tech: "RPGmaker 2000",
    img: "loap.png",
    role: "Project lead (5 members), programmer",
    partners: [{
        name: "WombatRPGs crew",
        link: "http://www.wombatrpgs.net"
    }],
    description: "A very old RM2K game that features a custom battle system, built in two weeks. Nevertheless pioneered the use of low-level processor RMK2 code with implementations of malloc etc."
};
content.mbf = {
    title: "Man's Best Friend",
    date: "2011-2012",
    link: "https://rpgmaker.net/games/3358/",
    tech: "RPGmaker 2000",
    img: "mbf.png",
    partners: [{
        name: "bob_esc",
        link: "https://twitter.com/qlu_zak"
    }],
    description: "Man's Best Friend an exploration-based game following Miles as he tracks down his pet dog Doc. There are no battles, and all gameplay is through NPC interaction and solving puzzles in the areas around Waldsberg.\n\nThe main attractions for this game are its maps, cast of chatty characters, and variety of Myst-like puzzles."
};
content.hallowombat = {
    title: "Trick, Treat or Die",
    date: "October 2010",
    link: "https://rpgmaker.net/games/2556/",
    tech: "RPGmaker 2000",
    youtube: "T-pvdi4p1j8",
    role: "Project lead (5 members)",
    partners: [{
        name: "WombatRPGs crew",
        link: "http://www.wombatrpgs.net"
    }],
    description: "A bizarre tactical RPG with action elements (attack bars, yeah!) pitting candy-thirsty children against each other in a quest for Halloween domination. Probably the only RM2K game to feature synchronous online multiplayer, using modifications to the engine .exe and a simple protocol built on TCP."
};
content.saga4 = {
    title: "SaGa4: Masters of the Demon World",
    date: "2015-2017",
    link: "https://rpgmaker.net/games/7236/",
    tech: "LibGDX (Java), Lua",
    youtube: "97GfJyOpZlE",
    partners: [{
        name: "bob_esc (tiles)",
        link: "https://twitter.com/qlu_zak"
    }],
    description: "SaGa4 is an unofficial spiritual successor to the gameboy SaGa RPGs, aka Final Fantasy Legend. It features old-school combat mechanics and visuals faithful to the gaming heyday of 1989.\n\nWhile SaGa4 has a lot of interesting tech features (Gameboy audio emulator, battle animation shaders, menu system, json database editor), it's probably most notable for its Lua interpreter that allows scripting from Tiled maps to be developed separately from the engine."
};
content.sk = {
    title: "Steel Knights",
    date: "7DRL 2012",
    link: "http://indierpgs.com/2012/04/new-releases-steel-knights-and-golden-age-endless-dungeon/",
    tech: "Java applet",
    img: "sk.png",
    partners: [{
        name: "Enker (art)",
        link: "http://www.cascadestudios.co.uk/"
    }],
    description: "A projectile-based roguelike developed in a week for Seven Day Roguelike 2012 event. Has some more advanced enemy AI strategies."
};
content.doomsday = {
    title: "Tales from Rotten, Moonless Nights",
    date: "October 2017",
    link: "https://psy-wombats.itch.io/doomsday-clock",
    tech: "RPGmaker VX Ace",
    img: "doomsday.png",
    role: "Project co-lead, contributor",
    partners: [{
        name: "RMN co-contributors",
        link: "https://rpgmaker.net/games/10123/"
    }],
    description: "For three weeks the US and the USSR have stood on the brink of a nuclear apocalypse. At midnight on the 11th, four students at National Systems University's signal intelligence club pick up a coded radio broadcast, from a numbers station somehow tied to a Russian weapons project. DOOMSDAY CLOCK is a sound novel about the events that follow.\n\nA sound novel, one hour long and really worth the time for anyone into atmospheric horror. Originally for a RMN anthology."
};
content.terra_nova = {
    title: "Terra Nova: Eyes of the Machine",
    date: "November 2008",
    link: "https://rpgmaker.net/games/876/",
    tech: "RPGmaker 2000",
    img: "terra_nova.png",
    role: "Project lead (4 members)",
    partners: [{
        name: "WombatRPGs crew",
        link: "http://www.wombatrpgs.net/"
    }],
    description: "An action game built in RPGmaker, back in the days where these sorts of things were considered worthwhile technical challenges. Features some of the earliest ascii->picture string display in RM games."
};
content.lcpanes = {
    title: "The LCPANES Terminal",
    date: "May 2011",
    link: "http://www.wombatrpgs.net/lcpanes",
    tech: "Javascript, HTML5",
    img: "lcpanes.png",
    description: "Interactive fiction centering around an escape-the-room scenario. Four occupants must escape by sharing information via their four linked computers -- but beware a traitor...\n\nA bit of a cult classic writing piece. Got a fair bit of notice on its release and still holds up decently today."
};
content.swallow = {
    title: "The Swallow's Descent",
    date: "August 2016",
    link: "https://rpgmaker.net/games/9160/",
    tech: "RPGmaker VX Ace",
    img: "swallow.png",
    role: "Project lead, writer",
    partners: [{
        name: "mjshi (sprites)",
        link: "http://mjshi.weebly.com/"
    }],
    description: "A murder mystery adventure game. Set somewhere between Final Fantasy and Scandinavia, the plot follows secret-agent-in-disguise William as he tries to solve the ambassador's murder before it sparks an international conflict.\n\nText and character heavy, it's a classic whodunnit, alternating between find-the-clue exploration and accuse-the-perp excoriation. Currently the only VN with a 5-star rating on RPGmaker Network."
};
content.zs = {
    title: "Zephyr Skies",
    date: "July 2011",
    link: "https://rpgmaker.net/games/3339/",
    tech: "RPGmaker 2003",
    img: "zs.png",
    role: "Project lead (4 members)",
    partners: [{
        name: "WombatRPGs crew",
        link: "http://www.wombatrpgs.net/"
    }],
    description: "Zephyr Skies is a bit of a notorious game on RPGmaker.net. Purports to be a 40 hour feature length RPG, but it was made for a post-modernist contest..."
};
content.zs2 = {
    title: "Zephyr Skies: Fall of the Necromancer",
    date: "October 2013",
    link: "https://rpgmaker.net/games/3339/",
    tech: "LibGDX (Java)",
    img: "zs2.png",
    role: "Project lead, programmer",
    partners: [{
        name: "bob_esc",
        link: "https://twitter.com/qlu_zak"
    }, {
        name: "Enker",
        link: "http://www.cascadestudios.co.uk/"
    }],
    description: "A roguelike made for a horror contest. Notable for its procedurally generated story -- characters are selected from a pool, assigned an archetype, and several styles of dialog appear for each at certain points throughout the game. Also has some nifty shaders."
};
content.wal = {
    title: "Within a Lifetime",
    date: "2017-(ongoing)",
    link: "https://github.com/Weresdrim/within-a-lifetime",
    tech: "Ren'Py (python)",
    img: "wal.png",
    role: "Writer",
    partners: [{
        name: "weresdrim",
        link: "https://www.deviantart.com/weresdrim"
    }],
    description: "Within a Lifetime is an ongoing visual novel project depicting struggles with mental illness at a specialist psychiatric school. A first draft is complete at 120k words and a second draft ongoing."
};
content.mgne = {
    title: "MakeGamesNot engine",
    date: "2013-2017",
    link: "https://rpgmaker.net/games/7236/blog/16120/",
    tech: "LibGDX (Java), Tiled",
    img: "mgne.png",
    description: "The MakeGamesNot engine (MGNE) is the underlying tech for a bunch of WombatRPGs games 2013-2017. It features Tiled map integration, a Lua processor for event scripting, a rudimentary database editor for data-driven games, and convenience code for saving/controls/ui/shaders and other common game needs."
};
content.erebus = {
    title: "Project Erebus",
    date: "2018-(ongoing)",
    tech: "Unity",
    youtube: "zNyxiMm8dC0",
    description: "An 3D RPG/horror/novel project, as of yet unnamed. Currently exists in a tech demo format featuring 'glitch' shaders, lighting based on background music oscilloscope, and 3D maps generated from 2D Tiled files."
};
content.cbrogue = {
    title: "proCedural brogue",
    date: "7DRL 2017",
    link: "https://github.com/psywombats/cbrogue",
    tech: "C, C++",
    img: "cbrogue.png",
    partners: [{
        name: "Brian Walker (original game)",
        link: "http://sites.google.com/site/broguegame/"
    }],
    description: "A mod of Brogue featuring procedurally generated enemies. Converted from C to C++ as part of the project."
};
content.rainfall = {
    title: "Rainfall",
    date: "2012-2013",
    link: "https://github.com/psywombats/rainfall",
    tech: "LibGDX (Java)",
    img: "rainfall.png",
    role: "Programmer",
    partners: [{
        name: "ghost (project lead)",
        link: "http://vibrantsea.tumblr.com/"
    }],
    description: "Action RPG kickstart project written in LibGDX. The basic battle systems, map loading, and animation systems were in place before the project was canceled by the project lead in 2013.\n\nTech-wise, featured a frame-by-frame animation hitbox creation tool, json-based data-driven editor, and Tiled maps."
};
content.skirmisher = {
    title: "ToME skirmisher",
    date: "March 2014",
    link: "https://github.com/sstrickl/tome-skirmisher",
    tech: "t-engine (lua)",
    img: "skirmisher.png",
    role: "Programmer",
    partners: [{
        name: "sstrickl (co-programmer)",
        link: "https://github.com/sstrickl"
    }],
    description: "Skirmisher class for the roguelike Tales of Maj'Eyal. Now part of the main codebase.\n\nWritten collaboratively in lua using the t-engine as a base."
};
content.words3 = {
    title: "Words with Friends 2",
    date: "2015-2019",
    link: "https://www.zynga.com/games/words-with-friends-2",
    tech: "iOS (ObjectiveC), cocos2d (C++), React native (JS)",
    youtube: "i6PPo94Lq60",
    role: "Senior software engineer II",
    partners: [{
        name: "Zynga",
        link: "http://www.zynga.com/"
    }],
    description: "Engineer working on frontend and underlying tech for the Words launch. Oversaw the development and rollout of the withfriends engine comprising a CoreData/SQL database, network stack, A/B testing support, and other utilities.\n\nPost-launch, worked with design and prodcut to develop user-facing features like powerups and custom tiles, as well as providing live ops support addressing reports from CS and crashes from Crashlytics/bugsnag."
}
content.wot = {
    title: "Words on Tour",
    date: "2014-2015",
    link: "https://www.youtube.com/watch?v=zytTZvUdY_A",
    youtube: "zytTZvUdY_A",
    tech: "Unity (C#), cocos2d (C++)",
    role: "Software engineer",
    partners: [{
        name: "Zynga",
        link: "http://www.zynga.com/"
    }],
    description: "Frontend (iOS) engineer working to launch the word/puzzle game Words on Tour. Worked with game designers and artists on gameplay features like powerups and Facebook integration. Words on Tour used a Unity-based tool to position dialogs, enter game data, and design levels. Data was then exported to the cocos-based game engine.\n\nPost-launch, rewrote the game's auth system to better support Facebook and multi-device logins. Also wrote the Facebook and Twitter integrations."
}
content.cascade = {
    title: "Cascade",
    date: "2013",
    youtube: "wOh0aBI4JWs",
    link: "https://www.bigfishgames.com/game/cascade/",
    tech: "SDL (C++), iOS (ObjectiveC)",
    role: "iOS intern",
    partners: [{
        name: "Funkitron",
        link: "http://www.funkitron.com/"
    }, {
        name: "Big Fish Games",
        link: "http://www.bigfishgames.com/"
    }],
    description: "iOS intern supporting the Cascade launch. Worked on both the C++ and ObjectiveC layers to integrate 3rd party libraries into the game, as well as solving miscellaneous bugs and implementing gameboard scrolling.\n\nWorked closely with the small (6 member) dev team, the publisher (Big Fish), and vendors for 3rd party libraries."
}
content.cw = {
    title: "Chefville",
    date: "2011-2012",
    link: "https://en.wikipedia.org/wiki/ChefVille",
    img: "cw.jpg",
    tech: "Flash (ActionScript), PHP",
    role: "Intern",
    partners: [{
        name: "Zynga",
        link: "http://www.zynga.com/"
    }],
    description: "Intern for two summer working to greenlight and then launch Chefville. Worked on art pipeline tools to export animations, then on payments integration."
}
content.snowbound = {
	title: "Snowbound",
	date: "2012-2015",
	link: "https://github.com/psywombats/snowbound",
	youtube: "M0B8SmycTAI",
	tech: "Unity, ONscripter",
	role: "Writer/programmer",
	description: "The Snowbound project is a visual novel set in a snowed-in apocalypse at an Alaskan magnet school. While the final script never saw release, the project sits about 150k words and runs start to finish on multiple engines, including a custom-built Unity visual novel platform that reads in and interprets scene scripts.",
}
