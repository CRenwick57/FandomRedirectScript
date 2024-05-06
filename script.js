// ==UserScript==
// @name         Redirect fandoms to fan wikis
// @description  Changes url on *.fandom.com/wiki/* to the equivalent fan-made wiki site(afaik urls are the same across both sites)
// @author       Captain Handsome
// @match        https://oldschoolrunescape.fandom.com/*
// @match        https://hearthstone.fandom.com/*
// ==/UserScript==

(function() {
    'use strict';
    var fandomsite = window.location.toString().split("wiki")[0];
    var oldurl = window.location.toString().split("wiki")[1];
    var wikisite = ''
    if (fandomsite == "https://oldschoolrunescape.fandom.com/"){
        wikisite = "https://oldschool.runescape.wiki/w";
    } else if (fandomsite == "https://hearthstone.fandom.com/"){
        wikisite = "https://hearthstone.wiki.gg/wiki";
    }
    var newurl = wikisite+oldurl;
    window.location.replace(newurl);
})();
