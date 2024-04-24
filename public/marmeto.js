
document.addEventListener('DOMContentLoaded', function() {
    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');
    let selectedColor = '';
    let selectedSize = '';
    let selectedQuantity = 1;

    const colorOptions = document.querySelectorAll('.colour input[type="radio"');
        const sizeOptions = document.querySelectorAll('.size input[type="radio"]');
        const quantityDisplay = document.querySelector('.quantity .value');
        
        const addToCartButton = document.querySelector('.add_to_cart');
        const messageDisplay = document.getElementById('message');

        function updateMessage() {
            messageDisplay.textContent = `Embraced sideboard with color - ${selectedColor}, and Size - ${selectedSize}, Quantity - ${selectedQuantity} added to cart`;
        }

    incrementButton.addEventListener('click', function() {
        selectedQuantity++;
        quantityDisplay.textContent = selectedQuantity;
        // updateMessage();
    });

    decrementButton.addEventListener('click', function() {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            quantityDisplay.textContent = selectedQuantity;
            // updateMessage();
        }
    });

    addToCartButton.addEventListener('click', function() {
        if(selectedColor && selectedSize){
            updateMessage();
        }
        else{
            window.alert("Please select colour and size");
        }
        
    });
        
        // Event listeners for color options
        colorOptions.forEach(option => {
            option.addEventListener('change', function() {
                selectedColor = option.value;
                // updateMessage();
            });
        });

        // Event listener for size options
        sizeOptions.forEach(option => {
            option.addEventListener('change', function() {
                selectedSize = option.value;
                // updateMessage();
            });
        });

        const colorButtons = document.querySelectorAll('.color-button');
        
        function handleColorSelection() {
            colorButtons.forEach(button => {
                button.addEventListener('change', function() {
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
                radio.addEventListener('change', function() {
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
                button.addEventListener('change', function() {
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
        
    });

