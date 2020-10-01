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
        const textArray = Array(2).fill('');
        const activeArray = Array(2).fill(false);
        this.state={
            textArray:textArray,
            active:activeArray,
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
            index:0,
            inputArray: ['1','2'],
       }
       this.mobileHandler = this.mobileHandler.bind(this)
    }

    mobileHandler(text,index){
        if (text === 'backspace') {
            if (this.state.textArray[0].length > 1){
                this.setState(prevState=>{
                    prevState.textArray[index] = prevState.textArray[index].substring(0,this.state.textArray[index].length - 1)
                    console.log('length',this.state.textArray[index].length)
                    return {
                        textArray: prevState.textArray
                      }
                })
    
                if (this.state.textArray[1].length === 0){
                    this.state.active.fill(false,1)
                    this.setState({index:0})
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
                    if (this.state.textArray[index].length < 3){
                        prevState.textArray[index] = prevState.textArray[index] + text
                        prevState.active[index] = true
                        // console.log('textarrayLength',this.state.textArray[index].length)
                   
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

                if (this.state.textArray[index].length === 3){
                    this.setState({index:index+1})
                }
            }
            else {
                    this.setState({index:index})
                     
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
    
    componentDidMount = () => {
        this.setState({index:1})
        this.setState(prevState=>{
            prevState.textArray[0] = this.state.countryCode

        })
    }
    render() {
        const { active,inputArray,mobileHolder,mobileHolderColor,message,countryCode,textArray,index } = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/otpbackground.png')} 
                                 style={styles.image}>
                    
                    <LogoSvgComponent 
                                 style={styles.logo} 
                                 width='100' 
                    />
                    <Text style={[styles.mobile,globalstyles.hspace]}>
                                Enter your mobile number to login.
                    </Text>
                    <View style={{width:'35%'}}>

                        <View style={[styles.inputcard,globalstyles.hspace]}>
                        
                            {inputArray.map((item,index) => 
                                 
                                <View key={index}>
                                    <TextInputCard 
                                    inputRef={r => this.inputRefs[index] =  r}
                                    maxLength={index === 0 ? 3 : 10}
                                    width={index === 0 ? 95 : 230} 
                                    height={40} 
                                    active={active[index]}
                                    index={index}
                                    placeholder={index === 0 ? '' : mobileHolder}
                                    placeholderTextColor={mobileHolderColor}
                                    value={textArray[index]}
                                    onChange={(event) =>  this.onChangeHandler(event,message,index)}
                                    onkeypress={({nativeEvent}) => this.handleKeyPress(nativeEvent,index)}
                                    />
                                </View>
                          )}
        
                        </View>
                        {
                            textArray[0].length === 3 ? <Text></Text> : <CodeValidation erroMessage={this.state.erroMessage}/>
                        }
                        
                    </View>
                    <Numerickeypad defaultNum={this.state.defaultNum} onPress={(text)=>this.mobileHandler(text,index)}/>
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
        fontSize:fontSize.extralarge,
        fontFamily:fontFamily.bold,  
    },
    inputcard:{
        flexDirection:'row',
        marginTop:20,
    }
})
