menu();

const addDraggingFunctionality = (scrollableDivId, contentId) => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    const scrollableDiv = document.getElementById(scrollableDivId);
    const content = document.getElementById(contentId);

    scrollableDiv.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - scrollableDiv.offsetLeft;
      scrollLeft = scrollableDiv.scrollLeft;
    });

    scrollableDiv.addEventListener('mouseup', () => {
      isDragging = false;
    });

    scrollableDiv.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    scrollableDiv.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollableDiv.offsetLeft;
      const walk = (x - startX) * 1; // Ajuste a sensibilidade 
      scrollableDiv.scrollLeft = scrollLeft - walk;
    });
  };

  addDraggingFunctionality('carrousel-cards', 'card');
  addDraggingFunctionality('carrousel-cards2', 'card');

  function menu() {
    let btnMenu = document.getElementById('btn-menu')
    let menu = document.getElementById('menu-mobile')
    let overlay = document.getElementById('overlay-menu')

    btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir-menu')})

    menu.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})

    overlay.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})
}
