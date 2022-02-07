import { Link, NavLink } from 'remix';
import logo from '~/assets/images/logo.png';
import cartSvg from '~/assets/svg/cart.svg';
import searchSvg from '~/assets/svg/search.svg';
import { selectCart } from '~/shared/store/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '~/shared/store/hooks';
import { shouldOpenSearch } from '~/shared/store/search/search.slice';

export default function Toolbar() {
    // Subscribe to Store Cart.
    const { cart } = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        dispatch(shouldOpenSearch(true));
    }

    return (
        <>
            <div className='toolbar-main'>
                <div className="toolbar responsive-container">
                    <div className="toolbar--list-items">

                        <div className='toolbar--relative'>
                            <Link to={'/'} prefetch='none'>
                                <img src={logo} alt="logo" className="toolbar--list-items--logo pointer" />
                            </Link>
                            <div className='toolbar--hint'>
                                <p className='xs'><b>Link Tag as Default Behavior</b>. prefetch="none"</p>
                                <p className='xs'>This will prevent any prefetching from happening.</p>
                            </div>
                        </div>

                        <div className='toolbar--relative toolbar--list-items--hide-mobile'>
                            <NavLink
                                to="/home-no-delay"
                                className='toolbar--list-items--link'
                                style={({ isActive }) => isActive ?
                                    { backgroundColor: 'black', color: 'white' }
                                    :
                                    { backgroundColor: 'transparent', color: 'black' }}
                            >
                                <p className="sm">Error 404</p>
                            </NavLink>
                            <div className='toolbar--hint'>
                                <p className='xs'><b>Sample of Root Error</b></p>
                                <p className='xs'>Catch from ./root.tsx will be called</p>
                            </div>
                        </div>
                    </div>

                    <div className="toolbar--svg-wrapper">
                        <img onClick={handleSearch} src={searchSvg} alt="search" className="toolbar--svg-wrapper--search pointer" />
                        <div className='toolbar--relative toolbar--svg-wrapper--inner'>
                            <img src={cartSvg} alt="cart" className="toolbar--svg-wrapper--cart pointer" />
                            {cart.length > 0 &&
                                <div className='toolbar--relative toolbar--svg-wrapper--inner--cart-number'>
                                    <p className='xs'><b>{cart.length}</b></p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='toolbar-spacing'></div>
        </>
    )
}