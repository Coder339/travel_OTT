import React ,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextInputCard from '../components/common/textinputcard'
import CodeValidation from '../components/common/codevalidation';
import {colors,globalstyles,fontFamily,fontSize} from '../assets/globalstyleconstants';


export default function MobileValidation(props) {
    const {
        inputArray,
        textArray,
        changeIndex,
        checkIndex,
        isTrue,
        isComplete,
        active,
        message,
        errorMessage,
        mobileHolder,
        mobileHolderColor,
        onChange,
        onFocus,
        onBlur,
        } = props
    
    return (
        <View>
            <Text style={[styles.mobile,globalstyles.hspace]}>
                        Enter your mobile number to login.
            </Text>
            <View style={{width:'35%'}}>

                <View style={[styles.inputcard,globalstyles.hspace]}>
                
                    {inputArray.map((item,index) => 
                            
                        <View key={index}>
                            <TextInputCard 
                            // inputRef={r => this.inputRefs[index] =  r}
                            maxLength={index === 0 ? 4 : 10}
                            width={index === 0 ? 95 : 230} 
                            height={40} 
                            active={active[index]}
                            index={index}
                            placeholder={index === 0 ? '' : mobileHolder}
                            placeholderTextColor={mobileHolderColor}
                            value={textArray[index]}
                            onChange={onChange}
                            changeIndex={changeIndex}
                            checkIndex={checkIndex}
                            isTrue={isTrue}
                            isComplete={isComplete}
                            onFocus={onFocus}
                            onBlur={onBlur}

                            />
                        </View>
                    )}

                </View>
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
    }
})
