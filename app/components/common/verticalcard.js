import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import VerticalCarditem from './verticalcarditem';
import {colors, fontFamily,fontSize} from '../../assets/globalstyleconstants';

export default function VerticalCard(props) {
  const {type, item} = props;
  const [focus, setFocus] = useState(false);
  console.log('TYPE', type);
  console.log('DATA', item);

  const onFocus = () => {
    setFocus(true);
    console.log(focus, ' from func');
  };

  const onBlur = () => {
    setFocus(false);
  };
  console.log(focus, ' focus');

  return (
    <View style={styles.container}>
      {/* chnaged from react-fragment to view for alignment*/}
      <View style={styles.titleContainer}>
        <Text style={styles.textWhiteColor}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {item.data.map((data, index) => (
            <VerticalCarditem data={data} key={index} />
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
    paddingBottom: 30,
    paddingLeft: 25,
  },
  titleContainer: {
    paddingLeft: 48,
  },
  textWhiteColor: {
    color: colors.white,
    fontSize:fontSize.larger,
    fontFamily:fontFamily.regular,
    paddingTop:15,
  },
  imageContainer: {
    paddingLeft: 35,
  },
});
