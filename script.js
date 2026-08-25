// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cart =JSON.parse(sessionStorage.getItem("cart"))|| [];
// DOM elements
const productList = document.getElementById("product-list");
const clearCartBtn = document.getElementById("clear-cart-btn");
const cartList=document.getElementById("cart-list");
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}


// Render cart list
function renderCart() {
	
	cart.forEach((product)=>{
		let li=document.createElement("li");
		li.innerText=`${product.name}-$${product.price}`
		cartList.appendChild(li);
	})
}

// Add item to cart
function addToCart(productId) {
	cartList.innerHTML=''
	 const product = products.find(product => product.id === productId);

    if (!product) {
        return;
    }
	cart.push(product);
	sessionStorage.setItem("cart",JSON.stringify(cart))
    
	renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
}

// Clear cart
function clearCart() {
	cartList.innerHTML=``;
	cart=[]
	renderCart();
}
// Initial render
renderProducts();
renderCart();

let btns=document.querySelectorAll(".add-to-cart-btn")
btns.forEach((btn)=>{
	btn.addEventListener("click",(e)=>{
		let productId=Number(e.target.dataset.id)
		addToCart(productId);
	})
})
clearCartBtn.addEventListener("click",clearCart);
