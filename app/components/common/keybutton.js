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
        disableButton,
        defaultNum,
        onPress,
        opacity
     }  = props
    
    const [borderwidth,setborderwidth]  = useState(0)
    const [bordercolor,setbordercolor]  = useState('')
    const [buttonOpacity,setButtonOpacity]  = useState(0.5)
    const [disableButtonOpacity,setDisableButtonOpacity]  = useState(0.3)
    // const [textOpacity,setTextOpacity]  = useState(1)
    const [focus, setfocus] = useState(false)
    const [disable, setDisable] = useState(false)
 
    // To prevent the debouncing
    const onButtonPress = (title) => {
        if(disable) return;
        setDisable(true)
        setTimeout(()=>{
            setDisable(false)
        }, 500);

        onPress && onPress(title);
    }

    const borderFocushandler = () => {
        

        setborderwidth(bordwidth)
        setbordercolor(bordcolor)
        setButtonOpacity(opacity)
        // setfocus(true)
        console.log('borderFocus',focus)

    }

    const borderBlurhandler = () => {
        setborderwidth(0)
        setbordercolor('')
        setButtonOpacity(0.5)
        // setfocus(false)
        // console.log('borderBlur',focus)

    }

    useEffect(() => {
        (defaultNum === title && type === 'num') ? (setborderwidth(bordwidth),setbordercolor(bordcolor),setfocus(true)) : (setborderwidth(0),setbordercolor(''))
        console.log('focus',focus)
        // (title === 0 && type === 'num') ? setButtonOpacity(0.3) : setButtonOpacity(0.5)
    }, [])

    return (
        <TouchableHighlight 
             underlayColor={false}
             activeOpacity={opacity}
             onPress={()=>{onButtonPress(title)}}
             onFocus={()=>{borderFocushandler()}}
             onBlur={()=>{borderBlurhandler()}}
             hasTVPreferredFocus={focus}
             >
            <View style={
                            [styles.button,
                            {backgroundColor:color},
                            {width:width},
                            {height:height},
                            {borderWidth:borderwidth},
                            {borderColor:bordercolor},
                            {opacity:title === disableButton && type === 'num' ? disableButtonOpacity : buttonOpacity}
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
