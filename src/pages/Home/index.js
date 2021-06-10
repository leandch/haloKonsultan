import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {
  HomeProfile,
} from '../../components/molecules';
import {colors, fonts, getData} from '../../utils';
import {ILProfilenull} from '../../assets';
import {useState, useEffect} from 'react';

const Home = ({navigation}) => {
    const [profile, setProfile] = useState({
        image: ILProfilenull,
        nama: '',
        kategori: '',
    });

    useEffect(() => {
      navigation.addListener('focus', () => {
        getUserData();
      });
    }, [navigation]);

    const getUserData = () => {
      getData('user').then(res => {
        const data = res;
        data.image = res?.image?.length > 1 ? {uri: res.image} : ILProfilenull;
        setProfile(res);
      });
    };
        

  return (
    <View style={styles.page}>
        <HomeProfile
          style={styles.profile}
          profile={profile}
          onPress={() => navigation.navigate('UserProfile', profile)}
        />
        <Gap height={10} />
      <View style={styles.content}>
        <Text style={styles.label}>Selamat datang di HaloKonsultan</Text>
        </View>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  profile: {
    backgroundColor: colors.primary,
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.aboveRed,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: 283,
  },
});
