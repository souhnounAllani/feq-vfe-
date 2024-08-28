
  var increaseButton = document.getElementById('increase');
  var decreaseButton = document.getElementById('decrease');
  var quantitySpan = document.getElementById('quantity');

 
  var quantity = 0;


  function updateQuantity(newQuantity) {
    quantity = newQuantity;
    quantitySpan.textContent = quantity;
  }

  increaseButton.addEventListener('click', function() {
    updateQuantity(quantity + 1);
  });

  decreaseButton.addEventListener('click', function() {
    if (quantity > 0) {
      updateQuantity(quantity - 1);
    }
  });







