import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button, Gap} from '../../atoms';
import Profile from './Profile';

const Header = ({onPress, title, type, image, text}) => {
  if (type === 'dark-profile') {
    return <Profile onPress={onPress} title={title} text={text} image={image} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'before-light' : 'before-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: type === 'dark' ? colors.primary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 30 : 0,
  }),
  text: type => ({
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: type === 'dark' ? colors.text.aboveRed : colors.text.primary,
    textAlign: 'center',
    flex: 1,
  }),
});
