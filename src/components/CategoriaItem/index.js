import React from 'react'

import { CategoriaView, CategoriaTexto, CategoriaFoto} from './style'

const CategoriaItem = ({foto, key, texto}) => {
    return (
        <CategoriaView key={key}>
            <CategoriaFoto source={{
                uri: foto.trim(),
                width: 98,
                height: 58,
            }}/>
            <CategoriaTexto>{texto}</CategoriaTexto>
        </CategoriaView>
    )
}

export default CategoriaItem