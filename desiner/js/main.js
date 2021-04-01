/* Burger */
const $burger = document.getElementById('burger'),
	  $nav    = document.getElementById('nav')

$burger.addEventListener('click', () => {
	$nav.classList.toggle('show')
})


/* Modal Window */
const $body = document.body

for(let elem of $body.children){

	if(elem.matches('.post')){

	const $modalOpen  = document.getElementById('modalOpen'),
		  $modalClose = document.getElementById('modalClose'),
		  $modal      = document.getElementById('modal')

		$modalOpen.addEventListener('click', ()=> {

			$modal.classList.add('show')
			$body.classList.add('no-scroll')
		})

		$modalClose.addEventListener('click', ()=> {

			$modal.classList.remove('show')
			$body.classList.remove('no-scroll')
		})	  

	}
}


/* Popup */
if($body.hasAttribute('data-popup')){
	
	const $popup        = document.getElementById('popup'),
		  $modalImage   = $popup.querySelector('.popup__image'),
		  $modalCaption = $popup.querySelector('.popup__caption'),
		  $modalClose   = $popup.querySelector('.popup__close'),
		  $images       = document.querySelectorAll('.anywork__image')

		  $images.forEach(item => {
		  	item.addEventListener('click', event =>{
		  		let currentImage = event.currentTarget
		  		let currentSrc   = currentImage.src
		  		let currentAlt   = currentImage.alt

		  		$modalImage.src           = currentSrc
		  		$modalImage.alt           = currentAlt
		  		$modalCaption.textContent = currentAlt

		  		$body.classList.add('no-scroll')
		  		$popup.classList.add('active')
		  		$popup.style.display = 'flex'
		  		
		  	})
		  })

		  $modalClose.addEventListener('click', ()=>{
		  	$popup.classList.remove('active')

		  	setTimeout( ()=> {
			  	$body.classList.remove('no-scroll')
			  	$popup.style.display = ''
		  	}, 1005)
		  })

		  		  
}	