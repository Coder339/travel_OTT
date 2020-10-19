import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import FourkSvg from '../../images/fourksvg';
import HDSvg from '../../images/hdsvg';
import ProgressiveImage from './progressiveimage';
import {colors,setImageUrl,globalstyles,fontFamily,fontSize,} from '../../assets/globalstyleconstants';
import VerticalCarditem from './verticalcarditem';
import PlayWatchButton from './playwatchbutton';

export default React.memo(function HeroCard(props) {
  
  const {type, item} = props;
  
  return (
    <View style={styles.mainContainer}>
      {type === 'hero-banner' ||
        ('hero-banner-detailed' && (
          <React.Fragment>
            {item.data.map((data, index) => (
              <React.Fragment key={index}>
                <ProgressiveImage
                  style={globalstyles.heroImage}
                  overlay={false}
                  thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                  source={{uri: setImageUrl(data.image, 900, 900)}}
                  isLinearGradient={true}
                  type={type}
                />
                <View style={styles.heroCardContainer}>
                  <Text numberOfLines={2} style={[styles.titleContainer,globalstyles.bannerTitle]}>
                    {data.title}
                  </Text>
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
                  <Text style={[styles.descContainer,globalstyles.bannerParagraph]} numberOfLines={3}>
                    {data.description}
                  </Text>
                  <View style={styles.playWatchContainer}>
                    <PlayWatchButton name="Watch" />
                  </View>
                </View>

                {type === 'hero-card' && (
                  <View style={styles.HeroCardExperienceCont}>
                    <Text style={styles.HeroCardExperienceContInnerText}>
                      Experience Mode
                    </Text>
                    <ScrollView
                      horizontal={true}
                      Vertical={false}
                      showsHorizontalScrollIndicator={false}>
                      {item.data[0].data.map((data, index) => (
                        <React.Fragment key={index}>
                          <VerticalCarditem data={data} key={index} />
                        </React.Fragment>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
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
  heroCardContainer:{
    position:'absolute',
    top:100,
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 80,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 25,
  },
  descContainer: {
    width: 490,
    marginTop:-20,
  },
  bannerParagraph: {
    fontSize: 12,
    color: 'white',
  },
  playWatchContainer: {
    marginTop:25,
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
  },
  HeroCardExperienceContInnerText: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
    marginLeft:15,
  },
});
