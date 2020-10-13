import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FourkSvg from '../../images/fourksvg';
import HDSvg from '../../images/hdsvg';
import ProgressiveImage from './progressiveimage';
import {
  colors,
  setImageUrl,
  globalstyles,
  fontFamily,
  fontSize,
} from '../../assets/globalstyleconstants';
import VerticalCarditem from './verticalcarditem';
import PlayWatchButton from './playwatchbutton';

export default React.memo(function HeroCard(props) {
  const {type, item} = props;
  // console.log('TYPE', type);
  // console.log('DATA from hero', item);
  return (
    <View style={styles.mainContainer}>
      {type === 'hero-banner' ||
        ('hero-banner-detailed' && (
          <View>
            {item.data.map((data, index) => (
              <View style={styles.container} key={index}>
                <View style={styles.progressiveImageContainer}>
                  <ProgressiveImage
                    style={globalstyles.heroImage}
                    overlay={false}
                    thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                    source={{uri: setImageUrl(data.image, 900, 900)}}
                    isLinearGradient={true}
                    type={type}
                  />
                </View>
                <View style={styles.titleContainer}>
                  <Text numberOfLines={2} style={globalstyles.bannerTitle}>
                    {data.title}
                  </Text>
                </View>
                {type === 'hero-banner-detailed' && (
                  <View style={styles.durEpisodeContainer}>
                    <Text style={styles.textColor}>Episode {data.episode}</Text>
                    <Text style={styles.textColor}> | </Text>
                    <Text style={styles.textColor}>{data.dur} min</Text>
                    <View style={styles.hdfourkContainer}>
                      <FourkSvg width="20" height="20" />
                      <HDSvg width="20" height="20" />
                    </View>
                  </View>
                )}

                <View style={styles.descContainer}>
                  <Text style={globalstyles.bannerParagraph} numberOfLines={3}>
                    {data.description}
                  </Text>
                </View>

                {type === 'hero-card' && (
                  <View style={styles.HeroCardExperienceCont}>
                    <View style={styles.HeroCardExperienceContInner}>
                      <Text style={styles.HeroCardExperienceContInnerText}>
                        Experience Mode
                      </Text>
                    </View>
                    <ScrollView
                      horizontal={true}
                      Vertical={false}
                      showsHorizontalScrollIndicator={false}>
                      {item.data[0].data.map((data, index) => (
                        <View key={index}>
                          <VerticalCarditem data={data} key={index} />
                        </View>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>
            ))}

            <View style={styles.playWatchContainer}>
              <PlayWatchButton name="Watch" />
            </View>
          </View>
        ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mainContainer: {
    marginBottom: 40,
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
    width: 410,
    marginBottom: 15,
    marginTop: 2,
    marginLeft: 75,
    position: 'absolute',
    top: 140,
  },
  durEpisodeContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 250,
    marginLeft: 75,
    position: 'absolute',
    top: 215,
  },
  hdfourkContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 80,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 25,
  },
  descContainer: {
    width: 490,
    marginBottom: 30,
    marginLeft: 75,
    position: 'absolute',
    top: 250,
  },
  bannerParagraph: {
    fontSize: 12,
    color: 'white',
  },
  playWatchContainer: {
    marginLeft: 75,
    position: 'absolute',
    top: 335,
    flex: 1,
  },
  playwatchText: {
    backgroundColor: colors.white,
    width: 150,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
  verticalCardContainer: {
    position: 'absolute',
  },
  textColor: {
    color: colors.lightgray,
  },
  HeroCardExperienceCont: {
    position: 'absolute',
    top: 50,
    left: 550,
  },
  HeroCardExperienceContInner: {
    marginLeft: 25,
  },
  HeroCardExperienceContInnerText: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
  },
});
