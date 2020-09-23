import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ProgressBarAndroid,
} from 'react-native';
import {
  colors,
  setImageUrl,
  globalstyles,
} from '../../assets/globalstyleconstants';
import ProgressiveImage from './progressiveimage';

import WatchlistMinusSvg from '../../images/watchlistminussvg';
import FourkSvg from '../../images/fourksvg';
import HDSvg from '../../images/hdsvg';
import WatchlistPlusSvg from '../../images/watchlistplussvg';

export default class RectangleCarditem extends PureComponent {
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
    const {data, type} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          style={
            this.state.focused
              ? globalstyles.focusBorder
              : globalstyles.blurBorder
          }>
          <ProgressiveImage
            style={globalstyles.rectangleImage}
            overlay={false}
            thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
            source={{uri: setImageUrl(data.image, 320, 300)}}
          />
        </TouchableOpacity>
        {type === 'rectangle-card-title' ||
        type === 'rectangle-card-details' ? (
          <View style={styles.bannerTitleContainer}>
            <View style={{width: 180, paddingBottom: 15}}>
              <Text numberOfLines={2} style={styles.bannerTitle}>
                {data.title}
              </Text>
            </View>
            {type === 'rectangle-card-title' ? (
              <View style={styles.selected}>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={data.progress / 100}
                  color="white"
                />
              </View>
            ) : null}

            {data.watchlist === true ? (
              <WatchlistMinusSvg width="20" height="20" />
            ) : (
              <WatchlistPlusSvg width="20" height="20" />
            )}
          </View>
        ) : null}
        {type === 'rectangle-card-details' ? (
          <View>
            <View style={styles.epiDurContainer}>
              <Text style={{color: colors.lightgray}}>
                Episode {data.episode}
              </Text>
              <Text style={{color: colors.lightgray}}> | </Text>
              <Text style={{color: colors.lightgray}}>{data.dur} min</Text>
              <View style={styles.svgsContainer}>
                <FourkSvg width="20" height="20" />
                <HDSvg width="20" height="20" />
              </View>
            </View>
            <View style={styles.cardParagraphContainer}>
              <Text numberOfLines={3} style={styles.cardParagraph}>
                {data.description}
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderFocus: {
    borderWidth: 8,
    borderColor: colors.white,
  },
  image: {},
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    position: 'relative',
  },
  titleContainer: {
    paddingLeft: 20,
  },
  selected: {
    position: 'absolute',
    top: -30,
    left: 10,
    opacity: 1,
    width: 230,
  },
  bannerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  bannerTitle: {color: colors.white},
  epiDurContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  svgsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
  },
  cardParagraphContainer: {
    width: 200,
    paddingBottom: 15,
    paddingTop: 10,
  },
  cardParagraph: {color: colors.lightgray},
});
