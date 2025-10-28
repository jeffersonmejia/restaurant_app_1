const d = document

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

let currentSection = 1

function showNextSection() {
	const formDataSection = d.querySelector('.section-form-data')
	const profileSection = d.querySelector('.section-form-profile')
	const paymentSection = d.querySelector('.section-form-payment')
	const btn = d.querySelector('.btn-primary')
	if (btn.textContent.trim() === 'Registrarme') {
		window.location.href = './signin.html'
	} else if (currentSection === 1) {
		formDataSection.classList.add('d-none')
		profileSection.classList.remove('d-none')
		currentSection++
		btn.textContent = 'Continuar'
	} else if (currentSection === 2) {
		profileSection.classList.add('d-none')
		paymentSection.classList.remove('d-none')
		currentSection++
		btn.textContent = 'Registrarme'
	}
}

function showPreviousSection() {
	const formDataSection = d.querySelector('.section-form-data')
	const profileSection = d.querySelector('.section-form-profile')
	const paymentSection = d.querySelector('.section-form-payment')
	const btn = d.querySelector('.btn-primary')

	if (currentSection === 3) {
		paymentSection.classList.add('d-none')
		profileSection.classList.remove('d-none')
		currentSection--
		btn.textContent = 'Continuar'
	} else if (currentSection === 2) {
		profileSection.classList.add('d-none')
		formDataSection.classList.remove('d-none')
		currentSection--
		btn.textContent = 'Continuar'
	} else {
		window.location.href = './'
	}
}

d.addEventListener('click', (e) => {
	if (e.target.matches('.btn-primary')) showNextSection()
	if (e.target.matches('a.btn')) {
		e.preventDefault()
		showPreviousSection()
	}
})

d.addEventListener('change', (e) => {
	if (e.target.matches('#perfilFoto')) handleProfilePhotoChange(e.target)
})
