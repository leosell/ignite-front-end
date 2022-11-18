import { Picker, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
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
    const [ numero, setNumero ] = useState('')
    const [ bairro, setBairro ] = useState('')
    const [ cidade, setCidade ] = useState('')
    const [ estado, setEstado ] = useState('')
    const [ funcionamento, setFuncionamento ] = useState('')
    const [ horaFuncionamento, setHoraFuncionamento ] = useState('')

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

            <Picker
                selectedValue={funcionamento}
                onValueChange={setFuncionamento}
                style={styles.funcionamento}
            >
                <Picker.Item label="Dia de Funcionamento" value="0" />
                <Picker.Item label="Seg. Sex." value="Seg. Sex." />
                <Picker.Item label="Seg. Sab." value="Seg. Sab." />
                <Picker.Item label="Seg. Dom." value="Seg. Dom." />
            </Picker>


            <Picker
                selectedValue={horaFuncionamento}
                onValueChange={setHoraFuncionamento}
                style={styles.hora}
            >
                <Picker.Item label="Horario de Funcionamento" value="0" />
                <Picker.Item label="08h às 18h" value="08h às 18h" />
                <Picker.Item label="08h às 19h" value="08h às 19h" />
                <Picker.Item label="08h às 20h" value="08h às 20h" />
                <Picker.Item label="08h às 21h" value="08h às 21h" />
                <Picker.Item label="08h às 22h" value="08h às 22h" />
                <Picker.Item label="24h" value="24h" />
            </Picker>

            {/* <CustomInput
                placeholder='Funcionamento'
                value={funcionamento}
                setValue={setFuncionamento}
            /> */}

            <CustomButton
                text='Cadastrar'
                onPress={onRegisterPressed}
            />
        </View>
    )
}

export default RegisterEstacionamento

const styles = StyleSheet.create({
    funcionamento: {
        width: '100%',
        height: 46,
        marginVertical: 5
    },

    hora: {
        width: '100%',
        height: 46
    }
})