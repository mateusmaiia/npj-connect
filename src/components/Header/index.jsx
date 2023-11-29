import  { useState } from 'react';
import Logo from '../../assets/npj_com_borda_1.svg';
import UserIcon from '../../assets/mdi_user.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import './style.css';


// teste commitar

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav id='menu'>
        <div className='logo'>
          <a href=''>
            <img className='logo-icon' src={Logo} alt='Logo' />
          </a>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleToggleMobileMenu}>
          <div className={`line1 ${isMobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`line2 ${isMobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`line3 ${isMobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`line4 ${isMobileMenuOpen ? 'active' : ''}`}></div>
        </div>
        <div className={`user-icon-wrapper ${isMobileMenuOpen ? 'with-menu' : ''}`}>
         
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href='#'>Sobre</a>
          </li>
          <li>
            <a href='#'>Quem somos?</a>
          </li>
          <li>
            <a href='#'>O que fazemos?</a>
          </li>
          <li>
            <a href='#'>Perguntas Frequentes</a>
          </li>

          <a href='/' className='icon' onClick={handleOpenModal}>
            <img className='user-icon' src={UserIcon} alt='' />
          </a>
        </ul>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box style={modalStyle} className='custom-modal'>
            <Typography id='modal-modal-title' variant='h6' component='h2' className='title-modal'>
              CONECTE-SE
            </Typography>
            <Button className='button-modal'><Link to="/form">CADASTRAR</Link></Button>
            <Typography id='modal-modal-description' className='possuiconta' sx={{ mt: 2 }}>
              Já possui conta? <span><Link className='entrar' to="/entrar">Entrar</Link></span>
            </Typography>
          </Box>
        </Modal>
      </nav>
    </header>
  );
}