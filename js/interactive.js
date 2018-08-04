// document.addEventListener( "scroll" , detectandoScroll)


// function detectandoScroll(evento){
// 	console.log(evento)
// }
// document.documentElement.scrollTop
// document.documentElement.scrollTop = $programs.offsetHeight

const $btn = document.getElementById('btn')
const $arrowUp = document.getElementById('arrow-up')
const $arrowDown = document.getElementById('arrow-down')

const $header = document.getElementById('mod1')
const $programs = document.getElementById('mod2')
const $mod3 = document.getElementById('mod3')
const $footer = document.getElementById('mod4')

const $backgroundCrossroad = document.getElementById('background-img-crossroad')

const knowHeightMod = (elem) => elem.offsetHeight
const DOCUMENTHEIGHT = 	[ knowHeightMod($header), knowHeightMod($programs), knowHeightMod($mod3), knowHeightMod($footer)] 

// https://www.instagram.com/p/------/?taken-by=crossroadcolombia

// const IMAGES = [
// 	"BlwmsllAIiX",
// 	"BlwDA_GA6og",
// 	"BlmIKWRghb8",
// 	"Blie989gbvB",
// 	"Bk9t_cbgB0_",
// 	"BklpsHsApT",
// 	"BjfSXWQgCnu",
// 	"Bi9-NSjg4ns",
// 	"BiLFVZKAI1Y",
// 	"BhurY-ugTn_",
// 	"Bg2Mc7KDp4V",
// 	"Bfwsm9WjcYt",
// 	"BfREXVYjcAX",
// 	"BeLUcZBD9AV",
// ]


//__________________________scrollbtns__________________
// class FixedBtn {
// 	constructor (btn, arr, state, positive) {
// 		this.btn = btn
// 		this.arr = arr
// 		this.state = state
// 		this.positive = positive
// 		this.btn.addEventListener('click', () => this.onClcik())
// 	}
// 	onClcik () {
// 		if ( this.positive ) {
			
// 			moverY(  this.arr[this.state++]  )
// 			if (this.state == 3) this.state = 2
// 			console.log('funciono? ')


// 		} else if ( !this.positive) {

// 			moverY( (-1 )* this.arr[this.state--]  )
// 			if (this.state == 0) this.state = 1
// 			console.log('funciono? eso espero ')
// 		}
// 	}
// }
// function findState(arr , initState = document.documentElement.scrollTop) {
// 	let length = arr.length
// 	let sum = 0
// 	for (let i = 0; i < length; i++) {
// 		sum += arr[i]
// 		if (sum == initState ) return i
// 	} 
// }
// function moverY(height = document.documentElement.scrollTop) {
// 	console.log('todo bien')
// 	document.documentElement.scrollTop += height
// }
// const arrowDown = new FixedBtn($arrowDown, DOCUMENTHEIGHT, findState(DOCUMENTHEIGHT), true )
// const arrowUP = new FixedBtn($arrowUp, DOCUMENTHEIGHT, findState(DOCUMENTHEIGHT), false )

// mejorar codigo, no creo que funcione para todads las pantallas
// document.documentElement.scrollTop = $programs.offsetHeight
$btn.addEventListener('click', () =>{
	let scroller = document.documentElement.scrollTop
	let scrollingPrograms = setInterval( () =>{
		document.documentElement.scrollTop = scroller
		scroller += 10

		if (scroller >= $header.offsetHeight + 10){
		 	clearInterval(scrollingPrograms)
		}
	},  1)

	// document.documentElement.scrollTop = DOCUMENTHEIGHT[1]


})