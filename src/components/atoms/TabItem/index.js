import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICHome,
  ICHomeActive,
  ICMap,
  ICMapActive,
  ICMessages,
  ICMessagesActive,
  ICProfile,
  ICProfileActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHome />;
    }
    if (title === 'Messages') {
      return active ? <ICMessagesActive /> : <ICMessages />;
    }
    if (title === 'Profile') {
      return active ? <ICProfileActive /> : <ICProfile />;
    }
    return <ICHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={5} />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 5},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    alignItems: 'center',
  }),
});
