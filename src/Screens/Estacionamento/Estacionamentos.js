import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import api from '../../API'
import { Context } from '../../Context/authContext'
import CustomButton from '../../Components/CustomButton'
import { Entypo } from '@expo/vector-icons'


const Estacionamentos = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    const [update, setUpdate] = useState(false)
    const [ estacionamento, setEstacionamento ] = useState({})

    useEffect(() => {
        const screenLoad = async () => {
            const list = await api.get('/estacionamento/busca')
            setEstacionamento(list.data.estacionamento) 
        }
        screenLoad()
    }, [update])

    const deletarId = async (id) => {
        console.log(id)
        await api.delete(`/estacionamento/${id}`)
        setUpdate(!update)
    }



    return (
        <View>
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
            </View>

            <ScrollView style={styles.view2}>
                <FlatList
                data={estacionamento}
                renderItem={({ item }) => {return (
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.text}>
                                <Text style={styles.text2}>Estacionamento: </Text>{ item.nome }
                            </Text>
                            
                            <Text style={styles.text}>
                                <Text style={styles.text2}>Endereço: </Text>{ item.endereco }, { item.numero }
                            </Text>
                            
                            <Text style={styles.text}>
                                <Text style={styles.text2}>Bairro: </Text>{ item.bairro }
                            </Text>
                        </View>

                        {state.isAdmin ? (
                            <View style={styles.containerBotao}>
                                <TouchableOpacity
                                    onPress={() => deletarId(item.id)}
                                    style={styles.botao}
                                >
                                    <Entypo
                                        name='trash'
                                        size={30}
                                        color='#000'
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <></>
                        )}
                    </View>
                )}}
                style={styles.list}
                keyExtractor={(item) => item.id}
                />
            </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginVertical: 10,
        borderRadius: 10,
    },

    list: {
        padding: 5,
    },

    containerBotao: {
        width: '20%',
        paddingVertical: 15,
    },

    botao: {
        boder: 'none',
        borderRadius: 20,
        backgroundColor: '#FFC978',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '50px'
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