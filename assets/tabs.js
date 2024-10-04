document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabContents = document.querySelectorAll('.tab-content')

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab-target')

      // Desactivar todas las pestañas y contenidos
      tabButtons.forEach((btn) => btn.classList.remove('active'))
      tabContents.forEach((content) => content.classList.remove('active'))

      // Activar la pestaña y contenido seleccionado
      button.classList.add('active')
      document.querySelector(target).classList.add('active')
    })
  })

  // Inicializar la primera pestaña como activa (opcional)
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add('active')
    tabContents[0].classList.add('active')
  }
})
