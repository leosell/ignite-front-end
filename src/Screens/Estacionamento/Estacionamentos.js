import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons'

import api from '../../API'
import { Context } from '../../Context/authContext'
import CustomButton from '../../Components/CustomButton'


const Estacionamentos = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [ estacionamento, setEstacionamento ] = useState({})

    useEffect(() => {
        const screenLoad = async () => {
            const list = await api.get('/estacionamento/busca')
            setEstacionamento(list.data.estacionamento)
            dispatch({ type: 'update', payload: false })
        }
        screenLoad()
    }, [state.update])



    return (
        <View>
            { state.isAdmin ? (
                <CustomButton text='Novo Estacionamento' onPress={() => navigation.navigate('RegisterEstacionamento')} />
            ) : (
                <></>
            )}

        <FlatList
            data={estacionamento}
            renderItem={({ item }) => {return (
                <View>
                    <Text>
                        { item.nome }
                    </Text>
                    
                    <Text>
                        { item.cnpj }
                    </Text>

                    {state.isAdmin ? (
                        <Button>Excluir</Button>
                    ) : (
                        <></>
                    )}
                </View>
            )}}
        />    
        </View>
    )
}

export default Estacionamentos