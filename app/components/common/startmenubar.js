import React, {PureComponent} from 'react';
import {View, TextInput,Text,StyleSheet, TouchableOpacity, Animated, TouchableHighlight} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';

import StartMenuBarItem from './startmenubaritem';

import TVEventHandler from 'react-native';
export default class StartMenuBar extends PureComponent {
  

  constructor(props) {
    super(props);
    
    const exitArray = Array(12).fill('');
    this.state = {
      drawerfocused: false,
      menufocused:false,
      drawerExit:exitArray,
  
    };
    this.menuonFocus = this.menuonFocus.bind(this);
    this.menuonBlur = this.menuonBlur.bind(this);
  }

  menuonFocus() {
    // alert('focused');
    this.setState({
      menufocused: true,
    });
    this.setState({drawerfocused:true})
    // console.log('menu',this.state.menufocused)
    // console.log('draw',this.state.drawerfocused)
  }
  menuonBlur() {
    // alert('Blured');
    this.setState({
      menufocused: false,
    });
    // this.setState({drawerfocused:false})
    // console.log('menublur',this.state.menufocused)
  }

  // draweronFocus=()=> {
  //   // alert('focused');
  //   this.setState({
  //     drawerfocused: true,
  //   });
  // }
  draweronBlur=()=> {
    // alert('Blured');
    this.setState({
      drawerfocused: false,
    });
    this.setState({
      menufocused: false,
    });
  }


  render() {
    const { draweronFocus,drawerfocused,menufocused,drawerExit } = this.state
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        underlayColor={false}
        onPress={()=>{this.draweronBlur()}}
        // onFocus={this.draweronFocus}
        onBlur={
          // () => {
          //   alert('blured');
          // }
          this.draweronBlur
        }
        // hasTVPreferredFocus={true}
        style={[
          styles.container,
          {
            width: this.state.drawerfocused ? 150 : 50,
            // borderWidth: this.state.focused ? 0 : 1,
            // borderColor: colors.travelred,
          },
        ]}>
        <View>
        <TouchableHighlight 
                onFocus={this.draweronBlur} 
                activeOpacity={0}
                style={{opacity:0}}
                underlayColor={false}>
                <Text style={{color:'white',marginTop:10}}>exit</Text>
        </TouchableHighlight>
        <View style={{flexDirection:'row'}}>
            <View>
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="search"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="home"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="squaregroup"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="tv"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="watchlistplus"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="power"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
            </View>
            <View>
              {drawerExit.map((item,index)=>
              <View key={index}>

                <TouchableHighlight 
                  onFocus={this.draweronBlur} 
                  activeOpacity={0}
                  style={{opacity:0}}
                  underlayColor={false}>
                  <Text style={{color:'white',marginTop:10}}>exit</Text>
                </TouchableHighlight>
              </View>
              )}
              
            </View>
          </View>
          <TouchableHighlight 
                onFocus={this.draweronBlur} 
                activeOpacity={0}
                style={{opacity:0}}
                underlayColor={false}>
                <Text style={{color:'white',marginTop:10}}>exit</Text>
          </TouchableHighlight>
        </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: colors.backgroundColor,
    opacity: 0.8,
    height: 1000,
    // width:150
  },
});