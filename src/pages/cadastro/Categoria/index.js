import React from 'react'
import BaseTemplate from '../../../components/BaseTemplate'
import { Link } from 'react-router-dom'

export default () => (
    <BaseTemplate>
        <h1>Cadastro de Categoria</h1>

        <form>

            <label>
                Nome da Categoria:
                <input
                    type="text"
                />
            </label>

            <button>
                Cadastrar
            </button>
        </form>

        <Link to='/'>
            Ir para Home
        </Link>
    </BaseTemplate>
);