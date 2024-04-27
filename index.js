const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "TECHNOLOGIE",
    price: 119,
    colors: [
      {
        code: "black",
        img: "Apple_iPhone_12-removebg-preview.png",
      },
      {
        code: "darkblue",
        img: "Ecrans_PC__2_-removebg-preview.png",
      },
    ],
  },
  {
    id: 2,
    title: "IIMMOBILIER",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "Beach_House-removebg-preview.png",
      },
      {
        code: "green",
        img: "Can_Basso___Photos-removebg-preview.png",
      },
    ],
  },
  {
    id: 3,
    title: "HOTEL",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "derelict_stone_heritage_buildings_in_catalonia_sustainably_revitalized-removebg-preview.png",
      },
      {
        code: "green",
        img: "c3423aad-37e3-4051-b316-f3f5ca36fe67-removebg-preview.png",
      },
    ],
  },
  {
    id: 4,
    title: "MODE",
    price: 129,
    colors: [
      {
        code: "black",
        img: "emmastine_com-removebg-preview.png",
      },
      {
        code: "lightgray",
        img: "Casual_Work_Outfit-removebg-preview.png",
      },
    ],
  },
  {
    id: 5,
    title: "SERVICE",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "Imprimantes__1_-removebg-preview (1).png",
      },
      {
        code: "black",
        img: "Imprimantes-removebg-preview.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});