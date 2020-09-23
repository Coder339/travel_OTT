import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';
import WatchlistMinusSvg from '../../images/watchlistminussvg';
import FourkSvg from '../../images/fourksvg';
import HDSvg from '../../images/hdsvg';
import WatchlistPlusSvg from '../../images/watchlistplussvg';
import PlaySvg from '../../images/playsvg';
import ProgressiveImage from './progressiveimage';
import {
  colors,
  setImageUrl,
  globalstyles,
  fontSize,
} from '../../assets/globalstyleconstants';
import VerticalCarditem from './verticalcarditem';

export default React.memo(function HeroCard(props) {
  const {type, item} = props;
  console.log('TYPE', type);
  console.log('DATA from hero', item);
  return (
    <View style={styles.mainContainer}>
      {type === 'hero-banner' || 'hero-banner-detailed' ? (
        <View>
          {item.data.map((data, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.progressiveImageContainer}>
                <ProgressiveImage
                  style={globalstyles.heroImage}
                  overlay={false}
                  thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                  source={{uri: setImageUrl(data.image, 900, 900)}}
                />
              </View>
              <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={globalstyles.bannerTitle}>
                  {data.title}
                </Text>
              </View>
              {type === 'hero-banner-detailed' ? (
                <View style={styles.durEpisodeContainer}>
                  <Text style={{color: colors.lightgray}}>
                    Episode {data.episode}
                  </Text>
                  <Text style={{color: colors.lightgray}}> | </Text>
                  <Text style={{color: colors.lightgray}}>{data.dur} min</Text>
                  <View style={styles.hdfourkContainer}>
                    <FourkSvg width="20" height="20" />
                    <HDSvg width="20" height="20" />
                  </View>
                </View>
              ) : null}

              <View style={styles.descContainer}>
                <Text style={globalstyles.bannerParagraph} numberOfLines={3}>
                  {data.description}
                </Text>
              </View>

              {type === 'hero-card' ? (
                <View style={{position: 'absolute', top: 100, left: 500}}>
                  <ScrollView horizontal={true}>
                    {item.data[0].data.map((data, index) => (
                      <View 
                        key={index}
                        Vertical={false}
                        showsHorizontalScrollIndicator={false}>
                        <VerticalCarditem data={data} key={index} />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ) : null}
            </View>
          ))}
          <View style={styles.playWatchContainer}>
            <View style={styles.playwatchText}>
              <PlaySvg width="20" height="20" />
              <Text>Watch</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mainContainer: {
    paddingBottom: 40,
  },
  selected: {
    position: 'absolute',
    top: -20,
    left: 10,
    opacity: 1,
    width: 230,
  },
  progressiveImageContainer: {
    position: 'relative',
  },
  titleContainer: {
    width: 490,
    paddingBottom: 15,
    paddingTop: 2,
    paddingLeft: 20,
    position: 'absolute',
    top: 140,
  },
  durEpisodeContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 250,
    paddingLeft: 20,
    position: 'absolute',
    top: 230,
  },
  hdfourkContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
  },
  descContainer: {
    width: 450,
    paddingBottom: 30,
    paddingLeft: 20,
    position: 'absolute',
    top: 260,
  },
  bannerParagraph: {
    fontSize: 12,
    color: 'white',
  },
  playWatchContainer: {
    paddingLeft: 20,
    position: 'absolute',
    top: 340,
    flex: 1,
  },
  playwatchText: {
    backgroundColor: colors.white,
    width: 150,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
});
