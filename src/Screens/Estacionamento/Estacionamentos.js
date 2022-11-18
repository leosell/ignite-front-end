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
        <View style={styles.view}>
            { state.isAdmin ? (
                <View style={styles.botaoNovo}>
                    <CustomButton
                        text='Novo Estacionamento'
                        onPress={() => navigation.navigate('RegisterEstacionamento')}
                    />
                </View>
            ) : (
                <></>
            )}

            <View>
                <FlatList
                data={estacionamento}
                renderItem={({ item }) => {return (
                    <View style={styles.container}>
                        <Text>
                            { item.nome }
                        </Text>
                        
                        <Text>
                            { item.cnpj }
                        </Text>

                        {state.isAdmin ? (
                            <View style={styles.containerBotao}>
                                <Button
                                    onPress={() => alert('exluido')}
                                    title='Excluir'
                                    color='#000'
                                    style={styles.botao}
                                />
                            </View>
                        ) : (
                            <></>
                        )}
                    </View>
                )}}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Estacionamentos

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column'
    },

    container: {
        width: '100%',
        height: '10vh',
        backgroundColor: '#FFBA52'
    },

    containerBotao: {
        width: '20%'
    },

    botao: {
        borderRadius: 20
    },

    botaoNovo: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})