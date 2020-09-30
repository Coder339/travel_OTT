import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback, Button } from 'react-native';
import {colors,globalstyles} from '../../assets/globalstyleconstants';

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
        <TouchableHighlight 
        // disabled={true}
             underlayColor={false}
             activeOpacity={1}
             onPress={()=>{navigation.navigate(onPress)}}
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
                <Text style={{color:textColor}}>{title}</Text>
                {/* <Button title="test"/> */}
            </View>
            
              
            
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60
    },
    text:{
        color:colors.white
    }
})
