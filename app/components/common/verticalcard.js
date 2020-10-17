import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import VerticalCarditem from './verticalcarditem';
import {colors, fontFamily,fontSize} from '../../assets/globalstyleconstants';

export default function VerticalCard(props) {
  const {type, item} = props;
  // const [focus, setFocus] = useState(false);
  
  return (
    <View style={styles.container}>
      {/* chnaged from react-fragment to view for alignment*/}
      <View style={styles.titleContainer}>
        <Text style={styles.textWhiteColor}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          decelerationRate={"fast"}
          snapToAlignment='start'
          snapToInterval={260}
          >
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
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 25,
  },
  titleContainer: {
    marginLeft: 48,
  },
  textWhiteColor: {
    color: colors.white,
    fontSize:fontSize.larger,
    fontFamily:fontFamily.regular,
    marginTop:15,
  },
  imageContainer: {
    marginLeft: 35,
  },
});
