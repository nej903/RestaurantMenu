const aTags = Array.from(document.querySelectorAll("a"));
const menus = document.querySelectorAll("section>div");

aTags.forEach((a) => {
  a.addEventListener("click", () => {
    myFunc(a);
  });
});

const myFunc = (el) => {
  const menuId = el.href.split("#")[1];
  const menuItem = document.getElementById(menuId);
  console.log(menuItem.id);
  [...menuItem.classList].includes("active")
    ? null
    : menuItem.classList.toggle("active");
};
