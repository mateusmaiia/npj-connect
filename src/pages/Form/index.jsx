import { HeaderForm } from '../../components/HeaderForm'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export function Form() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const formatarCPF = (value) => {
        const cpfAtual = value.replace(/\D/g, '');
        if (cpfAtual.length <= 11) {
            setCpf(cpfAtual.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3'));
        } else {
            setCpf(cpfAtual.slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
        }
    };

    function submit(event) {
        event.preventDefault();
        // Lógica para enviar os dados do formulário
    }

    return (
        <div id='input-form'>
            <HeaderForm text={'CRIE SUA CONTA E VIVA A CONEXÃO DO'} textYellow={' ESCRITÓRIO DIGITAL!'} />
            <div className='form-wrapper'>
                <div className='form-contents-wrapper'>
                    <span className='text-top'>Crie a sua conta agora mesmo!</span>
                    <form action="" onSubmit={submit}>
                        <Input
                            type='text'
                            placeholder={'Nome completo'}
                            label={'Nome Completo:'}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <Input
                            type='tel'
                            placeholder={'Telefone (com DDD)'}
                            label={'Telefone:'}
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                        <Input
                            type='email'
                            placeholder={'seu@melhoremail.com'}
                            label={'E-mail:'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type='date'
                            placeholder={'dd/mm/aaaa'}
                            label={'Data de Nascimento:'}
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
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
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <Input
                            type='password'
                            placeholder={'Confirme sua senha:'}
                            label={'Confirme a senha:'}
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
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
