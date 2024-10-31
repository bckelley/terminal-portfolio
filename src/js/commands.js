var youtube = "";
var twitter = "";
var instagram = "";
var threads = "";
var github = "https://github.com/bckelley/";
var linkedin = "https://www.linkedin.com/in/bckelley2/";
var password = "phpRulez";
var email = 'mailto:admin@bradonckelley.me';

whois = [
  "<br>",
  "Hey! My name is Bradon 👋 and I am a back-end developer with a passion for PHP and technology.",
  "I have 12 of experience and have worked on projects like my SimplePHPDB which can read about on github.",
  "You can connect with me on linkedin or check out my work on github",
  "<br>"
];

whoami = [
  "<br>",
  "The paradox of “Who am I?” is a labyrinth with no map, yet we tirelessly",
  "explore its winding paths. Each step reveals a new facet of ourselves, a",
  "reflection in the ever-shifting mirror of experience. And so, the journey",
  "becomes the answer, the quest for self-discovery a tapestry woven from the",
  "threads of existence.",
  "<br>"
];

social = [
  "<br>",
  (youtube !== "") ? 'youtube        <a href="' + youtube + '" target="_blank">youtube/' + "</a>" : '',
  (twitter !== "") ? 'twitter        <a href="' + twitter + '" target="_blank">twitter/' + '</a>' : '',
  (linkedin !== "") ? 'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/bckelley' + "</a>" : '',
  (instagram !== "") ? 'instagram      <a href="' + instagram + '" target="_blank">instagram/' + '</a>' : '',
  (threads !== "") ? 'threads      <a href="' + threads + '" target="_blank">threads/' + '</a>' : '',
  (github !== "") ? 'github         <a href="' + github + '" target="_blank">github/bckelley' + "</a>" : '',
  "<br>"
];

secret = [
  "<br>",
  "<span class=\"command\">sudo</span>          We trust you have received the usual lecture from the local",
  "              System Administrator. It usually boils down to these three things:  ",
  "              #1) Respect the privacy of others.                    ",
  "              #2) Think before you type.                            ",
  "              #3) With great power comes great responsibility.      ",
  "<br>"
];

projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  (github !== "") ? '[ github/todo-list ]:            <a href="' + github + 'todo-list' +'" target="_blank">github/bckelley/todo-list' + "</a>" : '',
  (github !== "") ? '[ github/RouteEaseMVC ]:         <a href="' + github + 'RouteEaseMVC' + '" target="_blank">github/bckelley/TouteEaseMVC' + "</a>" : '',
  (github !== "") ? '[ github/SimplePHPDB ]:          <a href="' + github + 'SimplePHPDB' + '" target="_blank">github/bckelley/SimplePHPDB' + "</a>" : '',
//   (github !== "") ? '[ github/ ]:         <a href="' + github + '' +'" target="_blank">github/bckelley/' + "</a>" : '',
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is bckelley?',
  '<span class="command">whoami</span>         Who are you?',
  (youtube !== "")?'<span class="command">video</span>          View YouTube videos': '',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the password',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

license = [
  '<br>',
  '<span class="index"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/bckelley/terminal-portfolio">bckelley Terminal Portfolio</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/bckelley">bckelley</a> is licensed under <br> <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt=""></a></p>'
];


banner = [
  '<span class="index">Bradon Kelley (BK) Not A Corporation. All rights reserved.</span>',
  '                                                                                 ',
  '  ,dPYb,                ,dPYb,              ,dPYb, ,dPYb,                        ',
  '  IP\'`Yb                IP\'`Yb              IP\'`Yb IP\'`Yb                        ',
  '  I8  8I                I8  8I              I8  8I I8  8I                        ',
  '  I8  8\'                I8  8bgg,           I8  8\' I8  8\'                        ',
  '  I8 dP         ,gggg,  I8 dP" "8   ,ggg,   I8 dP  I8 dP   ,ggg,   gg     gg     ',
  '  I8dP   88gg  dP"  "Yb I8d8bggP"  i8" "8i  I8dP   I8dP   i8" "8i  I8     8I     ',
  '  I8P    8I   i8\'       I8P\' "Yb,  I8, ,8I  I8P    I8P    I8, ,8I  I8,   ,8I     ',
  ' ,d8b,  ,8I  ,d8,_    _,d8    `Yb, `YbadP\' ,d8b,_ ,d8b,_  `YbadP\' ,d8b, ,d8I    ',
  ' 8P\'"Y88P"\'  P""Y8888PP88P      Y8888P"Y8888P\'"Y888P\'"Y88888P"Y888P""Y88P"888   ',
  '                                                                      ,d8I\'      ',
  '                                                                      ,dP\'8I     ',
  '                                                                      ,8"  8I    ',
  '                                                                      I8   8I    ',
  '                                                                      `8, ,8I    ',
  '                                                                       `Y8P\'     ',
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];