window.addEventListener('DOMContentLoaded', (event) => {
  const menu = document.querySelector('.hamburger')
  const menuList = document.querySelector('.header__list')
  const menuItems = document.querySelectorAll('.header__items')
  const menuItemsLink = document.querySelectorAll('.header__items a')

  function toggleMenu() {
    menu.classList.toggle('hamburger--active')
    menuList.classList.toggle('hide')
  }

  menu.addEventListener('click', () => {
    toggleMenu()
  })
  for (let i = 0; i < menuItemsLink.length; i++) {
    menuItemsLink[i].addEventListener('click', () => {
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

  function onScroll(e) {
    let scrollPos = window.pageYOffset
    for (let i = 0; i < menuItemsLink.length; i++) {
      let currLink = menuItemsLink[i]
      let linkHref = currLink.getAttribute('href').split('#')
      let refElement = document.getElementById(linkHref[1])
      if (
        refElement.offsetTop <= scrollPos + 70 &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos + 70
      ) {
        currLink.parentElement.classList.add('active')
      } else if (window.innerHeight + scrollPos >= document.body.offsetHeight) {
        menuItemsLink[menuItemsLink.length - 1].parentElement.classList.add(
          'active'
        )
        menuItemsLink[menuItemsLink.length - 2].parentElement.classList.remove(
          'active'
        )
      } else {
        currLink.parentElement.classList.remove('active')
      }
    }
  }
  window.document.addEventListener('scroll', onScroll)
})
