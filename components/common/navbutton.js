import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {colors,globalstyles} from '../../assets/globalstyleconstants';

export default function ButtonCard(props) {
    const { title,color,width,height,onBlur,onFocus,onPress }  = props
    return (
        <View>
            <TouchableOpacity style={
                              [styles.button,
                               globalstyles.hspace,
                               {backgroundColor:color},
                               {width:width},
                               {height:height},
                               ]
                            }
                            onPress={()=>{}}
                            onFocus={()=>{}}
                            onBlur={()=>{}}
                        
            >
                <Text style={[styles.text]}>{title}</Text>
            </TouchableOpacity>
        </View>
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
