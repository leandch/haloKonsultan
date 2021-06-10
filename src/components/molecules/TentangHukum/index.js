import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const TentangHukum = ({title, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default TentangHukum;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#B1B7C2',
    paddingBottom: 8,
    paddingTop: 16,
    // paddingHorizontal: 10,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: '90%',
  },
});
