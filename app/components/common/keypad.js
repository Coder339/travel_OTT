import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import {colors,globalstyles,fontFamily} from '../../assets/globalstyleconstants';
import Keybutton from './keybutton';
import Backspace from '../../assets/images/backspace';

export default function Numerickeypad(props) {

    const { defaultNum,onPress,disableButton } = props
    let color = colors.black
    let textColor = colors.white
    const numArray = ["1","2","3","4","5","6","7","8","9","0"]
    
    return (
        <View style={[styles.container,globalstyles.hspace]}>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {numArray.map((button,index) => 
                    <View key={index} style={globalstyles.keypadding}>
                        <Keybutton 
                            type='num'
                            defaultNum={defaultNum}
                            title={button}
                            color={color}
                            textColor={textColor}
                            width={55}
                            height={36}
                            bordcolor='white'
                            bordwidth={2}
                            opacity={0.7}
                            onPress={onPress}
                            disableButton={disableButton}
                        />
                    </View>
                )}
            </View>
            <View style={{paddingVertical:0,}}>
                <Keybutton 
                    type='svg'
                    title='backspace'
                    color={color}
                    textColor={textColor}
                    width={55}
                    height={86}
                    bordcolor='white'
                    bordwidth={2}
                    opacity={0.7}
                    onPress={onPress}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'34.3%',
        marginTop:60,
        
    }
})
