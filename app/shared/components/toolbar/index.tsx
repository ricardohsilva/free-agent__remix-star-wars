import { Link, NavLink } from 'remix';
import logo from '~/assets/images/logo.png';
import cartSvg from '~/assets/svg/cart.svg';
import searchSvg from '~/assets/svg/search.svg';

export default function Toolbar() {
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

                        <div className='toolbar--relative'>
                            <NavLink
                                to="/intent"
                                prefetch='intent'
                                className='toolbar--list-items--link'
                                style={({ isActive }) => isActive ?
                                    { backgroundColor: 'black', color: 'white' }
                                    :
                                    { backgroundColor: 'transparent', color: 'black' }}
                            >
                                <p className="sm">Home Intent</p>
                            </NavLink>
                            <div className='toolbar--hint'>
                                <p className='xs'><b>Link Tag as Intent</b>. prefetch="intent"</p>
                                <p className='xs'>Fetches when Remix thinks the user intends to visit the link.</p>
                            </div>
                        </div>

                        <div className='toolbar--relative'>
                            <NavLink
                                to="/render"
                                prefetch='render'
                                className='toolbar--list-items--link'
                                style={({ isActive }) => isActive ?
                                    { backgroundColor: 'black', color: 'white' }
                                    :
                                    { backgroundColor: 'transparent', color: 'black' }}
                            >
                                <p className="sm">Home Render</p>
                            </NavLink>
                            <div className='toolbar--hint'>
                                <p className='xs'><b>Link Tag as Render</b>. prefetch="render"</p>
                                <p className='xs'>Fetches when the link is rendered.</p>
                            </div>
                        </div>

                        <div className='toolbar--relative'>
                            <NavLink
                                to="global-boundary"
                                className='toolbar--list-items--link toolbar--relative'
                                style={({ isActive }) => isActive ?
                                    { backgroundColor: 'black', color: 'white' }
                                    :
                                    { backgroundColor: 'transparent', color: 'black' }}
                            >
                                <p className="sm">Boundary Error</p>
                            </NavLink>
                            <div className='toolbar--hint'>
                                <p className='xs'><b>Sample of Root Boundary Error</b></p>
                                <p className='xs'>Boundary from ./root.tsx will be called</p>
                            </div>
                        </div>




                    </div>

                    <div className="toolbar--svg-wrapper">
                        <img src={searchSvg} alt="search" className="toolbar--svg-wrapper--search pointer" />
                        <img src={cartSvg} alt="cart" className="toolbar--svg-wrapper--cart pointer" />
                    </div>
                </div>
            </div>
            <div className='toolbar-spacing'></div>
        </>
    )
}