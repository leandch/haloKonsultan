import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {fonts} from '../../../utils';
import {Button} from '../../atoms';

const ChatInput = ({value, onChangeText, onButtonPress, targetChat}) => {
  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder={`Tulis Pesan Untuk ${targetChat.data.fullName}`}
        value={value}
        onChangeText={onChangeText}
      />
      <Button type="btn-send" disable={value.length < 1} onPress={onButtonPress}/>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    backgroundColor: '#EDEEF0',
    borderRadius: 50,
    flex: 1,
    marginRight: 10,
    fontSize: 12,
    fontFamily: fonts.primary[500],
    maxHeight: 50,
  },
  content: {
    padding: 15,
    flexDirection: 'row',
  },
});
