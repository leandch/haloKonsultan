import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Link = ({link, size, align, onPress}) => {
  return (
    <TouchableOpacity style={styles.link(link)} onPress={onPress}>
      <Text style={styles.link(size, align)}>{link}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    fontFamily: 'Poppins-Regular',
    color: '#656565',
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: align,
  }),
});
