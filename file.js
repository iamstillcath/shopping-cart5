let items = [
  {
    name: "pasta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGb-6mnfS9Vo95cGPEi0FCQQMRxNJ6wVRVQ&usqp=CAU",
    price: 1.08,
    description: "Real italian pasta great cooked",
  },

  {
    name: "samosas",
    image:
      "https://netstorage-legit.akamaized.net/images/vllkyt7fsiskld2o7.jpg",
    price: 6.92,
    description: "Freshly oven baked small chops",
  },

  {
    name: "bread",
    image:
      "https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?b=1&k=20&m=995038782&s=170667a&w=0&h=DhnB0WJOySvxTwwCOeUagMmDCGFEykDxZsCgmkOSIZM=",
    price: 3.02,
    description: "Fresh oven baked brown bread",
  },

  {
    name: "non-alcholic",
    image:
      "https://7omcu3a78zp40klds2w28klr-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/GettyImages-900247658-350x233.jpg",
    price: 2.04,
    description: "Finest fresh wines made specially",
  },

  {
    name: "milk",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/296564_1100-732x549.jpg",
    price: 1.03,
    description: "Milked ,Refined and processed",
  },
  {
    name: "chocolate",
    image:
      "https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2019/03/c-vegan-chocolate-bars-4-500x500.jpg",
    price: 5.76,
    description: "Made from the very best cocoa",
  },

  {
    name: "candies",
    image:
      "https://media.istockphoto.com/photos/lollipops-candies-and-sweet-sugar-jelly-multicolored-picture-id1145250337?k=20&m=1145250337&s=612x612&w=0&h=TRZoEc3o2ZwbH1crsM_j077-upe-QtU_BGP-wG9TNOw=",
    price: 2.65,
    description: "Great for kids refreshing they love",
  },

  {
    name: "veg",
    image:
      "https://media.istockphoto.com/photos/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden-picture-id1280856062?b=1&k=20&m=1280856062&s=170667a&w=0&h=wQu-c2ZjzeCBkAGEj69xpF611lx1i_xim48vOCj_Dw0=",
    price: 3.09,
    description: "Carrots,apples,lemons,vegetables",
  },
  {
    name: "Biscuit",
    image:
      "https://us.123rf.com/450wm/onlyblack/onlyblack1903/onlyblack190300030/118716308-golden-cookies-in-a-transparent-package-close-up-isolated-on-white-background-.jpg?ver=6",
    price: 1.53,
    description: "Speedy,fish-biscuit  cookies, fish",
  },

  {
    name: "Donuts",
    image:
      "https://media.istockphoto.com/photos/field-of-different-types-of-donuts-picture-id465529983?b=1&k=20&m=465529983&s=170667a&w=0&h=wZ403DEEzskTZ7GFDTya4apixOM-iRoVYd7CIOPvcOI=",
    price: 2.01,
    description: " Sweet different flavour and design",
  },

  {
    name: "eggs",
    image:
      "https://www.asweetpeachef.com/wp-content/uploads/2014/09/how-to-make-the-best-scrambled-eggs-4.jpg",
    price: 2.09,
    description: "fried, tomates,onions and eggs",
  },
];

let divWrap = document.getElementById("divWrap");
let showcart = document.getElementById("cart-wrapper");
divWrap.style.display = "block";

for (let i = 0; i < items.length; i++) {
  let div = document.createElement("div");
  let images = document.createElement("img");
  let names = document.createElement("h1");
  let amount = document.createElement("h2");
  let title = document.createElement("h4");
  let button = document.createElement("button");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div0 = document.createElement("div");

  images.src = items[i].image;
  images.style.width = "100px";
  names.textContent = items[i].name;
  title.textContent = items[i].description;
  amount.textContent = "£" + items[i].price;
  button.textContent = "Add To Cart";
  button.id = "button";
  div.id = "div1";
  div2.id = "div2";
  div3.id = "div3";
  div0.id = "div0";

  div0.appendChild(images);
  div2.appendChild(names);
  div2.appendChild(title);
  div3.appendChild(amount);
  div3.appendChild(button);
  div0.appendChild(div2);
  div0.appendChild(div3);
  div.appendChild(div0);
  divWrap.appendChild(div);
}

let rowIndex;
const buttons = document.querySelectorAll("#button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    showcart.style.visibility = "visible";
    let table = document
      .getElementById("display")
      .getElementsByTagName("tbody")[0];

    if (table.rows.length === 0) {
      rowIndex = 0;
    } else {
      rowIndex = rowIndex + 1;
    }

    let newRow = table.insertRow(table.length);
    let imageCell = newRow.insertCell(0);
    let image1 = document.createElement("img");
    image1.className = "cart-img";
    image1.src = items[i].image;
    imageCell.append(image1);

    let cart =document.createElement("p");
    cart.textContent="cart item:"
    let names = document.createElement("h1");
    names.textContent = items[i].name;
    let titles = document.createElement("h4");
    titles.textContent = items[i].description;
    let cell1 = newRow.insertCell(1);
    cell1.append(cart,names, titles);
    cell1.className="cell"

    let amount = document.createElement("h2");
    amount.textContent = items[i].price;
    amount.style.marginLeft="50px"

    let remove = document.createElement("button");
    remove.textContent = "Remove from Cart";
    remove.id = "remove";
    let cell2 = newRow.insertCell(2);
    cell2.append(amount, remove);
    

    let itemsCount = document.getElementById("items");
    table.rows.length = table.rows.length + 1;
    itemsCount.innerHTML = table.rows.length;

    let totals = document.getElementById("total");
    let defaultPrice = items[i].price;
    if (rowIndex === 0) {
      totals.innerText = "£" + defaultPrice;
    } else {
      const increase = +totals.innerText.slice(1) + +defaultPrice;
      totals.innerText = "£" + increase.toFixed(2);
    }

    cell2.addEventListener("click", function (e) {
      rowIndex = rowIndex - 1;
      e.target.parentElement.parentElement.remove();

      totals = document.getElementById("total");
      const decrease = +totals.innerText.slice(1) - +amount.innerText;
      totals.innerText = "£" + decrease.toFixed(2);

      if (rowIndex < 0) {
        e.target.parentElement.parentElement.remove();
        showcart.style.visibility = "hidden";
      }
    });;
  });
}
const cartTable = document.getElementById("display");
let goTo = document.querySelector(".go-to");
cartTable.style.display = "none";
goTo.style.display = "none";
const viewBtn = document.getElementById("viewbutton");

viewBtn.addEventListener("click", function () {
  if (divWrap.style.display === "block") {
    divWrap.style.display = "none";
    cartTable.style.display = "block";
    goTo.style.display = "block";
    viewBtn.innerText = "Go back to Shop";
  } else {
    divWrap.style.display = "block";
    cartTable.style.display = "none";
    goTo.style.display = "none";
    viewBtn.innerText = "View/Modify Cart";
  }
});

goTo.addEventListener("click", function () {
  if (divWrap.style.display === "block") {
    divWrap.style.display = "none";
    cartTable.style.display = "block";
    viewBtn.innerText = "Go back to Shop";
  }
});

// }
