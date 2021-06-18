import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, ListUser, UserData} from '../../components';
import {colors, showError} from '../../utils';
import {Firebase} from '../../config';

const UserProfile = ({navigation, route}) => {
    const profile = route.params;

    const logOut = () => {
        Firebase.auth()
          .signOut()
          .then(() => {
            navigation.replace('GetStarted');
          })
          .catch(err => {
            showError(err.message);
          });
      };

  return (
    <View style={styles.page}>
      {profile.nama.length > 0 && (
        <UserData
          name={profile.nama}
          desc={profile.kategori}
          image={profile.image}
          style={styles.container}
        />
      )}
      <Gap height={15} />
      <View style={styles.content}>
        <ListUser
          name="Edit Profile"
          text="Last Update 2 Days Ago"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ListUser
          name="Log Out"
          type="next"
          text="Tap to Logout"
          icon="help"
          onPress={logOut}
        />
        </View>
        </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 30,
  },
  content: {
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: colors.primary,
  },
  logout: {
    paddingHorizontal: 70,
    paddingVertical: 200,
  },
});
