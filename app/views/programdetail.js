import React, {PureComponent} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../assets/globalstyleconstants';
import movieOTTData from '../config/OTTProgramDetails.json';
import RectangleCard from '../components/common/rectanglecard';

export class ProgramDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={styles.container}>
        {movieOTTData.map((item, index) => (
          <View key={index}>
            {(item.type.includes('rectangle-card-details') || item.type === 'rectangle-card') && (
                <RectangleCard type={item.type} item={item} />
              )}
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default ProgramDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
