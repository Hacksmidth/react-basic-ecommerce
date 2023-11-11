import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Cart : {cart.length}</h2>
            <div className='cart'>
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img} alt="" />)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.array.isRequired
}


export default Cart;
