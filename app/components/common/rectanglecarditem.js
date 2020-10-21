import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { colors, setImageUrl, globalstyles, fontFamily, fontSize, } from '../../assets/globalstyleconstants';
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
      watchList: this.props.data.watchlist,
      disabled: false,
      focusedWatchList: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onPress = this.onPress.bind(this);
    this.plusMinusClickHandler = this.plusMinusClickHandler.bind(this);
    this.onFocusWatchList = this.onFocusWatchList.bind(this);
    this.onBlurWatchList = this.onBlurWatchList.bind(this);
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
  onFocusWatchList() {
    this.setState({
      focusedWatchList: true,
    });
    this.props.onFocus(this.props.data.season);
  }
  onBlurWatchList() {
    this.setState({
      focusedWatchList: false,
    });
    this.props.onBlur(null);
  }

  onPress() {
    // this.props.onPress(this.props.data.type); //needs episode to be created and handled also
    this.props.onPress(this.props.data.type);
  }

  plusMinusClickHandler() {
    if (this.state.disabled) return;
    this.setState({ disabled: true });
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 500);
    this.setState({ watchList: !this.state.watchList });
  }

  render() {
    const { data, type } = this.props;
    return (
      <View style={styles.container}>

        <TouchableHighlight
          underlayColor={false}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onPress={this.onPress}
          style={
            this.state.focused
              ? globalstyles.focusBorder
              : globalstyles.blurBorder
          }>

          <React.Fragment>

            <ProgressiveImage
              style={globalstyles.rectangleImage}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{ uri: setImageUrl(data.image, 352, 198) }}
              isLinearGradient={(type === 'rectangle-card-title' ||
                (type === 'rectangle-card-details' && this.state.focused))}
              type="title"
            />

            {data.progress && <View style={styles.progressStyle}>
              <ProgressBar progress={data.progress + '%'} />
            </View>}

          </React.Fragment>


        </TouchableHighlight>

        {(type === 'rectangle-card-title' || type === 'rectangle-card-details') &&

          <View style={styles.bannerTitleContainer}>

            <Text numberOfLines={2} style={[globalstyles.cardTitle, styles.bannerTitleContainerInner]}>
              {data.title}
            </Text>


            <TouchableHighlight
              onPress={this.plusMinusClickHandler}
              onFocus={this.onFocusWatchList}
              onBlur={this.onBlurWatchList}
              style={this.state.focusedWatchList
                ? styles.innerWatchlistBackground
                : styles.watchlistBackground}>
              {this.state.watchList ?
                <WatchlistMinusSvg width="20" height="20" /> :
                <WatchlistPlusSvg width="20" height="20" />}
            </TouchableHighlight>
          </View>
        }
        {type === 'rectangle-card-details' && (
          <View>
            <View style={styles.epiDurContainer}>
              <Text style={styles.lightgray}>Episode {data.episode}</Text>
              <Text style={styles.lightgray}> | </Text>
              <Text style={styles.lightgray}>{data.dur} min</Text>
              <View style={styles.svgsContainer}>
                <View style={styles.qualitySvg}>
                <FourkSvg width="15" height="10" />
                </View>
                <View style={styles.qualitySvg}>
                <HDSvg width="15" height="10" />
                </View>
              </View>
            </View>
            <Text numberOfLines={3} style={styles.cardParagraph}>
              {data.description}
            </Text>

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
    marginVertical: 10,
    marginLeft: 10,
    position: 'relative',
  },
  progressStyle: {
    position: 'absolute',
    bottom: 15,
    width: '80%',
    marginLeft: '10%'
  },
  bannerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  bannerTitleContainerInner: {
    width: 200,
    marginBottom: 1,
    marginLeft: 4,
  },
  bannerTitle: {
    color: colors.white,
    fontFamily: fontFamily.heavy,
  },
  epiDurContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center'
  },
  svgsContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginLeft: 20,
  },

  cardParagraph: {
    width: 200,
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 5,
    color: colors.lightgray,
    fontSize: 10,
  },
  lightgray: {
    color: colors.lightgray,
    fontSize: 10,
    marginRight: 5
  },
  watchlistBackground: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 15,
    height: 20,
  },
  innerWatchlistBackground: {
    backgroundColor: colors.orange,
    borderRadius: 15,
    height: 20,
  },
  qualitySvg:{
    marginRight: 5,
  }
});



