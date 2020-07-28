import React from 'react'
import BaseTemplate from '../../../components/BaseTemplate'
import { Link } from 'react-router-dom'

export default () => (
    <BaseTemplate>
        <h1>
            Cadastro de Vídeos
        </h1>

        
        <Link to='/cadastro/categoria'>
            Cadastrar Categoria
        </Link>
    </BaseTemplate>
);