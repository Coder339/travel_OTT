import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback, Button } from 'react-native';
import {colors,globalstyles} from '../../assets/globalstyleconstants';
import Backspace from '../../assets/images/backspace';
import TextInputCard from '../../components/common/textinputcard';
import Otp from '../../views/otp';

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

    // const textValueHandler = () => {
    //     alert(title)
    // }

    useEffect(() => {
        (defaultNum === title && type === 'num') ? (setborderwidth(bordwidth),setbordercolor(bordcolor),setfocus(true)) : (setborderwidth(0),setbordercolor(''))
        
    }, [])

    return (
        <TouchableHighlight 
        // activeOpacity={false}
             underlayColor={false}
             activeOpacity={opacity}
             onPress={()=>onPress(title)}
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
            
              
            
        </TouchableHighlight>
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
