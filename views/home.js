import React, {PureComponent} from 'react';
import {Text, View, StyleSheet,ScrollView} from 'react-native';
import movieOTTData from '../app/config/OTTdata.json';
import RectangleCard from '../components/common/rectangleCardDetails';
import VerticalCard from "../components/common/verticalCard";

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('home');
  }

  render() {
    return (
      <View style={{backgroundColor: '#1F2227'}}>
        <Text> textInComponentsss </Text>
        <ScrollView horizontal={false}>
          {movieOTTData.map((item, index) => (
            <View key={index}>
              {item.type.includes('rectangle-card') ? (
                <RectangleCard type={item.type} item={item} />
              ) : null}
              {item.type.includes('vertical-card') ? (
                <VerticalCard type={item.type} item={item} />
              ) : null}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
