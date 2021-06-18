import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICAdd, ICRemove, ILProfilenull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors} from '../../utils/colors';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';
import {storeData} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {nama, kategori, uid} = route.params;
  const [hasImage, setHasImage] = useState(false);
  const [imageForDB, setImageForDB] = useState('');
  const [image, setImage] = useState(ILProfilenull);

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.75, maxHeight: 200, maxWidth: 200, includeBase64: true, selectionLimit: 1,},
      response => {
        if (response.didCancel || response.error) {
          showMessage('Yaaah, kok foto mu tidak ditampilkan?');
        } else {
          console.log(`response`, response.assets[0])
          const source = {uri: response.assets[0].uri};
          
          setImageForDB(`data:${response.assets[0].type};base64, ${response.assets[0].base64}`);
          setImage(source);
          setHasImage(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref(`konsultans/${uid}/`)
      .update({image: imageForDB});

    const data = route.params;
    data.image = imageForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.wrapper} onPress={getImage}>
            <Image source={image} style={styles.avatar} />
            {hasImage && <ICRemove style={styles.addPhoto} />}
            {!hasImage && <ICAdd style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.title}>{nama}</Text>
          <Text style={styles.text}>{kategori}</Text>
        </View>
        <View>
          <Button
            disable={!hasImage}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={10} />
          <Link
            link="Skip for this"
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  wrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  title: {
    fontSize: 22,
    color: colors.text.primary,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    paddingTop: 30,
  },
  text: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
