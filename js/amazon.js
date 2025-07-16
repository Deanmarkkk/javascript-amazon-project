const container = document.querySelector('.js-products-grid');
let storeHtml = '';
products.forEach((value) => {
    storeHtml += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${value.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${value.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${value.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${value.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(value.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select class="js-quantity-selector-${value.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-add-txt-${value.id}">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"  data-product-id="${value.id}">
                Add to Cart
            </button>
            </div>
    `;
container.innerHTML = storeHtml;
});

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; //data-produc-name in button add to cart

        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`); //13a, 13b
        let quantity = Number(quantitySelector.value); //13c, 13d

        //check if the quantity is more than 1, if true it will run this code
        //and if not true, it will run the else statement (1 quantity only)
        let matchingItem; //3
        cart.forEach((value) => { //1 assign a parameter
            if (productId === value.productId) { //2
                matchingItem = value;//4
            }
        });
        if (matchingItem) { //5
            matchingItem.quatity += quantity; //6, 13e
        } else { //7
            cart.push({ //8
                productId: productId, //9
                quatity: quantity //10, 13e
             });
        }
        //CART QUANTITY IN THE BASKET
        let cartQuantity = 0; //2
        cart.forEach((item) => { //1
            cartQuantity += item.quatity //3
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity

        const addedTxt = document.querySelector(`.js-add-txt-${productId}`); //13i, 13j

        let popUp = false; //13m
        let intervalId; //13m

        if (!popUp) {
             addedTxt.classList.add('added-text'); //13k
            clearTimeout(intervalId);
            popUp = false; 
        }
        intervalId = setTimeout(() => { //13L
            addedTxt.classList.remove('added-text')
            }, 2000);
            popUp = true;

    });
});
