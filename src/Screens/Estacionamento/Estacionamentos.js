import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, ScrollView, Pressable} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Center, Wrap } from 'native-base'
import { AntDesign } from '@expo/vector-icons';

import api from '../../API'
import { Context } from '../../Context/authContext'
import CustomButton from '../../Components/CustomButton'
import { Entypo } from '@expo/vector-icons'


const Estacionamentos = ({ navigation }) => {
  const { state, dispatch } = useContext(Context)
  const [update, setUpdate] = useState(false)
  const [estacionamento, setEstacionamento] = useState({})

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
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Center style={{ paddingVertical: 30 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: '25px' }}>Estacionamento</Text>
        <View style={styles.containerCabecalho}>
          {state.isAdmin ? (
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
      </Center>

      <ScrollView style={styles.containerCard}>
        <FlatList
          data={estacionamento}
          renderItem={({ item }) => {
            return (
              <Center style={{ marginTop: '20px' }}>
                <View style={styles.container}>
                  <View style={{ marginLeft: '25px' }}>
                    <Text style={styles.text}>
                      <Text style={styles.text2}>Estacionamento: </Text>{item.nome}
                    </Text>

                    <Text style={styles.text}>
                      <Text style={styles.text2}>Endereço: </Text>{item.endereco}, {item.numero}
                    </Text>

                    <Text style={styles.text}>
                      <Text style={styles.text2}>Bairro: </Text>{item.bairro}
                    </Text>

                    <Text style={styles.text}>
                      <Text style={styles.text2}>Horários: </Text>{item.horario}
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
              </Center>
            )
          }}
          style={styles.list}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  )
}

export default Estacionamentos

const styles = StyleSheet.create({
  containerCabecalho: {
    width: '70%'
  },

  botaoNovo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerCard: {

  },

  container: {
    width: '90%',
    height: '15vh',
    backgroundColor: '#FFBA52',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between'

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


  text: {
    fontSize: 14,
    marginTop: '5px'
  },

  text2: {
    fontWeight: 800,
  }
})
