import './login.css'

import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className='container'>
            <form>
                <h1>Tela de Login</h1>

                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                
                />
                <input
                    type="password"
                    value={senha}
                    onChange={ e => setSenha(e.target.value)}
                    placeholder='**********'
                />

                <div className="buttonGroup">
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
                <p>E-mail: { email } </p>
                <p>Senha: { senha } </p>
            </form>
        </div>
    )
}