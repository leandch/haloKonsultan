import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICSend, ICSendActive} from '../../../assets';
import {colors} from '../../../utils';

const BtnSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <ICSend />}
      {!disable && <ICSendActive />}
    </View>
  );
};

export default BtnSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? '#EDEEF0' : colors.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingTop: 13,
    paddingLeft: 14,
  }),
});
