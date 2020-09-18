import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback, Button } from 'react-native';
import {colors,globalstyles} from '../../assets/globalstyleconstants';

export default function ButtonCard(props) {
    const { title,color,width,height,onBlur,onFocus,onPress,bordwidth,bordcolor,defaultFocus }  = props
    
    const [borderwidth,setborderwidth]  = useState(0)
    const [bordercolor,setbordercolor]  = useState('')
    
    const boderFocushandler = () =>{
        setborderwidth(bordwidth)
        setbordercolor(bordcolor)
    }

    const boderBlurhandler = () =>{
        setborderwidth(!bordwidth)
        setbordercolor('')
        alert('works')
    }

    // useEffect(() => {
    //     boderFocushandler()
    // }, [])

    return (
        <TouchableWithoutFeedback 
             onPress={()=>{alert('hello')}}
             onFocus={()=>{boderFocushandler()}}
             onBlur={()=>{alert('blur')}}
             hasTVPreferredFocus={defaultFocus}>
            <View style={
                            [styles.button,
                            globalstyles.hspace,
                            {backgroundColor:color},
                            {width:width},
                            {height:height},
                            {borderWidth:borderwidth},
                            {borderColor:bordercolor}
                            ]
                            }           
            >
                <Text style={[styles.text]}>{title}</Text>
                {/* <Button title="test"/> */}
            </View>
            
              
            
        </TouchableWithoutFeedback>
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
