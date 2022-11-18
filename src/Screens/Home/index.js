import { Text, Pressable, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import CustomButton from '../../Components/CustomButton'

import { Context } from '../../Context/authContext'

const Home = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.view}>
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

                    <Text>Olá, { state.name }</Text>
                    
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
            </View>
            
            <View>
                <Text>Conta</Text>
                <Text>R$ { state.valor }</Text>
                <Pressable>
                    <AntDesign
                        name='right'
                        size={30}
                        color='#FFC978'
                    />
                </Pressable>
            </View>

            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        width: '100%',
        height: '15vh'
    },

    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFBA52',
        alignItems: 'center',
        
    },

    perfil: {
        margin: 10,
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
        margin: 10,
        width: 50,
        height: 50,
        backgroundColor: '#FFC978',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    view_opcoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    config_opcoes: {
        backgroundColor: '#FFC978',
        borderRadius: 40,
        width: 45
    }
})