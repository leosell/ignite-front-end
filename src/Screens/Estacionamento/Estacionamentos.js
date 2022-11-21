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

            <View style={styles.view2}>
                <FlatList
                data={estacionamento}
                renderItem={({ item }) => {return (
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            <Text style={styles.text2}>Estacionamento: </Text>{ item.nome }
                        </Text>
                        
                        <Text style={styles.text}>
                            <Text style={styles.text2}>Endereço: </Text>{ item.endereco }, { item.numero }
                        </Text>
                        
                        <Text style={styles.text}>
                            <Text style={styles.text2}>Bairro: </Text>{ item.bairro }
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
                style={styles.list}
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
        flexDirection: 'column',
        padding: 5
    },

    view2: {
        padding: 10,
    },

    container: {
        width: '100%',
        height: '15vh',
        backgroundColor: '#FFBA52',
        justifyContent: 'center',
        alignItems: 'center',
    },

    list: {
        padding: 5,
    },

    containerBotao: {
        width: '20%',
        paddingVertical: 15
    },

    botao: {
        borderRadius: 20
    },

    botaoNovo: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 16,
        
    },
    
    text2: {
        fontWeight: 800,

    }
})