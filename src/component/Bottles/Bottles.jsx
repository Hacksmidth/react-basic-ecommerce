import  { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCart } from '../../utilities/localStorage';
import Cart from '../Cart/cart';


const Bottles = () => {
    
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() => {
        fetch('./bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    },[])

    //load cart from local storage
    useEffect(()=>{
        if(bottles.length>0) {
            console.log(bottles.length)
            const storedCart = getStoredCart();
            // console.log(storedCart)
            const saveCart = [];
            for(const id of storedCart) {
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }
        
    } ,[bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    

    return (
        <div>
            <h2>Bottles Quantity : {bottles.length}</h2>

            <Cart
            cart ={cart}
            ></Cart>
            <div className='bottle-container'>
            {
                bottles.map(bottle => <Bottle
                key = {bottle.id}
                bottle = {bottle}
                handleAddToCart = {handleAddToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;