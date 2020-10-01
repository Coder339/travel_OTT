import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback, Button } from 'react-native';
import {colors,globalstyles, fontFamily} from '../../assets/globalstyleconstants';
import Backspace from '../../assets/images/backspace';


export default function Keybutton(props) {
    const { 
        type,
        title,
        color,
        textColor,
        width,
        height,
        bordwidth,
        bordcolor,
        defaultFocus,
        defaultNum,
        onPress,
        opacity
     }  = props
    
    const [borderwidth,setborderwidth]  = useState(0)
    const [bordercolor,setbordercolor]  = useState('')
    const [buttonOpacity,setButtonOpacity]  = useState(0.5)
    // const [textOpacity,setTextOpacity]  = useState(1)
    const [focus, setfocus] = useState(false)

    const boderFocushandler = () => {
        setborderwidth(bordwidth)
        setbordercolor(bordcolor)
        setButtonOpacity(opacity)
        // setfocus(true)
        console.log('borderFocus',focus)

    }

    const boderBlurhandler = () => {
        setborderwidth(0)
        setbordercolor('')
        setButtonOpacity(0.5)
        // setfocus(false)
        // console.log('borderBlur',focus)

    }

    useEffect(() => {
        (defaultNum === title && type === 'num') ? (setborderwidth(bordwidth),setbordercolor(bordcolor),setfocus(true)) : (setborderwidth(0),setbordercolor(''))
        console.log('focus',focus)
    }, [])

    return (
        <TouchableHighlight 
             underlayColor={false}
             activeOpacity={opacity}
             onPress={()=>{onPress(title)}}
             onFocus={()=>{boderFocushandler()}}
             onBlur={()=>{boderBlurhandler()}}
             hasTVPreferredFocus={focus}>
            <View style={
                            [styles.button,
                            {backgroundColor:color},
                            {width:width},
                            {height:height},
                            {borderWidth:borderwidth},
                            {borderColor:bordercolor},
                            {opacity:buttonOpacity}
                            ]
                            }           
            >
                {type === 'num' ? 
                  
                  <Text style={{color:textColor,fontFamily:fontFamily.bold}}>{title}</Text> :

                  <Backspace/>
                }
                
      
            </View>
            
              
            
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:colors.white
    }
})
