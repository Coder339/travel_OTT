import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors,globalstyles,fontFamily} from '../../assets/globalstyleconstants';
import Keybutton from './keybutton';
import Backspace from '../../assets/images/backspace';

export default function Numerickeypad(props) {
    let color = colors.black
    let textColor = colors.white
    const numArray = [1,2,3,4,5,6,7,8,9,0]
    return (
        <View style={[styles.container,globalstyles.hspace]}>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {numArray.map((button,index) => 
                    <View key={index} style={globalstyles.keypadding}>
                        <Keybutton 
                            type='num'
                            title={button}
                            color={color}
                            textColor={textColor}
                            opacity={1}
                            width={50}
                            height={36}
                            bordcolor='white'
                            bordwidth={2}
                            defaultFocus={true}
                            // opacity={0.6}
                        />
                    </View>
                )}
            </View>
            <View style={{paddingVertical:0,}}>
                <Keybutton 
                    type='svg'
                    color={color}
                    textColor={textColor}
                    opacity={1}
                    width={50}
                    height={86}
                    bordcolor='white'
                    bordwidth={2}
                    defaultFocus={true}
                    // opacity={0.6}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        width:'32%',
        marginTop:40
        
    }
})
