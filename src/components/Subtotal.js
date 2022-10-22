import CurrencyFormat from 'react-currency-format';
//Styles
import './Subtotal.css'

//hooks
import { useStateContext } from '../hooks/useStateContext';

export default function Subtotal() {
    const { basket } = useStateContext()

    
//get total amount of items in basket

// const getBasketTotal = (basket) => {
//     return (basket?.reduce((amount, item) => item.price + amount, 0))
// }


    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText= {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={basket?.reduce((amount, item) => item.price + amount, 0)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}