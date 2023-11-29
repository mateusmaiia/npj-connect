import './style.css'
import Facebook from '../../assets/ri_facebook-fill.svg'
import Instagram from '../../assets/ri_instagram-fill.svg'
import Twitter from '../../assets/mdi_twitter.svg'

export function Footer(){
    return(
        <footer>
            <div className='footer-wrapper'>
                <div className='social-medias'>
                    <span className='facebook'>
                        <img src={Facebook} alt="" />
                    </span>
                    <span className='instagram'>
                        <img src={Instagram} alt="" />
                    </span>
                    <span className='twitter'>
                        <img src={Twitter} alt="" />
                    </span>
                </div>
                <div className='privacity'>
                    <p>Privacidade | Termos e Condições | Sobre | Ajuda | Contato</p>
                    <p>2023. Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}
