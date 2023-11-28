import { HeaderForm } from '../../components/HeaderForm'
import { Input } from '../../components/Input'
import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export function Form(){
    const [cpf, setCpf] = useState('')

    const formatarCPF = (value) => {
        const cpfAtual = value.replace(/\D/g, '');
        if (cpfAtual.length <= 11) {
            setCpf(cpfAtual.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3'));
        } else {
            setCpf(cpfAtual.slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
        }
    };

    function submit(event){
        event.preventDefault()
    }
    return(
        <div >
            <HeaderForm text={'CRIE SUA CONTA E VIVA A CONEXÃO DO'} textYellow={' ESCRITÓRIO DIGITAL!'}/>
            <div className='form-wrapper'>
                
                <div className='form-contents-wrapper'>
                    <span className='text-top'>Crie a sua conta agora mesmo!</span>
                    <form action="" onSubmit={submit}>
                        <Input 
                            type='text'
                            placeholder={'Nome completo'}
                            label={'Nome Completo:'}
                            required
                        />
                         <Input 
                            type='tel'
                            placeholder={'Telefone (com DDD'}
                            label={'Telefone:'}
                            required
                        />
                       <Input 
                            type='email'
                            placeholder={'seu@melhoremail.com'}
                            label={'E-mail:'}
                            required
                        />
                        <Input 
                            type='date'
                            placeholder={'dd/mm/aaaa'}
                            label={'Data de Nascimento:'}
                            required
                        />
                        <Input 
                            max="14"
                            type='cpf'
                            placeholder={'xxx.xxx.xxx-xx'}
                            label={'CPF:'}
                            value={cpf}
                            onChange={(e) => formatarCPF(e.target.value)}
                            maxLength="14"
                            required
                        />
                        <Input 
                            type='password'
                            placeholder={'Crie sua senha'}
                            label={'Senha:'}
                            required
                        />
                        <Input 
                            type='password'
                            placeholder={'Confirme sua senha:'}
                            label={'Confirme a senha:'}
                            required
                        />

                        <button type='submit'>
                            Criar conta!
                        </button>
                        <div >
                            <span className='possuicontaForm'>JA POSSUI CONTA? </span>
                            <span><Link to="/entrar"><strong className='entrarForm' >ENTRAR</strong></Link></span></div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

//type, placeholder, value, onChange, label