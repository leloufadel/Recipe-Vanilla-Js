// items
const menu = [
    { 
    id: 1,
    title: "buttermilk pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },

{
    id: 2,
    title: "Lunch double",
    category: "Lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "diner Nord Africa",
    category: "Dinner",
    price: 25.99,
    img: "./images/item-3.jpeg",
    desc: `This is a common dinner in North african countries, including algeria mauritanie marroc and tunisia. slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  { 
  id: 4,
  title: "Chapaty Lunch",
  category: "Lunch",
  price: 10.99,
  img: "./images/item-6.jpg",
  desc: `This is a kenyan Recipe selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
},
{
   id:5,
   Title: "Cousous Plat",
   category: "Dinner",
   price: 15,
   img: "./images/item-7.jpg",
  desc: `This is a Marrocan and Mauritanian Dinner . selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
}
]

// get parent element
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function () 
{

    displayMenuItems(menu);
    displayMenuBtns();
    

}

);
function displayMenuItems(menu) {
    let displayMenu = menu.map(function(item) {
  return ` <article class="menu-item">
      <img src=${item.img}  alt=${item.title} class="photo">
      <div class="item-info">
        <header>
            <h4>
             ${item.category}
            </h4>
            <h4 class="price">
            ${item.price}

            </h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
      </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    
  }
  function displayMenuBtns() {
    const categoryitems = menu.reduce(function(value, item) {
      if (!value.includes(item.category)) {
          value.push(item.category);
      }
      return value; // Continue the loop without an else block
  }, ['all']);
  const categoryBtns = categoryitems.map(function(c) {
    return ` <button class="filter-btn"  type="button" data-name= ${c}> ${c}
    </button>`
    })
    .join("");
    container.innerHTML = categoryBtns;
    const sectionBtn = container.querySelectorAll(".filter-btn");
//filter 
sectionBtn.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
 const category = e.currentTarget.dataset.name;
 const menucategory = menu.filter(function (menu) {
  if (menu.category === category){
    return menu;

  }
 })
 if (category === "all"){
  displayMenuItems(menu);
}
  else {
    displayMenuItems(menucategory);

  }

  })
})
  }