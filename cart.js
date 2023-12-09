const btn = document.querySelectorAll(".grid__colum-2-4 button");

const btnEl = btn.forEach((button, index) => {
    button.addEventListener("click", function (event) {
    var btnItem = event.target;
 
    var product = btnItem.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("h4").innerText;
    var productDiv = product.querySelector("span").innerText;
    
    
    addCart(productImg, productName, productDiv);
});
});

const cartTotal = () => {
  var cartItems = document.querySelectorAll("tbody tr");
  var total = 0;

  cartItems.forEach((cartItem) => {
    var inputValue = parseInt(cartItem.querySelector("input").value, 10);
    var productPrice = parseFloat(cartItem.querySelector("span").innerText);

    if (!isNaN(inputValue) && !isNaN(productPrice)) {
      total += inputValue * productPrice * 1000000;
    }
  });

 
  var cartTotalElement = document.querySelector(".priceTotal span");
  cartTotalElement.innerText = total.toLocaleString('de-DE') + "Đ";

  
  if (cartItems.length === 0) {
  
  }
};



const addCart = (productImg, productName, productDiv) => {
    var cartTable = document.querySelector("tbody");
    var existingCartItem = findCartItem(productName);
  
    if (existingCartItem) {
      
      var quantityInput = existingCartItem.querySelector("input");
      quantityInput.value = parseInt(quantityInput.value, 10) + 1;
    } else {
      
      var addItem = document.createElement("tr");
  
      var trContent = `
      <td style="display: flex; align-items: center;">
      <img style="width: 70px" src="${productImg}" alt="${productName}">
      <h6 class="title">${productName}</h6>
      </td>
      <td>
      <p><span>${productDiv}</span></p>
        </td>
        <td style="width: 30px; outline: none;">
          <input type="button" value="1" min="0">
        </td>
        <td style="cursor: pointer;">
        <span class="cartDelete">
          Xoá
         </span> 
        </td>
      `;
      Swal.fire({
        title: "Them thanh cong!",
        text: "You clicked the button!",
        icon: "success"
      });
      addItem.innerHTML = trContent;
      cartTable.appendChild(addItem);
    }
  
    
    cartTotal();
  };
  





  const findCartItem = (productName) => {
    var cartItems = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItems.length; i++) {
      var nameInCart = cartItems[i].querySelector("h6").innerText;
      if (nameInCart === productName) {
        return cartItems[i];
      }
    }
    return null;
  };
  
  const handleDeleteClick = (event) => {
    if (event.target && event.target.classList.contains("cartDelete")) {
      var rowToDelete = event.target.closest("tr");
      if (rowToDelete) {
        var productName = rowToDelete.querySelector(".title").innerText;
        deleteItem(productName);
      }
    }
  };
  
  document.querySelector("tbody").addEventListener("click", handleDeleteClick);
  
  
  const deleteItem = (productName) => {
    var cartItems = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItems.length; i++) {
      var nameInCart = cartItems[i].querySelector(".title").innerText;
      if (nameInCart === productName) {
        cartItems[i].remove();
      
      }
    }
  
   
    cartTotal();
  };
  

const cartCountElement = document.getElementById('cartCount');


let cartCount = 0;


const updateCartCount = () => {
 
  cartCount += 1;

  
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
};


const addToCartButtons = document.querySelectorAll('.addToCartButton');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {


  
    updateCartCount();
  });
});

  
