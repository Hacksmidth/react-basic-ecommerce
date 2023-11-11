import './Bottle.css'

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

export default Bottle;