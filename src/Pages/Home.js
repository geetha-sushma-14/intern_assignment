import React, { useEffect } from 'react';

// import React from 'react'

export default function Home() {

    useEffect(() => {
        const incrementButton = document.querySelector('.increment');
        const decrementButton = document.querySelector('.decrement');
        let selectedColor = '';
        let selectedSize = '';
        let selectedQuantity = 1;

        const colorOptions = document.querySelectorAll('.colour input[type="radio"]');
        const sizeOptions = document.querySelectorAll('.size input[type="radio"]');
        const quantityDisplay = document.querySelector('.quantity .value');

        const addToCartButton = document.querySelector('.add_to_cart');
        const messageDisplay = document.getElementById('message');

        function updateMessage() {
            messageDisplay.textContent = `Embraced sideboard with color - ${selectedColor}, and Size - ${selectedSize}, Quantity - ${selectedQuantity} added to cart`;
        }

        incrementButton.addEventListener('click', function () {
            selectedQuantity++;
            quantityDisplay.textContent = selectedQuantity;
            // updateMessage();
        });

        decrementButton.addEventListener('click', function () {
            if (selectedQuantity > 1) {
                selectedQuantity--;
                quantityDisplay.textContent = selectedQuantity;
                // updateMessage();
            }
        });

        addToCartButton.addEventListener('click', function () {
            if (selectedColor && selectedSize) {
                updateMessage();
            } else {
                window.alert("Please select colour and size");
            }

        });

        // Event listeners for color options
        colorOptions.forEach(option => {
            option.addEventListener('change', function () {
                selectedColor = option.value;
                // updateMessage();
            });
        });

        // Event listener for size options
        sizeOptions.forEach(option => {
            option.addEventListener('change', function () {
                selectedSize = option.value;
                // updateMessage();
            });
        });

        const colorButtons = document.querySelectorAll('.color-button');

        function handleColorSelection() {
            colorButtons.forEach(button => {
                button.addEventListener('change', function () {
                    if (this.checked) {
                        colorButtons.forEach(btn => {
                            btn.classList.remove('selected');
                        });
                        this.classList.add('selected');
                    }
                });
            });
        }

        handleColorSelection();

        function handleRadioSelection(radioButtons) {
            radioButtons.forEach(radio => {
                radio.addEventListener('change', function () {
                    if (this.checked) {
                        radioButtons.forEach(rb => {
                            if (rb !== this) {
                                rb.checked = false;
                            }
                        });
                    }
                });
            });
        }

        // Call the function for both color and size options
        handleRadioSelection(colorOptions);
        handleRadioSelection(sizeOptions);


        function handleColorSelections() {
            const colorButtons = document.querySelectorAll('.colour input[type="radio"]');
            colorButtons.forEach(button => {
                button.addEventListener('change', function () {
                    if (this.checked) {
                        // Remove 'selected' class from all color buttons
                        document.querySelectorAll('.colour label').forEach(label => {
                            label.classList.remove('selected-color');
                        });
                        // Add 'selected' class to the label of the selected color button
                        this.nextElementSibling.classList.add('selected-color');
                    }
                });
            });
        }

        // Call the function to handle color selection
        handleColorSelections();
    }, []);

  return (
    <React.Fragment>
    <div class="container">
        <div class="column">
            {/* <!-- <div class="row"> --> */}
                <img  class="main_photo" src="assets/images/photo1.png" alt="main_photo"/>
            {/* <!-- </div> --> */}
            {/* <!-- <div class="row"> --> */}
                <div class="sub_photos">
                    <img class="sub_photo" src="assets/images/photo2.png" alt="sub_photo"/>
                    <img class="sub_photo" src="assets/images/photo3.png" alt="sub_photo"/>
                    <img class="sub_photo" src="assets/images/photo4.png" alt="sub_photo"/>
                    <img class="sub_photo" src="assets/images/photo5.png" alt="sub_photo"/>
                </div>
            {/* <!-- </div> --> */}
        </div>
        <div class="column">
            <h3 class="company">Marmeto</h3>
            <h2 class="embrace">Embrace Sideboard</h2>
            <hr/>
            <h1 id="price">$12999.00 <span class="offer">35% off</span></h1>
            <h4 id="total_price"><strike>$19999.00</strike></h4>
            <hr class="line"/>
            <h3 class="company">Choose a colour</h3>
            <div class="colour">
                <input type="radio" id="colour1" class="colour1 color-button" name="color" value="yellow"/>
                <label for="colour1" class="colour1"></label>
                <input type="radio" id="colour2" class="colour2 color-button" name="color" value="green"/>
                <label for="colour2" class="colour2"></label>
                <input type="radio" id="colour3" class="colour3 color-button" name="color" value="blue"/>
                <label for="colour3" class="colour3"></label>
                <input type="radio" id="colour4" class="colour4 color-button" name="color" value="pink"/>
                <label for="colour4" class="colour4" name="color"></label>
            </div>
            <hr class="line"/>
            <h3 class="company">Choose a size</h3>
            <div class="size">
                <div class="small">
                    <input type="radio" id="small" value="small"/>
                    <label for="small">small</label>
                </div>
                <div class="medium">
                    <input type="radio" id="medium" value="medium"/>
                    <label for="medium">medium</label>
                </div>
                <div class="large">
                    <input type="radio" id="large" value="large"/>
                    <label for="large">large</label>
                </div>
                <div class="extra_large">
                    <input type="radio" id="extra_large" value="extra_large"/>
                    <label for="extra_large">extra large</label>
                </div>
                <div class="xxl">
                    <input type="radio" id="xxl" value="xxl"/>
                    <label for="xxl">xxl</label>
                </div>
            </div>
            <div class="quantity">
                <div class="counter">
                    <button class="decrement">-</button>
                    <span class="value">1</span>
                    <button class="increment">+</button>
                </div>
                <div class="cart">
                    {/* <!-- <i class="fa-regular fa-cart-shopping"></i> --> */}
                    <button class="add_to_cart">Add to cart</button>
                </div>
            </div>
            <hr class="line"/>
            The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.
            <div id="message" class="message"></div>
        </div>
    </div>
    <script src="assets/marmeto.js"></script>
    </React.Fragment>
  )
}
