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
            <div className='sla-container'>
                <a href="/">
                    <img 
                        className='user-icon'
                        src={UserIcon} 
                        alt="" 
                    />
                </a>
                <nav >
                    <img 
                        className='navbar-icon'
                        src={Navbar} 
                        alt="navbar" 
                    />

                    <ul>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                        <li>
                            <a href="#">Quem somos?</a>
                        </li>
                        <li>
                            <a href="#">O que fazemos? </a>
                        </li>
                        <li>
                            <a href="#">Perguntas Frequentes</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}