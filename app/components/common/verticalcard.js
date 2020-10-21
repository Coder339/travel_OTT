import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import VerticalCarditem from './verticalcarditem';
import {colors, fontFamily,fontSize} from '../../assets/globalstyleconstants';

export default function VerticalCard(props) {
  const { item } = props;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>{item.title}</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        centerContent={true}
        // decelerationRate={0}
        // snapToAlignment='start'
        // snapToInterval={216}
        style={styles.imageContainer}
        >
        {item.data.map((data, index) => (
          <VerticalCarditem data={data} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20,
  },
  titleContainer: {
    marginLeft: 52,
    color: colors.white,
    fontSize:fontSize.larger,
    fontFamily:fontFamily.regular,
    marginTop:15,
  },
  imageContainer: {
    marginLeft: 48,
  },
});
