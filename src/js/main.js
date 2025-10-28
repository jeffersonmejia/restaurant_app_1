import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const d = document

//ANIMATIONS
d.addEventListener('DOMContentLoaded', () => {
	const $body = d.querySelector('body')
	requestAnimationFrame(() => ($body.style.opacity = 1))
})

//DARK MODE

const $darkElements = d.querySelectorAll('[data-dark]')

function initDarkMode() {
	const dark = localStorage.getItem('darkMode') === 'true'
	setDarkMode(dark)
}

function handleDarkModeToggle() {
	const current = localStorage.getItem('darkMode') === 'true'
	setDarkMode(!current)
}

function setDarkMode(value) {
	$darkElements.forEach((el) => {
		el.classList.toggle('bg-dark', value)
		el.classList.toggle('bg-white', !value)
		el.classList.toggle('text-white', value)
		el.classList.toggle('text-dark', !value)
	})
	localStorage.setItem('darkMode', value)
}

d.addEventListener('DOMContentLoaded', () => initDarkMode())

d.addEventListener('click', (e) => {
	if (e.target.matches('#darkModeToggle')) handleDarkModeToggle()
})
