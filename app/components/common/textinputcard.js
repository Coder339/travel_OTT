import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Keyboard,KeyboardAvoidingView } from 'react-native'
import {colors,globalstyles,fontFamily,fontSize} from '../../assets/globalstyleconstants';

export default function TextInputCard(props) {
    const { 
        onkeypress,
        width, 
        height,
        maxLength,
        title,
        defaultValue,
        value,
        onChange,
        inputRef,
        placeholder,
        placeholderTextColor } = props
    // const [value, setValue] = useState(title)
    const [active,setActive] = useState(false)
    // console.log(title)

    const borderFocusHandler = () => {
        // Keyboard.dismiss()
        setActive(true)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput 
               style={[styles.input,
                      {width:width,
                      height:height,
                      borderBottomWidth: active ? 1 : 0,
                      fontSize:fontSize.medium
                      }
                     ]}
                     
               ref={(r) => { inputRef && inputRef(r) }}
               maxLength={maxLength}
               placeholder={placeholder}
               placeholderTextColor={placeholderTextColor}
               defaultValue={defaultValue}
            //    keyboardType='number-pad'
               onKeyPress={onkeypress}
               onFocus={()=>borderFocusHandler()}
               onBlur={()=>setActive(false)}
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
        fontWeight:'bold'

    },
    inputContainer:{
        paddingRight:10
    }
})
