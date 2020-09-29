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
        const textArray = Array(6).fill('');
        const activeArray = Array(6).fill(false);
        this.state={
            textArray: textArray,
            focusedIndex: null,
            blackbutton:colors.black,
            whitebutton:colors.white,
            blackButtonTextColor:colors.white,
            whiteButtonTextColor:colors.black,
            otpNum: '',
            otpArray: ['1','2','3','4','5','6'],
            defaultNum:'1',
            message:'',
            index:0,
            active:activeArray,
            
       }
       this.otpNumHandler = this.otpNumHandler.bind(this)
       this.onChangeHandler = this.onChangeHandler.bind(this)
       this.handleKeyPress = this.handleKeyPress.bind(this);
       this.keyTextHandler = this.keyTextHandler.bind(this);
    }


    otpNumHandler(text,index) {
        //  console.log('text',text)
        if (text === 'backspace') {
            // alert('back')
            this.state.textArray.fill('',index)
            this.state.active.fill(false,index)
            this.setState({index:index-1})
            console.log(this.state.textArray)
            console.log(this.state.active)
        }
        else{
            this.setState(prevState => {
                
                if (index < this.state.textArray.length){
                    prevState.textArray[index] = text
                    prevState.active[index] = true
               
                }
                return {
                  textArray: prevState.textArray
                }
              }, () => console.log(this.state.textArray))
            // this.state.index === index ? this.setState({active:true}) : this.setState({active:false})
            this.setState({index:index+1})
            
            console.log(this.state.active)
        }
        
    }
    _goNextAfterEdit(index){
        this.inputRefs[index+1].focus()
        
    }
    
    onChangeHandler(text,message,index){
        
        this.setState({index:index})
        this.setState({message: message + text})
        console.log(this.state.message.length,this.state.index)  
                     
        if ( index === this.state.otpArray.length-1 ){ 
            // issue with last event addition
            Keyboard.dismiss()
            // alert(message + event)
        }
        else {
            this._goNextAfterEdit(index)
        }
    }

    // handleBorderColor = (index) => {
    //     return index === this.state.focusedIndex ? 'red' : 'grey'
    //   }
    
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

    componentDidMount = () => {
        // <TextInputCard inputRef={r => this.inputRefs[0] =  r}/>
        // this.inputRefs[0].focus()
        
        console.log(this.state.active[0])
    }
    
    render() {
        const { otpArray,mobileHolderColor,message,otpNum,textArray,index,active } = this.state
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
                                //  this.setState({index:index})
                                <View key={index}>
                                    <TextInputCard 
                                    inputRef={r => this.inputRefs[index] =  r}
                                    active={active[index]}
                                    index={index}
                                    maxLength={1}
                                    width={55} 
                                    height={50} 
                                    value={textArray[index]}
                                    onChange={(text) =>  this.onChangeHandler(text,message,index)}
                                    onkeypress={({nativeEvent}) => this.handleKeyPress(nativeEvent,index)}
                                    // onFocus={() => this.setState({focusedIndex: index})}
                                    />
                                </View>
                          )}
        
                    </View>
                    
                    <Numerickeypad defaultNum={this.state.defaultNum} onPress={(text)=>this.otpNumHandler(text,index)}/>
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
