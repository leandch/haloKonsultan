import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICRemove} from '../../../assets';
import {colors, fonts} from '../../../utils';

const UserData = ({name, desc, isRemove, image, onPress}) => {
  return (
    <View style={styles.page}>
      {!isRemove && (
        <View style={styles.container}>
          <Image source={image} style={styles.img} />
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Image source={image} style={styles.img} />
          {isRemove && <ICRemove style={styles.remove} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.text}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  label: {
    fontSize: 22,
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
    paddingTop: 15,
  },
  text: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  remove: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
