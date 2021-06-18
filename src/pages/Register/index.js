import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Firebase} from '../../config';
import {colors, storeData, useForm, showError} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    nama: '',
    kategori: '',
    universitas: '',
    lbh: '',
    alamat_lbh: '',
    no_anggota: '',
    email: '',
    password: '',
  });
  const [itemKategori, setItemKategori] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Firebase.database()
      .ref('kategori_hukum')
      .on('value', snapshot => {
        if (snapshot.val()) {
          const data = [];
          const dataSnapshot = snapshot.val();
          dataSnapshot.map(kategori => {
            data.push({
              id: kategori.id,
              kategori: kategori.kategori,
            });
          });
          setItemKategori(data);
        }
      });
  }, [navigation]);

  const onContinue = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');

        const data = {
          nama: form.nama,
          kategori: form.kategori,
          universitas: form.universitas,
          rate: 0,
          lbh: form.lbh,
          alamat_lbh: form.alamat_lbh,
          no_anggota: form.no_anggota,
          email: form.email,
          uid: success.user.uid,
        };
        Firebase.database()
          .ref('konsultans/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        setLoading(false);
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Nama"
            value={form.nama}
            onChangeText={value => setForm('nama', value)}
          />
          <Gap height={5} />
          <Input
            label="Kategori"
            value={form.kategori}
            onChangeText={value => setForm('kategori', value)}
            select
            selectItem={itemKategori}
          />
          <Gap height={5} />
          <Input
            label="Universitas"
            value={form.universitas}
            onChangeText={value => setForm('universitas', value)}
          />
          <Gap height={5} />
          <Input
            label="Nomor Anggota"
            value={form.no_anggota}
            onChangeText={value => setForm('no_anggota', value)}
          />
          <Gap height={5} />

          <Input
            label="Lembaga Bantuan Hukum"
            value={form.lbh}
            onChangeText={value => setForm('lbh', value)}
          />
          <Gap height={5} />
          <Input
            label="Alamat LBH"
            value={form.alamat_lbh}
            onChangeText={value => setForm('alamat_lbh', value)}
          />
          <Gap height={5} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={5} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={30} />
          <Button title="Continue" onPress={onContinue} />
          <Gap height={50} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  form: {
    padding: 40,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
