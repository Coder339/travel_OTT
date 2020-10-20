import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors, globalstyles } from '../../assets/globalstyleconstants';

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
      firstfocus: false,
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

  componentDidMount = () => {
    this.setState(prevState => {
      this.props.svgType === 'search' && this.props.menufocused ? prevState.firstfocus = true : prevState.firstfocus = false
    })
  }


  render() {
    const sizing = { width: this.props.width, height: 55 };
    // const sizing = {height: 55};
    // console.log('menu focused',this.props.menufocused)
    let Svg = this.props.svgType === 'SearchSvg' ? SearchSvg :
      this.props.svgType === "HomeSvg" ? HomeSvg :
        this.props.svgType === "SquareGroupSvg" ? SquareGroupSvg :
          this.props.svgType === "TvSvg" ? TvSvg :
            this.props.svgType === "WatchlistPlusSvg" ? WatchlistPlusSvg :
              this.props.svgType === "PowerSvg" && PowerSvg;
    return (
      // <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          style={
            [styles.container,
            this.state.focused
              ? globalstyles.focusMenuBar
              : globalstyles.blurMenuBar,
              sizing
            ]}
        >
          <View style={[styles.containerItems]}>
            <Svg width="20" height="20" />
            <Text style={[styles.titleColor, styles.titles]}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
      // </View>
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
    flexDirection: 'row'
  },
  containerItemsBlur: {
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    width: 10,
  },
  svgs: { flexDirection: 'row' },
  titles: { paddingLeft: 20 },
  titleColor: { color: colors.white },
  // item:{alignSelf:'stretch',}
});
