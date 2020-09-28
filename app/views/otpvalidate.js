import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,ImageBackground,Keyboard } from 'react-native'
import { colors,globalstyles,fontFamily,fontSize } from '../assets/globalstyleconstants';
import ButtonCard from '../components/common/navbutton';
import LogoSvgComponent  from '../assets/images/travelxplogo';
import Goback  from '../assets/images/goback';
import Numerickeypad from '../components/common/keypad';
import TextInputCard from '../components/common/textinputcard'
import CodeValidation from '../components/common/codevalidation';

export default class OtpValidate extends Component {
    constructor(props){
        super(props);
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ]
        this.state={
            blackbutton:colors.black,
            whitebutton:colors.white,
            blackButtonTextColor:colors.white,
            whiteButtonTextColor:colors.black,
            otpNum: '',
            otpArray: ['1','2','3','4','5','6'],
            defaultNum:'1',
            message:'',
            
       }
       this.otpNumHandler = this.otpNumHandler.bind(this)
       this.onChangeHandler = this.onChangeHandler.bind(this)
       this.handleKeyPress = this.handleKeyPress.bind(this);
       this.keyTextHandler = this.keyTextHandler.bind(this);
    }

    otpNumHandler(num) {
        this.setState({otpNum:num})
        
    }
    _goNextAfterEdit(index){
        this.inputRefs[index+1].focus()
        
    }
    
    onChangeHandler(event,message,index){
        this.setState({message: message + event})
        console.log(this.state.message.length)  
                     
        if ( index === this.state.otpArray.length-1 ){ 
            // issue with last event addition
            Keyboard.dismiss()
            // alert(message + event)
        }
        else {
            this._goNextAfterEdit(index)
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

    keyTextHandler(text){
        alert(text)
    }

    componentDidMount = () =>{
        // <TextInputCard inputRef={r => this.inputRefs[0] =  r}/>
        // this.inputRefs[0].focus()
    }
    
    render() {
        const { otpArray,mobileHolderColor,message,otpNum } = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/otpbackground.png')} 
                                 style={styles.image}>
                    
                    <Goback style={styles.goback}
                            width='20' />
                    <LogoSvgComponent 
                                 style={styles.logo} 
                                 width='100' 
                    />
                    <Text style={[styles.mobile,globalstyles.hspace]}>
                                Enter OTP
                    </Text>
                    
                    <View style={[styles.inputcard,globalstyles.hspace]}>
                        
                            {otpArray.map((item,index) => 
                                 
                                <View key={index}>
                                    <TextInputCard 
                                    inputRef={r => this.inputRefs[index] =  r}
                                    maxLength={1}
                                    width={55} 
                                    height={50} 
                                    value={otpNum}
                                    onChange={(num) =>  this.onChangeHandler(num,message,index)}
                                    onkeypress={({nativeEvent}) => this.handleKeyPress(nativeEvent,index)}
                                    />
                                </View>
                          )}
        
                    </View>
                    
                    <Numerickeypad defaultNum={this.state.defaultNum} onPress={(text)=>this.otpNumHandler(text)}/>
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
                                onPress='Otp'
                        />
                        <ButtonCard 
                                title='Login' 
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
        position:'relative',
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
    goback:{
        position:'absolute',
        top:15,
        left:30,
        
    },
    mobile:{
        color:colors.white,
        fontSize:fontSize.larger,
        fontFamily:fontFamily.bold,  
    },
    inputcard:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        width:'44%',
        // backgroundColor:'blue'
    }
})
