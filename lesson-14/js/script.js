$(document).ready(function () {
  // Расписание туров 
	$('.sheldure').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown("slow");
  });
  // Получить консультацию
	$('.main_btn').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown("slow");
  });
  // выбрать тур
	$('.main_btna').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown("slow");
  });
  // закрытие модального окна
	$('.close').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp("slow");
	});
});