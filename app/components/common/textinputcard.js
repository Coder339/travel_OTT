import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput,Keyboard,KeyboardAvoidingView,TouchableHighlight } from 'react-native'
import {colors,globalstyles,fontFamily,fontSize} from '../../assets/globalstyleconstants';

export default function TextInputCard(props) {
    const { 
        onkeypress,
        onFocus,
        onBlur,
        isTrue,
        width, 
        height,
        maxLength,
        title,
        index,
        defaultValue,
        value,
        onChange,
        changeIndex,
        checkIndex,
        active,
        inputRef,
        placeholder,
        isComplete,
        placeholderTextColor } = props
    
    const [proactive,setActive] = useState(active)

    // const borderFocusHandler = () => {
    //     onFocus(index)
    //     changeIndex(index)
    // }
    
    // const borderBlurhandler = () => {
    //     onBlur(index)
    //     console.log('checkindex',checkIndex)
    //     console.log('index',index)
        
    // }


    useEffect(() => {
        
    }, [])
    return (
        <TouchableHighlight 
            style={styles.inputContainer}
            underlayColor={false}
            onPress={()=>{}}
            onFocus={()=>onFocus(index)}
            onBlur={()=>onBlur(index)}
            >
            <TextInput 
               style={[styles.input,
                      {width:width,
                      height:height,
                      borderBottomWidth: active ? 1 : 0,
                      fontSize:14,
                      }
                     ]}
                     
            //    ref={(r)=>referenceHandler(r)}
               maxLength={maxLength}
               placeholder={placeholder}
               placeholderTextColor={placeholderTextColor}
               defaultValue={defaultValue}
               editable={false}
               onChangeText={onChange}
               value={value}
               
               />
               
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    input:{
        borderColor:colors.white,
        backgroundColor:'gray',
        opacity:0.7,
        color:colors.white,
        textAlign:'center',
        fontFamily:fontFamily.bold

    },
    inputContainer:{
        marginRight:10
    }
})
