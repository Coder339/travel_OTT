import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import FourkSvg from '../../images/fourksvg';
import HDSvg from '../../images/hdsvg';
import ProgressiveImage from './progressiveimage';
import { colors, setImageUrl, globalstyles, fontFamily, fontSize, } from '../../assets/globalstyleconstants';
import VerticalCarditem from './verticalcarditem';
import PlayWatchButton from './playwatchbutton';

export default React.memo(function HeroCard(props) {

  const { type, item, mainIndex } = props;

  return (
    <View style={styles.mainContainer}>
      {item.data.map((data, index) => 
        <React.Fragment key={index}>
          <ProgressiveImage
            style={globalstyles.heroImage}
            overlay={false}
            thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
            source={{ uri: setImageUrl(data.image, 1280, 720) }}
            isLinearGradient={true}
            type={type}
          />
          <View style={styles.heroCardContainer}>
            <Text numberOfLines={2} style={[styles.titleContainer, globalstyles.bannerTitle]}>
              {data.title}
            </Text>
            {type === 'hero-banner-detailed' && 
              <View style={styles.durEpisodeContainer}>
                <Text style={styles.textColor}>Episode {data.episode}</Text>
                <Text style={styles.textColor}> | </Text>
                <Text style={styles.textColor}>{data.dur} min</Text>
                <View style={styles.hdfourkContainer}>
                  <View style={styles.quality}>
                    <FourkSvg width="20" height="20" />
                  </View>
                  <View style={styles.quality}>
                    <HDSvg width="20" height="20" />
                  </View>
                </View>
              </View>
            }
            <Text style={[styles.descContainer, globalstyles.bannerParagraph]} numberOfLines={3}>
              {data.description}
            </Text>
            <View style={styles.playWatchContainer}>
              <PlayWatchButton name="Watch" focus={mainIndex == 0} />
            </View>
          </View>

          {type === 'hero-card' &&
            <View style={styles.HeroCardExperienceCont}>
              <Text style={styles.HeroCardExperienceContInnerText}>
                Experience Mode
              </Text>
              <ScrollView
                horizontal={true}
                Vertical={false}
                decelerationRate={0}
                snapToAlignment='start'
                snapToInterval={216}
                centerContent={true}
                showsHorizontalScrollIndicator={false}>
                {data.data.map((data, index) =>
                  <VerticalCarditem data={data} key={index} />
                )}
              </ScrollView>
            </View>
          }
        </React.Fragment>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    flex: 1,
    marginBottom: 40,
  },
  selected: {
    top: -20,
    left: 10,
    opacity: 1,
    width: 230,
  },
  heroCardContainer: {
    position: 'absolute',
    top: 100,
    left: 75
  },
  titleContainer: {
    width: 410,
  },
  durEpisodeContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 250,
  },
  hdfourkContainer: {
    flexDirection: 'row',
    width: 80,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 5,
  },
  descContainer: {
    width: 450,
  },
  bannerParagraph: {
    fontSize: 12,
    color: 'white',
  },
  playWatchContainer: {
    marginTop: 25,
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
  textColor: {
    color: colors.lightgray,
  },
  HeroCardExperienceCont: {
    position: 'absolute',
    top: 50,
    left: 550,
    width: 400
  },
  HeroCardExperienceContInnerText: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
    marginLeft: 15,
  },
  quality: {
    marginRight: 10
  }
});
