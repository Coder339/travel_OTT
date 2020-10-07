import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

export default function TextInputCard(props) {

    return (
        <View style={styles.inputContainer}>
            <TextInput 
               style={styles.input}
               placeholder='mobile number'
               defaultValue='num'
               />          
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height:40,
        width:200,
        borderColor:'white',
        borderBottomWidth:1,
        backgroundColor:'white',
        opacity:0.2,
    },
    inputContainer:{
        paddingRight:10
    }
})
