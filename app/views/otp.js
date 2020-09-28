import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,ImageBackground,Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {colors,globalstyles,fontFamily,fontSize} from '../assets/globalstyleconstants';
import ButtonCard from '../components/common/navbutton';
import LogoSvgComponent  from '../assets/images/travelxplogo';
import Numerickeypad from '../components/common/keypad';
import TextInputCard from '../components/common/textinputcard'
import CodeValidation from '../components/common/codevalidation';

export default class Otp extends Component {
    constructor(props){
        super(props);
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
        ]
        this.state={
            blackbutton: colors.black,
            whitebutton: colors.white,
            blackButtonTextColor: colors.white,
            whiteButtonTextColor: colors.black,
            mobile: '',
            title:'',
            mobileHolder: 'ENTER YOUR MOBILE NUMBER',
            mobileHolderColor: colors.white,
            countryCode: '+91',
            erroMessage:'Please enter valid country code',
            defaultNum:'9',
            message:'',
            inputArray: ['1','2'],
       }
       this.mobileHandler = this.mobileHandler.bind(this)
    }

    mobileHandler(text){
     this.setState({mobile:text})
     console.log(" mobile ",this.state.mobile)
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
        // nativeEvent.key === 'Backspace' ? alert('delete') : alert('ghjgjh')

    }
    
    componentDidMount = () =>{
        // this.inputRefs[0].focus()
    }
    render() {
        const { inputArray,mobileHolder,mobileHolderColor,message,countryCode } = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/otpbackground.png')} 
                                 style={styles.image}>
                    
                    <LogoSvgComponent 
                                 style={styles.logo} 
                                 width='100' 
                    />
                    <Text style={[styles.mobile,globalstyles.hspace]}>
                                Enter your mobile number to login
                    </Text>
                    <View style={{width:'35%'}}>
                        {/* <View style={[styles.inputcard,globalstyles.hspace]}>
                            <TextInputCard 
                            // inputRef={r => this.inputRefs[0] =  r}
                            width={95} 
                            height={40} 
                            maxLength={3}
                            title={this.state.countryCode} 
                            defaultValue={this.state.countryCode}
                            />
                            <TextInputCard 
                            width={230} 
                            height={40} 
                            maxLength={10}
                            placeholder={mobileHolder}
                            placeholderTextColor={mobileHolderColor}
                            value={this.state.mobile}
                            onChange={(text)=>this.mobileHandler(text)}
                            />
                        </View> */}

                        <View style={[styles.inputcard,globalstyles.hspace]}>
                        
                            {inputArray.map((item,index) => 
                                 
                                <View key={index}>
                                    <TextInputCard 
                                    inputRef={r => this.inputRefs[index] =  r}
                                    maxLength={index === 0 ? 3 : 10}
                                    // defaultValue={index === 0 ? countryCode : ''}
                                    width={index === 0 ? 95 : 230} 
                                    height={40} 
                                    placeholder={index === 0 ? '' : mobileHolder}
                                    placeholderTextColor={mobileHolderColor}
                                    // title={this.state.otpNum}
                                    onChange={(event) =>  this.onChangeHandler(event,message,index)}
                                    onkeypress={({nativeEvent}) => this.handleKeyPress(nativeEvent,index)}
                                    />
                                </View>
                          )}
        
                        </View>
                        
                        <CodeValidation erroMessage={this.state.erroMessage}/>
                    </View>
                    <Numerickeypad defaultNum={this.state.defaultNum} onPress={(text)=>alert(text)}/>
                    <View style={[styles.buttonContainer,globalstyles.hspace]}>

                        <ButtonCard 
                                title='Back' 
                                color={this.state.blackbutton}
                                textColor={this.state.blackButtonTextColor}
                                opacity={0.7}
                                width={80}
                                height={36}
                                bordcolor='white'
                                bordwidth={2}
                                defaultFocus={false}
                                navigation={this.props.navigation}
                                onPress='Login'
                        />
                        <ButtonCard 
                                title='Next' 
                                color={this.state.whitebutton}
                                textColor={this.state.whiteButtonTextColor}
                                opacity={0.7}
                                width={80}
                                height={36}
                                bordcolor='#000'
                                bordwidth={2}
                                defaultFocus={false}
                                navigation={this.props.navigation}
                                onPress='OtpValidate'
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
        fontSize:fontSize.largest,
        fontFamily:fontFamily.bold,  
    },
    inputcard:{
        flexDirection:'row',
        marginTop:20,
    }
})
