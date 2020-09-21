import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors,globalstyles,fontFamily} from '../../assets/globalstyleconstants';

export default function CodeValidation(props) {
    const { erroMessage } = props
    return (
        <View style={[styles.messageContainer,globalstyles.hspace]}>
            <Text style={styles.errorText}>{erroMessage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer:{
        justifyContent:'center',
        backgroundColor:colors.white,
        borderLeftWidth:2 ,
        borderColor:colors.travelred,
        height:26,
        width:'100%',
        marginTop:10
    },
    errorText:{
        marginLeft:10,
        color:colors.travelred
    }
})
