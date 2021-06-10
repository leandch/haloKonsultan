import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyKonsultan} from '../../assets';
import {Button, Gap, Header, ProfileItem, UserData} from '../../components';
import {colors} from '../../utils';

const ProfileKonsultan = ({navigation, route}) => {
    const dataKonsultan = route.params;
    return (
    <View style={styles.page}>
      <Header title="Profile Konsultan" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <UserData
        pic={{uri: dataKonsultan.data.image}}
        name={dataKonsultan.data.nama}
        desc={dataKonsultan.data.kategori}
      />
      <Gap height={15} />
      <View style={styles.content}>
        <ProfileItem label="Alumni" text={dataKonsultan.data.universitas} />
        <ProfileItem label="Asal Lembaga" text={dataKonsultan.data.lbh} />
        <ProfileItem label="No.Anggota" text={dataKonsultan.data.no_anggota} />
      </View>
      <View style={styles.btn}>
        <Button
          title="Mulai Konsultasi"
          onPress={() => navigation.navigate('Chat', dataKonsultan)}
        />
      </View>
    </View>
  );
};

export default ProfileKonsultan;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
  },
  btn: {
    paddingHorizontal: 60,
    paddingTop: 30,
  },
});
