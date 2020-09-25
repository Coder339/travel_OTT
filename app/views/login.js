import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Image, Button } from 'react-native';
import {colors,globalstyles,fontFamily,fontSize} from '../assets/globalstyleconstants';
import LogoSvgComponent  from '../assets/images/travelxplogo';
import ButtonCard from '../components/common/navbutton';

export default class login extends Component {
    constructor(props){
        super(props);
        this.state={
             color:colors.travelred,
             textColor:colors.white
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/background.png')} 
                                 style={styles.image}>
                    <LogoSvgComponent 
                                 style={styles.logo} 
                                 width='100' 
                    />
                    <View style={[globalstyles.hspace]}>
                        <Text style={[styles.content]}>
                           Premium 4K Travel Content {'\u0026'} More
                        </Text>
                        <Text style={[styles.xplore]}>
                           see more.xplore more
                        </Text>
                        <ButtonCard 
                           title='Sign In' 
                           color={this.state.color}
                           textColor={this.state.textColor}
                           opacity={1}
                           width={100}
                           height={36}
                           bordcolor='white'
                           bordwidth={1}
                           defaultFocus={true}
                           navigation={this.props.navigation}
                           onPress='Otp'
                        />
                        {/* <ButtonCard 
                           title='Sign In' 
                           color={this.state.color}
                           width={100}
                           height={36}
                           bordcolor='white'
                           bordwidth={1}
                           defaultFocus={false}
                        /> */}
                        <View style={[styles.bottomContent]}>
                            <Text style={styles.sign_up}>
                                Not yet signed up to Travelxp?
                            </Text>
                            <Text style={styles.plan}>
                                Sign up now on www.travelxp.com to buy your desired plan!
                            </Text>
                        </View>
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
      image: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
      },
      logo:{
          position:'absolute',
          top:0,
          left:60
      },
      content:{
        marginTop:20,
        fontSize:fontSize.superextralargest,
        fontFamily:fontFamily.bold,
        flexShrink:1,
        width:'50%',
        color:colors.white,
      },
      xplore:{
        // fontWeight:'bold',
        // fontFamily:fontFamily.bold,
        fontSize:fontSize.extralargest,
        color:colors.white,
        opacity:0.7,
      },
      bottomContent:{
          marginTop:80
      },
      sign_up:{
          color:colors.white,
          fontSize:fontSize.largest,
          fontWeight:'bold'
      },
      plan:{
          color:colors.white,
          opacity:0.7,
          fontSize:fontSize.normal,
          marginTop:5
      }
    
      
})

