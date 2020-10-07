import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  colors,
  fontSize,
  fontFamily,
  globalstyles,
  setImageUrl,
} from '../../assets/globalstyleconstants';
import RectangleCarditem from './rectanglecarditem';
import PlayWatchButton from './playwatchbutton';
import Buttons from './button';
import ProgressiveImage from './progressiveimage';

export default function RectangleCard(props) {
  const {type, item} = props;
  // console.log('TYPE', type);
  // console.log('DATA', item);
  const seasons = Array(item.seasons).fill('');

  const [season, setSeason] = useState(undefined);
  const [episodeFocus, setEpisodeFocus] = useState(undefined);
  let seasonNo = item.data.map((item) => item.season);

  const seasonChange = (currentSeason) => {
    if (season != currentSeason) {
      setSeason(currentSeason);
    }
  };
  const episodeChange = (currentSeason) => {
    let episode = seasonNo.findIndex((item) => item == currentSeason);
    // console.log(episode + '     episode Index');
    setEpisodeFocus(episode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {(type === 'rectangle-card' || type === 'rectangle-card-title') && (
          <Text style={styles.sectionTitle}>
            {type === 'rectangle-card' && item.section_title}
            {item.title}
          </Text>
        )}

        {type === 'rectangle-card-details' && (
          <View>
            <View style={styles.progressiveImageContainer}>
              <View
                style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <ProgressiveImage
                  style={globalstyles.rectangleImageDetail}
                  overlay={false}
                  thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                  source={{uri: setImageUrl(item.image, 900, 900)}}
                  isLinearGradient={true}
                  type="details"
                />
              </View>
              <View style={{position: 'absolute', top: 100}}>
                <Text style={styles.sectionTitleDetails}>{item.title}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingLeft: 1,
                  width: 175,
                  position: 'absolute',
                  top: 160,
                }}>
                <Text
                  style={{color: colors.lightgray, fontSize: fontSize.medium}}>
                  {item.seasons} seasons
                </Text>
                <Text style={{color: colors.lightgray}}>|</Text>
                <Text
                  style={{color: colors.lightgray, fontSize: fontSize.medium}}>
                  {item.episodes} Episodes
                </Text>
              </View>
              <View style={{width: 380, position: 'absolute', top: 185}}>
                <Text
                  numberOfLines={3}
                  style={{fontSize: fontSize.medium, color: colors.white}}>
                  {item.description}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: 500,
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: 280,
                }}>
                <PlayWatchButton name="Trailer" />

                {seasons.map((item, index) => (
                  <Buttons
                    name="SEASON"
                    value={index}
                    key={index}
                    season={season}
                    onPress={episodeChange}
                  />
                ))}
              </View>
            </View>
          </View>
        )}
      </View>

      <ScrollView
        style={styles.imageContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        centerContent={true}
        decelerationRate={'fast'}
        snapToAlignment="center"
        snapToInterval={550}>
        {item.data.map((data, index) => (
          <RectangleCarditem
            data={data}
            type={type}
            key={index}
            onPress={(nav) => props.onPress(nav)}
            onFocus={seasonChange}
            onBlur={seasonChange}
            episodeFocus={episodeFocus == index}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingLeft: 20,
    // position: 'relative',
  },
  titleContainer: {
    paddingLeft: 55,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
    paddingTop: 15,
  },
  sectionTitleDetails: {
    color: '#FA6F2A',
    fontSize: fontSize.superlargest,
    fontFamily: fontFamily.bold,
    paddingTop: 15,
  },
  selected: {
    position: 'absolute',
    top: -20,
    // left: 10,
    opacity: 1,
    width: 230,
  },
  imageContainer: {
    paddingLeft: 40,
  },
  progressiveImageContainer: {
    position: 'relative',
    top: 10,
  },
});
