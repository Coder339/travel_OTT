import React, {PureComponent} from 'react';
import {View, Text,StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';
import StartMenuBarItem from './startmenubaritem';

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
    this.draweronBlur = this.draweronBlur.bind(this);
  }

  menuonFocus() {
    this.setState({
      menufocused: true,
    });
    this.setState({
      drawerfocused:true
    });
  }
  menuonBlur() {
    this.setState({
      menufocused: false,
    });
    
  }

  draweronBlur() {
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
      <View
        // activeOpacity={0.9}
        // underlayColor={false}
        onPress={this.draweronBlur}
        onBlur={this.draweronBlur}
        style={[styles.container,{width: this.state.drawerfocused ? 150 : 50,}]}
      >
        {/* {this.state.drawerfocused && alert('focus on 1st')} */}
        
        {/* <TouchableHighlight 
          onFocus={this.draweronBlur} 
          activeOpacity={0}
          style={{opacity:0}}
          underlayColor={false}>
          <Text style={{color:'white',marginTop:10}}>exit</Text>
        </TouchableHighlight> */}

        <View style={{flexDirection:'row'}}>
            <View>
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="SearchSvg"
                title='Search'
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="HomeSvg"
                title='Home'
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="SquareGroupSvg"
                title='Categories'
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="TvSvg"
                title='Ambient'
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="WatchlistPlusSvg"
                title='My List'
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="PowerSvg"
                title='Logout'
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
            </View>
            {/* <View>
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
            </View> */}
          </View>

          <TouchableHighlight 
            onFocus={this.draweronBlur} 
            activeOpacity={0}
            style={{opacity:0}}
            underlayColor={false}>
            <Text style={{color:'white',marginTop:10}}>exit</Text>
          </TouchableHighlight>
        
    </View>
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