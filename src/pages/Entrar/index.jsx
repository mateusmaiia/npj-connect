import { HeaderForm } from "../../components/HeaderForm";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import './index.css'
export function Entrar() {

    function submit(event) {
        event.preventDefault()
    }

    return (
        <div id='login-wrapper'>
            <HeaderForm text={'NPJ CONNECT É A SUA CONEXÃO DIRETA COM A '} textYellow={'JUSTIÇA!'} />
            <div className='form-wrapper-entrar'>

                <div className='form-contents-wrapper'>
                    <span className='text-top'>Entre na sua conta agora mesmo!</span>
                    <form action="" onSubmit={submit}>
                        <Input
                            type='email'
                            placeholder={'Login'}
                            label={'E-mail ou CPF:'}
                            required
                        />
                        <Input
                            type='password'
                            placeholder={'Crie sua senha'}
                            label={'Senha:'}
                            required
                        />
                        <div><Link className="esqueceuSenha" to="#">Esqeuceu sua senha?</Link></div>
                        <button className="buttonEntrar" type='submit'>
                            ENTRAR NA MINHA CONTA
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}