import react from 'react';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  colors,
  setImageUrl,
  globalstyles,
} from '../../assets/globalstyleconstants';
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
      <ScrollView horizontal={true}>
        {item.data.map((data, index) => (
          <React.Fragment>
            <RectangleCarditem data={data} type={type} key={index} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    position: 'relative',
  },
  titleContainer: {
    paddingLeft: 20,
  },
  sectionTitle: {
    color: colors.white,
  },
  selected: {
    position: 'absolute',
    top: -20,
    left: 10,
    opacity: 1,
    width: 230,
  },
});
