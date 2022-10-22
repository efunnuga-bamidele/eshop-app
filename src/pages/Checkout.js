import { useStateContext } from '../hooks/useStateContext'
//Components
import CheckoutProduct from '../components/CheckoutProduct'
import Subtotal from '../components/Subtotal'
//Styles
import './Checkout.css'

export default function Checkout() {
    const { basket } = useStateContext()
    return(

      
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket && basket.map((item) => (  
                    <CheckoutProduct key={item.id}
                        id= {item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}