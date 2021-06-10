import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyKonsultan, ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedConsultant = ({onPress, name, desc, pic}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={pic} style={styles.picture} />
      <View style={styles.profile}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <ICStar width={20} height={20} />
        <ICStar width={20} height={20} />
        <ICStar width={20} height={20} />
        <ICStar width={20} height={20} />
        <ICStar width={20} height={20} />
      </View>
    </TouchableOpacity>
  );
};

export default RatedConsultant;

const styles = StyleSheet.create({
  picture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  profile: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    alignItems: 'center',
  },
  rate: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.secondary,
  },
});
