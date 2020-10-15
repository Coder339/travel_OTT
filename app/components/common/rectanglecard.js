import React, {useState,useRef} from 'react';
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

  const [dataSource, setDataSource] = useState([]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  let [ref, setRef] = useState(null);
  const seasons = Array(item.seasons).fill('');//converting the season JSON value to array for mapping.

  const [season, setSeason] = useState(undefined);
  const [episodeFocus, setEpisodeFocus] = useState(false);
  let seasonNo = item.data.map((item) => item.season);//getting the season number.
  

  const scrollHandler = () => {
    console.log(dataSourceCords.length, scrollToIndex);
      ref.scrollTo({
        x: 260 * scrollToIndex,
      });
  };
   

  const seasonOnFocus = (scrollToIndex) => {
    let episodeIndex = seasonNo.findIndex((item) => item == scrollToIndex);
    setScrollToIndex(parseInt(episodeIndex))
  }

  const seasonChange = (currentSeason) => {
    if (season != currentSeason) {
      setSeason(currentSeason);
    }
  };
  
  const episodeChange = (currentSeason) => {
    let episode = seasonNo.findIndex((item) => item == currentSeason);
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
              <View style={styles.progressiveImageInnerContainer} >
                <ProgressiveImage 
                  style={globalstyles.rectangleImageDetail}
                  overlay={false}
                  thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                  source={{uri: setImageUrl(item.image, 900, 900)}}
                  isLinearGradient={true}
                  type="details"
                />
              </View>
              <View style={styles.rectangleImageDetailTitle}>
                <Text style={styles.sectionTitleDetails}>{item.title}</Text>
              </View>
              <View style={styles.seasonEpisodeCont}>
                <Text style={styles.itemCont}>{item.seasons} seasons</Text>
                <Text style={{color: colors.lightgray}}>|</Text>
                <Text style={styles.itemCont}>{item.episodes} Episodes</Text>
              </View>
              <View style={styles.descCont}>
                <Text numberOfLines={3} style={styles.descContInner}>
                  {item.description}
                </Text>
              </View>

              <View style={styles.buttonCont}>
                <PlayWatchButton name="Trailer" />
                {seasons.map((item, index) => (
                  <Buttons
                    key={index}
                    name="SEASON"
                    item={item}
                    value={index}
                    season={season}
                    onPress={episodeChange}
                    seasonOnFocus={(seasonIndex)=>seasonOnFocus(seasonIndex)}
                    scrollHandler={scrollHandler}
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
        snapToAlignment="start"
        ref={(ref) => {
          setRef(ref);
        }}
        >
        {item.data.map((data, index) => (
          <View key={index}> 
              <RectangleCarditem
                data={data}
                type={type}
                key={index}
                onPress={(nav) => props.onPress(nav)}
                onFocus={seasonChange}
                onBlur={seasonChange}
                episodeFocus={episodeFocus == index}
                title={item.title}
              />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  titleContainer: {
    marginLeft: 54,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
  },
  sectionTitleDetails: {
    color: colors.orange,
    fontSize: fontSize.superlargest,
    fontFamily: fontFamily.bold,
  },
  selected: {
    position: 'absolute',
    top: -20,
    opacity: 1,
    width: 230,
  },
  imageContainer: {
    marginLeft:40
  },
  progressiveImageContainer: {
    position: 'relative',
    top: 10,
  },
  progressiveImageInnerContainer:{
    alignItems: 'flex-end', 
    justifyContent: 'flex-end'
  },
  rectangleImageDetailTitle: {
    position: 'absolute',
    top: 100,
  },
  seasonEpisodeCont: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 1,
    width: 175,
    position: 'absolute',
    top: 160,
  },
  itemCont: {
    color: colors.lightgray,
    fontSize: fontSize.medium,
  },
  descCont: {
    width: 380, 
    position: 'absolute', 
    top: 185}
  ,
  descContInner: {
    fontSize: fontSize.medium, 
    color: colors.white
  },
  buttonCont:{
    flexDirection: 'row',
    width: 500,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 280,
  }
});
