import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ILProfilenull} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    image: ILProfilenull,
    nama: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.image = {uri: res.image};
      console.log('new profile: ', data);
      setProfile(data);
    });
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.image} style={styles.profile} />
      <View>
        <Text style={styles.greeting}>Halo!</Text>
        <Text style={styles.title}>{profile.nama}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.white,
    paddingLeft: 10,
  },
  greeting: {
    fontSize: 18,
    fontFamily: fonts.primary[500],
    color: colors.white,
    paddingLeft: 10,
  },
});
