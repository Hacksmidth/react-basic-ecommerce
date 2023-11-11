const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString) {
        return JSON.parse(storedCartString)
    }else {
        return [];
    }
}

const  saveToCart = (cart) => {
    const cartSrtingified = JSON.stringify(cart);
    localStorage.setItem('cart',cartSrtingified)
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveToCart(cart)
}