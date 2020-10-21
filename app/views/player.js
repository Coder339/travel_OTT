import * as React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import PlayerView from '../components/common/playerview';
import { colors } from '../assets/globalstyleconstants';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

export default class Player extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      source: {}
    }
  }


  componentDidMount() {

    let iosSource = {
      sources: [{
        type: 'application/x-mpegurl', //application/x-mpegurl
        src: 'https://fps.ezdrm.com/demo/video/ezdrm.m3u8',
      }],
      poster: null //'https://cdn.theoplayer.com/video/sintel/poster.jpg'
    }
    let androidSource = {
      sources: [{
        type: 'application/dash+xml', //application/x-mpegurl
        src: 'https://d22iam2jzs2cqx.cloudfront.net/assets/manifest.mpd',
      }],
      poster: null// 'https://cdn.theoplayer.com/video/sintel/poster.jpg'
    }

    setTimeout(() => {
      this.setState({
        source: Platform.OS === 'android' ? androidSource : iosSource
      })
    }, 350)
  }

  render() {

    return (
      // <SafeAreaInsetsContext.Consumer>
      //   {insets =>
          <View style={styles.container} >
            <PlayerView showUI={true} source={this.state.source} />
          </View>
      //     }
      // </SafeAreaInsetsContext.Consumer>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.lightblack
  },
});