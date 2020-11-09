$(function(){

	const $profileForm = $('#profileForm');
	const $addButton   = $('#addButton');

	$addButton.on('click', function(event){
		event.preventDefault();

		$profileForm.append('<h6 class="profile_form-subtitle">Добавление рецепта</h6>');
		let formSelect = $('<div class="profile_form-select"></div');
		$profileForm.append(formSelect);
		formSelect.append('<select><option value="category choice">Выберите категорию</option><option value="salad">Салаты</option><option value="sandwich">Бутерброды</option></select>');
	
		console.log(formSelect);
	});

});