import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ICEdit, ICLanguage, ICLogout, ICNext, ICRate} from '../../../assets';

const ListUser = ({image, name, text, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <ICEdit />;
    }
    if (icon === 'language') {
      return <ICLanguage />;
    }
    if (icon === 'rate') {
      return <ICRate />;
    }
    if (icon === 'help') {
      return <ICLogout />;
    }
    return <ICEdit />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={image} style={styles.picture} />}
      <View style={styles.content}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      {type === 'next' && <ICNext />}
    </TouchableOpacity>
  );
};

export default ListUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: '#977D7D',
  },
});
