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

  componentDidMount() {
    console.log('Program Detail Page');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          {/* <View style={{position: 'relative'}}> */}
            {movieOTTData.map((item, index) => (
              <View key={index}>
                {item.type.includes('rectangle-card-details') ? (
                  <RectangleCard type={item.type} item={item} />
                ) : null}
                {item.type === 'rectangle-card' ? (
                  <RectangleCard type={item.type} item={item} />
                ) : null}
              </View>
            ))}
          {/* </View> */}
        </ScrollView>
      </View>
    );
  }
}

export default ProgramDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
  },
});
