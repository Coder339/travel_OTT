import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import VerticalCarditem from './verticalcarditem';

export default function VerticalCard(props) {
  const { type, item } = props;
  const [focus, setFocus] = useState(false)
  console.log('TYPE', type);
  console.log('DATA', item);

  const onFocus = () => {
    setFocus(true)
    console.log(focus, ' from func')
  }

  const onBlur = () => {
    setFocus(false)
  }
  console.log(focus, ' focus')

  return (
    <React.Fragment>
      <View style={styles.titleContainer}>
        <Text style={styles.textWhiteColor}>{item.title}</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {item.data.map((data, index) => (
          <VerticalCarditem data={data} key={index} />
        ))}
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 20,
  },
  titleContainer: {
    paddingLeft: 20,
  },
  textWhiteColor: {
    color: 'white',
  }
});
