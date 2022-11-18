import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useContext, useState } from 'react'

import api from '../../API'
import { Context } from '../../Context/authContext'

import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput'

const RegisterCarteira = () => {
    const { state, dispatch } = useContext(Context)

    const [ saldo, setSaldo ] = useState('')

    const { height } = useWindowDimensions()

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
      <Text>RegisterCarteira</Text>
    </View>
  )
}

export default RegisterCarteira

const styles = StyleSheet.create({})