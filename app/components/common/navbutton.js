import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback, Button } from 'react-native';
import {colors,globalstyles,fontFamily} from '../../assets/globalstyleconstants';

export default function ButtonCard(props) {
    const { 
        title,
        color,
        textColor,
        width,
        height,
        onPress,
        navigation,
        bordwidth,
        bordcolor,
        defaultFocus,
        opacity
     }  = props
    
    const [borderwidth,setborderwidth]  = useState(0)
    const [bordercolor,setbordercolor]  = useState('')
    const [focus, setfocus] = useState(false)

    const boderFocushandler = () =>{
        setborderwidth(bordwidth)
        setbordercolor(bordcolor)
        // setButtonOpacity(opacity)
    }

    const boderBlurhandler = () =>{
        setborderwidth(0)
        setbordercolor('')
       
    }

    useEffect(() => {
        // focus ? (setborderwidth(bordwidth),setbordercolor(bordcolor)) : (setborderwidth(0),setbordercolor(''))
    }, [])

    return (
        <TouchableHighlight 
             underlayColor={false}
             activeOpacity={1}
             onPress={()=>{navigation.navigate(onPress)}}
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
                            {opacity:opacity}
                            ]
                            }           
            >  
                
                <Text style={{color:textColor,fontFamily:fontFamily.bold}}>{title}</Text>
                
    
            </View>
            
              
            
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:60
    },
    text:{
        color:colors.white
    }
})
