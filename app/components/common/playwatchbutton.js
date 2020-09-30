import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  colors,
  globalstyles,
  fontFamily,
} from '../../assets/globalstyleconstants';
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
    const {name} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          style={
            this.state.focused
              ? globalstyles.focusPlayButton
              : globalstyles.blurPlayButton
          }>
          <View style={styles.innerContainer}>
            <PlaySvg width="20" height="20" />
            <Text
              style={
                this.state.focused
                  ? styles.playwatchTextfocused
                  : styles.playwatchTextblured
              }>
              {name}
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
    color: colors.black,
  },
  innerContainer:{flexDirection:'row'}
});
