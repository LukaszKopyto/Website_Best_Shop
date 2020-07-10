window.addEventListener('DOMContentLoaded', (event) => {
  const menu = document.querySelector('.hamburger')
  const menuList = document.querySelector('.header__list')
  const menuItems = document.querySelectorAll('.header__items a')

  function toggleMenu() {
    menu.classList.toggle('hamburger--active')
    menuList.classList.toggle('hide')
  }

  menu.addEventListener('click', () => {
    toggleMenu()
  })
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
      toggleMenu()
    })
  }

  //close menu when clicking outside
  window.addEventListener('mouseup', (e) => {
    if (!menuList.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('hamburger--active')
      menuList.classList.add('hide')
    }
  })
})
