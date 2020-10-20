import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, Alert } from 'react-native';
import { colors } from '../../assets/globalstyleconstants';
import StartMenuBarItem from './startmenubaritem';
import { BlurView } from '@react-native-community/blur'

let height = Dimensions.get('window').height;

let menuData = [
  { svgType: "SearchSvg", title: "Search" },
  { svgType: "HomeSvg", title: "Home" },
  { svgType: "SquareGroupSvg", title: "Categories" },
  { svgType: "TvSvg", title: "Ambient" },
  { svgType: "WatchlistPlusSvg", title: "My List" },
  { svgType: "PowerSvg", title: "Logout" }
]

export default class StartMenuBar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      drawerfocused: false,
      menufocused: false,
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
      drawerfocused: true
    });
  }
  menuonBlur() {
    setTimeout(() => {
      if (!this.state.menufocused) {
        this.setState({
          drawerfocused: false
        })
      }
    }, 100)
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
    const { drawerfocused } = this.state
    return (
      <View
        style={[styles.container, { width: drawerfocused ? 135 : 50 }]}
      >
        <View style={styles.menu}>
        {menuData.map((item, index) =>
          <StartMenuBarItem
            key={index}
            menuonFocus={this.menuonFocus}
            menuonBlur={this.menuonBlur}
            svgType={item.svgType}
            title={item.title}
            width={drawerfocused ? 135 : 50}
          />
        )}
        </View>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={100}
          overlayColor={colors.transparent}
          reducedTransparencyFallbackColor="white"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.black,
    opacity: 1,
    height: height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  absolute:{
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menu:{
    position: 'absolute',
    zIndex: 1
  }
});