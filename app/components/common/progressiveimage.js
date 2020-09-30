import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import OverlayImage from './overlayimage';

export default class ProgressiveImage extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      source: '',
      isError: false
    }
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.source !== nextState.source) {
      return {
        source: nextProps.source
      }
    }
    else if (nextState.isError) {
      return {
        source: require('../../assets/images/noimagefound.png')
      }
    }
    else {
      return {
        source: nextProps.source
      }
    }
  }

  thumbnailAnimated = new Animated.Value(0);

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  onErrorLoad = () => {
    this.setState({
      isError: true
    })
  }

  render() {

    const { thumbnailSource, source, style, viewstyle, overlay, ...props } = this.props;

    return (
      <View style={[viewstyle, styles.container]}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          blurRadius={this.props.blur ? 1 : null}
          style={[style, { opacity: this.thumbnailAnimated }]}
          onLoad={this.handleThumbnailLoad}
        />
        <Animated.Image
          {...props}
          source={this.state.source}
          blurRadius={this.props.blur ? 1 : null}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
          onError={this.onErrorLoad.bind(this)}
        />
        {overlay && <OverlayImage style={styles} />}
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