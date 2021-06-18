import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconOnly from './IconOnly';
import BtnSend from './BtnSend';
import {colors, fonts} from '../../../utils';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-send') {
    return <BtnSend disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  if (disable) {
    return (
      <View style={styles.disable}>
        <Text style={styles.textDisable}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#A41726',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disable: {
    backgroundColor: '#DADADA',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: type => ({
    fontSize: 14,
    textAlign: 'center',
    color: type === 'secondary' ? '#000000' : 'white',
    fontFamily: fonts.primary[500],
  }),
  textDisable: {
    fontSize: 14,
    color: colors.text.secondary,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
  },
});
