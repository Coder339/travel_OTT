import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';

export default function ProgressBar(props) {
  const {outerStyle, innerStyle, progress} = props;
  return (
    <View style={outerStyle ? outerStyle : styles.outerClass}>
      <View
        style={[
          innerStyle ? innerStyle : styles.innerClass,
          {width: progress ? progress : null},
        ]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerClass: {
    height: 3,
    width: '100%',
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,.3)',
  },
  innerClass: {
    height: 3,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
});
