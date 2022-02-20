import {TextInput, View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

const InputForm = (props: any) => {
  const {label, defaultValue, placeholder, onChangeText, value} = props;
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputForm;
