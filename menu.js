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
  data.forEach((option) => {
    const { type, items } = option;
    const meal = menus.find((el) => el.id.includes(type));
    items.forEach((item) => {
      const { food, price } = item;
      const div = document.createElement("div");
      const cooking = document.createElement("p");
      cooking.innerText = titleCase(food);
      const amount = document.createElement("p");
      amount.innerText = `$${parseFloat(price).toFixed(2)}`;
      div.append(cooking, amount);
      div.classList.add("display-items");
      meal.appendChild(div);
    });
  });
};

const titleCase = (str) => {
  let strAr = str.toLowerCase().split(" ");
  for (let i = 0; i < strAr.length; i++) {
    strAr[i] = strAr[i].charAt(0).toUpperCase() + strAr[i].slice(1);
  }
  return strAr.join(" ");
};
