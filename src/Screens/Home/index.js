import { Text, Pressable, StyleSheet, View, TextInput, TouchableOpacity  } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome, AntDesign, Ionicons} from '@expo/vector-icons'
import CustomButton from '../../Components/CustomButton'

import { Context } from '../../Context/authContext'

const Home = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    return (
        <View>
            <View style={styles.cabecalho}>
                <Pressable
                    onPress={() => alert('perfil')}
                    style={styles.perfil}
                >
                    <FontAwesome
                        name='user'
                        size={30}
                        color='#000'
                        style={styles.icon}
                    />
                </Pressable>

                <Text style={styles.texto}>Olá, {state.name}</Text>

                <Pressable
                    onPress={() => alert('config')}
                    style={styles.config}
                >
                    <FontAwesome
                        name='gear'
                        size={30}
                        color='#000'
                        style={styles.icon}
                    />
                </Pressable>
            </View>

            <View style={styles.conta}>
                <View>
                    <Text style={styles.textoConta}>Conta</Text>
                    <Text style={styles.textoDinheiro}> R$ {state.valor}</Text>
                </View>

                <View>
                    <Pressable>
                        <AntDesign
                            name='right'
                            size={30}
                            color='#FFBA52'
                            style={styles.setaIcone}
                        />
                    </Pressable>
                </View>

            </View>

            <View style={styles.div}>
                <TouchableOpacity 
                    style={styles.botaoCartao}>
                    <Ionicons
                        name='md-card'
                        size={25}
                        color='black'
                    />
                    Meus Cartões
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({


    cabecalho: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFBA52',
        alignItems: 'center',

    },

    perfil: {
        margin: 30,
        width: 50,
        height: 50,
        backgroundColor: '#FFC978',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        textAlign: 'center',
        paddingVertical: 'auto',
    },

    config: {
        margin: 30,
        width: 50,
        height: 50,
        backgroundColor: '#FFC978',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    texto: {
        fontWeight: 'bolder',
        fontSize: '22px'
    },

    textoConta: {
        fontSize: '22px'
    },

    textoDinheiro: {
        fontSize: '22px',
        padding: '5px'
    },

    conta: {
        padding: '25px',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    setaIcone:{
        marginTop: '5px'
    },

    div:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    botaoCartao:{
        width: '70%',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: '#FFC978',
        fontWeight: 'bolder',
        textAlign: 'center',
        gap: '20px',
        fontSize: '16px',
        flexDirection: 'row',
        alignItems:'center'
    },
})