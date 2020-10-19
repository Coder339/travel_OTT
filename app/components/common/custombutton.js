import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { colors, globalstyles, fontFamily } from '../../assets/globalstyleconstants';

export default class CustomButtons extends PureComponent {
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
    this.setState({ focused: true });
  }

  onBlur() {
    this.setState({
      focused: false,
    });
  }

  onPress() {
    this.props.seasonOnFocus(this.props.value + 1)    
  }

  render() {
    const { name, value, season } = this.props;
    return (
        <TouchableHighlight
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onPress={this.onPress}
          style={
            (season == value + 1 || this.state.focused)
              ? globalstyles.focusPlayButtonDetails
              : globalstyles.blurPlayButtonDetails
          }>
            <Text style={styles.playwatchTextfocused}>
              {name} {value + 1}
            </Text>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  playwatchTextfocused: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.white,
  },
  playwatchTextblured: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.white,
  },
  
});
