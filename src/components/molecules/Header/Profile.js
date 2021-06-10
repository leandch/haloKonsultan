import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyKonsultan} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const Profile = ({onPress, title, text, image}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="before-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Image source={image} style={styles.pict} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 15,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 30,
  },
  content: {
    flex: 1,
  },
  pict: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: colors.white,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.white,
    textAlign: 'center',
  },
});
