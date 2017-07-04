# ClickDictionary
It's a Google chrome/Chromium browser extension to get the meaning of all the new words you come across when browsing online. 

Double click on any word in the web page and you will get the meaning of that word in the alert box.
</br>

<p align="center">
<img src="https://github.com/emkay-git/ClickDictionary/blob/master/preview.png" alt"Double click on a word shows meaning">
</p>
</br>

Alert box can show some limited text in different cateogry, to see more details (if any availble) on the same meaning you can see developer console, use `ctrl+shift+i`.</br></br>
<p align="center">
<img src="https://github.com/emkay-git/ClickDictionary/blob/master/preview2.png" alt"Double click on a word 'study' shows meaning">
</p>

This extension uses **Python** script in the background that get the meanings from a library. This python script is deployed on
**Heroku** platform.

## Setup Extension
1. Download the zip from github and extract it or clone the repository.
2. Open chrome://extensions in chrome/chromium browser.
3. Check on Developer mode.
4. Click on Load Unpacked extension and select the extracted folder.
5. Open a new web page or refresh any already opened webpage. Double click on the word you want meaning for.

## Suggested Improvements
1. ~~Triple click to select the whole line also gives the meaning of the word, any output for triple click has to be disabled.~~
2. ~~Using modal box instead of alert box near the word selected to show the meaning for better apperance.~~ I really suck at HTML and CSS as a result I had a hard time making my custom modal, also modal offered by bootstrap couldn't be used. Problem being some of the sites would override many of the CSS values of the bootstrap's modal box. Finally I ended up using **[jAlert](https://www.flwebsites.biz/jAlert/)** which is an awesome alternative for regular Alert and bootstrap's modal box. I have tested on some of the sites, it's working fine yet. If you see any trouble, do open up an issue or report it to me any other way.

## Contribution
Feel free to come up with new ideas, fork, make pull requests or open an issue and make contribution to make it better extension.

## License
This project is licensed under [MIT License](/LICENSE).
