
// BACKGROUND HEADER
const WORDSESPANIOL = [
  "de","la","que","el","en","y","a","los","se",
  "del","las","un","por","con","no","una","su","para","es","al","lo","como","más","o","pero","sus","le","ha","me","si","sin","sobre","este","ya","entre","cuando","todo","esta","ser","son","dos","también","fue","había","era","muy","años","hasta","desde","está","mi","porque","qué","sólo","han","yo","hay","vez","puede","todos","así","nos","ni","parte","tiene","él","uno","donde","bien","tiempo","mismo","ese","ahora","cada","e","vida","otro","después","te","otros","aunque","esa","eso","hace","otra","gobierno","tan","durante","siempre","día","tanto","ella","tres","sí","dijo","sido","gran","país","según"
	]

const WORDSENGLISH = [
  "earth","egg","energy","example","experience","eye","game",
  "garden","gas","girl","glass","gold","government","grass","group","hair",
  "hand","hat","head","heart","heat", "history","hole", "home","horse","hour","house","ice","idea","inch","industry","information","insect","interest","iron", "island","job","key","lake","land","language","law","leg","age","air","animal","answer","apple","art","baby","back","ball","bank","bed","bill","bird","blood","boat","body","bone","book","bottom","box"
	] 

const WORDSGERMAN = [
	"wie","ich","seine","dass","er","war","für","auf",
	"sind","mit","sie","sein","bei","ein","haben","dies","aus","durch","heiß","Wort","aber","was","einige","ist","es","Sie","oder","hatte","die","von","zu","und","ein","bei","wir","können","aus","andere","waren","die","tun","ihre","Zeit","wenn","werden","wie","sagte","ein","jeder","sagen","tut","Satz","drei","wollen","Luft","gut","auch","spielen","klein","Ende","setzen","Zuhause","lesen","seits","Hafen","groß","buchstabieren","hinzufügen","auch","Lande","hier","muss","groß","hoch","so","folgen","Akt","warum","fragen","Männer","Veränderung","ging","Licht","Art","aus","müssen","Haus","Bild","versuchen","uns","wieder","Tier","Punkt","Mutter","Welt","bauen","selbst","Erde","Vater"
	]
 
function wordInWords(words ) {
  let max = words.length - 1
  return words[Math.floor( Math.random() * (1+ max) )]
}

const $firstRowOfWords = document.getElementById('first-row-of-words')
const $secondRowOfWords = document.getElementById('second-row-of-words')
const $thirdRowOfWords = document.getElementById('third-row-of-words')
const $fourthRowOfWords = document.getElementById('fourth-row-of-words')
const $fifthRowOfWords = document.getElementById('fifth-row-of-words')
const $sixthRowOfWords = document.getElementById('sixth-row-of-words')
const $seventhRowOfWords = document.getElementById('seventh-row-of-words')
const $eighthRowOfWords = document.getElementById('eighth-row-of-words')

for (let i= 0; i < 300; i++) {
  $firstRowOfWords.innerHTML += ` ${wordInWords(WORDSESPANIOL)}`
  $secondRowOfWords.innerHTML += ` ${wordInWords(WORDSENGLISH)}`
  $thirdRowOfWords.innerHTML += ` ${wordInWords(WORDSGERMAN)}`
  $fourthRowOfWords.innerHTML += ` ${wordInWords(WORDSENGLISH)}`
  $fifthRowOfWords.innerHTML += ` ${wordInWords(WORDSGERMAN)}`
  $sixthRowOfWords.innerHTML += ` ${wordInWords(WORDSENGLISH)}`
  $seventhRowOfWords.innerHTML += ` ${wordInWords(WORDSESPANIOL)}`
  $eighthRowOfWords.innerHTML += ` ${wordInWords(WORDSENGLISH)}`
}

const $backgroundHeader = document.getElementById('background-header')


window.addEventListener('scroll', moveBackground)

function moveBackground() {
	let move = document.documentElement.scrollTop / 3
	$backgroundHeader.style.transform = `translateY( ${ - move}px)`
}




// gets element
// const $btn = document.getElementById('btn')
// const $arrowUp = document.getElementById('arrow-up')
// const $arrowDown = document.getElementById('arrow-down')

// const $header = document.getElementById('mod1')
// const $programs = document.getElementById('mod2')
// const $mod3 = document.getElementById('mod3')
// const $footer = document.getElementById('mod4')



// scroll
// $btn.addEventListener('click', () =>{
// 	let scroller = document.documentElement.scrollTop
// 	let scrollingPrograms = setInterval( () =>{
// 		document.documentElement.scrollTop = scroller
// 		scroller += 10

// 		if (scroller >= $header.offsetHeight + 10){
// 		 	clearInterval(scrollingPrograms)
// 		}
// 	},  1)


// })