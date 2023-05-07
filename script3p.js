// Находим ссылки с классом "modal-trigger"
const modalTriggers = document.querySelectorAll('.modal-trigger');

// Находим модальное окно и его содержимое
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.querySelector('.modal-image');

// Находим кнопку закрытия
const modalClose = document.querySelector('.modal-close');

// Обработчик клика на ссылке
function handleModalTriggerClick(e) {
  e.preventDefault();

  // Получаем ссылку на полное изображение
  const src = this.getAttribute('data-src');

  // Загружаем изображение в модальное окно
  modalImage.src = src;

  // Показываем модальное окно
  modal.style.display = 'flex';
}

// Обработчик клика на кнопке закрытия
function handleModalCloseClick() {
  // Скрываем модальное окно
  modal.style.display = 'none';

  // Очищаем содержимое модального окна
  modalImage.src = '';
}

// Добавляем обработчики событий
modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', handleModalTriggerClick);
});

modalClose.addEventListener('click', handleModalCloseClick);
``
