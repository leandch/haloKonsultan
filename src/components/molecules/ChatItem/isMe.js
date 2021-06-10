import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubleChat}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  bubleChat: {
    backgroundColor: '#FFE9E9',
    padding: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxWidth: '75%',
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 10,
  },
});
