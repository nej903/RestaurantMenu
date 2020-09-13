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

fetch("food.json")
  .then((response) => response.json())
  .then((data) => displayFood(data))
  .catch((error) => console.log(error));

const displayFood = (data) => {
  data.forEach((food) => {
    const { food: content, items } = food;
    const meal = menus.find((el) => el.id.includes(content));
    items.forEach((item) => {
      const { food, price } = item;
      const pTag = document.createElement("p");
      pTag.innerText = `${titleCase(food)} - $${parseFloat(price).toFixed(2)}`;
      meal.appendChild(pTag);
    });
  });
};

const titleCase = (str) => {
  var strAr = str.toLowerCase().split(" ");
  for (var i = 0; i < strAr.length; i++) {
    strAr[i] = strAr[i].charAt(0).toUpperCase() + strAr[i].slice(1);
  }
  return strAr.join(" ");
};
