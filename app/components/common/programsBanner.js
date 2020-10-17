import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors, fontFamily, fontSize, globalstyles, setImageUrl} from '../../assets/globalstyleconstants';
import PlayWatchButton from '../common/playwatchbutton';
import Buttons from '../common/button';
import ProgressiveImage from '../common/progressiveimage';


export default function ProgramsBanner(props) {
    const {movieOTTData} = props;
    const seasons = Array(movieOTTData.seasons).fill('');
    const [dataSource, setDataSource] = useState([]);
    const [dataSourceCords, setDataSourceCords] = useState([]);
    const [scrollToIndex, setScrollToIndex] = useState(0);
    const scrollHandler = () => {
        ref.scrollTo({
          x: 260 * scrollToIndex,
        });
    };
     
    const seasonOnFocus = (scrollToIndex) => {
      let episodeIndex = seasonNo.findIndex((item) => item == scrollToIndex);
      setScrollToIndex(parseInt(episodeIndex))
    }
    
    const episodeChange = (currentSeason) => {
      let episode = seasonNo.findIndex((item) => item == currentSeason);
      setEpisodeFocus(episode);
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.programBanner}>
          <View style={styles.imageStyle}>
            <ProgressiveImage
              style={globalstyles.rectangleImageDetail}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{uri: setImageUrl(movieOTTData.image, 900, 900)}}
              isLinearGradient={true}
              type="details"
            />
          </View>
          <View style={styles.bannerContainer}>
            <Text style={styles.bannerTitle}>{movieOTTData.title}</Text>
            <View style={styles.seasonEpisodeCont}>
              <Text style={styles.itemCont}>{movieOTTData.seasons} seasons</Text>
              <Text style={{color: colors.lightgray}}>|</Text>
              <Text style={styles.itemCont}>{movieOTTData.episodes} Episodes</Text>
            </View>
            <View style={styles.bannerParagraph}>
              <Text numberOfLines={3} style={styles.bannerParagraphInner}>{movieOTTData.description}</Text>
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
                  seasonOnFocus={(seasonIndex) => seasonOnFocus(seasonIndex)}
                  scrollHandler={scrollHandler}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  bannerContainer:{
    marginLeft: 74,
    marginTop: 60,
    backgroundColor: colors.backgroundColor,
    position:'absolute',
  },
  bannerTitle: {
    color: colors.orange,
    fontSize: fontSize.superlargest,
    fontFamily: fontFamily.bold,
  },
  seasonEpisodeCont: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 175,
    // position: 'absolute',
    // top: 160,
  },
  itemCont: {
    color: colors.lightgray,
    fontSize: fontSize.medium,
  },
  bannerParagraph: {
    width: 380,
    marginTop: 10,
    // position: 'absolute',
    // top: 185
  },
  bannerParagraphInner: {
    fontSize: fontSize.medium,
    color: colors.white,
  },
  buttonCont: {
    flexDirection: 'row',
    width: 500,
    justifyContent: 'space-between',
    marginTop: 50,
    // position: 'absolute',
    // top: 280,
  },
  programBanner: {
    position: 'relative',
    top: 10,
  },
  imageStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
