import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';
import {ILGetstarted} from '../../assets';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ILGetstarted style={styles.gambar} />
      </View>
      <View>
        <Text style={styles.title}>Konsultasi Hukum Gratis</Text>
        <Text style={styles.body}>
          Masyarakat sejahtera dengan hukum  </Text>
      </View>
      <View style={styles.btn}>
        <Button
          title="Mulai Berikan Konsultasi"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    // justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginTop: 100,
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
  },
  gambar: {
    alignSelf: 'center',
  },
  btn: {
    paddingHorizontal: 60,
    paddingTop: 30,
  },
  content: {
    paddingTop: 30,
  },
});
