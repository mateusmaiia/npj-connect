import { HeaderForm } from '../../components/HeaderForm'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import './style.css'

export function Form() {
    const {register, handleSubmit} = useForm
    const [cpf, setCpf] = useState('');

    const formatarCPF = (value) => {
        const cpfAtual = value.replace(/\D/g, '');
        if (cpfAtual.length <= 11) {
            setCpf(cpfAtual.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3'));
        } else {
            setCpf(cpfAtual.slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
        }
    };

    function onSubmit(data) {
        console.log(data)
        // Lógica para enviar os dados do formulário
    }

    return (
        <div id='input-form'>
            <HeaderForm text={'CRIE SUA CONTA E VIVA A CONEXÃO DO'} textYellow={' ESCRITÓRIO DIGITAL!'} />
            <div className='form-wrapper'>
                <div className='form-contents-wrapper'>
                    <span className='text-top'>Crie a sua conta agora mesmo!</span>
                    <form onSubmit={() => handleSubmit(onSubmit)()}>

                        <Input 
                            autoFocus
                            type='text'
                            placeholder={'Nome completo'}
                            label={'Nome Completo:'}
                            {...register('nome', {
                                require: true,    
                            })}
                            
                        />
                        <Input
                            type='tel'
                            placeholder={'Telefone (com DDD)'}
                            label={'Telefone:'}
                            {...register('telefone', {
                                required: true,
                            })}
                            
                        />
                        <Input
                            type='email'
                            placeholder={'seu@melhoremail.com'}
                            label={'E-mail:'}
                            {...register('email', {
                                required: true,
                            })}
                            required
                        />
                        <Input
                            type='date'
                            placeholder={'dd/mm/aaaa'}
                            label={'Data de Nascimento:'}
                            {...register('dataNascimento', {
                                required: true,
                            })}
                            required
                        />
                        <Input
                            max="14"
                            type='text'
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
                            {...register('senha', {
                                required: true,
                            })}
                            required
                        />
                        <Input
                            type='password'
                            placeholder={'Confirme sua senha:'}
                            label={'Confirme a senha:'}
                            {...register('confirmarSenha', {
                                required: true,
                            })}
                            required
                        />

                        <button type='submit'>
                            Criar conta!
                        </button>
                        <div>
                            <span className='possuicontaForm'>JA POSSUI CONTA? </span>
                            <span><Link to="/login"><strong className='entrarForm'>ENTRAR</strong></Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
