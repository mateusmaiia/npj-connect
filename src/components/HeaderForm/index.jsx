import Logo from '../../assets/npj_com_borda_1.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css'

export function HeaderForm({text, textYellow}){
    return(
        <header className='header-form'>
            <div className='logo'>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className='text'>
                {text} 
                <span className='textYellow'>{textYellow}</span>
            </div>
        </header>
    )
}

HeaderForm.propTypes = {
    text: PropTypes.string.isRequired,
    textYellow: PropTypes.string.isRequired,
};