export const cart = [];

export function addtoCart(productId) {
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
}
