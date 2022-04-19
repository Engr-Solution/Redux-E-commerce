
// Add Product to Cart
export const addToCart = (product) => {
    return {
        type: 'ADDTOCART',
        payload: product
    }
}




// Rempve product from cart
export const removeFromCart = (product) => {
    return {
        type: 'REMOVEFROMCART',
        payload: product
    }
}