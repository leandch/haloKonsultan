import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListUser} from '../../components';
import { Firebase } from '../../config';
import {colors} from '../../utils';

const PilihKonsultan = ({navigation, route}) => {
    const [listKonsultan, setListKonsultan] = useState([]);
    const itemKategori = route.params;
    useEffect(() => {
        callKonsultanbyKategori(itemKategori.kategori_hukum);
    }, [itemKategori.kategori_hukum]);

    const callKonsultanbyKategori = kategori => {
        Firebase.database()
        .ref('konsultans/')
        .orderByChild('kategori')
        .equalTo(kategori_hukum)
        .once('value')
        .then(res => {
            if (res.val()) {
                const oldData = res.val();
                const data = [];
                Object.keys(oldData).map(item => {
                    data.push({
                        id: item,
                        data: oldData[item],
                    });
                });
                setListKonsultan(data);
            }
        })

    }
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemKategori.kategori_hukum}`}
        onPress={() => navigation.goBack()}
      />
      {listKonsultan.map(konsultan => {
          return (
              <ListUser
              key={konsultan.id}
              type="next"
              pic={{uri: konsultan.data.image}}
              name={konsultan.data.nama}
              text={konsultan.data.lbh}
              onPress={() => navigation.navigate('ProfileKonsultan', konsultan)}
              />
          );
      })}
    </View>
  );
};

export default PilihKonsultan;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
