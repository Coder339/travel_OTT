import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';
import RectangleCarditem from './rectanglecarditem';

export default function RectangleCard(props) {
  const {type, item} = props;
  console.log('TYPE', type);
  console.log('DATA', item);
  return (
    <View>
      <View style={styles.titleContainer}>
        {type === 'rectangle-card' ? (
          <Text style={styles.sectionTitle}>{item.section_title}</Text>
        ) : (
          <Text style={styles.sectionTitle}>{item.title}</Text>
        )}
      </View>
      <View style={styles.imageContainer}>
        <ScrollView horizontal={true}>
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
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 45,
    position: 'relative',
  },
  titleContainer: {
    paddingLeft: 55,
  },
  sectionTitle: {
    color: colors.white,
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
