import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors,fontSize,fontFamily,globalstyles,setImageUrl,} from '../../assets/globalstyleconstants';
import RectangleCarditem from './rectanglecarditem';
import PlayWatchButton from './playwatchbutton';
import Buttons from './button';
import ProgressiveImage from './progressiveimage';

export default function RectangleCard(props) {
  const {type, item} = props;

  let [ref, setRef] = useState(null);
  const [season, setSeason] = useState(undefined);
  const [episodeFocus, setEpisodeFocus] = useState(false);
  
  const seasonChange = (currentSeason) => {
    if (season != currentSeason) {
      setSeason(currentSeason);
    }
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
