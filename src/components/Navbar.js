import { BrowserRouter, Link } from 'react-router-dom'
//Material UI Icons
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
//Styles
import './Navbar.css'
//hooks
import { useStateContext } from '../hooks/useStateContext'

export default function Navbar(){

    const { basket } = useStateContext()
    // console.log(basket)

    return(
        <div className='header'>
        <Link to='/'>
            <div className="header_logo">
                <StorefrontIcon className="header_logoImage" fontSize="large" />
                <h2 className='header_logoTitle'>eShop</h2>
            </div>
            </Link>
            <div className="header_search">
                <input type="text" className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <Link to="/login"><span className="nav_itemLineTwo">Sign In</span></Link>
                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <Link to="/signup"><span className="nav_itemLineTwo">Shop</span></Link>
                </div>
                <Link to='/checkout'>
                    <div className='nav_itemBasket'>
                    <ShoppingBasketIcon />
                        <span className="nav_itemLineTwo nav_basketCount">{basket ? basket.length : 0 }</span>
                    </div>
                </Link> 
            </div>
        </div>
    )
}