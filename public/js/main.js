$(document).ready(function() {
	// data-wow-duration - время проигрывания анимации
	// data-wow-delay - задержка перед проигрыванием анимации
	// data-wow-offset - включение анимации, когда элемент проходит определнное количество пикселей от низа экрана
	// data-wow-iteration - количество повторов анимации // infinite - бесконечно
	new WOW().init({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0, // включение анимации, когда элемент проходит определнное количество пикселей от низа экрана
		mobile: true,
		live: true // проверка появления новых елементов
	});


	$('.text_page table').wrap('<div class="wrap_table"></div>');
});
