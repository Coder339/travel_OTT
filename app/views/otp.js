import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,ImageBackground,Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {colors,globalstyles,fontFamily,fontSize} from '../assets/globalstyleconstants';
import ButtonCard from '../components/common/navbutton';
import LogoSvgComponent  from '../assets/images/travelxplogo';
import Numerickeypad from '../components/common/keypad';
import TextInputCard from '../components/common/textinputcard'
import CodeValidation from '../components/common/codevalidation';
import MobileValidation from './mobilevalidation';
import OtpValidation from './otpvalidation';
import data from '../config/countrylist.json';

export default class Otp extends Component {
    constructor(props){
        super(props);
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
        ]
        const textArray = Array(2).fill('');
        const activeArray = Array(2).fill(false);
        const otpTextArray = Array(6).fill('');
        const otpActiveArray = Array(6).fill(false);
        this.state={
            data,
            code:'',
            isTrue:true,
            textArray:textArray,
            active:activeArray,
            otpTextArray:otpTextArray,
            otpActiveArray:otpActiveArray,
            blackbutton: colors.black,
            whitebutton: colors.white,
            blackButtonTextColor: colors.white,
            whiteButtonTextColor: colors.black,
            mobile: '',
            title:'',
            mobileHolder: 'ENTER YOUR MOBILE NUMBER',
            mobileHolderColor: colors.white,
            countryCode: '+91',
            errorMessage:'Please enter valid country code',
            defaultNum:'9',
            message:'',
            mobileIndex:0,
            otpIndex:0,
            inputArray: ['1','2'],
            otpArray: ['1','2','3','4','5','6'],
            navButtonTitle:'Next',
       }
       this.mobileHandler = this.mobileHandler.bind(this)
       this.otpNumHandler = this.otpNumHandler.bind(this)
    }

    mobileHandler(text,index){
        if (text === 'backspace') {
            if (this.state.textArray[0].length > 1){
                this.setState(prevState=>{
                    prevState.textArray[index] = prevState.textArray[index].substring(0,this.state.textArray[index].length - 1)
                    console.log('length',this.state.textArray[0])
                    console.log('length',this.state.code)
                    if (this.state.textArray[0]===this.state.code){
                        prevState.isTrue = true
                    }
                    // if(index === 1 && this.state.textArray[index-1]===this.state.code){
                    //     prevState.isTrue = true
                    // }
                    else{
                        prevState.isTrue = false
                    }
                    return {
                        textArray: prevState.textArray
                      }
                    
                })
    
                if (this.state.textArray[1].length === 0){
                    this.state.active.fill(false,1)
                    this.setState({mobileIndex:0})
                }
                
                console.log(this.state.textArray[index])
                console.log(this.state.active)
            }    
        }
        else {
            // console.log('indexxx',index)
            console.log(text)
            this.setState(prevState => {
                if (index === 0){
                    
                    prevState.textArray[index] = prevState.textArray[index] + text
                    prevState.active[index] = true
                    
                    // console.log('textarrayLength',this.state.textArray[index].length)
                    let element = this.state.data.find((item)=>{
                        console.log('item',item.dial_code)
                        return item.dial_code === this.state.textArray[index] ;
                    });
                    if (element) {
                        console.log(element.dial_code)
                        prevState.code = element.dial_code

                        prevState.isTrue = true
                        // if (this.state.textArray[index] === this.state.code){
                        //     alert(this.state.textArray[index])
                        //     prevState.isTrue = true
                        // }
                    }
                    
                    else{
                        prevState.isTrue = false
                    }
                    
                }
                if (index === 1) {
                    if (this.state.textArray[index].length < 10){
                        prevState.textArray[index] = prevState.textArray[index] + text
                        prevState.active[index] = true
                        // console.log('textarrayLength',this.state.textArray[index].length)
                        if (this.state.textArray[index].length===10){
                            alert(this.state.textArray[index-1]+this.state.textArray[index])
                            // prevState.textArray[index] = ''
                        }
                   
                    }
                }
                return {
                  textArray: prevState.textArray
                }
              }, 
              () => console.log('textarray',this.state.textArray)
            )

            if (index===0){

                if (this.state.textArray[index].length === 4){
                    this.setState({mobileIndex:index+1})
                }
            }
            else {
                    this.setState({mobileIndex:index})
                     
            }
            
            
        }
    }
    

    otpNumHandler(text,index) {
        //  console.log('text',text)
        
        if (text === 'backspace') {
            //  console.log('index',index)
            this.setState(prevState=>{
                prevState.otpTextArray[index] = ''
                prevState.otpActiveArray[index] = false
                return {
                    otpTextArray: prevState.otpTextArray,
                    otpActiveArray: prevState.otpActiveArray
                  }
            })
            if (index > 0){
                this.setState({otpIndex:index-1})
            }
            console.log(this.state.otpTextArray)
            console.log(this.state.otpActiveArray)
        }
        else{
            this.setState(prevState => {
                
                if (index < this.state.otpTextArray.length){
                    prevState.otpTextArray[index] = text
                    prevState.otpActiveArray[index] = true
                    console.log(this.state.active)
                    console.log('indexx',index)
                }
                return {
                    otpTextArray: prevState.otpTextArray
                }
              }, () => console.log(this.state.otpTextArray))
    
            if (index < 5){
                this.setState({otpIndex:index+1})
            }
            
            
            
        }
        
    }

    
    _goNextAfterEdit(index){
        this.inputRefs[index+1].focus()
        
    }

    onChangeHandler(event,message,index){
        this.setState({message: message + event})
        console.log(this.state.message.length)       

        if ( index === this.state.inputArray.length-1 ){ 
            // issue with last event addition
            if (this.state.message.length === 13){
                alert(message + event)
                Keyboard.dismiss()
            }

        }
        else {
            if (this.state.message.length === 3){
                this._goNextAfterEdit(index)
            }
        }
    }
    
    handleKeyPress(nativeEvent,index) {
        if (nativeEvent.key === 'Backspace') {
            
            if (index === 0){
                return
            }
            else{
                this.inputRefs[index-1].focus()
            }
        }

    }

    mobileIndexChange = (index) =>{
        this.setState({mobileIndex:index})
    }

    otpIndexChange = (index) =>{
        this.setState({otpIndex:index})
    }

    componentChangeHandler = () => {
        this.setState({navButtonTitle:'Login'})

    }

    backChangeHandler = () => {
        this.state.navButtonTitle === 'Next' ?
        this.props.navigation.navigate('Login')
        :
        this.setState({navButtonTitle:'Next'})
    }
    
    initialStateChange=()=>{
        this.setState({mobileIndex:1})
        this.setState(prevState=>{
            prevState.textArray[0] = this.state.countryCode
            prevState.code = this.state.countryCode
        })
    }
    
    componentDidMount = () => {
        this.initialStateChange()
    }
    render() {
        const { 
            navButtonTitle,
            active,
            inputArray,
            mobileHolder,
            mobileHolderColor,
            message,
            countryCode,
            errorMessage,
            otpArray,
            otpTextArray,
            otpActiveArray,
            isTrue,
            textArray,mobileIndex,otpIndex } = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/otpbackground.png')} 
                                 style={styles.image}>
                    
                    <LogoSvgComponent 
                                 style={styles.logo} 
                                 width='100' 
                    />
                    {
                        navButtonTitle === 'Next' ?
                            <MobileValidation 
                                inputArray={inputArray}
                                textArray={textArray}
                                isTrue={isTrue}
                                changeIndex={this.mobileIndexChange}
                                active={active}
                                message={message}
                                errorMessage={errorMessage}
                                mobileHolder={mobileHolder}
                                mobileHolderColor={mobileHolderColor}
                                onChange={(event) =>  this.onChangeHandler(event,message,mobileIndex)}
                            />
                            :
                            <OtpValidation 
                            otpArray={otpArray}
                            textArray={otpTextArray}
                            active={otpActiveArray}
                            changeIndex={this.otpIndexChange}
                            />
                    }

                    
                    <Numerickeypad 
                        defaultNum={this.state.defaultNum} 
                        onPress={ navButtonTitle === 'Next'? 
                            (text)=>this.mobileHandler(text,mobileIndex) 
                            : 
                            (text)=>this.otpNumHandler(text,otpIndex)}
                    />
                    <View style={[styles.buttonContainer,globalstyles.hspace]}>

                        <ButtonCard 
                                title='Back' 
                                color={this.state.blackbutton}
                                textColor={this.state.blackButtonTextColor}
                                opacity={0.7}
                                width={80}
                                height={36}
                                bordcolor={colors.white}
                                defaultFocus={false}
                                bordwidth={2}
                                navigation={this.props.navigation}
                                onPress={()=>this.backChangeHandler()}
                        />
                        <ButtonCard 
                                title={navButtonTitle} 
                                color={this.state.whitebutton}
                                textColor={this.state.whiteButtonTextColor}
                                opacity={0.7}
                                width={80}
                                height={36}
                                bordcolor={colors.black}
                                defaultFocus={false}
                                bordwidth={2}
                                navigation={this.props.navigation}
                                onPress={()=>this.componentChangeHandler()}
                        />
                    </View>
                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:180
    },
    image: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor:'rgba(0,0,0,0.8)'
    },
    logo:{
        position:'absolute',
        top:0,
        left:60
    },
    mobile:{
        color:colors.white,
        fontSize:fontSize.extralarge,
        fontFamily:fontFamily.bold,  
    },
    inputcard:{
        flexDirection:'row',
        marginTop:20,
    }
})
