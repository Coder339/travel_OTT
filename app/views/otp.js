import React, { Component } from 'react'
import { Text, StyleSheet, View, Button,ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {colors,globalstyles,fontFamily} from '../assets/globalstyleconstants';
import ButtonCard from '../components/common/navbutton';
import LogoSvgComponent  from '../assets/images/travelxplogo';
import Numerickeypad from '../components/common/keypad';
import TextInputCard from '../components/common/textinputcard'

export default class Otp extends Component {
    constructor(props){
        super(props);
        this.state={
            blackbutton:colors.black,
            whitebutton:colors.white,
            blackButtonTextColor:colors.white,
            whiteButtonTextColor:colors.black
       }
    }
    render() {
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
                    <View style={[styles.inputcard,globalstyles.hspace]}>
                        <TextInputCard/>
                        <TextInputCard/>
                    </View>
                    <Numerickeypad />
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
                                defaultFocus={true}
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
                                onPress='Login'
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
        fontSize:20,
        fontWeight:'bold',  
    },
    inputcard:{
        flexDirection:'row',
        
    }
})
