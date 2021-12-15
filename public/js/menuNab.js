const d = document
const rootStyles = d.documentElement.style

export const menuNab = (btnMenu, menu, selectorColor, menuLink) => {
  const $btnMenu = d.getElementById(btnMenu)
  const $menu = d.getElementById(menu)

  $btnMenu.addEventListener("click", () => {
    $menu.classList.toggle("active__nav")
    $btnMenu.classList.toggle("active")
  })

  d.addEventListener("click", (e) => {
    if (e.target.matches(selectorColor)) {
      rootStyles.setProperty("--color-primary", e.target.dataset.color)
    }

    if (e.target.matches(menuLink)) {
      $menu.classList.remove("active__nav")
      $btnMenu.classList.remove("active")
    }
  })
}
