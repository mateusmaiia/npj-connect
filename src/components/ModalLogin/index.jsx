import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export function ModalLogin({ isOpen , onClose }) {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            
        >
            <Box style={modalStyle} className='custom-modal'>
                <Typography id='modal-modal-title' variant='h6' component='h2' className='title-modal'>
                    CONECTE-SE
                </Typography>
                <Button className='button-modal'><Link to="/form">CADASTRAR</Link></Button>
                <Typography id='modal-modal-description' className='possuiconta' sx={{ mt: 2 }}>
                    JÁ POSSUI CONTA? <span><Link className='entrar' to="/login">ENTRAR</Link></span>
                </Typography>
            </Box>
        </Modal>
    );
}

ModalLogin.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
