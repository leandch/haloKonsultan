import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({label, text}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  page: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
});
