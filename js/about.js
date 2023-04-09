let dragOverImages = document.querySelectorAll('.profile img');

dragOverImages.forEach((image) => {
  image.addEventListener('dragover', () => {
    image.classList.add('drag-over-effect');
  });
  image.addEventListener('dragleave', () => {
    image.classList.remove('drag-over-effect');
  });
});
