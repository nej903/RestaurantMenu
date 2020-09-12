const aTags = Array.from(document.querySelectorAll("a"));
const menus = Array.from(document.querySelectorAll("section>div"));

aTags.forEach((a) => {
  a.addEventListener("click", () => {
    showMenu(a);
  });
});

const showMenu = (el) => {
  menus.forEach((menu) => menu.classList.remove("active"));
  const elArr = el.href.split("#");
  const menuId = elArr[elArr.length - 1];
  const menuItem = document.getElementById(menuId);
  menuItem.classList.toggle("active");
};
