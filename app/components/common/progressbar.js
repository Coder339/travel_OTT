import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  colors,
  setImageUrl,
  globalstyles,
} from '../../assets/globalstyleconstants';
// import DeviceInfo from 'react-native-device-info';

// let os = DeviceInfo.getSystemName() === "Android" ? "Android" : 'iOS';
// let device = DeviceInfo.getDeviceType();

export default function ProgressBar(props) {
  const {outerStyle, innerStyle, progress} = props;
  return (
    <View style={outerStyle ? outerStyle : styles.outerClass}>
      <View
        style={[
          innerStyle ? innerStyle : styles.innerClass,
            {width: progress ? progress : null},
        ]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerClass: {
    // height: device === 'Tablet' ? 6 : device === 'Tv' ? 3 : 4,
    height: 3,
    width: '100%',
    // borderRadius: device === 'Tablet' ? 4 : device === 'Tv' ? 1 : 2,
    borderRadius: 1,
    backgroundColor: 'grey',
  },
  innerClass: {
    // height: device === 'Tablet' ? 6 : device === 'Tv' ? 3 : 4,
    height: 3,
    // width:'90%',
    // borderRadius: device === 'Tablet' ? 4 : device === 'Tv' ? 1 : 2,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
});
