import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.content}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.label}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  label: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary[500],
    marginTop: 10,
  },
});
