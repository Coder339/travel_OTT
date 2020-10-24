import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { colors, globalstyles, fontFamily } from '../../assets/globalstyleconstants';

export default class CustomButtons extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      seasonValue:0,
      sIndex:undefined,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onFocus() {
    this.props.seasonOnFocus(this.props.value + 1)
    this.setState({ 
      focused: true,
      seasonValue: this.props.value ,
      sIndex:this.props.value + 1,
    });
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
    const { name, value, season,ValueEIndex } = this.props;
    console.log('VIndex',ValueEIndex)
    console.log('sIndex',this.state.sIndex)
    return (
        <TouchableHighlight
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onPress={this.onPress}
          style={[
            (this.state.sIndex ===  ValueEIndex || this.state.focused)
              ? globalstyles.focusPlayButtonDetails
              : globalstyles.blurPlayButtonDetails,
              styles.button
          ]}>
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
    fontSize: 13,
    color: colors.white,
  },
  playwatchTextblured: {
    fontFamily: fontFamily.bold,
    fontSize: 13,
    color: colors.white,
  },
  button:{
    marginRight: 20,
    backgroundColor: colors.black
  }
  
});
