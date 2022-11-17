import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useContext, useState } from 'react'

import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput'

import api from '../../API'
import { Context } from '../../Context/authContext'


const RegisterEstacionamento = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [ nome, setNome ] = useState('')
    const [ cnpj, setCnpj ] = useState('')
    const [ endereco, setEndereco ] = useState('')
    const [ numero, setNumero ] = useState(0)
    const [ bairro, setBairro ] = useState('')
    const [ cidade, setCidade ] = useState('')
    const [ estado, setEstado ] = useState('')
    const [ funcionamento, setFuncionamento ] = useState('')

    const { height } = useWindowDimensions()

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post('/estacionamento/register', {
                nome: nome,
                cnpj: cnpj,
                endereco: endereco,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                funcionamento: funcionamento
            })

            if (authData.status === 200) {
                alert(authData.data.message)
                setNome('')
                setCnpj('')
                setEndereco('')
                setNumero('')
                setBairro('')
                setCidade('')
                setEstado('')
                setFuncionamento('')
                dispatch({ type: 'update', payload: true })
            } else {
                console.log(authData.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.view}>
            <CustomInput 
                placeholder='Nome Estabelezimento'
                value={nome}
                setValue={setNome}
            />

            <CustomInput
                placeholder='CNPJ'
                value={cnpj}
                setValue={setCnpj}
            />
            
            <CustomInput
                placeholder='Endereço'
                value={endereco}
                setValue={setEndereco}
            />
            
            <CustomInput
                placeholder='Número'
                value={numero}
                setValue={setNumero}
            />
            
            <CustomInput
                placeholder='Bairro'
                value={bairro}
                setValue={setBairro}
            />
            
            <CustomInput
                placeholder='Cidade'
                value={cidade}
                setValue={setCidade}
            />
            
            <CustomInput
                placeholder='Estado'
                value={estado}
                setValue={setEstado}
            />

            <CustomInput
                placeholder='Funcionamento'
                value={funcionamento}
                setValue={setFuncionamento}
            />

            <CustomButton
                text='Cadastrar'
                onPress={onRegisterPressed}
            />
        </View>
    )
}

export default RegisterEstacionamento

const styles = StyleSheet.create({})