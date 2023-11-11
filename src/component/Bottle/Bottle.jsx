import './Bottle.css'
import PropTypes from 'prop-types'

const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price} = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h3>Price : {price}</h3>
            <button onClick={() =>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddToCart : PropTypes.func.isRequired
}

export default Bottle;