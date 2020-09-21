import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Keyboard,KeyboardAvoidingView } from 'react-native'
import {colors,globalstyles,fontFamily} from '../../assets/globalstyleconstants';

export default function TextInputCard(props) {
    const { width, height,title,defaultValue,value,onChange,placeholder,placeholderTextColor } = props
    // const [value, setValue] = useState(title)
    
    // console.log(title)
    return (
        <View style={styles.inputContainer}>
            <TextInput 
               style={[styles.input,
                      {width:width,
                      height:height,
                      borderBottomWidth:1,
                      fontSize:13
                      }
                     ]}
               placeholder={placeholder}
               placeholderTextColor={placeholderTextColor}
               defaultValue={defaultValue}
            //    onFocus={Keyboard.dismiss}
               onChangeText={onChange}
               value={value}
               />
               
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        // height:40,
        // width:200,
        borderColor:colors.white,
        backgroundColor:'gray',
        opacity:0.7,
        color:colors.white,
        textAlign:'center',
    },
    inputContainer:{
        paddingRight:10
    }
})
