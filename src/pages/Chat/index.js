import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ChatInput, ChatItem, Header} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData, getChatTime, setDateChat} from '../../utils';

const Chat = ({navigation, route}) => {
    const dataKonsultan = route.params;
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({});
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        getDataUserFromLocal();

        const ChatID = `${dataKonsultan.data.uid}_${user.uid}`;
        const urlFirebase = `chat/${ChatID}/allChat/`;

        Firebase.database()
        .ref(urlFirebase)
        .on('value', snapshot => {
            if (snapshot.val()){
            const dataSnapshot = snapshot.val();
            const allDataChat = [];
            Object.keys(dataSnapshot).map(key => {
                const dataChat = dataSnapshot[key];
                const newDataChat = [];

                Object.keys(dataChat).map(itemChat => {
                    newDataChat.push({
                        id: itemChat,
                        data: dataChat[itemChat],
                    });
                });

                allDataChat.push({
                    id: key,
                    data: newDataChat,
                });
            });
            setChatData(allDataChat);
        }
        });
    }, [dataKonsultan.data.uid, user.uid]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        });
    };

    const chatSend =() => {
        const today = new Date();

        const data = {
            sendBy : user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
        };

        const chatID = `${dataKonsultan.data.uid}_${user.uid}`;

        const urlFirebase = `chat/${chatID}/allChat/${setDateChat(today)}`;
        const urlMessageUser = `messages/${user.uid}/${chatID}`;
        const urlMessageKonsultan = `messages/${dataKonsultan.data.uid}/${chatID}`;
        const dataHistoryChatUser = {
            lastChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: dataKonsultan.data.uid,
        };
        const dataHistoryChatKonsultan = {
            lastChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid,
        };

        Firebase.database()
        .ref(urlFirebase)
        .push(data)
        .then(() => {
            setChatContent('');
            
            Firebase.database()
            .ref(urlMessageUser)
            .set(dataHistoryChatUser);

            Firebase.database()
            .ref(urlMessageKonsultan)
            .set(dataHistoryChatKonsultan);
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'danger',
            });
        });
    };
    return (
        <View style={styles.page}>
        <Header
            onPress={() => navigation.goBack()}
            type="dark-profile"
            title={dataKonsultan.data.nama}
            text={dataKonsultan.data.kategori}
            image={{uri: dataKonsultan.data.image}}
            onPress={() => navigation.goBack}     
        />
        <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {chatData.map(chat => {
                    return (
                        <View key={chat.id}>
                            <Text style={styles.date}>{chat.id}</Text>
                            {chat.data.map(itemChat => {
                                const isMe = itemChat.data.sendBy === user.uid;
                                return (
                                    <ChatItem
                                    key={itemChat.id}
                                    isMe={isMe}
                                    text={itemChat.data.chatContent}
                                    date={itemChat.data.chatTime}
                                    image={isMe ? null : {uri: dataKonsultan.data.image}}
                                />
                                );
                            })}
                        </View>
                    );
                })}
            </ScrollView>
            </View>
            <ChatInput
                value={chatContent}
                onChangeText={value => setChatContent(value)}
                onButtonPress={chatSend}
                targetChat={dataKonsultan}
            />
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: 20,
  },
  content: {
    flex: 1,
  },
});
