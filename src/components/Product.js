
//Sytles
import './Product.css'

export default function Product({ id, title, price, rating, image}) {
    const handleAddToCart = (e) => {
            
    }
    return(


            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className='product_price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                                ))}
                    </div>
                </div>

                <img src={image} alt="product-image" />

                <button onClick={(id) => handleAddToCart(id)}>Add to Basket</button>
            </div>

    )
}