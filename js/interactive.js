// document.addEventListener( "scroll" , detectandoScroll)


// function detectandoScroll(evento){
// 	console.log(evento)
// }
// document.documentElement.scrollTop
// document.documentElement.scrollTop = $programs.offsetHeight

const $btn = document.getElementById('btn')
const $programs = document.getElementById('programs')
const $header = document.getElementById('header')

// mejorar codigo, no creo que funcione para todads las pantallas
$btn.addEventListener('click', () =>{
	console.log('yupi')
	let scroller = document.documentElement.scrollTop
	// document.documentElement.scrollTop = $programs.offsetHeight
	let scrollingPrograms = setInterval( () =>{
		document.documentElement.scrollTop = scroller
		scroller += 10

		if (scroller >= $header.offsetHeight + 10){
		 	clearInterval(scrollingPrograms)
		}
	},  1)
})