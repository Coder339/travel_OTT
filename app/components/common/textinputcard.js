import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput,Keyboard,KeyboardAvoidingView } from 'react-native'
import {colors,globalstyles,fontFamily,fontSize} from '../../assets/globalstyleconstants';

export default function TextInputCard(props) {
    const { 
        onkeypress,
        width, 
        height,
        maxLength,
        title,
        index,
        defaultValue,
        value,
        onChange,
        onFocus,
        active,
        inputRef,
        placeholder,
        placeholderTextColor } = props

    const borderFocusHandler = () => {
        Keyboard.dismiss()
        // setActive(true)
    }
    

    const referenceHandler = (r) => {
        inputRef && inputRef(r) 
    }

    useEffect(() => {
        
    }, [])
    return (
        <View style={styles.inputContainer}>
            <TextInput 
               style={[styles.input,
                      {width:width,
                      height:height,
                      borderBottomWidth: active ? 1 : 0,
                      fontSize:fontSize.normal,
                      }
                     ]}
                     
            //    ref={(r)=>referenceHandler(r)}
               maxLength={maxLength}
               placeholder={placeholder}
               placeholderTextColor={placeholderTextColor}
               defaultValue={defaultValue}
            //    keyboardType='numeric'
            //    autoFocus={index === 0 ? true: false}
               onKeyPress={onkeypress}
               onFocus={()=>borderFocusHandler()}
            //    onBlur={()=>setActive(false)}
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
        fontFamily:fontFamily.bold

    },
    inputContainer:{
        paddingRight:10
    }
})
