import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'


const CustomInput = ({ value, setValue, placeholder, secureTextEntry, editable }) => {
  return (
    <View style={styles.container}>
        <TextInput
            value={ value }
            onChangeText={ setValue }
            placeholder={ placeholder }
            style={ styles.input }
            secureTextEntry={ secureTextEntry }
            editable={ editable }
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '85%',
        marginVertical: 5,
        borderRadius: 20,
        border: 'none'
    },

    input: {
        padding: 15,
        fontWeight: 'bold', 
    },
})