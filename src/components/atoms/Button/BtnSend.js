import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {ICSend, ICSendActive} from '../../../assets';
import {colors} from '../../../utils';

const BtnSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <ICSend />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <ICSendActive />
    </TouchableOpacity>
  );
};

export default BtnSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? '#EDEEF0' : colors.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingTop: 16,
    paddingLeft: 15,
  }),
});
