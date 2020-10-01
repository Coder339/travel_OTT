import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';
import OverlayImage from './overlayimage';
import LinearGradient from 'react-native-linear-gradient';

export default class ProgressiveImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      isError: false,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.source !== nextState.source) {
      return {
        source: nextProps.source,
      };
    } else if (nextState.isError) {
      return {
        source: require('../../assets/images/noimagefound.png'),
      };
    } else {
      return {
        source: nextProps.source,
      };
    }
  }

  thumbnailAnimated = new Animated.Value(0);

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  onErrorLoad = () => {
    this.setState({
      isError: true,
    });
  };

  render() {
    const {
      thumbnailSource,
      source,
      style,
      viewstyle,
      overlay,
      isLinearGradient,
      type,
      ...props
    } = this.props;

    return (
      <View style={[viewstyle, styles.container]}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          blurRadius={this.props.blur ? 1 : null}
          style={[style, {opacity: this.thumbnailAnimated}]}
          onLoad={this.handleThumbnailLoad}
        />
        <Animated.Image
          {...props}
          source={this.state.source}
          blurRadius={this.props.blur ? 1 : null}
          style={[styles.imageOverlay, {opacity: this.imageAnimated}, style]}
          onLoad={this.onImageLoad}
          onError={this.onErrorLoad.bind(this)}
        />
        {overlay && <OverlayImage style={styles} />}

        {!this.state.isError &&
          isLinearGradient &&
          (type === 'hero-banner-detailed' ? (
            <React.Fragment>
              {/* LEFT */}
              <LinearGradient
                colors={['transparent', 'transparent', colors.backgroundColor]}
                start={{x: 5, y: 0}}
                end={{x: 0.0, y: 0.0}}
                locations={[0, 0.8, 1]}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
              {/* BOTTOM */}
              <LinearGradient
                colors={['transparent', 'transparent', colors.backgroundColor]}
                start={{x: 0.5, y: 0.1}}
                end={{x: 0.5, y: 1}}
                locations={[0, 0.5, 1]}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* BOTTOM */}
              <LinearGradient
                colors={['transparent', 'transparent', colors.backgroundColor]}
                start={{x: 0.5, y: 0.1}}
                end={{x: 0.5, y: 1}}
                locations={[0, 0.5, 1]}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
              {/* Top */}
              <LinearGradient
                colors={['transparent', 'transparent', colors.backgroundColor]}
                start={{x: 0.5, y: 0.9}}
                end={{x: 0.5, y: 0}}
                locations={[0, 0.5, 1]}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
              {/* Right */}
              <LinearGradient
                colors={['transparent', 'transparent', colors.backgroundColor]}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1, y: 0.1}}
                locations={[0, 0.5, 1]}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
            </React.Fragment>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    overflow: 'hidden',
  },
});
