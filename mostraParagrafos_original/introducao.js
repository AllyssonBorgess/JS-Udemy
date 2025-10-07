const paragrafos = Array.from(document.querySelectorAll('.card p'))
		const originTexts = paragrafos.map(p => p.innerText)
		const maxLengt = 100
			
		paragrafos.forEach(p, i => {
			if (p.innerText.length > maxLengt) {
				 p.textContent = p.innerHTML.substring(0, maxLength) + '...'

				const btn = document.createElement('button')
				btn.innerHTML = '<i class="fas fa-angle-down"></i>'
				p.parentElement.classList.add('text-hidden')

				//btn.addEventListener("click", toogleText)
				btn.addEventListener("click", function(e) {
					toogleText.call(e, p, i)
				})
					
				p.parentElement.appendChild(btn)
			}
		})

		function toogleText(e, p, i) {
			console.log(e.currentTarget)
			//console.log(this) // window
			const card = this.parentElement

			card.classList.toggle('text-hidden')
			e.currentTarget.querySelector("i").classList.toggle('fa-angle-down')
			e.currentTarget.querySelector("i").classList.toggle('fa-angle-up')

			if(card.classList.contains("text-hidden")){
				card.querySelector("p").textContent = originTexts[i].substring(0, maxLengt) + '...'
			} else {
				card.querySelector("p").textContent = originTexts[i]
			}
		}