"use strict";

const addItemToCart = (itemName) => {
  // add itemName to #cart-items table
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};



const resetCart = () => {
  // set the cart-total to 0
  // and empties cart-items
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {

  const cartTotal = $('#cart-total');
// set variable carTotal to id #cart-total

  let total = Number(cartTotal.html());
  total += price;
// set variable total to number of items in cartTotal
// increment total with the price of the added item

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;
  // set coffeeSold to number of coffees sold
  // increment by amountSold

  $('#coffee-sold-counter').html(coffeeSold);
};



const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
  // change #order-progress to progressVal
  // display order status
};


//
// Add your event handlers below.
//


$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);

  resetCart();
});