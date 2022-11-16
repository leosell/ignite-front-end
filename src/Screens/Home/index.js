import { Text, Pressable, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import CustomButton from '../../Components/CustomButton'

import { Context } from '../../Context/authContext'

const Home = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    return (
        <View>
            <View>
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
                    <Text>Olá, { state.name }</Text>
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
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    perfil: {
        width: 50,
        height: 50,
        backgroundColor: '#FFC978',
        borderRadius: 40,
    },

    icon: {
        textAlign: 'center',
        padding: 8
    },

    config: {
        width: 50,
        height: 50,
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