import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, fontSize, fontFamily} from '../../assets/globalstyleconstants';
import RectangleCarditem from './rectanglecarditem';

export default function RectangleCard(props) {
  const {type, item} = props;
  console.log('TYPE', type);
  console.log('DATA', item);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {type === 'rectangle-card' ? (
          <Text style={styles.sectionTitle}>{item.section_title}</Text>
        ) : (
          <Text style={styles.sectionTitle}>{item.title}</Text>
        )}
      </View>
      <View style={styles.imageContainer}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          decelerationRate={"fast"}
          snapToAlignment='start'
          snapToInterval={550}
          >
          {item.data.map((data, index) => (
            <RectangleCarditem data={data} type={type} key={index} />
          ))}
        </ScrollView>
      </View>
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
});
