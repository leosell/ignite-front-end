import { Text, Pressable, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'

import api from '../../API'
import { Context } from '../../Context/authContext'

import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput'

const RegisterCarteira = () => {
    const { state, dispatch } = useContext(Context)

    const [ saldo, setSaldo ] = useState('')

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
    <View>
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
    </View>
  )
}

export default RegisterCarteira

const styles = StyleSheet.create({
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

setaIcone: {
    marginTop: '5px'
},
})