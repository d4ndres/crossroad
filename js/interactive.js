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


$btn.addEventListener('click', () =>{
	let scroller = document.documentElement.scrollTop
	let scrollingPrograms = setInterval( () =>{
		document.documentElement.scrollTop = scroller
		scroller += 10

		if (scroller >= $header.offsetHeight + 10){
		 	clearInterval(scrollingPrograms)
		}
	},  1)


})