import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, } from 'react-native';
import { colors, globalstyles, fontFamily, } from '../../assets/globalstyleconstants';
import PlaySvg from '../../images/playsvg';

export default class PlayWatchButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true,
    });
  }
  onBlur() {
    this.setState({
      focused: false,
    });
  }
  onPress() {
    alert('Clicked');
  }

  render() {
    const { name, propStyle, focus } = this.props;
    return (
      <TouchableHighlight
        underlayColor={false}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        hasTVPreferredFocus={focus}
        style={[styles.container, propStyle,
        this.state.focused ? globalstyles.focusPlayButton : globalstyles.blurPlayButton]}>
        <>
          <PlaySvg width={20} height={20} fill={this.state.focused ? colors.white : colors.black} />
          <Text
            style={[{ marginLeft: 15 },
            this.state.focused
              ? styles.playwatchTextfocused
              : styles.playwatchTextblured
            ]}>
            {name}
          </Text>
        </>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0.1, 
    opacity: 1,
  },
  playwatchTextfocused: {
    fontFamily: fontFamily.bold,
    fontSize: 13,
    color: colors.white,
  },
  playwatchTextblured: {
    fontFamily: fontFamily.bold,
    fontSize: 13,
    color: colors.black,
  }
});
