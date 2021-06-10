import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, UserData} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Firebase} from '../../config';
import {ILProfilenull} from '../../assets';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    nama: '',
    kategori: '',
    email: '',
    imageForDB: '',
  });

  const [password, setPassword] = useState('');
  const [image, setImage] = useState(ILProfilenull);

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.imageForDB = res?.image?.length > 1 ? res.image : ILProfilenull;
      const tempImage = res?.image?.length > 1 ? {uri: res.image} : ILProfilenull;
      setImage(tempImage);
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 8) {
        showMessage('Password harus terdiri dari 8 karakter');
      } else {
        updatePassword();
        updateProfile();
      }
    } else {
      updateProfile();
    }
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage(err.message);
        });
      }
    });
  };

  const updateProfile = () => {
      const data = profile;
      data.image = profile.imageForDB;
      delete data.imageForDB;
      Firebase.database()
      .ref(`konsultans/${profile.uid}/`)
      .update(data)
      .then(() => {
          storeData('user', data)
          .then(() => {
              navigation.replace('MainApp');
          })
          .catch(() => {
              showError('Terjadi Masalah');
          })
          .catch(err => {
              showError(err.message)
          })
      })
  }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.75, maxHeight: 200, maxWidth: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.error) {
          showMessage('Tidak Jadi ganti Foto');
        } else {
          const source = {uri: response.uri};
          setProfile({
              ...profile,
              imageForDB: `data:${response.type};base64, ${response.base64}`,
          });
          setImage(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserData image={image} isRemove onPress={getImage} />
        <View style={styles.content}>
          <Input
            label="Nama"
            value={profile.nama}
            onChangeText={value => changeText('nama', value)}
          />
          <Gap height={20} />
          <Input
            label="Kategori"
            value={profile.kategori}
            onChangeText={value => changeText('kategori', value)}
          />
          <Gap height={20} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={20} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={30} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
    page: {
      backgroundColor: colors.white,
      flex: 1,
    },
    content: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      justifyContent: 'space-between',
    },
  });  