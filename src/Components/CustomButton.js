import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable
        onPress={onPress}
        style={styles.container}
    >
        <Text style={styles.text}>
            {text}
        </Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '80%',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 20,
    },

    text: {
        padding: 15,
        fontWeight: 'bold',
        color: '#000'
    }
})