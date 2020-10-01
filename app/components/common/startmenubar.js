import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, TouchableHighlight} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';

import StartMenuBarItem from './startmenubaritem';

export default class StartMenuBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    // alert('focused');
    this.setState({
      focused: true,
    });
  }
  onBlur() {
    // alert('Blured');
    this.setState({
      focused: false,
    });
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.1}
        underlayColor="white"


        onFocus={this.onFocus}
        onBlur={
          // () => {
          //   alert('blured');
          // }
          this.onBlur
        }
        style={[
          styles.container,
          {
            // width: this.state.focused ? 150 : 60,
            // borderWidth: this.state.focused ? 0 : 1,
            // borderColor: colors.travelred,
          },
        ]}>
        <View>
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="search"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="home"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="squaregroup"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="tv"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="watchlistplus"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="power"
            width={this.state.focused ? 150 : 50}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: colors.backgroundColor,
    opacity: 0.8,
    height: 1000,
  },
});
