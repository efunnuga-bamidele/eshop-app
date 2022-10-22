
//Sytles
import { useStateContext } from '../hooks/useStateContext'
import './Product.css'

export default function Product({ id, title, price, rating, image}) {

    const { dispatch } = useStateContext()

    const handleAddToCart = () => {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    id: id,
                    title:title,
                    image: image,
                    price: price,
                    rating: rating
                },
            })

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
                                <p key={i}>⭐</p>
                                ))}
                    </div>
                </div>

                <img src={image} alt="product-image" />

                <button onClick={handleAddToCart}>Add to Basket</button>
            </div>
    )
}