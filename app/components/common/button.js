import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  colors,
  globalstyles,
  fontFamily,
} from '../../assets/globalstyleconstants';

export default class Buttons extends PureComponent {
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
    const {name, value} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          style={
            this.state.focused
              ? globalstyles.focusPlayButtonDetails
              : globalstyles.blurPlayButtonDetails
          }>
          <View style={styles.innerContainer}>
            <Text
              style={
                this.state.focused
                  ? styles.playwatchTextfocused
                  : styles.playwatchTextblured
              }>
              {name} {value + 1}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0.1,
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
  innerContainer: {
    flexDirection: 'row', 
  },
});
