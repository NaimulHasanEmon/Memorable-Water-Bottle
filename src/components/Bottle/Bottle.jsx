import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <img className="bottle-img" src={img} alt={name} />
            <button onClick={() => handleAddToCart(bottle)} className='purchase'>Purchase</button>
        </div>
    );
};

export default Bottle;