import './style.css'
import Logo from '../../assets/npj_com_borda_1.svg'
import UserIcon from '../../assets/mdi_user.svg'
import Navbar from '../../assets/material-symbols_menu.svg'

export function Header(){
    return(
        <header>
            <div className='logo-container'>
                <img 
                    className='logo-icon'
                    src={Logo} 
                    alt="Logo" 
                />
                
            </div>
            <nav className='sla-container'>
                <a href="">
                    <img 
                        className='user-icon'
                        src={UserIcon} 
                        alt="" 
                    />
                </a>
                <a href="">
                    <img 
                        className='navbar-icon'
                        src={Navbar} 
                        alt="navbar" 
                    />
                </a>
            </nav>
        </header>
    )
}