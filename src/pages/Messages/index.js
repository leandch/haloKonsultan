import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyKonsultan, DummyKonsultan1, ILChat} from '../../assets';
import {Gap} from '../../components/atoms';
import {ListUser} from '../../components';
import {colors, fonts, getData} from '../../utils';
import { Firebase } from '../../config';

const Messages = ({navigation}) => {
    const [user, setUser] = useState({});
    const [historyChat, setHistoryChat] = useState([]);

    useEffect(() => {
        getDataUserFromLocal();
        const rootDB = Firebase.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messagesDB = rootDB.child(urlHistory);

        messagesDB.on('value', async snapshot => {
            if (snapshot.val()) {
                const oldData = snapshot.val();
                const data = [];

                const promises = await Object.keys(oldData).map(async key =>
                    {
                        const urlUidKonsultan = `users/${oldData[key].uidPartner}`;
                        const detailKonsultan = await rootDB.child(urlUidKonsultan).once('value');
                        data.push({
                            id: key,
                            detailKonsultan: detailKonsultan.val(),
                            ...oldData[key],
                        });
                    });
                    await Promise.all(promises);
                    
                    setHistoryChat(data);
            }
        });
    }, [user.uid]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        });
    };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Messages</Text>
          {historyChat.map(chat => {
              const dataKonsultan = {
                  id: chat.detailKonsultan.uid,
                  data: chat.detailKonsultan,
              };
              return (
                  <ListUser 
                  key={chat.id}
                  profile={{uri: chat.detailKonsultan.image}}
                  name={chat.detailKonsultan.nama}
                  text={chat.lastContentChat}
                  onPress={() => navigation.navigate('Chat', dataKonsultan)} 
                  />
              )
          })}
        </View>
        </View>
        </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
