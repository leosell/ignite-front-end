import { StyleSheet, Text, View,  TouchableOpacity, TextInput, Pressable } from "react-native";
import React, { useState } from 'react';
import api from '../API'
import CustomButton from "../Components/CustomButton";
import { AntDesign } from '@expo/vector-icons';
import { Box, Center, Checkbox } from 'native-base'

const RegisterUser = ({ navigation }) => {
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onRegisterPressed = async () => {
        try {
            const data = await api.post('/usuario/register', {
                nome: nome,
                email: email,
                password: password,
                admin: false
            });
            if (data.status === 200) {
                console.log(data)
                alert(data.data.message)
                navigation.navigate('Login')
            } else {
                console.log(data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.view}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <Text style={{ marginLeft: '5px', marginTop: '4px', fontWeight: '500' }}>Voltar</Text>
            </View>

            <Box style={{marginTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: '32px', fontWeight: 'bolder', marginBottom: '25px' }}>Cadastro</Text>
                <Text style={{ fontWeight: '500', textAlign: 'center' }}>Preencha os campos e comece a navegar pela nossa plataforma!</Text>

                <Box style={{ marginTop: '150px', width: '100%' }}>
                    <TextInput
                        placeholder='Nome'
                        value={nome}
                        setValue={setName}
                        onChangeText={setName}
                        style={styles.caixaInputs}
                    />

                    <TextInput
                        placeholder='E-mail'
                        value={email}
                        setValue={setEmail}
                        onChangeText={setEmail}
                        style={styles.caixaInputs}
                    />

                    <TextInput
                        placeholder='Senha'
                        value={password}
                        setValue={setEmail}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        style={styles.caixaInputs}
                    />

                    <Box style={{ marginTop: '200px' }}>
                        <Checkbox>
                            <Text> Eu concordo com os <a style={{ color: '#FFBA59', textDecoration: 'underline' }}>Termos e condições</a> e a <a style={{ color: '#FFBA59', textDecoration: 'underline' }}> Política de privacidade. </a></Text>
                        </Checkbox>
                    </Box>

                    <CustomButton text="Cadastrar" onPress={onRegisterPressed} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={styles.register}
                    >
                        <Center>
                            <Text>
                                Já tem uma conta?{" "}
                                <Text style={styles.loginText}>Faça o login</Text>
                            </Text>
                        </Center>
                    </TouchableOpacity>
                </Box>
            </Box>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 30,
        backgroundColor: '#FFF'
    },
    logo: {
        width: '80%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
    register: {
        padding: 5,
    },

    caixaInputs: {
        width: '100%',
        height: '50px',
        borderWidth: '1px',
        borderRadius: 5,
        borderColor: '#E4E4E4',
        outlineColor: "#FFF",
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        marginTop: '15px',
        marginBottom: '15px'
    },
});

export default RegisterUser;