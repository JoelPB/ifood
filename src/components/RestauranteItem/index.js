import React from 'react'
import { Text } from 'react-native'

import {AntDesign} from '@expo/vector-icons'

import { RestaurantesView, RestauranteFoto, RestauranteInfo } from './style'

const RestauranteItem = ({ foto, nome, key, nota, categoria, distancia, valorFrete, tempoEntrega }) => {
    return ( 
        <RestaurantesView key={key}>
            <RestauranteFoto source = {
                {
                    uri: foto.trim(),
                    width: 50,
                    height: 50,
                    resizeMode: 'cover'
                }
            }
            /> 
            <RestauranteInfo>
                <Text>{nome}</Text>
                <Text><AntDesign name='star' size={12} color="#F9A825"/>{nota} - {categoria} - {distancia}</Text>
                <Text>{tempoEntrega} . R$ {valorFrete}</Text>
                <Text></Text>
            </RestauranteInfo>
        </RestaurantesView>
    )
}

export default RestauranteItem