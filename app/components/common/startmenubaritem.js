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
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true,
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

  render() {

    const sizing = { width: this.props.width, height: 55 };

    let Svg = this.props.svgType === 'SearchSvg' ? SearchSvg :
      this.props.svgType === "HomeSvg" ? HomeSvg :
        this.props.svgType === "SquareGroupSvg" ? SquareGroupSvg :
          this.props.svgType === "TvSvg" ? TvSvg :
            this.props.svgType === "WatchlistPlusSvg" ? WatchlistPlusSvg :
              this.props.svgType === "PowerSvg" && PowerSvg;

    return (
      <TouchableHighlight
        activeOpacity={1}
        // underlayColor={false}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        style={
          [styles.container, sizing, this.state.focused
            ? globalstyles.focusMenuBar
            : globalstyles.blurMenuBar
          ]}
      >
        <View style={[styles.containerItems]}>
          <Svg width="20" height="20" />
          <Text style={[styles.titleColor, styles.titles]}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    opacity: 1,
  },
  containerItems: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  svgs: { flexDirection: 'row' },
  titles: { paddingLeft: 20 },
  titleColor: {
    color: colors.white,
    opacity: 0.8
  },
});
