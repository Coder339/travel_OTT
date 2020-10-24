import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { colors, } from '../assets/globalstyleconstants';
import movieOTTData from '../config/OTTProgramDetails.json';
import RectangleCard from '../components/common/rectanglecard';
import ProgramsBanner from "../components/common/programsBanner";
// import StartMenuBar from '../components/common/startmenubar';

export class Programs extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(movieOTTData.seasons)
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <ProgramsBanner
            navigation={this.props.navigation}
            data={movieOTTData[0]}
          />
          {movieOTTData.map((item, index) => (
            index > 0 &&
            <View key={index}>
              {(item.type.includes('rectangle-card-details') || item.type === 'rectangle-card') && (
                <RectangleCard
                  type={item.type}
                  item={item}
                  rectangleContainer={{ marginLeft: 0 }}
                  sectionTitle={{ marginLeft: 15 }}
                />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      
    );
  }
}

export default Programs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  sideBarContainer: {
    position: 'absolute',
    left: 0,
  },
});
