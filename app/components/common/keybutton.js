import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback, Button } from 'react-native';
import {colors,globalstyles} from '../../assets/globalstyleconstants';
import Backspace from '../../assets/images/backspace';

export default function Keybutton(props) {
    const { 
        type,
        title,
        color,
        textColor,
        width,
        height,
        onPress,
        bordwidth,
        bordcolor,
        defaultFocus,
        opacity
     }  = props
    
    const [borderwidth,setborderwidth]  = useState(0)
    const [bordercolor,setbordercolor]  = useState('')
    const [focus, setfocus] = useState(defaultFocus)

    const boderFocushandler = () =>{
        setborderwidth(bordwidth)
        setbordercolor(bordcolor)
    }

    const boderBlurhandler = () =>{
        setborderwidth(0)
        setbordercolor('')
        // alert('works')
    }

    useEffect(() => {
        focus ? (setborderwidth(bordwidth),setbordercolor(bordcolor)) : (setborderwidth(0),setbordercolor(''))
    }, [])

    return (
        <TouchableWithoutFeedback 
             onPress={()=>{}}
             onFocus={()=>{boderFocushandler()}}
             onBlur={()=>{boderBlurhandler()}}
             hasTVPreferredFocus={focus}>
            <View style={
                            [styles.button,
                            // globalstyles.hspace,
                            {backgroundColor:color},
                            {width:width},
                            {height:height},
                            {borderWidth:borderwidth},
                            {borderColor:bordercolor},
                            {opacity:opacity}
                            ]
                            }           
            >
                {type === 'num' ? 
                  
                  <Text style={{color:textColor}}>{title}</Text> :

                  <Backspace/>
                }
                
                
            </View>
            
              
            
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:colors.white
    }
})
