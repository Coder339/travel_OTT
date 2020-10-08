import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {colors, globalstyles} from '../../assets/globalstyleconstants';

import SearchSvg from '../../images/searchsvg';
import HomeSvg from '../../images/homesvg';
import SquareGroupSvg from '../../images/squaregroupsvg';
import TvSvg from '../../images/tvsvg';
import WatchlistPlusSvg from '../../images/watchlistplussvg';
import PowerSvg from '../../images/powersvg';

export default class StartMenuBarItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      firstfocus:false,
      // initialFocused: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true,
      // initialFocused: true,
    });
    this.props.menuonFocus();
  }
  onBlur() {
    this.setState({
      focused: false,
    });
    this.props.menuonBlur();
  }
  onPress() {
    alert('Clicked');
  }
  
  componentDidMount=()=>{
    this.setState(prevState=>{
      this.props.svgType === 'search' && this.props.menufocused ? prevState.firstfocus = true : prevState.firstfocus = false
    })
  }
  

  render() {
    const sizing = {width:this.props.width,height: 55};
    // const sizing = {height: 55};
    console.log('menxx',this.props.menufocused)
    return (
      <View style={styles.container}>
        <TouchableHighlight
          // hasTVPreferredFocus={this.props.svgType === 'search'}
          activeOpacity={0.9}
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          // width={this.props.draweronFocus ? 150 : 50}
          style={
            [this.state.focused
              ? [globalstyles.focusMenuBar, sizing]
              : [globalstyles.blurMenuBar, sizing]
            ]}>
          <View style={[styles.containerItems]}>
            {this.props.svgType === 'search' && (
              <View style={styles.svgs}>
                <SearchSvg width="20" height="20" />
                <View style={styles.titles}>
                  <Text style={styles.titleColor}>Search</Text>
                </View>
              </View>
            )}

            {this.props.svgType === 'home' && (
              <View style={styles.svgs}>
                <HomeSvg width="20" height="20" />
                <View style={styles.titles}>
                  <Text style={styles.titleColor}>Home</Text>
                </View>
              </View>
            )}
            {this.props.svgType === 'squaregroup' && (
              <View style={styles.svgs}>
                <SquareGroupSvg width="20" height="20" />
                <View style={styles.titles}>
                  <Text style={styles.titleColor}>Categories</Text>
                </View>
              </View>
            )}
            {this.props.svgType === 'tv' && (
              <View style={styles.svgs}>
                <TvSvg width="20" height="20" />
                <View style={styles.titles}>
                  <Text style={styles.titleColor}>Ambient</Text>
                </View>
              </View>
            )}
            {this.props.svgType === 'watchlistplus' && (
              <View style={styles.svgs}>
                <WatchlistPlusSvg width="20" height="20" />
                <View style={styles.titles}>
                  <Text style={styles.titleColor}>My List</Text>
                </View>
              </View>
            )}
            {this.props.svgType === 'power' && (
              <View style={styles.svgs}>
                <PowerSvg width="25" height="25" />
                <View style={styles.titles}>
                  <Text style={styles.titleColor}>Logout</Text>
                </View>
              </View>
            )}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: colors.backgroundColor,
    opacity: 0.5,
    // width: 150,
    // height:90
  },
  containerItems: {
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    // height:0,
    // width: 150,
    
  },
  containerItemsBlur:{
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    width: 10,
  },
  svgs: {flexDirection: 'row'},
  titles: {paddingLeft: 20},
  titleColor:{color: colors.white},
  // item:{alignSelf:'stretch',}
});
