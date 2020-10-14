import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextInputCard from '../components/common/textinputcard';
import {colors,globalstyles,fontFamily,fontSize} from '../assets/globalstyleconstants';
import CodeValidation from '../components/common/codevalidation';

export default function OtpValidation(props) {
    const {
        otpArray,
        textArray,
        active,
        changeIndex,
        onFocus,
        onBlur,
        errorMessage,
        isTrue
        } = props
    return (
        <View>
            <Text style={[styles.mobile,globalstyles.hspace]}>
                        Enter OTP
            </Text>
            
            <View style={[styles.inputcard,globalstyles.hspace]}>
                
                    {otpArray.map((item,index) => 
                        <View key={index}>
                            <TextInputCard 
                            // inputRef={r => this.inputRefs[index] =  r}
                            active={active[index]}
                            index={index}
                            maxLength={1}
                            width={55} 
                            height={50} 
                            value={textArray[index]}
                            changeIndex={changeIndex}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            />
                        </View>
                    )}

            </View>
            <View style={{width:'43%'}}>
               {  
                    isTrue ? <Text></Text> : <CodeValidation errorMessage={errorMessage}/>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mobile:{
        color:colors.white,
        fontSize:20,
        fontFamily:fontFamily.bold,  
    },
    inputcard:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
        width:'44%',
    }
})
