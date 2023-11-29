import { Link } from 'react-router-dom';
import Logo from '../../assets/npj_com_borda_1.svg';
import UserIcon from '../../assets/mdi_user.svg';
import './style.css';

export function Header() {

    return (
        <header id='header-wrapper'>
            <nav id='menu'>
                <div className='logo'>
                    <a href=''>
                        <img className='logo-icon' src={Logo} alt='Logo' />
                    </a>
                </div>
                <Link to='/login'>
                  <img src={UserIcon} alt=""  />
                </Link>
            </nav>
        </header>
    );
}