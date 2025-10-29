const cartSubmit = document.querySelectorAll('.cart-btn');
const quanBtn = document.querySelectorAll('.quantity-content');
const imageCard = document.querySelectorAll('.product-image');
const imgCard = document.querySelectorAll('.product-image-tablet');
const cardImage = document.querySelectorAll('.product-image-desktop');
const insertBtn = document.querySelectorAll('.increase-btn');
const deleteBtn = document.querySelectorAll('.decrease-btn');

const cartItems = [

     {
       image: {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50,
       inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00,
        inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00,
        inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50,
        inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00,
        inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00,
        inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50,
        inCart: 0,
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50,
        inCart: 0
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50,
        inCart: 0
     }
]


// this function sends the item to the cart
function addItemToCart(cartItem, i) {
  const output = document.querySelectorAll('#output')[i]
  const result = Number(output.innerText) + 1;

  let productItems = localStorage.getItem('addItemToCart')
  productItems = parseInt(productItems)


  if (productItems) {
    localStorage.setItem('addItemToCart', productItems + 1)
    document.getElementById('cart-output').textContent = productItems + 1;
  } else {
    localStorage.setItem('addItemToCart', 1)
    document.getElementById('cart-output').textContent = 1
  }


  if (result > 10) {
    result = 0
  }

  output.innerText = result


  quanBtn[i].style.display = 'block'
  imageCard[i].style.border = '2px solid #C73B0F'
  imgCard[i].style.border = '2px solid #C73B0F'
  cardImage[i].style.border = '2px solid #C73B0F'

  
}



function cartUpdate() {
  let productItems = localStorage.getItem('addItemToCart')
  
  if (productItems) {
    document.getElementById('cart-output').textContent = productItems
  }
}



// this function removes an item from the cart
function removeItemFromCart(i){
  const output = document.querySelectorAll('#output')[i];
  const result = Number(output.innerText) - 1;
  
  if (result < 0) {
    result = 0
  }

  output.innerText = result


  if (result === 0) {
    quanBtn[i].style.display = 'none'
    imageCard[i].style.border = 'none'
    imgCard[i].style.border = 'none'
    cardImage[i].style.border = 'none'
  }

}



for (let i = 0; i < cartSubmit.length; i++){
  cartSubmit[i].addEventListener('click', function(){
    addItemToCart(cartItems[i], i)
  })
}



for (let i = 0; i < insertBtn.length; i++){
  insertBtn[i].addEventListener('click', function(){
    addItemToCart(i)
  })
}



for (let i = 0; i < deleteBtn.length; i++){
  deleteBtn[i].addEventListener('click', function(){
    removeItemFromCart(i)
  })
}


cartUpdate()