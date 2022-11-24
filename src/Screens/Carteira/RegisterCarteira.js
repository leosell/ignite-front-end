import { Text, Pressable, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { FontAwesome, AntDesign, Ionicons, MaterialIcons, Entypo, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import api from '../../API'
import { Context } from '../../Context/authContext'
import { Box, Input, extendTheme, Center } from 'native-base'



const RegisterCarteira = () => {
    const { state, dispatch } = useContext(Context)

    const [saldo, setSaldo] = useState('')

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post('/carteira/register', {
                saldo: saldo
            })

            if (authData.status === 200) {
                alert(authData.data.message)
                setSaldo('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        
        <Box style={styles.box}>
            <View style={styles.containerGeral}>
                <View style={styles.conta}>
                    <View style={{flexDirection: 'row', gap: '370px'}}>
                        <Pressable>
                            <AntDesign
                                name='left'
                                size={30}
                                color='#FFBA52'
                                style={styles.setaIcone}
                            />
                        </Pressable>

                        <Pressable>
                            <SimpleLineIcons style={{marginTop: '10px'}} name="wallet" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.textoConta}>Saldo Disponível</Text>
                        <Text style={styles.textoDinheiro}>R$ {state.valor}</Text>
                    </View>
                </View>


                <View style={styles.ContainerBotoes}>
                    <View style={styles.botao1}>
                        <Pressable style={styles.botao} onPress={() => alert('Em breve...')}>
                            <MaterialIcons name="attach-money" size={30} color="black" />
                        </Pressable>
                        <Text style={styles.textoBotao}>Cashback</Text>
                    </View>
                    <View style={styles.botao1}>
                        <Pressable onPress={() => alert('Em breve...')} style={styles.botao}>
                            <MaterialIcons name="phone-iphone" size={30} color="black" />
                        </Pressable>
                        <Text style={styles.textoBotao} t>Recarga</Text>
                    </View>
                    <View style={styles.botao1}>
                        <Pressable onPress={() => alert('Em breve...')} style={styles.botao}>
                            <Entypo name="map" size={30} color="black" />
                        </Pressable>
                        <Text style={styles.textoBotao}>Mapa</Text>
                    </View>
                    <View style={styles.botao1}>
                        <Pressable onPress={() => alert('Em breve...')} style={styles.botao}>
                            <FontAwesome5 name="user-friends" size={25} color="black" />
                        </Pressable>
                        <Text style={styles.textoBotao}>Convidar</Text>
                    </View>
                </View>
                <Text style={{ padding: '15px', fontWeight: '600' }}>Histórico</Text>
                <Box>
                    <Box>
                        <Center>
                            <Input
                                variant="rounded"
                                mx='1' w='95%'
                                placeholder='Buscar'
                                backgroundColor='#FFC978'
                                color='black'
                                placeholderTextColor='black'
                            />
                        </Center>
                    </Box>

                    <View style={{ flexDirection: 'row', padding: '20px', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="add-circle-outline" size={44} color="black" />
                        <Box>
                            <Box style={{ flexDirection: 'row', gap: '250px' }}>
                                <Text style={{ fontSize: '14px', fontWeight: '600' }}>Crédito Adicionado</Text>
                                <Text style={{ color: 'gray' }}>{state.dataExtrato}Hoje</Text>
                            </Box>
                            <Text style={{ color: 'gray' }}>Cartão de crédito</Text>
                            <Text style={{ color: 'gray' }}>R${state.valor}</Text>
                        </Box>
                    </View>

                </Box>
            </View>
        </Box>
    )
}

export default RegisterCarteira

const styles = StyleSheet.create({

    box:{
        backgroundColor: '#FFF',
        flex: 1
    },
    containerGeral: {
        // backgroundColor: '#FFF'
    },

    texto: {
        fontWeight: 'bolder',
        fontSize: '22px'
    },

    textoConta: {
        fontSize: '14px',
        marginTop: '25px',
        fontWeight: '600'
    },

    textoDinheiro: {
        fontSize: '30px',
        fontWeight: '600'
        // padding: '5px',
    },

    conta: {
        padding: '25px',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    setaIcone: {
        marginTop: '5px',
    },

    ContainerBotoes: {
        flex: 1,
        flexDirection: 'row',
        gap: '60px',
        justifyContent: 'center'
    },
    botao: {
        width: 50,
        height: 50,
        backgroundColor: '#FFC978',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao1: {
        textAlign: 'center',
    },
    textoBotao: {
        fontWeight: 600
    },

})