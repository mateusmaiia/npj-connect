import './stylevideo.css'
import Logo from '../../assets/npj_com_borda_1.svg'
import UserIcon from '../../assets/mdi_user.svg'
import MenuIcon from '../../assets/menu.svg'


export function Header() {
    return (
        <header>

            <nav >
                <div className='logo'>
                    <a href="">
                        <img
                            className='logo-icon'
                            src={Logo}
                            alt="Logo"
                        />
                    </a>

                </div>
                <div className='mobile-menu'>
                    <img src={MenuIcon} alt='Menu Icon'/>
                </div>
                <ul className='nav-list'>

                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Quem somos?</a> </li>
                    <li><a href="#">O que fazemos?</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <a href="/" className='icon'>
                        <img
                            className='user-icon'
                            src={UserIcon}
                            alt=""
                        />
                    </a>
                </ul>
            </nav>

        </header>
    )
}