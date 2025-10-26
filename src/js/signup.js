const d = document,
	$darkElements = d.querySelectorAll('[data-dark]')

function initDarkMode() {
	const dark = localStorage.getItem('darkMode') === 'true'
	setDarkMode(dark)
}

function handleDarkModeToggle() {
	const current = localStorage.getItem('darkMode') === 'true'
	setDarkMode(!current)
}

function handleProfilePhotoChange(input) {
	const file = input.files[0]
	const preview = document.getElementById('previewPhoto')
	if (file) {
		preview.src = URL.createObjectURL(file)
		preview.classList.remove('d-none')
	} else {
		preview.src = ''
		preview.classList.add('d-none')
	}
}
function showPaymentSection() {
	//if (!validateFormData()) return
	const formDataSection = d.querySelector('.section-form-data')
	const paymentSection = d.querySelector('.section-form-payment')
	if (formDataSection && paymentSection) {
		formDataSection.classList.add('d-none')
		paymentSection.classList.remove('d-none')
	}
}

function showFormDataSection() {
	const formDataSection = d.querySelector('.section-form-data')
	const paymentSection = d.querySelector('.section-form-payment')
	if (formDataSection && paymentSection) {
		paymentSection.classList.add('d-none')
		formDataSection.classList.remove('d-none')
	}
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
	if (e.target.matches('.btn-primary')) showPaymentSection()
	if (e.target.matches('a.btn')) {
		e.preventDefault()
		const paymentSection = d.querySelector('.section-form-payment')
		if (paymentSection && !paymentSection.classList.contains('d-none')) {
			showFormDataSection()
		} else {
			window.location.href = './'
		}
	}
})
d.addEventListener('change', (e) => {
	if (e.target.matches('#perfilFoto')) handleProfilePhotoChange(e.target)
})
