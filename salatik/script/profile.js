
const profileForm = document.getElementById('profileForm')
const addButton   = document.getElementById('addButton')

addButton.addEventListener('click', () => {

	addButton.setAttribute('disabled', '')
	addButton.classList.add('disabled')
	
	const h6ElementFirst     = document.createElement('h6')
	h6ElementFirst.className = 'profile_form-subtitle'
	h6ElementFirst.innerText = 'Добавление рецепта'
	profileForm.append(h6ElementFirst)

	const profileFormSelect     = document.createElement('div')
	profileFormSelect.className = 'profile_form-select'
	profileForm.append(profileFormSelect)

		const selectElement = document.createElement('select')
		profileFormSelect.append(selectElement)

			const optionCategory = document.createElement('option')
			optionCategory.setAttribute('value', 'category choice')
			optionCategory.innerText = 'Выберите категорию'
			selectElement.append(optionCategory)

			const optionSalad = document.createElement('option')
			optionSalad.setAttribute('value', 'salad')
			optionSalad.innerText = 'Салаты'
			selectElement.append(optionSalad)

			const optionSandwich = document.createElement('option')
			optionSandwich.setAttribute('value', 'sandwich')
			optionSandwich.innerText = 'Бутерброды'
			selectElement.append(optionSandwich)

	const profileFormText     = document.createElement('input')
	profileFormText.className = 'profile_form-text'
	profileFormText.type      = 'text'
	profileFormText.setAttribute('placeholder', 'Название рецепта')
	profileForm.append(profileFormText)

	const h6ElementSecond     = document.createElement('h6')
	h6ElementSecond.className = 'profile_form-subtitle'
	h6ElementSecond.innerText = 'Выберите фото и добавьте описание'
	profileForm.append(h6ElementSecond)

	const profileFormWrap     = document.createElement('div')
	profileFormWrap.className = 'profile_form-wrap'
	profileForm.append(profileFormWrap)

		const profileFormUpload     = document.createElement('input')
		profileFormUpload.className = 'profile_form-upload'
		profileFormUpload.type      = 'file'
		profileFormUpload.id        = 'uploadFormImage'
		profileFormUpload.setAttribute('accept', 'image/*')
		profileFormWrap.append(profileFormUpload)

		const labelElement = document.createElement('label')
		labelElement.setAttribute('for', 'uploadFormImage')
		profileFormWrap.append(labelElement)

		let index = 0
		do {
		const profileFormImagebox     = document.createElement('div')
		profileFormImagebox.className = 'profile_form-imagebox'
		profileFormWrap.append(profileFormImagebox)
		index++
		} while (index < 4)


	const profileFormTextarea     = document.createElement('textarea')
	profileFormTextarea.className = 'profile_form-textarea'
	profileFormTextarea.setAttribute('placeholder', 'Описание рецепта')
	profileForm.append(profileFormTextarea)

	const profileFormSubmit     = document.createElement('input')
	profileFormSubmit.className = 'profile_form-submit'
	profileFormSubmit.type      = 'submit'
	profileFormSubmit.setAttribute('value', 'Добавить')
	profileForm.append(profileFormSubmit)
})


