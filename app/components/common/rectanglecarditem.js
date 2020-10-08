import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {
  colors,
  setImageUrl,
  globalstyles,
  fontFamily,
  fontSize,
} from '../../assets/globalstyleconstants';
import ProgressiveImage from './progressiveimage';
import WatchlistMinusSvg from '../../images/watchlistminussvg';
import FourkSvg from '../../images/fourksvg';
import HDSvg from '../../images/hdsvg';
import WatchlistPlusSvg from '../../images/watchlistplussvg';
import ProgressBar from './progressbar';

export default class RectangleCarditem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      watchList:this.props.data.watchlist,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onPress = this.onPress.bind(this);
    this.plusMinusClickHandler = this.plusMinusClickHandler.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true,
    });
    this.props.onFocus(this.props.data.season);
  }
  onBlur() {
    this.setState({
      focused: false,
    });
    this.props.onBlur(null);
  }
  onPress() {
    // this.props.onPress(this.props.data.type); //needs episode to be created and handled also
    this.props.onPress('program');
  }
  plusMinusClickHandler() {
    this.setState({watchList : !this.state.watchList})
    console.log('valOut4')
  }

  render() {
    const {data, type, episodeFocus} = this.props;
    const sizing = {width: 257.5, height: 160};
    console.log(this.props.data.watchlist)
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onPress={() => this.onPress()}
          style={
            episodeFocus || this.state.focused
              ? [globalstyles.focusBorder, sizing]
              : globalstyles.blurBorder
          }>
          {type === 'rectangle-card-title' ? (
            <ProgressiveImage
              style={globalstyles.rectangleImage}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{uri: setImageUrl(data.image, 320, 300)}}
              isLinearGradient={true}
              type="title"
            />
          ) : type === 'rectangle-card-details' && this.state.focused ? (
            <React.Fragment>
              <ProgressiveImage
                style={globalstyles.rectangleImage}
                overlay={false}
                thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                source={{uri: setImageUrl(data.image, 320, 300)}}
                isLinearGradient={true}
                type="title"
              />
              <View style={styles.progressContainer}>
                <ProgressBar progress={data.progress + '%'} />
              </View>
            </React.Fragment>
          ) : (
            <ProgressiveImage
              style={globalstyles.rectangleImage}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{uri: setImageUrl(data.image, 320, 300)}}
            />
          )}
        </TouchableHighlight>
        {(type === 'rectangle-card-title' ||
          type === 'rectangle-card-details') && (
          <View style={styles.bannerTitleContainer}>
            <View style={styles.bannerTitleContainerInner}>
              <Text numberOfLines={2} style={globalstyles.cardTitle}>
                {data.title}
              </Text>
            </View>
            {type === 'rectangle-card-title' && (
              <View
                style={
                  this.state.focused ? styles.selectedFocus : styles.selected
                }>
                <ProgressBar progress={data.progress + '%'} />
              </View>
            )}
            <TouchableHighlight onPress={this.plusMinusClickHandler}>
              {this.state.watchList  ? 
                <WatchlistMinusSvg width="20" height="20" />
               : 
                <WatchlistPlusSvg width="20" height="20" />
              }
            </TouchableHighlight>
          </View>
        )}
        {type === 'rectangle-card-details' && (
          <View>
            <View style={styles.epiDurContainer}>
              <Text style={styles.lightgray}>Episode {data.episode}</Text>
              <Text style={styles.lightgray}> | </Text>
              <Text style={styles.lightgray}>{data.dur} min</Text>
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
        )}
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
    paddingLeft: 10,
    position: 'relative',
  },
  titleContainer: {
    paddingLeft: 10,
  },
  selected: {
    position: 'absolute',
    top: -30,
    left: 18,
    opacity: 1,
    width: 220,
  },
  selectedFocus: {
    position: 'absolute',
    top: -30,
    left: 18,
    opacity: 1,
    width: 220,
  },
  bannerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  bannerTitleContainerInner: {
    width: 200,
    paddingBottom: 1,
    paddingLeft: 5,
  },
  bannerTitle: {
    color: colors.white,
    fontFamily: fontFamily.heavy,
  },
  epiDurContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 5,
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
    paddingLeft: 5,
  },
  cardParagraph: {
    color: colors.lightgray,
    fontSize: fontSize.medium,
  },
  progressContainer: {
    top: -20,
    width: 220,
    left: 18,
  },
  lightgray: {
    color: colors.lightgray,
  },
});
