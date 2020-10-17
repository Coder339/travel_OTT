import React, {PureComponent} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors,} from '../assets/globalstyleconstants';
import movieOTTData from '../config/OTTProgramDetails.json';
import RectangleCard from '../components/common/rectanglecard';
import ProgramsBanner  from "../components/common/programsBanner";

export class Programs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieOTTData: movieOTTData[0]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProgramsBanner movieOTTData={movieOTTData}  />
        {movieOTTData.map((item, index) => (
          <View key={index}>
            {(item.type.includes('rectangle-card-details') ||item.type === 'rectangle-card') && (
              <RectangleCard type={item.type} item={item} />
            )}
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Programs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
