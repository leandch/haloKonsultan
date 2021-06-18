import { Picker } from '@react-native-community/picker';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable, select, selectItem, onValueChange}) => {
  const [border, setBorder] = useState(colors.border.primary);
  const onFocusForm = () => {
    setBorder(colors.border.secondary);
  };
  const onBlurForm = () => {
    setBorder(colors.border.primary);
  };
  if (select){
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.picker}>
      <Picker
      selectedValue={value} onValueChange={onChangeText}>
        {selectItem.map(item => {
          return (
            <Picker.Item
            key={item.id}
            label={item.kategori}
            value={item.kategori}
            />
          );
        })}
      </Picker>
      </View>
    </View>
  );
}

return (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput 
    onFocus={onFocusForm}
    onBlur={onBlurForm}
    value={value}
    onChangeText={onChangeText}
    style={styles.input(border)}
    secureTextEntry={secureTextEntry}
    editable={!disable}
    selectTextOnFocus={!disable}
    // placeholderTextColor={colors.text.primary}
  />
  </View>
);
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 10,
  }),
  label: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
});
