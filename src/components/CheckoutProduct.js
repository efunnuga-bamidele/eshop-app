import { useStateContext } from '../hooks/useStateContext'

//Styles
import './CheckoutProduct.css'
export default function CheckoutProduct({ id, title, price, rating, image}) {

    const {dispatch} = useStateContext()

    const handleRemoveFromBasket = () => {
     
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
    }
    return(
        <div className="checkout_product">
                <img src={image} className="checkoutproduct_image" alt="checkoutproduct_image" />
        <div className="checkoutproduct_info">
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                        ))}
            </div>
            
             <button onClick={handleRemoveFromBasket}>Remove from Basket</button>
        </div>


    </div>
    )
}